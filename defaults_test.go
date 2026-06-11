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
	"reflect"
	"testing"
	"time"
)

func TestSnakeCase(t *testing.T) {
	cases := []struct {
		input string
		want  string
	}{
		{"ProjectIDs", "project_ids"},
		{"HTTPTimeout", "http_timeout"},
		{"MaxRetries", "max_retries"},
		{"AggregateDeltasTTL", "aggregate_deltas_ttl"},
		{"DescriptorCacheOnlyGoogle", "descriptor_cache_only_google"},
		{"MetricsIngestDelay", "metrics_ingest_delay"},
		{"UniverseDomain", "universe_domain"},
	}

	for _, tc := range cases {
		if got := snakeCase(tc.input); got != tc.want {
			t.Errorf("snakeCase(%q) = %q, want %q", tc.input, got, tc.want)
		}
	}
}

// TestSnakeCaseRoundTrips is the property that actually matters: a key rendered
// by snakeCase must address its source field through the decoder's matcher.
// snakeCase's exact spelling is cosmetic; this round-trip is not.
func TestSnakeCaseRoundTrips(t *testing.T) {
	fields := []string{
		"ProjectIDs", "ProjectsFilter", "UniverseDomain", "MaxRetries",
		"HTTPTimeout", "RetryStatuses", "MetricsIngestDelay", "FillMissingLabels",
		"AggregateDeltasTTL", "DescriptorCacheOnlyGoogle",
	}
	for _, f := range fields {
		if !matchUntaggedKey(snakeCase(f), f) {
			t.Errorf("snakeCase(%q) = %q does not match field %q", f, snakeCase(f), f)
		}
	}
}

func TestComponentDefaultsFromStruct_Untagged(t *testing.T) {
	type sample struct {
		ProjectIDs  []string
		HTTPTimeout time.Duration
		MaxRetries  int
		EnableThing bool
		hidden      string //nolint:unused // exercises that unexported fields are skipped
	}

	got := componentDefaultsFromStruct(&sample{
		ProjectIDs:  []string{"a"},
		HTTPTimeout: 10 * time.Second,
		MaxRetries:  3,
		EnableThing: true,
	}, untaggedFieldKey)

	want := map[string]interface{}{
		"project_ids":  []string{"a"},
		"http_timeout": "10s",
		"max_retries":  3,
		"enable_thing": true,
	}
	if !reflect.DeepEqual(got, want) {
		t.Fatalf("got %#v, want %#v", got, want)
	}
}

func TestComponentDefaultsFromStruct_Tagged(t *testing.T) {
	type sample struct {
		Name    string        `mapstructure:"name"`
		Timeout time.Duration `mapstructure:"timeout"`
		Hidden  string        `mapstructure:"-"`
		NoTag   int
	}

	got := componentDefaultsFromStruct(&sample{
		Name:    "x",
		Timeout: 5 * time.Second,
		Hidden:  "secret",
		NoTag:   7,
	}, taggedFieldKey)

	want := map[string]interface{}{
		"name":    "x",
		"timeout": "5s",
		"NoTag":   7,
	}
	if !reflect.DeepEqual(got, want) {
		t.Fatalf("got %#v, want %#v", got, want)
	}
}

func TestComponentDefaultsFromStruct_SquashFlattens(t *testing.T) {
	type embedded struct {
		Inner string `mapstructure:"inner"`
	}
	type sample struct {
		Embedded embedded `mapstructure:",squash"`
		Outer    string   `mapstructure:"outer"`
	}

	got := componentDefaultsFromStruct(&sample{
		Embedded: embedded{Inner: "in"},
		Outer:    "out",
	}, taggedFieldKey)

	want := map[string]interface{}{
		"inner": "in",
		"outer": "out",
	}
	if !reflect.DeepEqual(got, want) {
		t.Fatalf("got %#v, want %#v", got, want)
	}
}

func TestComponentDefaultsFromStruct_NonStructAndNilPointer(t *testing.T) {
	if got := componentDefaultsFromStruct((*struct{ A int })(nil), taggedFieldKey); len(got) != 0 {
		t.Errorf("nil pointer: got %#v, want empty", got)
	}
	if got := componentDefaultsFromStruct(42, taggedFieldKey); len(got) != 0 {
		t.Errorf("non-struct: got %#v, want empty", got)
	}
}
