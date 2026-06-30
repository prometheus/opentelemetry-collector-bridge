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
	"bytes"
	"context"
	"fmt"
	"math"
	"sort"
	"strconv"
	"sync"
	"time"

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
	stalenessMu  sync.Mutex
	seriesCache  map[streamIdentity]seriesCacheEntry
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
		seriesCache:  make(map[streamIdentity]seriesCacheEntry),
	}
}

// Start implements component.Component. No initialization is needed.
func (s *scraper) Start(_ context.Context, _ component.Host) error {
	return nil
}

// Shutdown implements component.Component. No cleanup is needed.
func (s *scraper) Shutdown(_ context.Context) error {
	return nil
}

// ScrapeMetrics collects metrics from the Prometheus registry and converts them
// to OpenTelemetry pmetric.Metrics format.
func (s *scraper) ScrapeMetrics(ctx context.Context) (pmetric.Metrics, error) {
	s.logger.Debug("Scraping metrics")

	scopeMetrics, err := s.producer.Produce(ctx)
	if err != nil {
		return pmetric.Metrics{}, fmt.Errorf("failed to produce metrics: %w", err)
	}

	metrics := s.convert(scopeMetrics)
	s.trackStaleness(metrics, pcommon.Timestamp(time.Now().UnixNano()))

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

type streamIdentity string

type seriesCacheEntry struct {
	resourceSchemaURL string
	resource          pcommon.Resource
	scopeSchemaURL    string
	scope             pcommon.InstrumentationScope
	metricName        string
	metricDescription string
	metricUnit        string
	metricType        pmetric.MetricType
	temporality       pmetric.AggregationTemporality
	isMonotonic       bool
	metadata          pcommon.Map
	attributes        pcommon.Map
	startTimestamp    pcommon.Timestamp
}

func (s *scraper) trackStaleness(metrics pmetric.Metrics, scrapeTimestamp pcommon.Timestamp) {
	s.stalenessMu.Lock()
	defer s.stalenessMu.Unlock()

	current := make(map[streamIdentity]seriesCacheEntry)
	s.collectCurrentSeries(metrics, current)

	for id, cached := range s.seriesCache {
		if _, found := current[id]; found {
			continue
		}
		s.appendStalePoint(metrics, cached, scrapeTimestamp)
	}

	s.seriesCache = current
}

func (s *scraper) collectCurrentSeries(metrics pmetric.Metrics, current map[streamIdentity]seriesCacheEntry) {
	for i := 0; i < metrics.ResourceMetrics().Len(); i++ {
		rm := metrics.ResourceMetrics().At(i)
		resourceID := resourceIdentity(rm)
		for j := 0; j < rm.ScopeMetrics().Len(); j++ {
			sm := rm.ScopeMetrics().At(j)
			scopeID := scopeIdentity(resourceID, sm)
			for k := 0; k < sm.Metrics().Len(); k++ {
				m := sm.Metrics().At(k)
				metricID := metricIdentity(scopeID, m)
				switch m.Type() {
				case pmetric.MetricTypeGauge:
					dps := m.Gauge().DataPoints()
					for l := 0; l < dps.Len(); l++ {
						dp := dps.At(l)
						id := streamKey(metricID, dp.Attributes())
						current[id] = newSeriesCacheEntry(rm, sm, m, dp.Attributes(), dp.StartTimestamp())
					}
				case pmetric.MetricTypeSum:
					dps := m.Sum().DataPoints()
					for l := 0; l < dps.Len(); l++ {
						dp := dps.At(l)
						id := streamKey(metricID, dp.Attributes())
						current[id] = newSeriesCacheEntry(rm, sm, m, dp.Attributes(), dp.StartTimestamp())
					}
				case pmetric.MetricTypeHistogram:
					dps := m.Histogram().DataPoints()
					for l := 0; l < dps.Len(); l++ {
						dp := dps.At(l)
						id := streamKey(metricID, dp.Attributes())
						current[id] = newSeriesCacheEntry(rm, sm, m, dp.Attributes(), dp.StartTimestamp())
					}
				case pmetric.MetricTypeExponentialHistogram:
					dps := m.ExponentialHistogram().DataPoints()
					for l := 0; l < dps.Len(); l++ {
						dp := dps.At(l)
						id := streamKey(metricID, dp.Attributes())
						current[id] = newSeriesCacheEntry(rm, sm, m, dp.Attributes(), dp.StartTimestamp())
					}
				case pmetric.MetricTypeSummary:
					dps := m.Summary().DataPoints()
					for l := 0; l < dps.Len(); l++ {
						dp := dps.At(l)
						id := streamKey(metricID, dp.Attributes())
						current[id] = newSeriesCacheEntry(rm, sm, m, dp.Attributes(), dp.StartTimestamp())
					}
				}
			}
		}
	}
}

func newSeriesCacheEntry(
	rm pmetric.ResourceMetrics,
	sm pmetric.ScopeMetrics,
	m pmetric.Metric,
	attrs pcommon.Map,
	startTimestamp pcommon.Timestamp,
) seriesCacheEntry {
	resource := pcommon.NewResource()
	rm.Resource().CopyTo(resource)

	scope := pcommon.NewInstrumentationScope()
	sm.Scope().CopyTo(scope)

	metadata := pcommon.NewMap()
	m.Metadata().CopyTo(metadata)

	copiedAttrs := pcommon.NewMap()
	attrs.CopyTo(copiedAttrs)

	entry := seriesCacheEntry{
		resourceSchemaURL: rm.SchemaUrl(),
		resource:          resource,
		scopeSchemaURL:    sm.SchemaUrl(),
		scope:             scope,
		metricName:        m.Name(),
		metricDescription: m.Description(),
		metricUnit:        m.Unit(),
		metricType:        m.Type(),
		metadata:          metadata,
		attributes:        copiedAttrs,
		startTimestamp:    startTimestamp,
	}

	switch m.Type() {
	case pmetric.MetricTypeSum:
		sum := m.Sum()
		entry.temporality = sum.AggregationTemporality()
		entry.isMonotonic = sum.IsMonotonic()
	case pmetric.MetricTypeHistogram:
		entry.temporality = m.Histogram().AggregationTemporality()
		entry.isMonotonic = true
	case pmetric.MetricTypeExponentialHistogram:
		entry.temporality = m.ExponentialHistogram().AggregationTemporality()
		entry.isMonotonic = true
	}

	return entry
}

func (s *scraper) appendStalePoint(metrics pmetric.Metrics, entry seriesCacheEntry, timestamp pcommon.Timestamp) {
	metric := findOrCreateMetric(metrics, entry)

	switch entry.metricType {
	case pmetric.MetricTypeGauge:
		dp := metric.Gauge().DataPoints().AppendEmpty()
		setStaleNumberDataPoint(dp, entry, timestamp)
	case pmetric.MetricTypeSum:
		dp := metric.Sum().DataPoints().AppendEmpty()
		setStaleNumberDataPoint(dp, entry, timestamp)
	case pmetric.MetricTypeHistogram:
		dp := metric.Histogram().DataPoints().AppendEmpty()
		setStaleHistogramDataPoint(dp, entry, timestamp)
	case pmetric.MetricTypeExponentialHistogram:
		dp := metric.ExponentialHistogram().DataPoints().AppendEmpty()
		setStaleExponentialHistogramDataPoint(dp, entry, timestamp)
	case pmetric.MetricTypeSummary:
		dp := metric.Summary().DataPoints().AppendEmpty()
		setStaleSummaryDataPoint(dp, entry, timestamp)
	}
}

func findOrCreateMetric(metrics pmetric.Metrics, entry seriesCacheEntry) pmetric.Metric {
	rm := findOrCreateResourceMetrics(metrics, entry)
	sm := findOrCreateScopeMetrics(rm, entry)

	for i := 0; i < sm.Metrics().Len(); i++ {
		metric := sm.Metrics().At(i)
		if metricMatchesEntry(metric, entry) {
			return metric
		}
	}

	metric := sm.Metrics().AppendEmpty()
	metric.SetName(entry.metricName)
	metric.SetDescription(entry.metricDescription)
	metric.SetUnit(entry.metricUnit)
	entry.metadata.CopyTo(metric.Metadata())

	switch entry.metricType {
	case pmetric.MetricTypeGauge:
		metric.SetEmptyGauge()
	case pmetric.MetricTypeSum:
		sum := metric.SetEmptySum()
		sum.SetAggregationTemporality(entry.temporality)
		sum.SetIsMonotonic(entry.isMonotonic)
	case pmetric.MetricTypeHistogram:
		hist := metric.SetEmptyHistogram()
		hist.SetAggregationTemporality(entry.temporality)
	case pmetric.MetricTypeExponentialHistogram:
		hist := metric.SetEmptyExponentialHistogram()
		hist.SetAggregationTemporality(entry.temporality)
	case pmetric.MetricTypeSummary:
		metric.SetEmptySummary()
	}

	return metric
}

func findOrCreateResourceMetrics(metrics pmetric.Metrics, entry seriesCacheEntry) pmetric.ResourceMetrics {
	for i := 0; i < metrics.ResourceMetrics().Len(); i++ {
		rm := metrics.ResourceMetrics().At(i)
		if rm.SchemaUrl() == entry.resourceSchemaURL &&
			mapIdentity(rm.Resource().Attributes()) == mapIdentity(entry.resource.Attributes()) {
			return rm
		}
	}

	rm := metrics.ResourceMetrics().AppendEmpty()
	rm.SetSchemaUrl(entry.resourceSchemaURL)
	entry.resource.CopyTo(rm.Resource())
	return rm
}

func findOrCreateScopeMetrics(rm pmetric.ResourceMetrics, entry seriesCacheEntry) pmetric.ScopeMetrics {
	for i := 0; i < rm.ScopeMetrics().Len(); i++ {
		sm := rm.ScopeMetrics().At(i)
		if sm.SchemaUrl() == entry.scopeSchemaURL &&
			sm.Scope().Name() == entry.scope.Name() &&
			sm.Scope().Version() == entry.scope.Version() &&
			mapIdentity(sm.Scope().Attributes()) == mapIdentity(entry.scope.Attributes()) {
			return sm
		}
	}

	sm := rm.ScopeMetrics().AppendEmpty()
	sm.SetSchemaUrl(entry.scopeSchemaURL)
	entry.scope.CopyTo(sm.Scope())
	return sm
}

func metricMatchesEntry(metric pmetric.Metric, entry seriesCacheEntry) bool {
	if metric.Name() != entry.metricName ||
		metric.Unit() != entry.metricUnit ||
		metric.Type() != entry.metricType {
		return false
	}

	switch metric.Type() {
	case pmetric.MetricTypeSum:
		sum := metric.Sum()
		return sum.AggregationTemporality() == entry.temporality &&
			sum.IsMonotonic() == entry.isMonotonic
	case pmetric.MetricTypeHistogram:
		return metric.Histogram().AggregationTemporality() == entry.temporality
	case pmetric.MetricTypeExponentialHistogram:
		return metric.ExponentialHistogram().AggregationTemporality() == entry.temporality
	default:
		return true
	}
}

func setStaleNumberDataPoint(dp pmetric.NumberDataPoint, entry seriesCacheEntry, timestamp pcommon.Timestamp) {
	dp.SetTimestamp(timestamp)
	if entry.metricType == pmetric.MetricTypeSum && entry.startTimestamp != 0 {
		dp.SetStartTimestamp(entry.startTimestamp)
	}
	dp.SetFlags(pmetric.DefaultDataPointFlags.WithNoRecordedValue(true))
	entry.attributes.CopyTo(dp.Attributes())
}

func setStaleHistogramDataPoint(dp pmetric.HistogramDataPoint, entry seriesCacheEntry, timestamp pcommon.Timestamp) {
	dp.SetTimestamp(timestamp)
	if entry.startTimestamp != 0 {
		dp.SetStartTimestamp(entry.startTimestamp)
	}
	dp.SetFlags(pmetric.DefaultDataPointFlags.WithNoRecordedValue(true))
	entry.attributes.CopyTo(dp.Attributes())
}

func setStaleExponentialHistogramDataPoint(dp pmetric.ExponentialHistogramDataPoint, entry seriesCacheEntry, timestamp pcommon.Timestamp) {
	dp.SetTimestamp(timestamp)
	if entry.startTimestamp != 0 {
		dp.SetStartTimestamp(entry.startTimestamp)
	}
	dp.SetFlags(pmetric.DefaultDataPointFlags.WithNoRecordedValue(true))
	entry.attributes.CopyTo(dp.Attributes())
}

func setStaleSummaryDataPoint(dp pmetric.SummaryDataPoint, entry seriesCacheEntry, timestamp pcommon.Timestamp) {
	dp.SetTimestamp(timestamp)
	if entry.startTimestamp != 0 {
		dp.SetStartTimestamp(entry.startTimestamp)
	}
	dp.SetFlags(pmetric.DefaultDataPointFlags.WithNoRecordedValue(true))
	entry.attributes.CopyTo(dp.Attributes())
}

func resourceIdentity(rm pmetric.ResourceMetrics) string {
	var b bytes.Buffer
	writeString(&b, rm.SchemaUrl())
	writeMap(&b, rm.Resource().Attributes())
	return b.String()
}

func scopeIdentity(resourceID string, sm pmetric.ScopeMetrics) string {
	var b bytes.Buffer
	writeString(&b, resourceID)
	writeString(&b, sm.SchemaUrl())
	writeString(&b, sm.Scope().Name())
	writeString(&b, sm.Scope().Version())
	writeMap(&b, sm.Scope().Attributes())
	return b.String()
}

func metricIdentity(scopeID string, metric pmetric.Metric) string {
	var b bytes.Buffer
	writeString(&b, scopeID)
	writeString(&b, metric.Name())
	writeString(&b, metric.Unit())
	writeString(&b, metric.Type().String())

	switch metric.Type() {
	case pmetric.MetricTypeSum:
		sum := metric.Sum()
		writeBool(&b, sum.IsMonotonic())
		writeString(&b, sum.AggregationTemporality().String())
	case pmetric.MetricTypeHistogram:
		writeBool(&b, true)
		writeString(&b, metric.Histogram().AggregationTemporality().String())
	case pmetric.MetricTypeExponentialHistogram:
		writeBool(&b, true)
		writeString(&b, metric.ExponentialHistogram().AggregationTemporality().String())
	}

	return b.String()
}

func streamKey(metricID string, attrs pcommon.Map) streamIdentity {
	var b bytes.Buffer
	writeString(&b, metricID)
	writeMap(&b, attrs)
	return streamIdentity(b.String())
}

func mapIdentity(attrs pcommon.Map) string {
	var b bytes.Buffer
	writeMap(&b, attrs)
	return b.String()
}

func writeMap(b *bytes.Buffer, attrs pcommon.Map) {
	keys := make([]string, 0, attrs.Len())
	for key := range attrs.All() {
		keys = append(keys, key)
	}
	sort.Strings(keys)

	writeInt(b, len(keys))
	for _, key := range keys {
		value, _ := attrs.Get(key)
		writeString(b, key)
		writeValue(b, value)
	}
}

func writeValue(b *bytes.Buffer, value pcommon.Value) {
	writeString(b, value.Type().String())
	switch value.Type() {
	case pcommon.ValueTypeStr:
		writeString(b, value.Str())
	case pcommon.ValueTypeBool:
		writeBool(b, value.Bool())
	case pcommon.ValueTypeInt:
		writeInt64(b, value.Int())
	case pcommon.ValueTypeDouble:
		writeUint64(b, math.Float64bits(value.Double()))
	case pcommon.ValueTypeMap:
		writeMap(b, value.Map())
	case pcommon.ValueTypeSlice:
		slice := value.Slice()
		writeInt(b, slice.Len())
		for i := 0; i < slice.Len(); i++ {
			writeValue(b, slice.At(i))
		}
	case pcommon.ValueTypeBytes:
		raw := value.Bytes().AsRaw()
		writeInt(b, len(raw))
		b.Write(raw)
	case pcommon.ValueTypeEmpty:
	}
}

func writeString(b *bytes.Buffer, value string) {
	writeInt(b, len(value))
	b.WriteString(value)
}

func writeBool(b *bytes.Buffer, value bool) {
	if value {
		b.WriteByte(1)
		return
	}
	b.WriteByte(0)
}

func writeInt(b *bytes.Buffer, value int) {
	writeStringRaw(b, strconv.Itoa(value))
}

func writeInt64(b *bytes.Buffer, value int64) {
	writeStringRaw(b, strconv.FormatInt(value, 10))
}

func writeUint64(b *bytes.Buffer, value uint64) {
	writeStringRaw(b, strconv.FormatUint(value, 10))
}

func writeStringRaw(b *bytes.Buffer, value string) {
	b.WriteString(value)
	b.WriteByte(0)
}
