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

package prometheus_collector_bridge

import (
	"context"
	"testing"

	"github.com/prometheus/client_golang/prometheus"
	"go.opentelemetry.io/collector/component"
	"go.opentelemetry.io/collector/pdata/pmetric"
	"go.uber.org/zap"
)

func TestScraper_EmptyRegistry(t *testing.T) {
	registry := prometheus.NewRegistry()
	s := newScraper(registry, component.MustNewType("test"), zap.NewNop())

	metrics, err := s.Scrape(context.Background())
	if err != nil {
		t.Fatalf("Scrape() returned unexpected error: %v", err)
	}

	if metrics.ResourceMetrics().Len() != 0 {
		t.Errorf("expected 0 resource metrics from empty registry, got %d", metrics.ResourceMetrics().Len())
	}
}

func TestScraper_ResourceAttributes(t *testing.T) {
	registry := prometheus.NewRegistry()
	gauge := prometheus.NewGauge(prometheus.GaugeOpts{
		Name: "test_gauge",
		Help: "A test gauge",
	})
	registry.MustRegister(gauge)
	gauge.Set(42)

	receiverType := component.MustNewType("myexporter")
	s := newScraper(registry, receiverType, zap.NewNop())

	metrics, err := s.Scrape(context.Background())
	if err != nil {
		t.Fatalf("Scrape() returned unexpected error: %v", err)
	}

	if metrics.ResourceMetrics().Len() != 1 {
		t.Fatalf("expected 1 resource metrics, got %d", metrics.ResourceMetrics().Len())
	}

	rm := metrics.ResourceMetrics().At(0)
	val, found := rm.Resource().Attributes().Get("service.name")
	if !found {
		t.Fatal("service.name attribute not found on resource")
	}
	if val.Str() != "myexporter" {
		t.Errorf("service.name = %q, want %q", val.Str(), "myexporter")
	}
}

func TestScraper_GaugeConversion(t *testing.T) {
	registry := prometheus.NewRegistry()
	gauge := prometheus.NewGaugeVec(prometheus.GaugeOpts{
		Name: "temperature_celsius",
		Help: "Current temperature in celsius",
	}, []string{"location"})
	registry.MustRegister(gauge)

	wantValues := map[string]float64{
		"kitchen":  22.5,
		"bedroom":  19.0,
		"zero":     0,
		"negative": -17.3,
		"large":    1e15,
		"small":    1e-10,
	}
	for label, val := range wantValues {
		gauge.WithLabelValues(label).Set(val)
	}

	s := newScraper(registry, component.MustNewType("test"), zap.NewNop())
	metrics, err := s.Scrape(context.Background())
	if err != nil {
		t.Fatalf("Scrape() returned unexpected error: %v", err)
	}

	metric := findMetric(t, metrics, "temperature_celsius")
	if metric.Type() != pmetric.MetricTypeGauge {
		t.Fatalf("metric type = %v, want Gauge", metric.Type())
	}

	if metric.Description() != "Current temperature in celsius" {
		t.Errorf("description = %q, want %q", metric.Description(), "Current temperature in celsius")
	}

	dataPoints := metric.Gauge().DataPoints()
	if dataPoints.Len() != len(wantValues) {
		t.Fatalf("expected %d gauge data points, got %d", len(wantValues), dataPoints.Len())
	}

	for i := 0; i < dataPoints.Len(); i++ {
		dp := dataPoints.At(i)
		loc, found := dp.Attributes().Get("location")
		if !found {
			t.Errorf("data point %d missing location attribute", i)
			continue
		}
		expected, ok := wantValues[loc.Str()]
		if !ok {
			t.Errorf("unexpected location label: %q", loc.Str())
			continue
		}
		if dp.DoubleValue() != expected {
			t.Errorf("gauge value for location=%s: got %v, want %v", loc.Str(), dp.DoubleValue(), expected)
		}
		if dp.Timestamp() == 0 {
			t.Errorf("data point %d has zero timestamp", i)
		}
	}
}

func TestScraper_CounterConversion(t *testing.T) {
	registry := prometheus.NewRegistry()
	counter := prometheus.NewCounterVec(prometheus.CounterOpts{
		Name: "http_requests_total",
		Help: "Total HTTP requests",
	}, []string{"method", "status"})
	registry.MustRegister(counter)

	counter.WithLabelValues("GET", "200").Add(100)
	counter.WithLabelValues("POST", "201").Add(25)
	counter.WithLabelValues("GET", "404").Add(3)

	s := newScraper(registry, component.MustNewType("test"), zap.NewNop())
	metrics, err := s.Scrape(context.Background())
	if err != nil {
		t.Fatalf("Scrape() returned unexpected error: %v", err)
	}

	metric := findMetric(t, metrics, "http_requests_total")
	if metric.Type() != pmetric.MetricTypeSum {
		t.Fatalf("metric type = %v, want Sum", metric.Type())
	}

	sum := metric.Sum()
	if !sum.IsMonotonic() {
		t.Error("counter should be monotonic")
	}
	if sum.AggregationTemporality() != pmetric.AggregationTemporalityCumulative {
		t.Errorf("temporality = %v, want Cumulative", sum.AggregationTemporality())
	}

	if sum.DataPoints().Len() != 3 {
		t.Fatalf("expected 3 sum data points, got %d", sum.DataPoints().Len())
	}

	type labelKey struct{ method, status string }
	wantValues := map[labelKey]float64{
		{"GET", "200"}:  100,
		{"POST", "201"}: 25,
		{"GET", "404"}:  3,
	}

	for i := 0; i < sum.DataPoints().Len(); i++ {
		dp := sum.DataPoints().At(i)
		method, _ := dp.Attributes().Get("method")
		status, _ := dp.Attributes().Get("status")

		key := labelKey{method.Str(), status.Str()}
		expected, ok := wantValues[key]
		if !ok {
			t.Errorf("unexpected label combination: method=%q status=%q", method.Str(), status.Str())
			continue
		}
		if dp.DoubleValue() != expected {
			t.Errorf("counter value for %+v: got %f, want %f", key, dp.DoubleValue(), expected)
		}
		if dp.Timestamp() == 0 {
			t.Errorf("data point %d has zero timestamp", i)
		}
		if dp.StartTimestamp() == 0 {
			t.Errorf("data point %d has zero start timestamp", i)
		}
	}
}

func TestScraper_HistogramConversion(t *testing.T) {
	buckets := []float64{0.01, 0.05, 0.1, 0.5, 1.0, 5.0}

	registry := prometheus.NewRegistry()
	histogram := prometheus.NewHistogramVec(prometheus.HistogramOpts{
		Name:    "http_request_duration_seconds",
		Help:    "Request duration in seconds",
		Buckets: buckets,
	}, []string{"handler"})
	registry.MustRegister(histogram)

	histogram.WithLabelValues("/api").Observe(0.032)
	histogram.WithLabelValues("/api").Observe(0.075)
	histogram.WithLabelValues("/api").Observe(0.42)
	histogram.WithLabelValues("/health").Observe(0.001)

	s := newScraper(registry, component.MustNewType("test"), zap.NewNop())
	metrics, err := s.Scrape(context.Background())
	if err != nil {
		t.Fatalf("Scrape() returned unexpected error: %v", err)
	}

	metric := findMetric(t, metrics, "http_request_duration_seconds")
	if metric.Type() != pmetric.MetricTypeHistogram {
		t.Fatalf("metric type = %v, want Histogram", metric.Type())
	}

	hist := metric.Histogram()
	if hist.AggregationTemporality() != pmetric.AggregationTemporalityCumulative {
		t.Errorf("temporality = %v, want Cumulative", hist.AggregationTemporality())
	}

	if hist.DataPoints().Len() != 2 {
		t.Fatalf("expected 2 histogram data points, got %d", hist.DataPoints().Len())
	}

	for i := 0; i < hist.DataPoints().Len(); i++ {
		dp := hist.DataPoints().At(i)
		handler, _ := dp.Attributes().Get("handler")

		switch handler.Str() {
		case "/api":
			if dp.Count() != 3 {
				t.Errorf("/api histogram count = %d, want 3", dp.Count())
			}
			wantSum := 0.032 + 0.075 + 0.42
			if dp.Sum() < wantSum-0.001 || dp.Sum() > wantSum+0.001 {
				t.Errorf("/api histogram sum = %f, want ~%f", dp.Sum(), wantSum)
			}
		case "/health":
			if dp.Count() != 1 {
				t.Errorf("/health histogram count = %d, want 1", dp.Count())
			}
		default:
			t.Errorf("unexpected handler label: %q", handler.Str())
		}

		if dp.ExplicitBounds().Len() != len(buckets) {
			t.Errorf("explicit bounds length = %d, want %d", dp.ExplicitBounds().Len(), len(buckets))
		}
		for j := 0; j < dp.ExplicitBounds().Len(); j++ {
			if dp.ExplicitBounds().At(j) != buckets[j] {
				t.Errorf("bound[%d] = %f, want %f", j, dp.ExplicitBounds().At(j), buckets[j])
			}
		}
		if dp.BucketCounts().Len() != len(buckets)+1 {
			t.Errorf("bucket counts length = %d, want %d", dp.BucketCounts().Len(), len(buckets)+1)
		}
		if dp.Timestamp() == 0 {
			t.Errorf("data point %d has zero timestamp", i)
		}
	}
}

func TestScraper_ExponentialHistogramConversion(t *testing.T) {
	registry := prometheus.NewRegistry()
	histogram := prometheus.NewHistogram(prometheus.HistogramOpts{
		Name:                        "native_request_duration_seconds",
		Help:                        "Request duration as native histogram",
		NativeHistogramBucketFactor: 1.1,
	})
	registry.MustRegister(histogram)

	histogram.Observe(0.01)
	histogram.Observe(0.5)
	histogram.Observe(2.5)

	s := newScraper(registry, component.MustNewType("test"), zap.NewNop())
	metrics, err := s.Scrape(context.Background())
	if err != nil {
		t.Fatalf("Scrape() returned unexpected error: %v", err)
	}

	metric := findMetric(t, metrics, "native_request_duration_seconds")
	if metric.Type() != pmetric.MetricTypeExponentialHistogram {
		t.Fatalf("metric type = %v, want ExponentialHistogram", metric.Type())
	}

	expHist := metric.ExponentialHistogram()
	if expHist.AggregationTemporality() != pmetric.AggregationTemporalityCumulative {
		t.Errorf("temporality = %v, want Cumulative", expHist.AggregationTemporality())
	}

	if expHist.DataPoints().Len() != 1 {
		t.Fatalf("expected 1 exponential histogram data point, got %d", expHist.DataPoints().Len())
	}

	dp := expHist.DataPoints().At(0)
	if dp.Count() != 3 {
		t.Errorf("count = %d, want 3", dp.Count())
	}
	wantSum := 0.01 + 0.5 + 2.5
	if dp.Sum() < wantSum-0.001 || dp.Sum() > wantSum+0.001 {
		t.Errorf("sum = %f, want ~%f", dp.Sum(), wantSum)
	}
	if dp.Scale() == 0 && dp.Positive().BucketCounts().Len() == 0 {
		t.Error("expected non-trivial exponential histogram bucket structure")
	}
	if dp.Timestamp() == 0 {
		t.Error("data point has zero timestamp")
	}
}

func TestScraper_SummaryConversion(t *testing.T) {
	registry := prometheus.NewRegistry()
	summary := prometheus.NewSummaryVec(prometheus.SummaryOpts{
		Name:       "rpc_duration_seconds",
		Help:       "RPC duration in seconds",
		Objectives: map[float64]float64{0.5: 0.05, 0.9: 0.01, 0.99: 0.001},
	}, []string{"service"})
	registry.MustRegister(summary)

	for i := 0; i < 100; i++ {
		summary.WithLabelValues("auth").Observe(float64(i) * 0.5)
	}

	s := newScraper(registry, component.MustNewType("test"), zap.NewNop())
	metrics, err := s.Scrape(context.Background())
	if err != nil {
		t.Fatalf("Scrape() returned unexpected error: %v", err)
	}

	metric := findMetric(t, metrics, "rpc_duration_seconds")
	if metric.Type() != pmetric.MetricTypeSummary {
		t.Fatalf("metric type = %v, want Summary", metric.Type())
	}

	summaryData := metric.Summary()
	if summaryData.DataPoints().Len() != 1 {
		t.Fatalf("expected 1 summary data point, got %d", summaryData.DataPoints().Len())
	}

	dp := summaryData.DataPoints().At(0)
	if dp.Count() != 100 {
		t.Errorf("summary count = %d, want 100", dp.Count())
	}
	if dp.Sum() != 2475.0 {
		t.Errorf("summary sum = %f, want 2475.0", dp.Sum())
	}

	if dp.QuantileValues().Len() != 3 {
		t.Errorf("expected 3 quantile values, got %d", dp.QuantileValues().Len())
	}

	wantQuantiles := map[float64]bool{0.5: false, 0.9: false, 0.99: false}
	for i := 0; i < dp.QuantileValues().Len(); i++ {
		qv := dp.QuantileValues().At(i)
		if _, expected := wantQuantiles[qv.Quantile()]; !expected {
			t.Errorf("unexpected quantile: %f", qv.Quantile())
		} else {
			wantQuantiles[qv.Quantile()] = true
		}
	}
	for q, found := range wantQuantiles {
		if !found {
			t.Errorf("missing quantile: %f", q)
		}
	}
}

func TestScraper_ScopeMetadata(t *testing.T) {
	registry := prometheus.NewRegistry()
	gauge := prometheus.NewGauge(prometheus.GaugeOpts{
		Name: "test_metric",
		Help: "test",
	})
	registry.MustRegister(gauge)
	gauge.Set(1)

	s := newScraper(registry, component.MustNewType("test"), zap.NewNop())
	metrics, err := s.Scrape(context.Background())
	if err != nil {
		t.Fatalf("Scrape() returned unexpected error: %v", err)
	}

	if metrics.ResourceMetrics().Len() != 1 {
		t.Fatalf("expected 1 resource metrics, got %d", metrics.ResourceMetrics().Len())
	}

	rm := metrics.ResourceMetrics().At(0)
	if rm.ScopeMetrics().Len() == 0 {
		t.Fatal("expected at least 1 scope metrics")
	}

	scope := rm.ScopeMetrics().At(0).Scope()
	if scope.Name() == "" {
		t.Error("scope name should not be empty")
	}
}

func findMetric(t *testing.T, metrics pmetric.Metrics, name string) pmetric.Metric {
	t.Helper()
	for i := 0; i < metrics.ResourceMetrics().Len(); i++ {
		rm := metrics.ResourceMetrics().At(i)
		for j := 0; j < rm.ScopeMetrics().Len(); j++ {
			sm := rm.ScopeMetrics().At(j)
			for k := 0; k < sm.Metrics().Len(); k++ {
				m := sm.Metrics().At(k)
				if m.Name() == name {
					return m
				}
			}
		}
	}
	t.Fatalf("metric %q not found", name)
	return pmetric.Metric{}
}

func collectMetricNames(metrics pmetric.Metrics) map[string]pmetric.MetricType {
	result := make(map[string]pmetric.MetricType)
	for i := 0; i < metrics.ResourceMetrics().Len(); i++ {
		rm := metrics.ResourceMetrics().At(i)
		for j := 0; j < rm.ScopeMetrics().Len(); j++ {
			sm := rm.ScopeMetrics().At(j)
			for k := 0; k < sm.Metrics().Len(); k++ {
				m := sm.Metrics().At(k)
				result[m.Name()] = m.Type()
			}
		}
	}
	return result
}
