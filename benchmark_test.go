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
	"testing"

	"github.com/prometheus/client_golang/prometheus"
	"go.opentelemetry.io/collector/component"
	"go.opentelemetry.io/collector/consumer/consumertest"
	"go.opentelemetry.io/collector/pdata/pmetric"
	"go.uber.org/zap"
)

type benchmarkMetricType string

const (
	benchmarkMetricTypeCounters   benchmarkMetricType = "counters"
	benchmarkMetricTypeHistograms benchmarkMetricType = "histograms"
	benchmarkMetricTypeMixed      benchmarkMetricType = "mixed"
)

var benchmarkHistogramBuckets = []float64{0.005, 0.01, 0.025, 0.05, 0.1, 0.25, 0.5, 1.0}

func setupRegistry(b *testing.B, metricType benchmarkMetricType, numMetrics, cardinality int) *prometheus.Registry {
	b.Helper()

	registry := prometheus.NewRegistry()

	switch metricType {
	case benchmarkMetricTypeCounters:
		registerBenchmarkCounters(registry, numMetrics, cardinality)
	case benchmarkMetricTypeHistograms:
		registerBenchmarkHistograms(registry, numMetrics, cardinality)
	case benchmarkMetricTypeMixed:
		registerBenchmarkMixedMetrics(registry, numMetrics, cardinality)
	default:
		b.Fatalf("unsupported benchmark metric type %q", metricType)
	}

	return registry
}

func registerBenchmarkCounters(registry *prometheus.Registry, numMetrics, cardinality int) {
	for metricIndex := 0; metricIndex < numMetrics; metricIndex++ {
		name := fmt.Sprintf("benchmark_counter_%d_total", metricIndex)

		if cardinality == 1 {
			counter := prometheus.NewCounter(prometheus.CounterOpts{
				Name: name,
				Help: "Benchmark counter",
			})
			registry.MustRegister(counter)
			counter.Add(float64(metricIndex + 1))
			continue
		}

		counter := prometheus.NewCounterVec(prometheus.CounterOpts{
			Name: name,
			Help: "Benchmark counter",
		}, []string{"series"})
		registry.MustRegister(counter)

		for seriesIndex := 0; seriesIndex < cardinality; seriesIndex++ {
			counter.WithLabelValues(benchmarkSeriesLabel(seriesIndex)).Add(float64(metricIndex + seriesIndex + 1))
		}
	}
}

func registerBenchmarkHistograms(registry *prometheus.Registry, numMetrics, cardinality int) {
	for metricIndex := 0; metricIndex < numMetrics; metricIndex++ {
		name := fmt.Sprintf("benchmark_histogram_%d_seconds", metricIndex)

		if cardinality == 1 {
			histogram := prometheus.NewHistogram(prometheus.HistogramOpts{
				Name:    name,
				Help:    "Benchmark histogram",
				Buckets: benchmarkHistogramBuckets,
			})
			registry.MustRegister(histogram)
			histogram.Observe(benchmarkObservation(metricIndex, 0))
			continue
		}

		histogram := prometheus.NewHistogramVec(prometheus.HistogramOpts{
			Name:    name,
			Help:    "Benchmark histogram",
			Buckets: benchmarkHistogramBuckets,
		}, []string{"series"})
		registry.MustRegister(histogram)

		for seriesIndex := 0; seriesIndex < cardinality; seriesIndex++ {
			histogram.WithLabelValues(benchmarkSeriesLabel(seriesIndex)).Observe(
				benchmarkObservation(metricIndex, seriesIndex),
			)
		}
	}
}

func registerBenchmarkMixedMetrics(registry *prometheus.Registry, numMetrics, cardinality int) {
	for metricIndex := 0; metricIndex < numMetrics; metricIndex++ {
		switch metricIndex % 3 {
		case 0:
			name := fmt.Sprintf("benchmark_mixed_counter_%d_total", metricIndex)
			if cardinality == 1 {
				counter := prometheus.NewCounter(prometheus.CounterOpts{
					Name: name,
					Help: "Benchmark mixed counter",
				})
				registry.MustRegister(counter)
				counter.Add(float64(metricIndex + 1))
				continue
			}

			counter := prometheus.NewCounterVec(prometheus.CounterOpts{
				Name: name,
				Help: "Benchmark mixed counter",
			}, []string{"series"})
			registry.MustRegister(counter)

			for seriesIndex := 0; seriesIndex < cardinality; seriesIndex++ {
				counter.WithLabelValues(benchmarkSeriesLabel(seriesIndex)).Add(float64(metricIndex + seriesIndex + 1))
			}
		case 1:
			name := fmt.Sprintf("benchmark_mixed_gauge_%d", metricIndex)
			if cardinality == 1 {
				gauge := prometheus.NewGauge(prometheus.GaugeOpts{
					Name: name,
					Help: "Benchmark mixed gauge",
				})
				registry.MustRegister(gauge)
				gauge.Set(float64(metricIndex) + 0.5)
				continue
			}

			gauge := prometheus.NewGaugeVec(prometheus.GaugeOpts{
				Name: name,
				Help: "Benchmark mixed gauge",
			}, []string{"series"})
			registry.MustRegister(gauge)

			for seriesIndex := 0; seriesIndex < cardinality; seriesIndex++ {
				gauge.WithLabelValues(benchmarkSeriesLabel(seriesIndex)).Set(float64(metricIndex + seriesIndex))
			}
		default:
			name := fmt.Sprintf("benchmark_mixed_histogram_%d_seconds", metricIndex)
			if cardinality == 1 {
				histogram := prometheus.NewHistogram(prometheus.HistogramOpts{
					Name:    name,
					Help:    "Benchmark mixed histogram",
					Buckets: benchmarkHistogramBuckets,
				})
				registry.MustRegister(histogram)
				histogram.Observe(benchmarkObservation(metricIndex, 0))
				continue
			}

			histogram := prometheus.NewHistogramVec(prometheus.HistogramOpts{
				Name:    name,
				Help:    "Benchmark mixed histogram",
				Buckets: benchmarkHistogramBuckets,
			}, []string{"series"})
			registry.MustRegister(histogram)

			for seriesIndex := 0; seriesIndex < cardinality; seriesIndex++ {
				histogram.WithLabelValues(benchmarkSeriesLabel(seriesIndex)).Observe(
					benchmarkObservation(metricIndex, seriesIndex),
				)
			}
		}
	}
}

func benchmarkSeriesLabel(seriesIndex int) string {
	return fmt.Sprintf("series_%d", seriesIndex)
}

func benchmarkObservation(metricIndex, seriesIndex int) float64 {
	return benchmarkHistogramBuckets[(metricIndex+seriesIndex)%len(benchmarkHistogramBuckets)]
}

func BenchmarkScrapeAndExport(b *testing.B) {
	ctx := context.Background()
	receiverType := component.MustNewType("bench")

	metricTypes := []benchmarkMetricType{
		benchmarkMetricTypeCounters,
		benchmarkMetricTypeHistograms,
		benchmarkMetricTypeMixed,
	}
	metricCounts := []int{100}
	cardinalities := []int{10}

	for _, metricType := range metricTypes {
		metricType := metricType

		b.Run(string(metricType), func(b *testing.B) {
			for _, metricCount := range metricCounts {
				metricCount := metricCount

				b.Run(fmt.Sprintf("metrics_%d", metricCount), func(b *testing.B) {
					for _, cardinality := range cardinalities {
						cardinality := cardinality

						b.Run(fmt.Sprintf("cardinality_%d", cardinality), func(b *testing.B) {
							registry := setupRegistry(b, metricType, metricCount, cardinality)
							consumer := consumertest.NewNop()
							s := newScraper(registry, receiverType, zap.NewNop())

							b.ReportAllocs()
							b.ResetTimer()

							for i := 0; i < b.N; i++ {
								metrics, err := s.ScrapeMetrics(ctx)
								if err != nil {
									b.Fatalf("ScrapeMetrics() failed: %v", err)
								}
								if err := consumer.ConsumeMetrics(ctx, metrics); err != nil {
									b.Fatalf("ConsumeMetrics() failed: %v", err)
								}
							}
						})
					}
				})
			}
		})
	}
}

func BenchmarkScrapeWithStaleness(b *testing.B) {
	const cardinality = 1000

	ctx := context.Background()
	registry := prometheus.NewRegistry()
	gauge := prometheus.NewGaugeVec(prometheus.GaugeOpts{
		Name: "benchmark_staleness_gauge",
		Help: "Benchmark staleness gauge",
	}, []string{"series"})
	registry.MustRegister(gauge)

	labels := make([]string, cardinality)
	for i := range labels {
		labels[i] = benchmarkSeriesLabel(i)
		gauge.WithLabelValues(labels[i]).Set(float64(i))
	}

	s := newScraper(registry, component.MustNewType("bench"), zap.NewNop())
	consumer := consumertest.NewNop()

	// Verify that the benchmark setup exercises stale-marker emission.
	if _, err := s.ScrapeMetrics(ctx); err != nil {
		b.Fatalf("initial ScrapeMetrics() failed: %v", err)
	}
	deleteBenchmarkSeries(b, gauge, labels)
	staleMetrics, err := s.ScrapeMetrics(ctx)
	if err != nil {
		b.Fatalf("stale ScrapeMetrics() failed: %v", err)
	}
	if got := countStaleDataPoints(staleMetrics); got != cardinality {
		b.Fatalf("stale data points = %d, want %d", got, cardinality)
	}
	restoreBenchmarkSeries(gauge, labels)

	b.ReportAllocs()
	b.ResetTimer()

	for i := 0; i < b.N; i++ {
		metrics, err := s.ScrapeMetrics(ctx)
		if err != nil {
			b.Fatalf("active ScrapeMetrics() failed: %v", err)
		}
		if err := consumer.ConsumeMetrics(ctx, metrics); err != nil {
			b.Fatalf("ConsumeMetrics() failed: %v", err)
		}

		b.StopTimer()
		deleteBenchmarkSeries(b, gauge, labels)
		b.StartTimer()

		metrics, err = s.ScrapeMetrics(ctx)
		if err != nil {
			b.Fatalf("stale ScrapeMetrics() failed: %v", err)
		}
		if err := consumer.ConsumeMetrics(ctx, metrics); err != nil {
			b.Fatalf("ConsumeMetrics() failed: %v", err)
		}

		b.StopTimer()
		restoreBenchmarkSeries(gauge, labels)
		b.StartTimer()
	}
}

func deleteBenchmarkSeries(b *testing.B, gauge *prometheus.GaugeVec, labels []string) {
	b.Helper()
	for _, label := range labels {
		if !gauge.DeleteLabelValues(label) {
			b.Fatalf("failed to delete label value %q", label)
		}
	}
}

func restoreBenchmarkSeries(gauge *prometheus.GaugeVec, labels []string) {
	for i, label := range labels {
		gauge.WithLabelValues(label).Set(float64(i))
	}
}

func countStaleDataPoints(metrics pmetric.Metrics) int {
	count := 0
	for i := 0; i < metrics.ResourceMetrics().Len(); i++ {
		rm := metrics.ResourceMetrics().At(i)
		for j := 0; j < rm.ScopeMetrics().Len(); j++ {
			sm := rm.ScopeMetrics().At(j)
			for k := 0; k < sm.Metrics().Len(); k++ {
				dps := sm.Metrics().At(k).Gauge().DataPoints()
				for l := 0; l < dps.Len(); l++ {
					if dps.At(l).Flags().NoRecordedValue() {
						count++
					}
				}
			}
		}
	}
	return count
}
