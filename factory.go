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
	"strings"

	"github.com/go-viper/mapstructure/v2"
	"github.com/prometheus/client_golang/prometheus"
	"go.opentelemetry.io/collector/component"
	"go.opentelemetry.io/collector/consumer"
	"go.opentelemetry.io/collector/receiver"
)

// ExporterLifecycleManager is the interface that Prometheus exporters must implement
// to be embedded in the OTel Collector.
type ExporterLifecycleManager interface {
	// Start sets up the exporter and returns a prometheus.Registry
	// containing all the metrics collectors.
	Start(ctx context.Context, set receiver.Settings, exporterConfig any) (*prometheus.Registry, error)

	// Shutdown is used to release resources when the receiver is shutting down.
	// Implementations that need receiver settings during shutdown should retain
	// them from Start.
	Shutdown(ctx context.Context) error
}

// ConfigUnmarshaler is the interface used to unmarshal the exporter-specific
// configuration using mapstructure and struct tags.
type ConfigUnmarshaler interface {
	// GetConfigStruct returns a pointer to the config struct that mapstructure
	// will populate. The struct should have appropriate mapstructure tags.
	GetConfigStruct() any
}

// ConfigDecoder decodes exporter-specific configuration.
type ConfigDecoder interface {
	DecodeConfig(raw map[string]interface{}) (any, error)
}

// FactoryOption is a function that configures a Factory.
type FactoryOption func(*factoryConfig)

type factoryConfig struct {
	defaultConfig map[string]interface{}
	decodeHooks   []mapstructure.DecodeHookFunc
}

// WithComponentDefaults sets the default configuration for the component.
func WithComponentDefaults(defaults map[string]interface{}) FactoryOption {
	return func(cfg *factoryConfig) {
		cfg.defaultConfig = defaults
	}
}

// WithDecodeHooks adds mapstructure decode hooks applied when the bridge
// decodes the exporter's config. Hooks are composed in the order given;
// successive calls accumulate. Applies to NewFactory and
// NewFactoryWithUntaggedConfig; ignored by NewFactoryWithDecoder — configure
// hooks inside the caller-provided decoder instead.
func WithDecodeHooks(hooks ...mapstructure.DecodeHookFunc) FactoryOption {
	return func(cfg *factoryConfig) {
		cfg.decodeHooks = append(cfg.decodeHooks, hooks...)
	}
}

// NewFactory creates a new receiver factory for a Prometheus exporter.
// The factory uses the provided type, ExporterLifecycleManager, and ConfigUnmarshaler
// to manage the exporter lifecycle and configuration.
//
// NewFactory assumes that configUnmarshaler uses mapstructure tags. If your
// exporter's config struct should remain free of mapstructure tags,
// use NewFactoryWithUntaggedConfig. For a fully custom decoding strategy,
// use NewFactoryWithDecoder.
func NewFactory(
	typeStr component.Type,
	lifecycleManager ExporterLifecycleManager,
	configUnmarshaler ConfigUnmarshaler,
	opts ...FactoryOption,
) receiver.Factory {
	if configUnmarshaler == nil {
		panic("config unmarshaler must not be nil")
	}

	return newFactory(
		typeStr,
		lifecycleManager,
		func(cfg *factoryConfig) ConfigDecoder {
			return mapstructureConfigDecoder{
				unmarshaler: configUnmarshaler,
				decodeHooks: cfg.decodeHooks,
			}
		},
		opts...,
	)
}

// NewFactoryWithUntaggedConfig creates a new receiver factory for a Prometheus
// exporter whose config struct doesn't require mapstructure tags. Fields are
// matched case-insensitively after stripping underscores from the YAML key —
// e.g. `http_timeout` matches a Go field named `HTTPTimeout`. Use this when
// the exporter's config struct is shared with non-OTel use cases and
// shouldn't carry OTel-specific tags.
//
// Tags are honored when present: mapstructure's direct lookup on the
// `mapstructure:"..."` tag runs first, and the case-insensitive matcher is
// used only as a fallback. This lets struct fields that happen to carry
// tags for another consumer decode under their tag name.
func NewFactoryWithUntaggedConfig(
	typeStr component.Type,
	lifecycleManager ExporterLifecycleManager,
	configUnmarshaler ConfigUnmarshaler,
	opts ...FactoryOption,
) receiver.Factory {
	if configUnmarshaler == nil {
		panic("config unmarshaler must not be nil")
	}

	return newFactory(
		typeStr,
		lifecycleManager,
		func(cfg *factoryConfig) ConfigDecoder {
			return untaggedConfigDecoder{
				unmarshaler: configUnmarshaler,
				decodeHooks: cfg.decodeHooks,
			}
		},
		opts...,
	)
}

// NewFactoryWithDecoder creates a new receiver factory for a Prometheus exporter.
// The factory uses the provided type, ExporterLifecycleManager, and ConfigDecoder
// to manage the exporter lifecycle and configuration.
//
// WithDecodeHooks has no effect with this variant; configure hooks inside
// the caller-provided decoder.
func NewFactoryWithDecoder(
	typeStr component.Type,
	lifecycleManager ExporterLifecycleManager,
	configDecoder ConfigDecoder,
	opts ...FactoryOption,
) receiver.Factory {
	if configDecoder == nil {
		panic("config decoder must not be nil")
	}

	return newFactory(typeStr, lifecycleManager, func(*factoryConfig) ConfigDecoder {
		return configDecoder
	}, opts...)
}

func newFactory(
	typeStr component.Type,
	lifecycleManager ExporterLifecycleManager,
	buildDecoder func(*factoryConfig) ConfigDecoder,
	opts ...FactoryOption,
) receiver.Factory {
	if typeStr.String() == "" {
		panic("receiver type must be specified")
	}
	if lifecycleManager == nil {
		panic("lifecycle manager must not be nil")
	}

	cfg := &factoryConfig{}
	for _, opt := range opts {
		opt(cfg)
	}

	configDecoder := buildDecoder(cfg)

	componentDefaultsFunc := func() component.Config {
		receiverConfig := createDefaultConfig()
		receiverConfig.ExporterConfig = cfg.defaultConfig
		return &receiverConfig
	}

	return receiver.NewFactory(
		typeStr,
		componentDefaultsFunc,
		receiver.WithMetrics(
			createMetricsReceiver(lifecycleManager, configDecoder),
			component.StabilityLevelAlpha,
		),
	)
}

func createMetricsReceiver(
	lifecycleManager ExporterLifecycleManager,
	configDecoder ConfigDecoder,
) receiver.CreateMetricsFunc {
	return func(
		_ context.Context,
		set receiver.Settings,
		cfg component.Config,
		consumer consumer.Metrics,
	) (receiver.Metrics, error) {
		receiverCfg, ok := cfg.(*ReceiverConfig)
		if !ok {
			return nil, fmt.Errorf("invalid config type: %T", cfg)
		}

		if len(receiverCfg.ExporterConfig) > 0 {
			exporterCfg, err := configDecoder.DecodeConfig(receiverCfg.ExporterConfig)
			if err != nil {
				return nil, fmt.Errorf("failed to decode config: %w", err)
			}

			receiverCfg.exporterConfigInstance = exporterCfg
		}

		if err := receiverCfg.Validate(); err != nil {
			return nil, fmt.Errorf("invalid configuration: %w", err)
		}

		return newPrometheusReceiver(
			receiverCfg,
			consumer,
			set,
			lifecycleManager,
		), nil
	}
}

type mapstructureConfigDecoder struct {
	unmarshaler ConfigUnmarshaler
	decodeHooks []mapstructure.DecodeHookFunc
}

// DecodeConfig implements the ConfigDecoder interface using mapstructure.
func (d mapstructureConfigDecoder) DecodeConfig(raw map[string]interface{}) (any, error) {
	exporterCfg := d.unmarshaler.GetConfigStruct()
	decoder, err := mapstructure.NewDecoder(&mapstructure.DecoderConfig{
		Result:           exporterCfg,
		ErrorUnused:      true,
		WeaklyTypedInput: false,
		TagName:          "mapstructure",
		DecodeHook:       composeDecodeHooks(d.decodeHooks),
	})
	if err != nil {
		return nil, fmt.Errorf("failed to create decoder: %w", err)
	}

	if err := decoder.Decode(raw); err != nil {
		return nil, err
	}
	return exporterCfg, nil
}

type untaggedConfigDecoder struct {
	unmarshaler ConfigUnmarshaler
	decodeHooks []mapstructure.DecodeHookFunc
}

// DecodeConfig implements the ConfigDecoder interface using mapstructure with
// case-insensitive name matching that ignores underscores in YAML keys, so
// `http_timeout` matches a Go field named `HTTPTimeout` without any tag.
func (d untaggedConfigDecoder) DecodeConfig(raw map[string]interface{}) (any, error) {
	exporterCfg := d.unmarshaler.GetConfigStruct()
	decoder, err := mapstructure.NewDecoder(&mapstructure.DecoderConfig{
		Result:      exporterCfg,
		ErrorUnused: true,
		MatchName: func(mapKey, fieldName string) bool {
			return strings.EqualFold(strings.ReplaceAll(mapKey, "_", ""), fieldName)
		},
		DecodeHook: composeDecodeHooks(d.decodeHooks),
	})
	if err != nil {
		return nil, fmt.Errorf("failed to create decoder: %w", err)
	}

	if err := decoder.Decode(raw); err != nil {
		return nil, err
	}
	return exporterCfg, nil
}

func composeDecodeHooks(hooks []mapstructure.DecodeHookFunc) mapstructure.DecodeHookFunc {
	switch len(hooks) {
	case 0:
		return nil
	case 1:
		return hooks[0]
	default:
		return mapstructure.ComposeDecodeHookFunc(hooks...)
	}
}
