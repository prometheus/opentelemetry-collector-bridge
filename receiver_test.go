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
	"testing"
	"time"

	"github.com/prometheus/client_golang/prometheus"
	"go.opentelemetry.io/collector/component"
	"go.opentelemetry.io/collector/component/componenttest"
	"go.opentelemetry.io/collector/consumer/consumertest"
	"go.opentelemetry.io/collector/receiver/receivertest"
)

func TestEndToEnd_FullReceiverPipeline(t *testing.T) {
	shutdownCalled := false
	lifecycleManager := &mockLifecycleManager{
		startFunc: func(_ context.Context, _ Config) (*prometheus.Registry, error) {
			reg := prometheus.NewRegistry()

			counter := prometheus.NewCounter(prometheus.CounterOpts{
				Name: "myapp_requests_total",
				Help: "Total requests handled",
			})
			gauge := prometheus.NewGauge(prometheus.GaugeOpts{
				Name: "myapp_connections_active",
				Help: "Current active connections",
			})

			reg.MustRegister(counter, gauge)
			counter.Add(1500)
			gauge.Set(42)

			return reg, nil
		},
		shutdownFunc: func(_ context.Context) error {
			shutdownCalled = true
			return nil
		},
	}

	receiverType := component.MustNewType("myapp")
	factory := NewFactory(
		receiverType,
		lifecycleManager,
		&mockConfigUnmarshaler{},
	)

	cfg := &ReceiverConfig{
		ScrapeInterval: 100 * time.Millisecond,
	}

	sink := new(consumertest.MetricsSink)
	set := receivertest.NewNopSettings(receiverType)

	receiver, err := factory.CreateMetrics(context.Background(), set, cfg, sink)
	if err != nil {
		t.Fatalf("CreateMetrics() failed: %v", err)
	}

	err = receiver.Start(context.Background(), componenttest.NewNopHost())
	if err != nil {
		t.Fatalf("Start() failed: %v", err)
	}

	deadline := time.After(5 * time.Second)
	for sink.DataPointCount() == 0 {
		select {
		case <-deadline:
			t.Fatal("timed out waiting for metrics to arrive in sink")
		case <-time.After(10 * time.Millisecond):
		}
	}

	allMetrics := sink.AllMetrics()
	if len(allMetrics) == 0 {
		t.Fatal("expected at least one batch of metrics in sink")
	}

	foundMetrics := collectMetricNames(allMetrics[0])
	if _, found := foundMetrics["myapp_requests_total"]; !found {
		t.Error("metric myapp_requests_total not found in sink output")
	}
	if _, found := foundMetrics["myapp_connections_active"]; !found {
		t.Error("metric myapp_connections_active not found in sink output")
	}

	err = receiver.Shutdown(context.Background())
	if err != nil {
		t.Fatalf("Shutdown() failed: %v", err)
	}
	if !shutdownCalled {
		t.Error("lifecycle manager Shutdown() was not called")
	}
}

func TestEndToEnd_MultipleScrapes(t *testing.T) {
	lifecycleManager := &mockLifecycleManager{
		startFunc: func(_ context.Context, _ Config) (*prometheus.Registry, error) {
			reg := prometheus.NewRegistry()
			gauge := prometheus.NewGauge(prometheus.GaugeOpts{
				Name: "scrape_test_metric",
				Help: "test",
			})
			reg.MustRegister(gauge)
			gauge.Set(1)
			return reg, nil
		},
	}

	receiverType := component.MustNewType("scrapetest")
	factory := NewFactory(receiverType, lifecycleManager, &mockConfigUnmarshaler{})

	cfg := &ReceiverConfig{
		ScrapeInterval: 50 * time.Millisecond,
	}

	sink := new(consumertest.MetricsSink)
	set := receivertest.NewNopSettings(receiverType)

	receiver, err := factory.CreateMetrics(context.Background(), set, cfg, sink)
	if err != nil {
		t.Fatalf("CreateMetrics() failed: %v", err)
	}

	err = receiver.Start(context.Background(), componenttest.NewNopHost())
	if err != nil {
		t.Fatalf("Start() failed: %v", err)
	}

	deadline := time.After(5 * time.Second)
	for len(sink.AllMetrics()) < 3 {
		select {
		case <-deadline:
			t.Fatalf("timed out waiting for 3 scrapes, got %d", len(sink.AllMetrics()))
		case <-time.After(10 * time.Millisecond):
		}
	}

	scrapeCount := len(sink.AllMetrics())
	if scrapeCount < 3 {
		t.Errorf("expected at least 3 scrape batches, got %d", scrapeCount)
	}

	err = receiver.Shutdown(context.Background())
	if err != nil {
		t.Fatalf("Shutdown() failed: %v", err)
	}
}
