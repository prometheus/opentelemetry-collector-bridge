window.BENCHMARK_DATA = {
  "lastUpdate": 1775171259320,
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
          "id": "06677a899eede6e38af428c5c0752cfc9079bf96",
          "message": "Merge pull request #17 from prometheus/deps-update/opentelemetry-go-dependencies\n\nUpdate OpenTelemetry Go dependencies",
          "timestamp": "2026-03-09T10:28:37-03:00",
          "tree_id": "85517cbc623127916d546c12a1ddb4bc3866b7ff",
          "url": "https://github.com/prometheus/opentelemetry-collector-bridge/commit/06677a899eede6e38af428c5c0752cfc9079bf96"
        },
        "date": 1773062995309,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10",
            "value": 1315554,
            "unit": "ns/op\t  829402 B/op\t   12062 allocs/op",
            "extra": "9046 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10 - ns/op",
            "value": 1315554,
            "unit": "ns/op",
            "extra": "9046 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10 - B/op",
            "value": 829402,
            "unit": "B/op",
            "extra": "9046 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10 - allocs/op",
            "value": 12062,
            "unit": "allocs/op",
            "extra": "9046 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10",
            "value": 2774821,
            "unit": "ns/op\t 2437395 B/op\t   42362 allocs/op",
            "extra": "4185 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10 - ns/op",
            "value": 2774821,
            "unit": "ns/op",
            "extra": "4185 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10 - B/op",
            "value": 2437395,
            "unit": "B/op",
            "extra": "4185 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10 - allocs/op",
            "value": 42362,
            "unit": "allocs/op",
            "extra": "4185 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10",
            "value": 1941434,
            "unit": "ns/op\t 1354239 B/op\t   22061 allocs/op",
            "extra": "6196 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10 - ns/op",
            "value": 1941434,
            "unit": "ns/op",
            "extra": "6196 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10 - B/op",
            "value": 1354239,
            "unit": "B/op",
            "extra": "6196 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10 - allocs/op",
            "value": 22061,
            "unit": "allocs/op",
            "extra": "6196 times\n4 procs"
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
          "id": "4d4110f4b9e8786a851d266f1aeaf35d4868027b",
          "message": "Merge pull request #18 from prometheus/deps-update/opentelemetry-go-dependencies\n\nUpdate OpenTelemetry Go dependencies",
          "timestamp": "2026-03-17T17:42:41-03:00",
          "tree_id": "dc29c9acb29f1f074d1c0501aa7b85099e563608",
          "url": "https://github.com/prometheus/opentelemetry-collector-bridge/commit/4d4110f4b9e8786a851d266f1aeaf35d4868027b"
        },
        "date": 1773780238203,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10",
            "value": 1262504,
            "unit": "ns/op\t  845411 B/op\t   12062 allocs/op",
            "extra": "9531 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10 - ns/op",
            "value": 1262504,
            "unit": "ns/op",
            "extra": "9531 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10 - B/op",
            "value": 845411,
            "unit": "B/op",
            "extra": "9531 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10 - allocs/op",
            "value": 12062,
            "unit": "allocs/op",
            "extra": "9531 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10",
            "value": 2751151,
            "unit": "ns/op\t 2453423 B/op\t   42362 allocs/op",
            "extra": "4338 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10 - ns/op",
            "value": 2751151,
            "unit": "ns/op",
            "extra": "4338 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10 - B/op",
            "value": 2453423,
            "unit": "B/op",
            "extra": "4338 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10 - allocs/op",
            "value": 42362,
            "unit": "allocs/op",
            "extra": "4338 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10",
            "value": 1855616,
            "unit": "ns/op\t 1370254 B/op\t   22061 allocs/op",
            "extra": "6514 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10 - ns/op",
            "value": 1855616,
            "unit": "ns/op",
            "extra": "6514 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10 - B/op",
            "value": 1370254,
            "unit": "B/op",
            "extra": "6514 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10 - allocs/op",
            "value": 22061,
            "unit": "allocs/op",
            "extra": "6514 times\n4 procs"
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
          "id": "5fc426455618fc6c7436a991545a64a38c23de4a",
          "message": "Merge pull request #21 from prometheus/deps-update/golangci-golangci-lint-action-9.x\n\nUpdate golangci/golangci-lint-action action to v9",
          "timestamp": "2026-03-17T17:45:27-03:00",
          "tree_id": "3610b92fac843efa97bd404e17fce5f6ccaca6d9",
          "url": "https://github.com/prometheus/opentelemetry-collector-bridge/commit/5fc426455618fc6c7436a991545a64a38c23de4a"
        },
        "date": 1773780381130,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10",
            "value": 1253776,
            "unit": "ns/op\t  845416 B/op\t   12062 allocs/op",
            "extra": "9393 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10 - ns/op",
            "value": 1253776,
            "unit": "ns/op",
            "extra": "9393 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10 - B/op",
            "value": 845416,
            "unit": "B/op",
            "extra": "9393 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10 - allocs/op",
            "value": 12062,
            "unit": "allocs/op",
            "extra": "9393 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10",
            "value": 2724552,
            "unit": "ns/op\t 2453415 B/op\t   42362 allocs/op",
            "extra": "4370 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10 - ns/op",
            "value": 2724552,
            "unit": "ns/op",
            "extra": "4370 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10 - B/op",
            "value": 2453415,
            "unit": "B/op",
            "extra": "4370 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10 - allocs/op",
            "value": 42362,
            "unit": "allocs/op",
            "extra": "4370 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10",
            "value": 1874614,
            "unit": "ns/op\t 1370256 B/op\t   22061 allocs/op",
            "extra": "6426 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10 - ns/op",
            "value": 1874614,
            "unit": "ns/op",
            "extra": "6426 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10 - B/op",
            "value": 1370256,
            "unit": "B/op",
            "extra": "6426 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10 - allocs/op",
            "value": 22061,
            "unit": "allocs/op",
            "extra": "6426 times\n4 procs"
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
          "id": "19742a4988a7118228741ff57d2ce1d213fafcf4",
          "message": "Merge pull request #24 from kgeckhart/kgeckhart/migrate-to-scraperhelper\n\nMigrate to scraperhelper",
          "timestamp": "2026-04-02T20:04:17-03:00",
          "tree_id": "cf09158d662ffd742d4594b7bf41db5758fa2f5f",
          "url": "https://github.com/prometheus/opentelemetry-collector-bridge/commit/19742a4988a7118228741ff57d2ce1d213fafcf4"
        },
        "date": 1775171127956,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10",
            "value": 1259172,
            "unit": "ns/op\t  845416 B/op\t   12062 allocs/op",
            "extra": "9145 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10 - ns/op",
            "value": 1259172,
            "unit": "ns/op",
            "extra": "9145 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10 - B/op",
            "value": 845416,
            "unit": "B/op",
            "extra": "9145 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10 - allocs/op",
            "value": 12062,
            "unit": "allocs/op",
            "extra": "9145 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10",
            "value": 2758743,
            "unit": "ns/op\t 2453419 B/op\t   42362 allocs/op",
            "extra": "4320 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10 - ns/op",
            "value": 2758743,
            "unit": "ns/op",
            "extra": "4320 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10 - B/op",
            "value": 2453419,
            "unit": "B/op",
            "extra": "4320 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10 - allocs/op",
            "value": 42362,
            "unit": "allocs/op",
            "extra": "4320 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10",
            "value": 1870461,
            "unit": "ns/op\t 1370252 B/op\t   22061 allocs/op",
            "extra": "6330 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10 - ns/op",
            "value": 1870461,
            "unit": "ns/op",
            "extra": "6330 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10 - B/op",
            "value": 1370252,
            "unit": "B/op",
            "extra": "6330 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10 - allocs/op",
            "value": 22061,
            "unit": "allocs/op",
            "extra": "6330 times\n4 procs"
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
          "id": "320125288fd9d4e649e91e1e1963b8435a69d545",
          "message": "Merge pull request #22 from prometheus/deps-update/actions-setup-go-6.x\n\nUpdate actions/setup-go action to v6.4.0",
          "timestamp": "2026-04-02T20:04:38-03:00",
          "tree_id": "06038ed34d3c998695d6ffeffb1697c37d2ad43f",
          "url": "https://github.com/prometheus/opentelemetry-collector-bridge/commit/320125288fd9d4e649e91e1e1963b8435a69d545"
        },
        "date": 1775171152074,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10",
            "value": 1266786,
            "unit": "ns/op\t  845416 B/op\t   12062 allocs/op",
            "extra": "9296 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10 - ns/op",
            "value": 1266786,
            "unit": "ns/op",
            "extra": "9296 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10 - B/op",
            "value": 845416,
            "unit": "B/op",
            "extra": "9296 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10 - allocs/op",
            "value": 12062,
            "unit": "allocs/op",
            "extra": "9296 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10",
            "value": 2755872,
            "unit": "ns/op\t 2453418 B/op\t   42362 allocs/op",
            "extra": "4170 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10 - ns/op",
            "value": 2755872,
            "unit": "ns/op",
            "extra": "4170 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10 - B/op",
            "value": 2453418,
            "unit": "B/op",
            "extra": "4170 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10 - allocs/op",
            "value": 42362,
            "unit": "allocs/op",
            "extra": "4170 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10",
            "value": 1850798,
            "unit": "ns/op\t 1370256 B/op\t   22061 allocs/op",
            "extra": "6568 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10 - ns/op",
            "value": 1850798,
            "unit": "ns/op",
            "extra": "6568 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10 - B/op",
            "value": 1370256,
            "unit": "B/op",
            "extra": "6568 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10 - allocs/op",
            "value": 22061,
            "unit": "allocs/op",
            "extra": "6568 times\n4 procs"
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
          "id": "94f14af2d5761d60615bb133f6773b61e4423ae1",
          "message": "Merge pull request #23 from prometheus/deps-update/opentelemetry-go-dependencies\n\nUpdate OpenTelemetry Go dependencies",
          "timestamp": "2026-04-02T20:06:17-03:00",
          "tree_id": "9c10c7a0705e57009dffe4d0bac17db9d82652bd",
          "url": "https://github.com/prometheus/opentelemetry-collector-bridge/commit/94f14af2d5761d60615bb133f6773b61e4423ae1"
        },
        "date": 1775171258454,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10",
            "value": 1285422,
            "unit": "ns/op\t  845413 B/op\t   12062 allocs/op",
            "extra": "9234 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10 - ns/op",
            "value": 1285422,
            "unit": "ns/op",
            "extra": "9234 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10 - B/op",
            "value": 845413,
            "unit": "B/op",
            "extra": "9234 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10 - allocs/op",
            "value": 12062,
            "unit": "allocs/op",
            "extra": "9234 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10",
            "value": 2917625,
            "unit": "ns/op\t 2453421 B/op\t   42362 allocs/op",
            "extra": "4218 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10 - ns/op",
            "value": 2917625,
            "unit": "ns/op",
            "extra": "4218 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10 - B/op",
            "value": 2453421,
            "unit": "B/op",
            "extra": "4218 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10 - allocs/op",
            "value": 42362,
            "unit": "allocs/op",
            "extra": "4218 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10",
            "value": 1933443,
            "unit": "ns/op\t 1370255 B/op\t   22061 allocs/op",
            "extra": "5991 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10 - ns/op",
            "value": 1933443,
            "unit": "ns/op",
            "extra": "5991 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10 - B/op",
            "value": 1370255,
            "unit": "B/op",
            "extra": "5991 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10 - allocs/op",
            "value": 22061,
            "unit": "allocs/op",
            "extra": "5991 times\n4 procs"
          }
        ]
      }
    ]
  }
}