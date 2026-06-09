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
	"slices"
	"strings"
	"time"
	"unicode"
)

// fieldKey maps a config struct field to the YAML key it decodes under. It
// reports squash to flatten an embedded struct's fields into the parent, and
// skip to omit the field entirely. The strategy mirrors whichever decoder the
// factory uses, so derived defaults round-trip back through it.
type fieldKey func(reflect.StructField) (key string, squash, skip bool)

// untaggedFieldKey names a field by snake_casing its Go name, the inverse of
// untaggedConfigDecoder's underscore-stripping matcher.
func untaggedFieldKey(f reflect.StructField) (string, bool, bool) {
	return snakeCase(f.Name), false, false
}

// taggedFieldKey names a field by its mapstructure tag, falling back to the Go
// field name (which the tagged decoder matches case-insensitively) when the tag
// carries only options or is absent.
func taggedFieldKey(f reflect.StructField) (string, bool, bool) {
	tag := f.Tag.Get("mapstructure")
	parts := strings.Split(tag, ",")
	name := parts[0]
	if name == "-" {
		return "", false, true
	}
	squash := slices.Contains(parts[1:], "squash")
	if name == "" {
		name = f.Name
	}
	return name, squash, false
}

// withDerivedDefaults prepends a WithComponentDefaults derived from cfgStruct to
// opts. Prepending (rather than seeding) means an explicit WithComponentDefaults
// the caller passes still wins, since opts are applied in order.
func withDerivedDefaults(cfgStruct any, key fieldKey, opts []FactoryOption) []FactoryOption {
	derived := WithComponentDefaults(componentDefaultsFromStruct(cfgStruct, key))
	return append([]FactoryOption{derived}, opts...)
}

// componentDefaultsFromStruct derives the OTel-framework defaults map by walking
// the exporter's already-defaulted config struct. time.Duration fields are
// emitted in their .String() form so they round-trip through a duration decode
// hook; everything else passes through by value.
//
// It handles flat structs and ,squash-embedded structs. Configs with nested
// (non-squashed) struct fields render those as-is; exporters needing finer
// control over the rendered defaults should pass WithComponentDefaults.
func componentDefaultsFromStruct(cfgStruct any, key fieldKey) map[string]interface{} {
	out := map[string]interface{}{}
	addStructDefaults(out, reflect.ValueOf(cfgStruct), key)
	return out
}

func addStructDefaults(out map[string]interface{}, rv reflect.Value, key fieldKey) {
	for rv.Kind() == reflect.Pointer {
		if rv.IsNil() {
			return
		}
		rv = rv.Elem()
	}
	if rv.Kind() != reflect.Struct {
		return
	}

	rt := rv.Type()
	for i := range rt.NumField() {
		f := rt.Field(i)
		if !f.IsExported() {
			continue
		}
		name, squash, skip := key(f)
		if skip {
			continue
		}
		fv := rv.Field(i)
		if squash {
			addStructDefaults(out, fv, key)
			continue
		}
		if name == "" {
			continue
		}
		if d, ok := fv.Interface().(time.Duration); ok {
			out[name] = d.String()
			continue
		}
		out[name] = fv.Interface()
	}
}

// matchUntaggedKey reports whether a YAML key addresses the given Go field name,
// ignoring underscores and case (http_timeout matches HTTPTimeout). This is the
// read side of the untagged naming convention, used by untaggedConfigDecoder;
// snakeCase below is the write side.
func matchUntaggedKey(yamlKey, goField string) bool {
	return strings.EqualFold(strings.ReplaceAll(yamlKey, "_", ""), goField)
}

// snakeCase converts a PascalCase or camelCase Go identifier to snake_case,
// handling acronyms (HTTPTimeout → http_timeout, ProjectIDs → project_ids,
// AggregateDeltasTTL → aggregate_deltas_ttl). It's the write side of the
// untagged naming convention. Because matchUntaggedKey strips underscores before
// comparing, this output only needs to read well — any rendering still decodes
// back to the same field, which is what TestSnakeCaseRoundTrips checks.
func snakeCase(name string) string {
	runes := []rune(name)
	var out []rune
	for i, r := range runes {
		if i == 0 {
			out = append(out, unicode.ToLower(r))
			continue
		}
		prev := runes[i-1]
		if unicode.IsUpper(r) {
			if unicode.IsLower(prev) || unicode.IsDigit(prev) {
				// lowercase→uppercase boundary: always split.
				out = append(out, '_')
			} else if unicode.IsUpper(prev) {
				// Within an uppercase run: split before this letter only if the
				// run has 3+ uppercase letters (i.e., two-back is also uppercase).
				// This splits "HTTP"+"Timeout" but keeps "ID"+"s" together.
				next := rune(0)
				if i+1 < len(runes) {
					next = runes[i+1]
				}
				if next != 0 && unicode.IsLower(next) {
					prevPrev := rune(0)
					if i >= 2 {
						prevPrev = runes[i-2]
					}
					if unicode.IsUpper(prevPrev) {
						out = append(out, '_')
					}
				}
			}
		}
		out = append(out, unicode.ToLower(r))
	}
	return string(out)
}
