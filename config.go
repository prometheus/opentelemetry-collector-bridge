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
	"errors"
	"time"
)

// ReceiverConfig holds the common configuration for all Prometheus exporter receivers.
type ReceiverConfig struct {
	// ScrapeInterval defines how often to collect metrics from the exporter.
	// Default: 30s
	ScrapeInterval time.Duration `mapstructure:"scrape_interval"`

	// ExporterConfig holds the exporter-specific configuration.
	// This will be unmarshaled by the exporter's ConfigUnmarshaler.
	ExporterConfig map[string]interface{} `mapstructure:"exporter_config"`

	// exporterConfigInstance is the unmarshaled exporter-specific config.
	// This is set by the factory after unmarshaling.
	exporterConfigInstance any
}

// Validate checks if the ReceiverConfig is valid.
func (cfg *ReceiverConfig) Validate() error {
	if cfg.ScrapeInterval <= 0 {
		return errors.New("scrape_interval must be greater than 0")
	}
	if v, ok := cfg.exporterConfigInstance.(interface{ Validate() error }); ok {
		if err := v.Validate(); err != nil {
			return err
		}
	}
	return nil
}

func createDefaultConfig() ReceiverConfig {
	return ReceiverConfig{
		ScrapeInterval: 30 * time.Second,
	}
}
