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
	"errors"
	"testing"
	"time"
)

// mockConfig is a test implementation of the Config interface
type mockConfig struct {
	validateFunc func() error
}

func (m *mockConfig) Validate() error {
	if m.validateFunc != nil {
		return m.validateFunc()
	}
	return nil
}

func TestReceiverConfig_Validate(t *testing.T) {
	tests := []struct {
		name        string
		setupConfig func() ReceiverConfig
		wantErr     bool
		errContains string
	}{
		{
			name: "valid config with default scrape interval",
			setupConfig: func() ReceiverConfig {
				return ReceiverConfig{
					ScrapeInterval: 30 * time.Second,
				}
			},
		},
		{
			name: "invalid config with zero scrape interval",
			setupConfig: func() ReceiverConfig {
				return ReceiverConfig{
					ScrapeInterval: 0,
				}
			},
			wantErr:     true,
			errContains: "scrape_interval must be greater than 0",
		},
		{
			name: "valid receiver config with valid exporter config",
			setupConfig: func() ReceiverConfig {
				cfg := ReceiverConfig{
					ScrapeInterval: 30 * time.Second,
				}
				cfg.SetExporterConfig(&mockConfig{
					validateFunc: func() error {
						return nil
					},
				})
				return cfg
			},
		},
		{
			name: "invalid receiver config with valid exporter config",
			setupConfig: func() ReceiverConfig {
				cfg := ReceiverConfig{
					ScrapeInterval: 0,
				}
				cfg.SetExporterConfig(&mockConfig{
					validateFunc: func() error {
						return nil
					},
				})
				return cfg
			},
			wantErr:     true,
			errContains: "scrape_interval must be greater than 0",
		},
		{
			name: "valid receiver config with invalid exporter config",
			setupConfig: func() ReceiverConfig {
				cfg := ReceiverConfig{
					ScrapeInterval: 30 * time.Second,
				}
				cfg.SetExporterConfig(&mockConfig{
					validateFunc: func() error {
						return errors.New("exporter config validation failed")
					},
				})
				return cfg
			},
			wantErr:     true,
			errContains: "exporter config validation failed",
		},
		{
			name: "invalid receiver and exporter configs",
			setupConfig: func() ReceiverConfig {
				cfg := ReceiverConfig{
					ScrapeInterval: -1 * time.Second,
				}
				cfg.SetExporterConfig(&mockConfig{
					validateFunc: func() error {
						return errors.New("exporter error")
					},
				})
				return cfg
			},
			wantErr:     true,
			errContains: "scrape_interval must be greater than 0",
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			cfg := tt.setupConfig()
			err := cfg.Validate()

			if (err != nil) != tt.wantErr {
				t.Errorf("Validate() error = %v, wantErr %v", err, tt.wantErr)
				return
			}

			if tt.wantErr && tt.errContains != "" {
				if err == nil || !contains(err.Error(), tt.errContains) {
					t.Errorf("Validate() error = %v, want error containing %v", err, tt.errContains)
				}
			}
		})
	}
}

func TestReceiverConfig_SetAndGetExporterConfig(t *testing.T) {
	tests := []struct {
		name           string
		exporterConfig Config
	}{
		{
			name: "set and get non-nil exporter config",
			exporterConfig: &mockConfig{
				validateFunc: func() error {
					return nil
				},
			},
		},
		{
			name:           "set and get nil exporter config",
			exporterConfig: nil,
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			cfg := ReceiverConfig{
				ScrapeInterval: 30 * time.Second,
			}

			cfg.SetExporterConfig(tt.exporterConfig)
			got := cfg.GetExporterConfig()

			if got != tt.exporterConfig {
				t.Errorf("GetExporterConfig() returned different instance")
			}
		})
	}
}

func TestCreateDefaultConfig(t *testing.T) {
	cfg := createDefaultConfig()

	expectedInterval := 30 * time.Second
	if cfg.ScrapeInterval != expectedInterval {
		t.Errorf("createDefaultConfig() ScrapeInterval = %v, want %v", cfg.ScrapeInterval, expectedInterval)
	}

	if cfg.ExporterConfig != nil {
		t.Errorf("createDefaultConfig() ExporterConfig = %v, want nil", cfg.ExporterConfig)
	}

	if err := cfg.Validate(); err != nil {
		t.Errorf("createDefaultConfig() returned invalid config: %v", err)
	}
}

func TestReceiverConfig_ExporterConfigMap(t *testing.T) {
	tests := []struct {
		name           string
		exporterConfig map[string]interface{}
		wantEmpty      bool
	}{
		{
			name:           "nil exporter config map",
			exporterConfig: nil,
			wantEmpty:      true,
		},
		{
			name:           "empty exporter config map",
			exporterConfig: map[string]interface{}{},
			wantEmpty:      true,
		},
		{
			name: "non-empty exporter config map",
			exporterConfig: map[string]interface{}{
				"key1": "value1",
				"key2": 123,
			},
			wantEmpty: false,
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			cfg := ReceiverConfig{
				ScrapeInterval: 30 * time.Second,
				ExporterConfig: tt.exporterConfig,
			}

			isEmpty := len(cfg.ExporterConfig) == 0
			if isEmpty != tt.wantEmpty {
				t.Errorf("ExporterConfig isEmpty = %v, want %v", isEmpty, tt.wantEmpty)
			}
		})
	}
}

func contains(s, substr string) bool {
	return len(s) >= len(substr) && (s == substr || len(substr) == 0 ||
		(len(s) > 0 && len(substr) > 0 && hasSubstring(s, substr)))
}

func hasSubstring(s, substr string) bool {
	for i := 0; i <= len(s)-len(substr); i++ {
		if s[i:i+len(substr)] == substr {
			return true
		}
	}
	return false
}
