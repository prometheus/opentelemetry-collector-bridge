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
	"go.opentelemetry.io/collector/receiver/receivertest"
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
	metricCounts := []int{10, 100, 1000}
	cardinalities := []int{1, 10, 100}

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
							receiver := &prometheusReceiver{
								consumer: consumertest.NewNop(),
								settings: receivertest.NewNopSettings(receiverType),
								scraper:  newScraper(registry, receiverType, zap.NewNop()),
							}

							b.ReportAllocs()
							b.ResetTimer()

							for i := 0; i < b.N; i++ {
								if err := receiver.scrapeAndExport(ctx); err != nil {
									b.Fatalf("scrapeAndExport() failed: %v", err)
								}
							}
						})
					}
				})
			}
		})
	}
}
