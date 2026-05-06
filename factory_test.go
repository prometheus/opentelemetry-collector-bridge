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
	"errors"
	"testing"
	"time"

	"github.com/prometheus/client_golang/prometheus"
	"go.opentelemetry.io/collector/component"
	"go.opentelemetry.io/collector/consumer/consumertest"
	"go.opentelemetry.io/collector/receiver"
	"go.opentelemetry.io/collector/receiver/receivertest"
)

// mockLifecycleManager is a test implementation of ExporterLifecycleManager.
type mockLifecycleManager struct {
	startFunc    func(ctx context.Context, set receiver.Settings, cfg Config) (*prometheus.Registry, error)
	shutdownFunc func(ctx context.Context) error
}

func (m *mockLifecycleManager) Start(ctx context.Context, set receiver.Settings, cfg Config) (*prometheus.Registry, error) {
	if m.startFunc != nil {
		return m.startFunc(ctx, set, cfg)
	}
	return prometheus.NewRegistry(), nil
}

func (m *mockLifecycleManager) Shutdown(ctx context.Context) error {
	if m.shutdownFunc != nil {
		return m.shutdownFunc(ctx)
	}
	return nil
}

// mockConfigUnmarshaler is a test implementation of ConfigUnmarshaler.
type mockConfigUnmarshaler struct {
	getConfigStructFunc func() Config
}

func (m *mockConfigUnmarshaler) GetConfigStruct() Config {
	if m.getConfigStructFunc != nil {
		return m.getConfigStructFunc()
	}
	return &mockConfig{}
}

type mockConfigDecoder struct {
	decodeConfigFunc func(raw map[string]interface{}) (Config, error)
}

func (m *mockConfigDecoder) DecodeConfig(raw map[string]interface{}) (Config, error) {
	if m.decodeConfigFunc != nil {
		return m.decodeConfigFunc(raw)
	}
	return &mockConfig{}, nil
}

// testExporterConfig is a test config struct with mapstructure tags.
type testExporterConfig struct {
	EnableFeature bool     `mapstructure:"enable_feature"`
	Timeout       string   `mapstructure:"timeout"`
	Items         []string `mapstructure:"items"`
	Port          int      `mapstructure:"port"`
}

func (t *testExporterConfig) Validate() error {
	if t.Port < 0 {
		return errors.New("port must be non-negative")
	}
	return nil
}

func TestNewFactory_Basic(t *testing.T) {
	tests := []struct {
		name string
		opts []FactoryOption
	}{
		{
			name: "required parameters only",
			opts: nil,
		},
		{
			name: "with component defaults",
			opts: []FactoryOption{
				WithComponentDefaults(map[string]interface{}{
					"enable_feature": true,
					"timeout":        "30s",
				}),
			},
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			factory := NewFactory(
				component.MustNewType("test"),
				&mockLifecycleManager{},
				&mockConfigUnmarshaler{},
				tt.opts...,
			)

			if factory == nil {
				t.Error("NewFactory() returned nil factory")
			}
		})
	}
}

func TestNewFactory_Panics(t *testing.T) {
	tests := []struct {
		name              string
		typeStr           component.Type
		lifecycleManager  ExporterLifecycleManager
		configUnmarshaler ConfigUnmarshaler
		wantPanicMsg      string
	}{
		{
			name:              "empty type string",
			typeStr:           component.Type{},
			lifecycleManager:  &mockLifecycleManager{},
			configUnmarshaler: &mockConfigUnmarshaler{},
			wantPanicMsg:      "receiver type must be specified",
		},
		{
			name:              "nil lifecycle manager",
			typeStr:           component.MustNewType("test"),
			lifecycleManager:  nil,
			configUnmarshaler: &mockConfigUnmarshaler{},
			wantPanicMsg:      "lifecycle manager must not be nil",
		},
		{
			name:              "nil config unmarshaler",
			typeStr:           component.MustNewType("test"),
			lifecycleManager:  &mockLifecycleManager{},
			configUnmarshaler: nil,
			wantPanicMsg:      "config unmarshaler must not be nil",
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			defer func() {
				r := recover()
				if r == nil {
					t.Fatal("NewFactory() did not panic")
				}
				panicMsg, ok := r.(string)
				if !ok {
					t.Fatalf("panic value is not a string: %v", r)
				}
				if panicMsg != tt.wantPanicMsg {
					t.Errorf("panic message = %q, want %q", panicMsg, tt.wantPanicMsg)
				}
			}()

			NewFactory(
				tt.typeStr,
				tt.lifecycleManager,
				tt.configUnmarshaler,
			)
		})
	}
}

func TestNewFactoryWithDecoder_Panics(t *testing.T) {
	tests := []struct {
		name             string
		typeStr          component.Type
		lifecycleManager ExporterLifecycleManager
		configDecoder    ConfigDecoder
		wantPanicMsg     string
	}{
		{
			name:             "empty type string",
			typeStr:          component.Type{},
			lifecycleManager: &mockLifecycleManager{},
			configDecoder:    &mockConfigDecoder{},
			wantPanicMsg:     "receiver type must be specified",
		},
		{
			name:             "nil lifecycle manager",
			typeStr:          component.MustNewType("test"),
			lifecycleManager: nil,
			configDecoder:    &mockConfigDecoder{},
			wantPanicMsg:     "lifecycle manager must not be nil",
		},
		{
			name:             "nil config decoder",
			typeStr:          component.MustNewType("test"),
			lifecycleManager: &mockLifecycleManager{},
			configDecoder:    nil,
			wantPanicMsg:     "config decoder must not be nil",
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			defer func() {
				r := recover()
				if r == nil {
					t.Fatal("NewFactoryWithDecoder() did not panic")
				}
				panicMsg, ok := r.(string)
				if !ok {
					t.Fatalf("panic value is not a string: %v", r)
				}
				if panicMsg != tt.wantPanicMsg {
					t.Errorf("panic message = %q, want %q", panicMsg, tt.wantPanicMsg)
				}
			}()

			NewFactoryWithDecoder(
				tt.typeStr,
				tt.lifecycleManager,
				tt.configDecoder,
			)
		})
	}
}

func TestNewFactory_DefaultConfig(t *testing.T) {
	tests := []struct {
		name               string
		opts               []FactoryOption
		wantScrapeInterval time.Duration
		wantExporterConfig map[string]interface{}
	}{
		{
			name:               "default config without component defaults",
			wantScrapeInterval: 30 * time.Second,
			wantExporterConfig: nil,
		},
		{
			name: "default config with component defaults",
			opts: []FactoryOption{
				WithComponentDefaults(map[string]interface{}{
					"enable_feature": true,
					"timeout":        "30s",
					"port":           8080,
				}),
			},
			wantScrapeInterval: 30 * time.Second,
			wantExporterConfig: map[string]interface{}{
				"enable_feature": true,
				"timeout":        "30s",
				"port":           8080,
			},
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			factory := NewFactory(
				component.MustNewType("test"),
				&mockLifecycleManager{},
				&mockConfigUnmarshaler{},
				tt.opts...,
			)
			if factory == nil {
				t.Fatal("NewFactory() returned nil")
			}

			cfg := factory.CreateDefaultConfig()
			receiverCfg, ok := cfg.(*ReceiverConfig)
			if !ok {
				t.Fatalf("CreateDefaultConfig() returned wrong type: %T", cfg)
			}

			if receiverCfg.ScrapeInterval != tt.wantScrapeInterval {
				t.Errorf("ScrapeInterval = %v, want %v", receiverCfg.ScrapeInterval, tt.wantScrapeInterval)
			}

			if tt.wantExporterConfig == nil {
				if receiverCfg.ExporterConfig != nil {
					t.Errorf("ExporterConfig = %v, want nil", receiverCfg.ExporterConfig)
				}
			} else {
				if receiverCfg.ExporterConfig == nil {
					t.Error("ExporterConfig is nil, want non-nil")
				} else {
					for key, wantVal := range tt.wantExporterConfig {
						gotVal, exists := receiverCfg.ExporterConfig[key]
						if !exists {
							t.Errorf("ExporterConfig missing key %v", key)
						} else if gotVal != wantVal {
							t.Errorf("ExporterConfig[%v] = %v, want %v", key, gotVal, wantVal)
						}
					}
				}
			}
		})
	}
}

func TestCreateMetricsReceiver_EmptyExporterConfig(t *testing.T) {
	receiverType := component.MustNewType("test")
	factory := NewFactory(
		receiverType,
		&mockLifecycleManager{},
		&mockConfigUnmarshaler{},
	)

	cfg := &ReceiverConfig{
		ScrapeInterval: 30 * time.Second,
		ExporterConfig: map[string]interface{}{},
	}

	ctx := context.Background()
	set := receivertest.NewNopSettings(receiverType)
	consumer := consumertest.NewNop()

	receiver, err := factory.CreateMetrics(ctx, set, cfg, consumer)
	if err != nil {
		t.Fatalf("CreateMetrics() failed: %v", err)
	}

	if receiver == nil {
		t.Error("CreateMetrics() returned nil receiver")
	}
}

func TestCreateMetricsReceiver_ValidExporterConfig(t *testing.T) {
	receiverType := component.MustNewType("test")
	unmarshaler := &mockConfigUnmarshaler{
		getConfigStructFunc: func() Config {
			return &testExporterConfig{}
		},
	}

	factory := NewFactory(
		receiverType,
		&mockLifecycleManager{},
		unmarshaler,
	)

	cfg := &ReceiverConfig{
		ScrapeInterval: 30 * time.Second,
		ExporterConfig: map[string]interface{}{
			"enable_feature": true,
			"timeout":        "30s",
			"items":          []string{"item1", "item2"},
			"port":           8080,
		},
	}

	ctx := context.Background()
	set := receivertest.NewNopSettings(receiverType)
	consumer := consumertest.NewNop()

	receiver, err := factory.CreateMetrics(ctx, set, cfg, consumer)
	if err != nil {
		t.Fatalf("CreateMetrics() failed: %v", err)
	}

	if receiver == nil {
		t.Fatal("CreateMetrics() returned nil receiver")
	}

	exporterCfg := cfg.GetExporterConfig()
	if exporterCfg == nil {
		t.Fatal("GetExporterConfig() returned nil")
	}

	typedCfg, ok := exporterCfg.(*testExporterConfig)
	if !ok {
		t.Fatalf("GetExporterConfig() returned wrong type: %T", exporterCfg)
	}

	if !typedCfg.EnableFeature {
		t.Error("EnableFeature = false, want true")
	}
	if typedCfg.Timeout != "30s" {
		t.Errorf("Timeout = %v, want 30s", typedCfg.Timeout)
	}
	if len(typedCfg.Items) != 2 {
		t.Errorf("Items length = %d, want 2", len(typedCfg.Items))
	}
	if typedCfg.Port != 8080 {
		t.Errorf("Port = %d, want 8080", typedCfg.Port)
	}
}

func TestCreateMetricsReceiver_CustomConfigDecoder(t *testing.T) {
	receiverType := component.MustNewType("test")
	decodeConfigCalled := false
	unmarshaler := &mockConfigDecoder{
		decodeConfigFunc: func(raw map[string]interface{}) (Config, error) {
			decodeConfigCalled = true
			if raw["custom"] != "value" {
				t.Fatalf("raw[custom] = %v, want value", raw["custom"])
			}
			return &testExporterConfig{
				EnableFeature: true,
				Timeout:       "10s",
				Items:         []string{"decoded"},
				Port:          9090,
			}, nil
		},
	}

	factory := NewFactoryWithDecoder(
		receiverType,
		&mockLifecycleManager{},
		unmarshaler,
	)

	cfg := &ReceiverConfig{
		ScrapeInterval: 30 * time.Second,
		ExporterConfig: map[string]interface{}{
			"custom": "value",
		},
	}

	ctx := context.Background()
	set := receivertest.NewNopSettings(receiverType)
	consumer := consumertest.NewNop()

	receiver, err := factory.CreateMetrics(ctx, set, cfg, consumer)
	if err != nil {
		t.Fatalf("CreateMetrics() failed: %v", err)
	}
	if receiver == nil {
		t.Fatal("CreateMetrics() returned nil receiver")
	}
	if !decodeConfigCalled {
		t.Fatal("DecodeConfig() was not called")
	}

	exporterCfg := cfg.GetExporterConfig()
	typedCfg, ok := exporterCfg.(*testExporterConfig)
	if !ok {
		t.Fatalf("GetExporterConfig() returned wrong type: %T", exporterCfg)
	}
	if !typedCfg.EnableFeature || typedCfg.Timeout != "10s" || typedCfg.Port != 9090 {
		t.Fatalf("decoded config = %#v, want custom decoded config", typedCfg)
	}
	if len(typedCfg.Items) != 1 || typedCfg.Items[0] != "decoded" {
		t.Fatalf("Items = %#v, want [decoded]", typedCfg.Items)
	}
}

func TestCreateMetricsReceiver_CustomConfigDecoderError(t *testing.T) {
	receiverType := component.MustNewType("test")
	unmarshaler := &mockConfigDecoder{
		decodeConfigFunc: func(map[string]interface{}) (Config, error) {
			return nil, errors.New("custom decode failed")
		},
	}

	factory := NewFactoryWithDecoder(
		receiverType,
		&mockLifecycleManager{},
		unmarshaler,
	)

	cfg := &ReceiverConfig{
		ScrapeInterval: 30 * time.Second,
		ExporterConfig: map[string]interface{}{
			"custom": "value",
		},
	}

	ctx := context.Background()
	set := receivertest.NewNopSettings(receiverType)
	consumer := consumertest.NewNop()

	_, err := factory.CreateMetrics(ctx, set, cfg, consumer)
	if err == nil {
		t.Fatal("CreateMetrics() error = nil, want non-nil")
	}
	if !contains(err.Error(), "configuration validation failed") {
		t.Fatalf("error = %v, want configuration validation failure", err)
	}
	if !contains(err.Error(), "custom decode failed") {
		t.Fatalf("error = %v, want custom decode failure", err)
	}
}

func TestCreateMetricsReceiver_UnknownFieldsRejected(t *testing.T) {
	receiverType := component.MustNewType("test")
	unmarshaler := &mockConfigUnmarshaler{
		getConfigStructFunc: func() Config {
			return &testExporterConfig{}
		},
	}

	factory := NewFactory(
		receiverType,
		&mockLifecycleManager{},
		unmarshaler,
	)

	cfg := &ReceiverConfig{
		ScrapeInterval: 30 * time.Second,
		ExporterConfig: map[string]interface{}{
			"enable_feature":  true,
			"unknown_field":   "should_fail",
			"another_unknown": 123,
		},
	}

	ctx := context.Background()
	set := receivertest.NewNopSettings(receiverType)
	consumer := consumertest.NewNop()

	_, err := factory.CreateMetrics(ctx, set, cfg, consumer)
	if err == nil {
		t.Fatal("CreateMetrics() expected error for unknown fields, got nil")
	}

	expectedErrMsg := "configuration validation failed"
	if !contains(err.Error(), expectedErrMsg) {
		t.Errorf("error = %v, want error containing %v", err, expectedErrMsg)
	}
}

func TestCreateMetricsReceiver_TypeMismatch(t *testing.T) {
	receiverType := component.MustNewType("test")
	unmarshaler := &mockConfigUnmarshaler{
		getConfigStructFunc: func() Config {
			return &testExporterConfig{}
		},
	}

	factory := NewFactory(
		receiverType,
		&mockLifecycleManager{},
		unmarshaler,
	)

	tests := []struct {
		name           string
		exporterConfig map[string]interface{}
		errContains    string
	}{
		{
			name: "bool field with string value",
			exporterConfig: map[string]interface{}{
				"enable_feature": "not_a_bool",
			},
			errContains: "configuration validation failed",
		},
		{
			name: "int field with string value",
			exporterConfig: map[string]interface{}{
				"port": "not_a_number",
			},
			errContains: "configuration validation failed",
		},
		{
			name: "string array with single string",
			exporterConfig: map[string]interface{}{
				"items": "not_an_array",
			},
			errContains: "configuration validation failed",
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			cfg := &ReceiverConfig{
				ScrapeInterval: 30 * time.Second,
				ExporterConfig: tt.exporterConfig,
			}

			ctx := context.Background()
			set := receivertest.NewNopSettings(receiverType)
			consumer := consumertest.NewNop()

			_, err := factory.CreateMetrics(ctx, set, cfg, consumer)
			if err == nil {
				t.Fatal("CreateMetrics() expected error for type mismatch, got nil")
			}

			if !contains(err.Error(), tt.errContains) {
				t.Errorf("error = %v, want error containing %v", err, tt.errContains)
			}
		})
	}
}

func TestCreateMetricsReceiver_ConfigValidationFails(t *testing.T) {
	receiverType := component.MustNewType("test")
	unmarshaler := &mockConfigUnmarshaler{
		getConfigStructFunc: func() Config {
			return &testExporterConfig{}
		},
	}

	factory := NewFactory(
		receiverType,
		&mockLifecycleManager{},
		unmarshaler,
	)

	tests := []struct {
		name        string
		setupConfig func() *ReceiverConfig
		errContains string
	}{
		{
			name: "invalid receiver config",
			setupConfig: func() *ReceiverConfig {
				return &ReceiverConfig{
					ScrapeInterval: 0,
					ExporterConfig: map[string]interface{}{
						"port": 8080,
					},
				}
			},
			errContains: "invalid configuration",
		},
		{
			name: "invalid exporter config",
			setupConfig: func() *ReceiverConfig {
				return &ReceiverConfig{
					ScrapeInterval: 30 * time.Second,
					ExporterConfig: map[string]interface{}{
						"port": -1,
					},
				}
			},
			errContains: "invalid configuration",
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			cfg := tt.setupConfig()

			ctx := context.Background()
			set := receivertest.NewNopSettings(receiverType)
			consumer := consumertest.NewNop()

			_, err := factory.CreateMetrics(ctx, set, cfg, consumer)
			if err == nil {
				t.Fatal("CreateMetrics() expected validation error, got nil")
			}

			if !contains(err.Error(), tt.errContains) {
				t.Errorf("error = %v, want error containing %v", err, tt.errContains)
			}
		})
	}
}

func TestFactoryOptions(t *testing.T) {
	t.Run("Type", func(t *testing.T) {
		expectedType := component.MustNewType("prometheustest")

		factory := NewFactory(
			expectedType,
			&mockLifecycleManager{},
			&mockConfigUnmarshaler{},
		)

		if factory.Type() != expectedType {
			t.Errorf("Type() = %v, want %v", factory.Type(), expectedType)
		}
	})

	t.Run("WithComponentDefaults preserves defaults", func(t *testing.T) {
		defaults := map[string]interface{}{
			"key1": "value1",
			"key2": 42,
		}

		factory := NewFactory(
			component.MustNewType("test"),
			&mockLifecycleManager{},
			&mockConfigUnmarshaler{},
			WithComponentDefaults(defaults),
		)

		cfg := factory.CreateDefaultConfig().(*ReceiverConfig)

		if val, ok := cfg.ExporterConfig["key1"]; !ok || val != "value1" {
			t.Errorf("ExporterConfig[key1] = %v, want value1", val)
		}
		if val, ok := cfg.ExporterConfig["key2"]; !ok || val != 42 {
			t.Errorf("ExporterConfig[key2] = %v, want 42", val)
		}
	})
}
