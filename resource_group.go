// Copyright The Prometheus Authors
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package prometheuscollectorbridge

import (
	"github.com/open-telemetry/opentelemetry-collector-contrib/pkg/pdatautil"
	"go.opentelemetry.io/collector/pdata/pcommon"
	"go.opentelemetry.io/collector/pdata/pmetric"
)

// metricsResourceGrouper is a metrics-only copy of the relevant
// groupbyattrsprocessor behavior. Prefer using the upstream implementation once
// it exposes public Go APIs that can be embedded outside the processor pipeline.
type metricsResourceGrouper struct {
	keys []string
}

func newMetricsResourceGrouper(keys []string) *metricsResourceGrouper {
	seen := make(map[string]struct{}, len(keys))
	dedupedKeys := make([]string, 0, len(keys))
	for _, key := range keys {
		if key == "" {
			continue
		}
		if _, ok := seen[key]; ok {
			continue
		}
		seen[key] = struct{}{}
		dedupedKeys = append(dedupedKeys, key)
	}
	if len(dedupedKeys) == 0 {
		return nil
	}
	return &metricsResourceGrouper{keys: dedupedKeys}
}

func (g *metricsResourceGrouper) Apply(metrics pmetric.Metrics) pmetric.Metrics {
	if g == nil {
		return metrics
	}

	grouped := &metricsGroup{metrics: pmetric.NewMetrics()}
	for i := 0; i < metrics.ResourceMetrics().Len(); i++ {
		rm := metrics.ResourceMetrics().At(i)
		for j := 0; j < rm.ScopeMetrics().Len(); j++ {
			sm := rm.ScopeMetrics().At(j)
			for k := 0; k < sm.Metrics().Len(); k++ {
				metric := sm.Metrics().At(k)
				g.applyMetric(grouped, rm, sm, metric)
			}
		}
	}
	return grouped.metrics
}

func (g *metricsResourceGrouper) applyMetric(grouped *metricsGroup, rm pmetric.ResourceMetrics, sm pmetric.ScopeMetrics, metric pmetric.Metric) {
	switch metric.Type() {
	case pmetric.MetricTypeGauge:
		dataPoints := metric.Gauge().DataPoints()
		for i := 0; i < dataPoints.Len(); i++ {
			dataPoint := dataPoints.At(i)
			groupedMetric := g.getGroupedMetric(grouped, rm, sm, metric, dataPoint.Attributes())
			dataPoint.CopyTo(groupedMetric.Gauge().DataPoints().AppendEmpty())
		}
	case pmetric.MetricTypeSum:
		dataPoints := metric.Sum().DataPoints()
		for i := 0; i < dataPoints.Len(); i++ {
			dataPoint := dataPoints.At(i)
			groupedMetric := g.getGroupedMetric(grouped, rm, sm, metric, dataPoint.Attributes())
			dataPoint.CopyTo(groupedMetric.Sum().DataPoints().AppendEmpty())
		}
	case pmetric.MetricTypeHistogram:
		dataPoints := metric.Histogram().DataPoints()
		for i := 0; i < dataPoints.Len(); i++ {
			dataPoint := dataPoints.At(i)
			groupedMetric := g.getGroupedMetric(grouped, rm, sm, metric, dataPoint.Attributes())
			dataPoint.CopyTo(groupedMetric.Histogram().DataPoints().AppendEmpty())
		}
	case pmetric.MetricTypeExponentialHistogram:
		dataPoints := metric.ExponentialHistogram().DataPoints()
		for i := 0; i < dataPoints.Len(); i++ {
			dataPoint := dataPoints.At(i)
			groupedMetric := g.getGroupedMetric(grouped, rm, sm, metric, dataPoint.Attributes())
			dataPoint.CopyTo(groupedMetric.ExponentialHistogram().DataPoints().AppendEmpty())
		}
	case pmetric.MetricTypeSummary:
		dataPoints := metric.Summary().DataPoints()
		for i := 0; i < dataPoints.Len(); i++ {
			dataPoint := dataPoints.At(i)
			groupedMetric := g.getGroupedMetric(grouped, rm, sm, metric, dataPoint.Attributes())
			dataPoint.CopyTo(groupedMetric.Summary().DataPoints().AppendEmpty())
		}
	case pmetric.MetricTypeEmpty:
	}
}

func (g *metricsResourceGrouper) getGroupedMetric(grouped *metricsGroup, rm pmetric.ResourceMetrics, sm pmetric.ScopeMetrics, metric pmetric.Metric, attributes pcommon.Map) pmetric.Metric {
	groupingAttributes := g.extractGroupingAttributes(attributes)
	deleteAttributes(groupingAttributes, attributes)
	groupedResourceMetrics := grouped.findOrCreateResourceMetrics(rm.Resource(), groupingAttributes)
	groupedScopeMetrics := matchingScopeMetrics(groupedResourceMetrics, sm.Scope())
	return getMetricInScopeMetrics(groupedScopeMetrics, metric)
}

func (g *metricsResourceGrouper) extractGroupingAttributes(attributes pcommon.Map) pcommon.Map {
	groupingAttributes := pcommon.NewMap()
	for _, key := range g.keys {
		if value, ok := attributes.Get(key); ok {
			value.CopyTo(groupingAttributes.PutEmpty(key))
		}
	}
	return groupingAttributes
}

func deleteAttributes(attrsForRemoval, targetAttrs pcommon.Map) {
	for key := range attrsForRemoval.All() {
		targetAttrs.Remove(key)
	}
}

type metricsGroup struct {
	metrics        pmetric.Metrics
	resourceHashes [][16]byte
}

func (mg *metricsGroup) findOrCreateResourceMetrics(originResource pcommon.Resource, requiredAttributes pcommon.Map) pmetric.ResourceMetrics {
	referenceResource := buildReferenceResource(originResource, requiredAttributes)
	referenceResourceHash := pdatautil.MapHash(referenceResource.Attributes())

	resourceMetrics := mg.metrics.ResourceMetrics()
	for i := 0; i < resourceMetrics.Len(); i++ {
		if mg.resourceHashes[i] == referenceResourceHash {
			return resourceMetrics.At(i)
		}
	}

	rm := resourceMetrics.AppendEmpty()
	referenceResource.MoveTo(rm.Resource())
	mg.resourceHashes = append(mg.resourceHashes, referenceResourceHash)
	return rm
}

func buildReferenceResource(originResource pcommon.Resource, requiredAttributes pcommon.Map) pcommon.Resource {
	referenceResource := pcommon.NewResource()
	originResource.Attributes().CopyTo(referenceResource.Attributes())
	for key, value := range requiredAttributes.All() {
		value.CopyTo(referenceResource.Attributes().PutEmpty(key))
	}
	return referenceResource
}

func matchingScopeMetrics(rm pmetric.ResourceMetrics, scope pcommon.InstrumentationScope) pmetric.ScopeMetrics {
	scopeMetrics := rm.ScopeMetrics()
	for i := 0; i < scopeMetrics.Len(); i++ {
		sm := scopeMetrics.At(i)
		if instrumentationScopesEqual(sm.Scope(), scope) {
			return sm
		}
	}

	sm := scopeMetrics.AppendEmpty()
	scope.CopyTo(sm.Scope())
	return sm
}

func instrumentationScopesEqual(left, right pcommon.InstrumentationScope) bool {
	return left.Name() == right.Name() && left.Version() == right.Version()
}

func getMetricInScopeMetrics(sm pmetric.ScopeMetrics, searchedMetric pmetric.Metric) pmetric.Metric {
	for i := 0; i < sm.Metrics().Len(); i++ {
		metric := sm.Metrics().At(i)
		if metric.Name() == searchedMetric.Name() && metric.Type() == searchedMetric.Type() {
			return metric
		}
	}

	metric := sm.Metrics().AppendEmpty()
	metric.SetDescription(searchedMetric.Description())
	metric.SetName(searchedMetric.Name())
	metric.SetUnit(searchedMetric.Unit())
	searchedMetric.Metadata().CopyTo(metric.Metadata())

	switch searchedMetric.Type() {
	case pmetric.MetricTypeGauge:
		metric.SetEmptyGauge()
	case pmetric.MetricTypeSum:
		metric.SetEmptySum().SetAggregationTemporality(searchedMetric.Sum().AggregationTemporality())
		metric.Sum().SetIsMonotonic(searchedMetric.Sum().IsMonotonic())
	case pmetric.MetricTypeHistogram:
		metric.SetEmptyHistogram().SetAggregationTemporality(searchedMetric.Histogram().AggregationTemporality())
	case pmetric.MetricTypeExponentialHistogram:
		metric.SetEmptyExponentialHistogram().SetAggregationTemporality(searchedMetric.ExponentialHistogram().AggregationTemporality())
	case pmetric.MetricTypeSummary:
		metric.SetEmptySummary()
	case pmetric.MetricTypeEmpty:
	}

	return metric
}
