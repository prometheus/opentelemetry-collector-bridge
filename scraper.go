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

	"github.com/prometheus/client_golang/prometheus"
	"go.opentelemetry.io/collector/component"
	"go.opentelemetry.io/collector/pdata/pcommon"
	"go.opentelemetry.io/collector/pdata/pmetric"
	otelbridge "go.opentelemetry.io/contrib/bridges/prometheus"
	"go.opentelemetry.io/otel/attribute"
	"go.opentelemetry.io/otel/sdk/metric"
	"go.opentelemetry.io/otel/sdk/metric/metricdata"
	"go.uber.org/zap"
)

// scraper handles scraping metrics from a Prometheus registry and converting
// them to OpenTelemetry Collector format.
type scraper struct {
	logger       *zap.Logger
	producer     metric.Producer
	receiverType string
}

func newScraper(
	registry *prometheus.Registry,
	receiverType component.Type,
	logger *zap.Logger,
) *scraper {
	producer := otelbridge.NewMetricProducer(
		otelbridge.WithGatherer(registry),
	)

	return &scraper{
		logger:       logger,
		producer:     producer,
		receiverType: receiverType.String(),
	}
}

func (s *scraper) Scrape(ctx context.Context) (pmetric.Metrics, error) {
	s.logger.Debug("Scraping metrics")

	scopeMetrics, err := s.producer.Produce(ctx)
	if err != nil {
		return pmetric.Metrics{}, fmt.Errorf("failed to produce metrics: %w", err)
	}

	metrics := s.convert(scopeMetrics)

	s.logger.Debug("Finished scraping metrics",
		zap.Int("metrics", metrics.ResourceMetrics().Len()))

	return metrics, nil
}

func (s *scraper) convert(scopeMetrics []metricdata.ScopeMetrics) pmetric.Metrics {
	if len(scopeMetrics) == 0 {
		s.logger.Debug("No scope metrics to convert")
		return pmetric.NewMetrics()
	}

	metrics := pmetric.NewMetrics()
	rm := metrics.ResourceMetrics().AppendEmpty()
	rm.Resource().Attributes().PutStr("service.name", s.receiverType)

	for _, sm := range scopeMetrics {
		s.convertScopeMetrics(sm, rm)
	}

	return metrics
}

func (s *scraper) convertScopeMetrics(sm metricdata.ScopeMetrics, rm pmetric.ResourceMetrics) {
	scopeMetrics := rm.ScopeMetrics().AppendEmpty()

	scope := scopeMetrics.Scope()
	scope.SetName(sm.Scope.Name)
	scope.SetVersion(sm.Scope.Version)
	s.convertAttributes(sm.Scope.Attributes, scope.Attributes())

	for _, m := range sm.Metrics {
		if err := s.convertMetric(m, scopeMetrics); err != nil {
			s.logger.Debug("Failed to convert metric",
				zap.String("metric", m.Name),
				zap.Error(err))
		}
	}
}

func (s *scraper) convertMetric(sdkMetric metricdata.Metrics, scopeMetrics pmetric.ScopeMetrics) error {
	switch data := sdkMetric.Data.(type) {
	case metricdata.Gauge[int64],
		metricdata.Gauge[float64],
		metricdata.Sum[int64],
		metricdata.Sum[float64],
		metricdata.Histogram[int64],
		metricdata.Histogram[float64],
		metricdata.ExponentialHistogram[int64],
		metricdata.ExponentialHistogram[float64],
		metricdata.Summary:
		_ = data
	default:
		return fmt.Errorf("unsupported metric data type: %T", data)
	}

	metric := scopeMetrics.Metrics().AppendEmpty()
	metric.SetName(sdkMetric.Name)
	metric.SetDescription(sdkMetric.Description)
	metric.SetUnit(sdkMetric.Unit)

	switch data := sdkMetric.Data.(type) {
	case metricdata.Gauge[int64]:
		s.convertGaugeInt64(data, metric)
	case metricdata.Gauge[float64]:
		s.convertGaugeFloat64(data, metric)
	case metricdata.Sum[int64]:
		s.convertSumInt64(data, metric)
	case metricdata.Sum[float64]:
		s.convertSumFloat64(data, metric)
	case metricdata.Histogram[int64]:
		s.convertHistogramInt64(data, metric)
	case metricdata.Histogram[float64]:
		s.convertHistogramFloat64(data, metric)
	case metricdata.ExponentialHistogram[int64]:
		s.convertExponentialHistogramInt64(data, metric)
	case metricdata.ExponentialHistogram[float64]:
		s.convertExponentialHistogramFloat64(data, metric)
	case metricdata.Summary:
		s.convertSummary(data, metric)
	default:
		panic("unreachable")
	}
	return nil
}

func (s *scraper) convertGaugeInt64(gauge metricdata.Gauge[int64], metric pmetric.Metric) {
	g := metric.SetEmptyGauge()
	for _, dp := range gauge.DataPoints {
		dataPoint := g.DataPoints().AppendEmpty()
		dataPoint.SetIntValue(dp.Value)
		dataPoint.SetTimestamp(pcommon.Timestamp(dp.Time.UnixNano()))
		s.convertAttributes(dp.Attributes, dataPoint.Attributes())
	}
}

func (s *scraper) convertGaugeFloat64(gauge metricdata.Gauge[float64], metric pmetric.Metric) {
	g := metric.SetEmptyGauge()
	for _, dp := range gauge.DataPoints {
		dataPoint := g.DataPoints().AppendEmpty()
		dataPoint.SetDoubleValue(dp.Value)
		dataPoint.SetTimestamp(pcommon.Timestamp(dp.Time.UnixNano()))
		s.convertAttributes(dp.Attributes, dataPoint.Attributes())
	}
}

func (s *scraper) convertSumInt64(sum metricdata.Sum[int64], metric pmetric.Metric) {
	sv := metric.SetEmptySum()
	sv.SetIsMonotonic(sum.IsMonotonic)
	sv.SetAggregationTemporality(s.convertTemporality(sum.Temporality))

	for _, dp := range sum.DataPoints {
		dataPoint := sv.DataPoints().AppendEmpty()
		dataPoint.SetIntValue(dp.Value)
		dataPoint.SetStartTimestamp(pcommon.Timestamp(dp.StartTime.UnixNano()))
		dataPoint.SetTimestamp(pcommon.Timestamp(dp.Time.UnixNano()))
		s.convertAttributes(dp.Attributes, dataPoint.Attributes())
	}
}

func (s *scraper) convertSumFloat64(sum metricdata.Sum[float64], metric pmetric.Metric) {
	sv := metric.SetEmptySum()
	sv.SetIsMonotonic(sum.IsMonotonic)
	sv.SetAggregationTemporality(s.convertTemporality(sum.Temporality))

	for _, dp := range sum.DataPoints {
		dataPoint := sv.DataPoints().AppendEmpty()
		dataPoint.SetDoubleValue(dp.Value)
		dataPoint.SetStartTimestamp(pcommon.Timestamp(dp.StartTime.UnixNano()))
		dataPoint.SetTimestamp(pcommon.Timestamp(dp.Time.UnixNano()))
		s.convertAttributes(dp.Attributes, dataPoint.Attributes())
	}
}

func (s *scraper) convertHistogramInt64(hist metricdata.Histogram[int64], metric pmetric.Metric) {
	h := metric.SetEmptyHistogram()
	h.SetAggregationTemporality(s.convertTemporality(hist.Temporality))

	for _, dp := range hist.DataPoints {
		dataPoint := h.DataPoints().AppendEmpty()
		dataPoint.SetCount(dp.Count)
		dataPoint.SetSum(float64(dp.Sum))
		dataPoint.SetStartTimestamp(pcommon.Timestamp(dp.StartTime.UnixNano()))
		dataPoint.SetTimestamp(pcommon.Timestamp(dp.Time.UnixNano()))

		if minValue, defined := dp.Min.Value(); defined {
			dataPoint.SetMin(float64(minValue))
		}
		if maxValue, defined := dp.Max.Value(); defined {
			dataPoint.SetMax(float64(maxValue))
		}

		dataPoint.BucketCounts().FromRaw(dp.BucketCounts)
		dataPoint.ExplicitBounds().FromRaw(dp.Bounds)

		s.convertAttributes(dp.Attributes, dataPoint.Attributes())
	}
}

func (s *scraper) convertHistogramFloat64(hist metricdata.Histogram[float64], metric pmetric.Metric) {
	h := metric.SetEmptyHistogram()
	h.SetAggregationTemporality(s.convertTemporality(hist.Temporality))

	for _, dp := range hist.DataPoints {
		dataPoint := h.DataPoints().AppendEmpty()
		dataPoint.SetCount(dp.Count)
		dataPoint.SetSum(dp.Sum)
		dataPoint.SetStartTimestamp(pcommon.Timestamp(dp.StartTime.UnixNano()))
		dataPoint.SetTimestamp(pcommon.Timestamp(dp.Time.UnixNano()))

		if minValue, defined := dp.Min.Value(); defined {
			dataPoint.SetMin(minValue)
		}
		if maxValue, defined := dp.Max.Value(); defined {
			dataPoint.SetMax(maxValue)
		}

		dataPoint.BucketCounts().FromRaw(dp.BucketCounts)
		dataPoint.ExplicitBounds().FromRaw(dp.Bounds)

		s.convertAttributes(dp.Attributes, dataPoint.Attributes())
	}
}

func (s *scraper) convertExponentialHistogramInt64(hist metricdata.ExponentialHistogram[int64], metric pmetric.Metric) {
	h := metric.SetEmptyExponentialHistogram()
	h.SetAggregationTemporality(s.convertTemporality(hist.Temporality))

	for _, dp := range hist.DataPoints {
		dataPoint := h.DataPoints().AppendEmpty()
		dataPoint.SetCount(dp.Count)
		dataPoint.SetSum(float64(dp.Sum))
		dataPoint.SetScale(dp.Scale)
		dataPoint.SetZeroCount(dp.ZeroCount)
		dataPoint.SetZeroThreshold(dp.ZeroThreshold)
		dataPoint.SetStartTimestamp(pcommon.Timestamp(dp.StartTime.UnixNano()))
		dataPoint.SetTimestamp(pcommon.Timestamp(dp.Time.UnixNano()))

		if minValue, defined := dp.Min.Value(); defined {
			dataPoint.SetMin(float64(minValue))
		}
		if maxValue, defined := dp.Max.Value(); defined {
			dataPoint.SetMax(float64(maxValue))
		}

		positive := dataPoint.Positive()
		positive.SetOffset(dp.PositiveBucket.Offset)
		positive.BucketCounts().FromRaw(dp.PositiveBucket.Counts)

		negative := dataPoint.Negative()
		negative.SetOffset(dp.NegativeBucket.Offset)
		negative.BucketCounts().FromRaw(dp.NegativeBucket.Counts)

		s.convertAttributes(dp.Attributes, dataPoint.Attributes())
	}
}

func (s *scraper) convertExponentialHistogramFloat64(hist metricdata.ExponentialHistogram[float64], metric pmetric.Metric) {
	h := metric.SetEmptyExponentialHistogram()
	h.SetAggregationTemporality(s.convertTemporality(hist.Temporality))

	for _, dp := range hist.DataPoints {
		dataPoint := h.DataPoints().AppendEmpty()
		dataPoint.SetCount(dp.Count)
		dataPoint.SetSum(dp.Sum)
		dataPoint.SetScale(dp.Scale)
		dataPoint.SetZeroCount(dp.ZeroCount)
		dataPoint.SetZeroThreshold(dp.ZeroThreshold)
		dataPoint.SetStartTimestamp(pcommon.Timestamp(dp.StartTime.UnixNano()))
		dataPoint.SetTimestamp(pcommon.Timestamp(dp.Time.UnixNano()))

		if minValue, defined := dp.Min.Value(); defined {
			dataPoint.SetMin(minValue)
		}
		if maxValue, defined := dp.Max.Value(); defined {
			dataPoint.SetMax(maxValue)
		}

		positive := dataPoint.Positive()
		positive.SetOffset(dp.PositiveBucket.Offset)
		positive.BucketCounts().FromRaw(dp.PositiveBucket.Counts)

		negative := dataPoint.Negative()
		negative.SetOffset(dp.NegativeBucket.Offset)
		negative.BucketCounts().FromRaw(dp.NegativeBucket.Counts)

		s.convertAttributes(dp.Attributes, dataPoint.Attributes())
	}
}

func (s *scraper) convertSummary(summary metricdata.Summary, metric pmetric.Metric) {
	sv := metric.SetEmptySummary()

	for _, dp := range summary.DataPoints {
		dataPoint := sv.DataPoints().AppendEmpty()
		dataPoint.SetCount(dp.Count)
		dataPoint.SetSum(dp.Sum)
		dataPoint.SetStartTimestamp(pcommon.Timestamp(dp.StartTime.UnixNano()))
		dataPoint.SetTimestamp(pcommon.Timestamp(dp.Time.UnixNano()))

		for _, quantile := range dp.QuantileValues {
			qv := dataPoint.QuantileValues().AppendEmpty()
			qv.SetQuantile(quantile.Quantile)
			qv.SetValue(quantile.Value)
		}

		s.convertAttributes(dp.Attributes, dataPoint.Attributes())
	}
}

func (s *scraper) convertTemporality(temporality metricdata.Temporality) pmetric.AggregationTemporality {
	switch temporality {
	case metricdata.CumulativeTemporality:
		return pmetric.AggregationTemporalityCumulative
	case metricdata.DeltaTemporality:
		return pmetric.AggregationTemporalityDelta
	default:
		return pmetric.AggregationTemporalityUnspecified
	}
}

func (s *scraper) convertAttributes(attrs attribute.Set, dest pcommon.Map) {
	iter := attrs.Iter()
	for iter.Next() {
		kv := iter.Attribute()
		key := string(kv.Key)

		switch kv.Value.Type() {
		case attribute.BOOL:
			dest.PutBool(key, kv.Value.AsBool())
		case attribute.INT64:
			dest.PutInt(key, kv.Value.AsInt64())
		case attribute.FLOAT64:
			dest.PutDouble(key, kv.Value.AsFloat64())
		case attribute.STRING:
			dest.PutStr(key, kv.Value.AsString())
		case attribute.BOOLSLICE:
			slice := dest.PutEmptySlice(key)
			for _, v := range kv.Value.AsBoolSlice() {
				slice.AppendEmpty().SetBool(v)
			}
		case attribute.INT64SLICE:
			slice := dest.PutEmptySlice(key)
			for _, v := range kv.Value.AsInt64Slice() {
				slice.AppendEmpty().SetInt(v)
			}
		case attribute.FLOAT64SLICE:
			slice := dest.PutEmptySlice(key)
			for _, v := range kv.Value.AsFloat64Slice() {
				slice.AppendEmpty().SetDouble(v)
			}
		case attribute.STRINGSLICE:
			slice := dest.PutEmptySlice(key)
			for _, v := range kv.Value.AsStringSlice() {
				slice.AppendEmpty().SetStr(v)
			}
		}
	}
}
