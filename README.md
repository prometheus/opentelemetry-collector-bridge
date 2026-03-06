# opentelemetry-collector-bridge

[EXPERIMENTAL] An adapter between client_golang's registry and OTel Collector's Receiver Interfaces

## Benchmarks

The full end-to-end benchmark suite is published to GitHub Pages at
<https://prometheus.github.io/opentelemetry-collector-bridge/dev/bench>.

To reproduce the published benchmark run locally:

```sh
go test -run=^$ -bench=BenchmarkScrapeAndExport -benchmem ./...
```
