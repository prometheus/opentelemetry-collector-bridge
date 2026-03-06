window.BENCHMARK_DATA = {
  "lastUpdate": 1772814980945,
  "repoUrl": "https://github.com/prometheus/opentelemetry-collector-bridge",
  "entries": {
    "OpenTelemetry Collector Bridge Benchmarks": [
      {
        "commit": {
          "author": {
            "email": "arthursens2005@gmail.com",
            "name": "Arthur Silva Sens",
            "username": "ArthurSens"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9868712b5942413baaf77f0fe16ec22b996a72d9",
          "message": "Merge pull request #16 from prometheus/bench\n\nMore benchmark adjustments",
          "timestamp": "2026-03-06T13:34:48-03:00",
          "tree_id": "fb4e3026cc17f5cbd31290ac03df5399297875e6",
          "url": "https://github.com/prometheus/opentelemetry-collector-bridge/commit/9868712b5942413baaf77f0fe16ec22b996a72d9"
        },
        "date": 1772814945134,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10",
            "value": 1254458,
            "unit": "ns/op\t  829399 B/op\t   12062 allocs/op",
            "extra": "9519 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10 - ns/op",
            "value": 1254458,
            "unit": "ns/op",
            "extra": "9519 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10 - B/op",
            "value": 829399,
            "unit": "B/op",
            "extra": "9519 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10 - allocs/op",
            "value": 12062,
            "unit": "allocs/op",
            "extra": "9519 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10",
            "value": 2685886,
            "unit": "ns/op\t 2437397 B/op\t   42362 allocs/op",
            "extra": "4478 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10 - ns/op",
            "value": 2685886,
            "unit": "ns/op",
            "extra": "4478 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10 - B/op",
            "value": 2437397,
            "unit": "B/op",
            "extra": "4478 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10 - allocs/op",
            "value": 42362,
            "unit": "allocs/op",
            "extra": "4478 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10",
            "value": 1859719,
            "unit": "ns/op\t 1354240 B/op\t   22061 allocs/op",
            "extra": "6421 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10 - ns/op",
            "value": 1859719,
            "unit": "ns/op",
            "extra": "6421 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10 - B/op",
            "value": 1354240,
            "unit": "B/op",
            "extra": "6421 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10 - allocs/op",
            "value": 22061,
            "unit": "allocs/op",
            "extra": "6421 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "arthursens2005@gmail.com",
            "name": "Arthur Silva Sens",
            "username": "ArthurSens"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dc6596544b6967cebcce4e57c80c9062f116f4f0",
          "message": "Merge pull request #15 from prometheus/deps-update/actions-checkout-6.x\n\nUpdate actions/checkout action to v6",
          "timestamp": "2026-03-06T13:35:19-03:00",
          "tree_id": "d4a054b3eafb37e9cbf8b54561ad77d2442cb613",
          "url": "https://github.com/prometheus/opentelemetry-collector-bridge/commit/dc6596544b6967cebcce4e57c80c9062f116f4f0"
        },
        "date": 1772814980058,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10",
            "value": 1263153,
            "unit": "ns/op\t  829404 B/op\t   12062 allocs/op",
            "extra": "9552 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10 - ns/op",
            "value": 1263153,
            "unit": "ns/op",
            "extra": "9552 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10 - B/op",
            "value": 829404,
            "unit": "B/op",
            "extra": "9552 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10 - allocs/op",
            "value": 12062,
            "unit": "allocs/op",
            "extra": "9552 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10",
            "value": 2662610,
            "unit": "ns/op\t 2437395 B/op\t   42362 allocs/op",
            "extra": "4465 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10 - ns/op",
            "value": 2662610,
            "unit": "ns/op",
            "extra": "4465 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10 - B/op",
            "value": 2437395,
            "unit": "B/op",
            "extra": "4465 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10 - allocs/op",
            "value": 42362,
            "unit": "allocs/op",
            "extra": "4465 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10",
            "value": 1849371,
            "unit": "ns/op\t 1354241 B/op\t   22061 allocs/op",
            "extra": "6420 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10 - ns/op",
            "value": 1849371,
            "unit": "ns/op",
            "extra": "6420 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10 - B/op",
            "value": 1354241,
            "unit": "B/op",
            "extra": "6420 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10 - allocs/op",
            "value": 22061,
            "unit": "allocs/op",
            "extra": "6420 times\n4 procs"
          }
        ]
      }
    ]
  }
}