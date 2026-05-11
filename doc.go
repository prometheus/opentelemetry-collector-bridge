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

// Package prometheuscollectorbridge provides a framework for embedding Prometheus exporters
// as native OpenTelemetry Collector receivers.
//
// This package enables Prometheus exporters written in Go to run directly inside
// an OpenTelemetry Collector.
//
// # Overview
//
// The prometheuscollectorbridge package provides the core infrastructure for converting
// Prometheus exporters into OTel receivers:
//
//  1. Config system for exporter-specific configuration with optional validation
//  2. Factory pattern for creating receiver instances
//  3. Lifecycle management (Start/Shutdown)
//  4. Periodic metric scraping from Prometheus registries
//  5. Conversion from Prometheus to OpenTelemetry metric format
//
// # Usage
//
// To integrate a Prometheus exporter, implement two interfaces:
//
// ExporterLifecycleManager: Manages the exporter lifecycle
//
//	type MyExporterLifecycleManager struct {
//	    // exporter state
//	}
//
//	func (i *MyExporterLifecycleManager) Start(ctx context.Context, set receiver.Settings, cfg any) (*prometheus.Registry, error) {
//	    i.settings = set
//	    // Start your exporter and return its registry
//	}
//
//	func (i *MyExporterLifecycleManager) Shutdown(ctx context.Context) error {
//	    i.settings.Logger.Info("shutting down exporter")
//	    // Clean up resources
//	}
//
// ConfigUnmarshaler: Handles exporter-specific configuration using mapstructure
//
//	type MyConfig struct {
//	    EnableFeature bool     `mapstructure:"enable_feature"`
//	    Timeout       string   `mapstructure:"timeout"`
//	    Items         []string `mapstructure:"items"`
//	}
//
//	type MyConfigUnmarshaler struct{}
//
//	func (u *MyConfigUnmarshaler) GetConfigStruct() any {
//	    return &MyConfig{}
//	}
//
// Then create a receiver factory:
//
//	factory := prometheuscollectorbridge.NewFactory(
//	    component.MustNewType("prometheus/myexporter"),
//	    &MyExporterLifecycleManager{},
//	    &MyConfigUnmarshaler{},
//	)
//
// # Configuration
//
// The receiver supports common configuration options:
//
//	receivers:
//	  prometheus/myexporter:
//	    scrape_interval: 30s
//	    exporter_config:
//	      enable_feature: true
//	      timeout: "30s"
//	      items: ["item1", "item2"]
//
// The framework automatically validates configuration using mapstructure tags:
//   - Unknown fields are rejected
//   - Type mismatches are caught (e.g., string where bool expected)
//
// # Validation
//
// Custom validation is opt-in. Implement a `Validate() error` method on your
// config struct and the framework will call it after decoding, before the
// receiver starts. A non-nil return rejects the configuration; the error
// surfaces through ReceiverConfig.Validate().
//
//	func (c *MyConfig) Validate() error {
//	    if c.Timeout <= 0 {
//	        return errors.New("timeout must be positive")
//	    }
//	    return nil
//	}
//
// Scope: use Validate for invariants specific to the receiver layer —
// fields or constraints that exist only because of how the receiver wraps
// the exporter. Validation of the underlying exporter's own configuration
// belongs in the exporter, not here; if the exporter has a constructor or
// init path that rejects bad config, let those checks stay there and
// surface through the lifecycle manager's Start method. Duplicating
// exporter-level checks in the receiver's Validate would split the same
// concern across two places.
//
// Don't use Validate for checks that require I/O or external dependencies
// (network reachability, credential validity). Those need a context and
// belong in Start.
//
// Exporters without anything to validate can omit the method entirely; the
// framework only invokes it when the config satisfies
// interface{ Validate() error }.
//
// # Architecture
//
// The package follows a layered architecture:
//
//	┌─────────────────────────────────────┐
//	│  OTel Collector Pipeline            │
//	└──────────────┬──────────────────────┘
//	               │ ConsumeMetrics()
//	┌──────────────▼──────────────────────┐
//	│  prometheusReceiver                 │
//	│  - Lifecycle management             │
//	│  - Scrape scheduling                │
//	└──────────────┬──────────────────────┘
//	               │
//	┌──────────────▼──────────────────────┐
//	│  scraper                            │
//	│  - Gather from registry             │
//	│  - Convert to OTel format           │
//	└──────────────┬──────────────────────┘
//	               │
//	┌──────────────▼──────────────────────┐
//	│  ExporterLifecycleManager           │
//	│  (Your exporter implementation)     │
//	└─────────────────────────────────────┘
//
// # Thread Safety
//
// The receiver is designed to be thread-safe. The scraping loop runs in its own
// goroutine and coordinates gracefully with the shutdown process.
package prometheuscollectorbridge
