// Copyright 2024 The Prometheus Authors
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
	"context"
	"fmt"

	"github.com/open-telemetry/opentelemetry-collector-contrib/pkg/ottl"
	"github.com/open-telemetry/opentelemetry-collector-contrib/pkg/ottl/contexts/ottldatapoint"
	"github.com/open-telemetry/opentelemetry-collector-contrib/pkg/ottl/contexts/ottlmetric"
	"github.com/open-telemetry/opentelemetry-collector-contrib/pkg/ottl/ottlfuncs"
	"go.opentelemetry.io/collector/component"
	"go.opentelemetry.io/collector/pdata/pmetric"
)

// OTTLStatements contains optional transformations applied to scraped metrics
// before they are sent to the next consumer in the Collector pipeline.
type OTTLStatements struct {
	MetricStatements    []string
	DataPointStatements []string
}

func (s OTTLStatements) clone() OTTLStatements {
	return OTTLStatements{
		MetricStatements:    append([]string(nil), s.MetricStatements...),
		DataPointStatements: append([]string(nil), s.DataPointStatements...),
	}
}

func (s OTTLStatements) empty() bool {
	return len(s.MetricStatements) == 0 && len(s.DataPointStatements) == 0
}

type metricsTransform struct {
	metricStatements       ottl.StatementSequence[*ottlmetric.TransformContext]
	dataPointStatements    ottl.StatementSequence[*ottldatapoint.TransformContext]
	hasMetricStatements    bool
	hasDataPointStatements bool
}

func newMetricsTransform(settings component.TelemetrySettings, statements OTTLStatements) (*metricsTransform, error) {
	if statements.empty() {
		return nil, nil
	}

	transform := &metricsTransform{}
	if len(statements.MetricStatements) > 0 {
		parser, err := ottlmetric.NewParser(
			ottlfuncs.StandardFuncs[*ottlmetric.TransformContext](),
			settings,
			ottlmetric.EnablePathContextNames(),
		)
		if err != nil {
			return nil, fmt.Errorf("create metric OTTL parser: %w", err)
		}
		parsed, err := parser.ParseStatements(statements.MetricStatements)
		if err != nil {
			return nil, fmt.Errorf("parse metric OTTL statements: %w", err)
		}
		transform.metricStatements = ottlmetric.NewStatementSequence(parsed, settings)
		transform.hasMetricStatements = true
	}

	if len(statements.DataPointStatements) > 0 {
		parser, err := ottldatapoint.NewParser(
			ottlfuncs.StandardFuncs[*ottldatapoint.TransformContext](),
			settings,
			ottldatapoint.EnablePathContextNames(),
		)
		if err != nil {
			return nil, fmt.Errorf("create datapoint OTTL parser: %w", err)
		}
		parsed, err := parser.ParseStatements(statements.DataPointStatements)
		if err != nil {
			return nil, fmt.Errorf("parse datapoint OTTL statements: %w", err)
		}
		transform.dataPointStatements = ottldatapoint.NewStatementSequence(parsed, settings)
		transform.hasDataPointStatements = true
	}

	return transform, nil
}

func (t *metricsTransform) Apply(ctx context.Context, metrics pmetric.Metrics) error {
	if t == nil {
		return nil
	}

	for i := 0; i < metrics.ResourceMetrics().Len(); i++ {
		rm := metrics.ResourceMetrics().At(i)
		for j := 0; j < rm.ScopeMetrics().Len(); j++ {
			sm := rm.ScopeMetrics().At(j)
			for k := 0; k < sm.Metrics().Len(); k++ {
				metric := sm.Metrics().At(k)
				if err := t.applyMetric(ctx, rm, sm, metric); err != nil {
					return err
				}
				if err := t.applyDataPoints(ctx, rm, sm, metric); err != nil {
					return err
				}
			}
		}
	}
	return nil
}

func (t *metricsTransform) applyMetric(ctx context.Context, rm pmetric.ResourceMetrics, sm pmetric.ScopeMetrics, metric pmetric.Metric) error {
	if !t.hasMetricStatements {
		return nil
	}

	tCtx := ottlmetric.NewTransformContextPtr(rm, sm, metric)
	defer tCtx.Close()
	return t.metricStatements.Execute(ctx, tCtx)
}

func (t *metricsTransform) applyDataPoints(ctx context.Context, rm pmetric.ResourceMetrics, sm pmetric.ScopeMetrics, metric pmetric.Metric) error {
	if !t.hasDataPointStatements {
		return nil
	}

	switch metric.Type() {
	case pmetric.MetricTypeGauge:
		return t.applyNumberDataPoints(ctx, rm, sm, metric, metric.Gauge().DataPoints())
	case pmetric.MetricTypeSum:
		return t.applyNumberDataPoints(ctx, rm, sm, metric, metric.Sum().DataPoints())
	case pmetric.MetricTypeHistogram:
		return t.applyHistogramDataPoints(ctx, rm, sm, metric, metric.Histogram().DataPoints())
	case pmetric.MetricTypeExponentialHistogram:
		return t.applyExponentialHistogramDataPoints(ctx, rm, sm, metric, metric.ExponentialHistogram().DataPoints())
	case pmetric.MetricTypeSummary:
		return t.applySummaryDataPoints(ctx, rm, sm, metric, metric.Summary().DataPoints())
	default:
		return nil
	}
}

func (t *metricsTransform) applyNumberDataPoints(ctx context.Context, rm pmetric.ResourceMetrics, sm pmetric.ScopeMetrics, metric pmetric.Metric, dataPoints pmetric.NumberDataPointSlice) error {
	for i := 0; i < dataPoints.Len(); i++ {
		tCtx := ottldatapoint.NewTransformContextPtr(rm, sm, metric, dataPoints.At(i))
		if err := t.dataPointStatements.Execute(ctx, tCtx); err != nil {
			tCtx.Close()
			return err
		}
		tCtx.Close()
	}
	return nil
}

func (t *metricsTransform) applyHistogramDataPoints(ctx context.Context, rm pmetric.ResourceMetrics, sm pmetric.ScopeMetrics, metric pmetric.Metric, dataPoints pmetric.HistogramDataPointSlice) error {
	for i := 0; i < dataPoints.Len(); i++ {
		tCtx := ottldatapoint.NewTransformContextPtr(rm, sm, metric, dataPoints.At(i))
		if err := t.dataPointStatements.Execute(ctx, tCtx); err != nil {
			tCtx.Close()
			return err
		}
		tCtx.Close()
	}
	return nil
}

func (t *metricsTransform) applyExponentialHistogramDataPoints(ctx context.Context, rm pmetric.ResourceMetrics, sm pmetric.ScopeMetrics, metric pmetric.Metric, dataPoints pmetric.ExponentialHistogramDataPointSlice) error {
	for i := 0; i < dataPoints.Len(); i++ {
		tCtx := ottldatapoint.NewTransformContextPtr(rm, sm, metric, dataPoints.At(i))
		if err := t.dataPointStatements.Execute(ctx, tCtx); err != nil {
			tCtx.Close()
			return err
		}
		tCtx.Close()
	}
	return nil
}

func (t *metricsTransform) applySummaryDataPoints(ctx context.Context, rm pmetric.ResourceMetrics, sm pmetric.ScopeMetrics, metric pmetric.Metric, dataPoints pmetric.SummaryDataPointSlice) error {
	for i := 0; i < dataPoints.Len(); i++ {
		tCtx := ottldatapoint.NewTransformContextPtr(rm, sm, metric, dataPoints.At(i))
		if err := t.dataPointStatements.Execute(ctx, tCtx); err != nil {
			tCtx.Close()
			return err
		}
		tCtx.Close()
	}
	return nil
}
