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
	"go.opentelemetry.io/collector/consumer"
	"go.opentelemetry.io/collector/receiver"
	scraperhelper "go.opentelemetry.io/collector/scraper/scraperhelper"
	"go.uber.org/zap"
)

// prometheusReceiver implements the receiver.Metrics interface for Prometheus exporters.
type prometheusReceiver struct {
	config           *ReceiverConfig
	consumer         consumer.Metrics
	settings         receiver.Settings
	lifecycleManager ExporterLifecycleManager
	scraper          *scraper
	controller       receiver.Metrics

	registry *prometheus.Registry
}

// newPrometheusReceiver creates a new Prometheus exporter receiver.
func newPrometheusReceiver(
	config *ReceiverConfig,
	consumer consumer.Metrics,
	settings receiver.Settings,
	lifecycleManager ExporterLifecycleManager,
) *prometheusReceiver {
	return &prometheusReceiver{
		config:           config,
		consumer:         consumer,
		settings:         settings,
		lifecycleManager: lifecycleManager,
	}
}

// Start begins the receiver's operation.
func (r *prometheusReceiver) Start(ctx context.Context, host component.Host) error {
	r.settings.Logger.Info("Starting Prometheus exporter receiver")

	exporterConfig := r.config.GetExporterConfig()
	registry, err := r.lifecycleManager.Start(ctx, r.settings, exporterConfig)
	if err != nil {
		return fmt.Errorf("failed to start exporter: %w", err)
	}
	r.registry = registry

	r.scraper = newScraper(
		r.registry,
		r.settings.ID.Type(),
		r.settings.Logger,
	)

	ctrl, err := scraperhelper.NewMetricsController(
		&scraperhelper.ControllerConfig{CollectionInterval: r.config.ScrapeInterval},
		r.settings,
		r.consumer,
		scraperhelper.AddMetricsScraper(r.settings.ID.Type(), r.scraper),
	)
	if err != nil {
		return fmt.Errorf("failed to create scraper controller: %w", err)
	}
	r.controller = ctrl

	r.settings.Logger.Info("Prometheus exporter receiver started successfully")
	return r.controller.Start(ctx, host)
}

// Shutdown stops the receiver's operation.
func (r *prometheusReceiver) Shutdown(ctx context.Context) error {
	r.settings.Logger.Info("Shutting down Prometheus exporter receiver")

	if r.controller != nil {
		if err := r.controller.Shutdown(ctx); err != nil {
			return fmt.Errorf("failed to shutdown scraper controller: %w", err)
		}
	}

	if r.lifecycleManager != nil {
		if err := r.lifecycleManager.Shutdown(ctx); err != nil {
			r.settings.Logger.Error("Failed to shutdown exporter", zap.Error(err))
			return fmt.Errorf("failed to shutdown exporter: %w", err)
		}
	}

	r.settings.Logger.Info("Prometheus exporter receiver shut down successfully")
	return nil
}
