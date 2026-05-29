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
// To integrate a Prometheus exporter, implement an ExporterLifecycleManager
// and choose how the bridge should decode the exporter's YAML configuration.
//
// ## ExporterLifecycleManager
//
// Manages the exporter's lifecycle. Start is called once at receiver start;
// it returns a *prometheus.Registry that the bridge scrapes for the lifetime
// of the receiver. Shutdown is called once when the receiver stops; release
// any resources Start acquired (goroutines, network connections, etc.).
//
//	type MyExporterLifecycleManager struct {
//	    settings receiver.Settings
//	}
//
//	func (m *MyExporterLifecycleManager) Start(ctx context.Context, set receiver.Settings, cfg any) (*prometheus.Registry, error) {
//	    m.settings = set
//	    exporterCfg, ok := cfg.(*MyConfig)
//	    if !ok {
//	        return nil, fmt.Errorf("expected *MyConfig, got %T", cfg)
//	    }
//	    registry := prometheus.NewRegistry()
//	    // Build collectors using exporterCfg and register them on the registry.
//	    return registry, nil
//	}
//
//	func (m *MyExporterLifecycleManager) Shutdown(ctx context.Context) error {
//	    // Stop goroutines or release resources Start owned.
//	    return nil
//	}
//
// ## Config decoding: three approaches
//
// The bridge supports three factory variants depending on how you want the
// exporter's YAML configuration decoded.
//
// Approach 1: mapstructure tags on the exporter's config (NewFactory).
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
//	factory := prometheuscollectorbridge.NewFactory(
//	    component.MustNewType("prometheus/myexporter"),
//	    &MyExporterLifecycleManager{},
//	    &MyConfigUnmarshaler{},
//	)
//
// Use this when the receiver and the exporter live in the same module, or
// when adding mapstructure tags to the exporter's config struct is fine.
//
// Approach 2: untagged config struct (NewFactoryWithUntaggedConfig).
//
//	// Exporter-side config, no OTel-specific tags.
//	type MyConfig struct {
//	    EnableFeature bool
//	    Timeout       time.Duration
//	    HTTPTimeout   time.Duration
//	    Items         []string
//	}
//
//	type MyConfigUnmarshaler struct{}
//
//	func (u *MyConfigUnmarshaler) GetConfigStruct() any {
//	    return &MyConfig{}
//	}
//
//	factory := prometheuscollectorbridge.NewFactoryWithUntaggedConfig(
//	    component.MustNewType("prometheus/myexporter"),
//	    &MyExporterLifecycleManager{},
//	    &MyConfigUnmarshaler{},
//	    prometheuscollectorbridge.WithDecodeHooks(
//	        mapstructure.StringToTimeDurationHookFunc(),
//	    ),
//	)
//
// YAML keys are matched against Go field names case-insensitively, after
// underscores in the key are stripped — `http_timeout` matches `HTTPTimeout`,
// `enable_feature` matches `EnableFeature`. Pair with WithDecodeHooks to add
// type conversions (e.g. string → time.Duration). Use this when the exporter
// is a separate package whose config struct should stay free of OTel/YAML
// tags but the default mapstructure semantics (unknown-field rejection,
// case-insensitive matching) otherwise suit.
//
// Fields that carry a `mapstructure:"..."` tag are decoded under that tag
// name; the case-insensitive matcher is used only when no tag matches. This
// lets a struct shared with another consumer keep its existing tags without
// switching factory variants.
//
// Approach 3: fully custom decoder (NewFactoryWithDecoder).
//
//	type myDecoder struct{}
//
//	func (myDecoder) DecodeConfig(raw map[string]interface{}) (any, error) {
//	    // Build the typed value from the raw map however you want.
//	    // Return any concrete type your lifecycle manager can type-assert.
//	}
//
//	factory := prometheuscollectorbridge.NewFactoryWithDecoder(
//	    component.MustNewType("prometheus/myexporter"),
//	    &MyExporterLifecycleManager{},
//	    myDecoder{},
//	)
//
// Use this when neither Approach 1 nor Approach 2 fits — e.g. multi-pass
// decoding, custom error semantics, or transformations that can't be
// expressed as mapstructure hooks. WithDecodeHooks has no effect with this
// variant; configure hooks inside your decoder.
//
// ## Component defaults
//
// The OTel framework merges defaults onto the user's YAML before the bridge
// decodes it. Pass WithComponentDefaults to seed those defaults:
//
//	factory := prometheuscollectorbridge.NewFactory(
//	    typ, lifecycle, unmarshaler,
//	    prometheuscollectorbridge.WithComponentDefaults(map[string]interface{}{
//	        "timeout":        "30s",
//	        "enable_feature": true,
//	    }),
//	)
//
// Without this, partial configs (where the user omits a field) decode as the
// field's zero value rather than your intended default.
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
// The bridge always validates scrape_interval (must be greater than 0).
// NewFactory and NewFactoryWithUntaggedConfig both reject unknown fields in
// the exporter_config block and surface type mismatches via mapstructure.
// NewFactoryWithDecoder defers to your decoder.
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
