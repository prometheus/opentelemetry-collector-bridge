window.BENCHMARK_DATA = {
  "lastUpdate": 1780334370062,
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
          "id": "0115c8664e19c9c47b4d149e601a094b69c9da15",
          "message": "Merge pull request #25 from prometheus/deps-update/opentelemetry-go-dependencies\n\nUpdate OpenTelemetry Go dependencies",
          "timestamp": "2026-04-07T10:18:19-03:00",
          "tree_id": "e94aa43d2734ec576fda39d2cf9a7ffc0e195d0a",
          "url": "https://github.com/prometheus/opentelemetry-collector-bridge/commit/0115c8664e19c9c47b4d149e601a094b69c9da15"
        },
        "date": 1775567975880,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10",
            "value": 1282878,
            "unit": "ns/op\t  845414 B/op\t   12062 allocs/op",
            "extra": "9192 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10 - ns/op",
            "value": 1282878,
            "unit": "ns/op",
            "extra": "9192 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10 - B/op",
            "value": 845414,
            "unit": "B/op",
            "extra": "9192 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10 - allocs/op",
            "value": 12062,
            "unit": "allocs/op",
            "extra": "9192 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10",
            "value": 2726172,
            "unit": "ns/op\t 2453412 B/op\t   42362 allocs/op",
            "extra": "4394 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10 - ns/op",
            "value": 2726172,
            "unit": "ns/op",
            "extra": "4394 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10 - B/op",
            "value": 2453412,
            "unit": "B/op",
            "extra": "4394 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10 - allocs/op",
            "value": 42362,
            "unit": "allocs/op",
            "extra": "4394 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10",
            "value": 1895471,
            "unit": "ns/op\t 1370258 B/op\t   22061 allocs/op",
            "extra": "6296 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10 - ns/op",
            "value": 1895471,
            "unit": "ns/op",
            "extra": "6296 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10 - B/op",
            "value": 1370258,
            "unit": "B/op",
            "extra": "6296 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10 - allocs/op",
            "value": 22061,
            "unit": "allocs/op",
            "extra": "6296 times\n4 procs"
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
          "id": "5e92765d01563b43d343bc0054c2bc65c6bb6e8e",
          "message": "Merge pull request #26 from prometheus/deps-update/opentelemetry-go-dependencies\n\nUpdate OpenTelemetry Go dependencies",
          "timestamp": "2026-04-13T15:11:49-03:00",
          "tree_id": "29d2aeda8319eea61e8f80abd74f0e3146151b82",
          "url": "https://github.com/prometheus/opentelemetry-collector-bridge/commit/5e92765d01563b43d343bc0054c2bc65c6bb6e8e"
        },
        "date": 1776103994350,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10",
            "value": 1256952,
            "unit": "ns/op\t  845416 B/op\t   12062 allocs/op",
            "extra": "9288 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10 - ns/op",
            "value": 1256952,
            "unit": "ns/op",
            "extra": "9288 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10 - B/op",
            "value": 845416,
            "unit": "B/op",
            "extra": "9288 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10 - allocs/op",
            "value": 12062,
            "unit": "allocs/op",
            "extra": "9288 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10",
            "value": 2695685,
            "unit": "ns/op\t 2453409 B/op\t   42362 allocs/op",
            "extra": "4498 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10 - ns/op",
            "value": 2695685,
            "unit": "ns/op",
            "extra": "4498 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10 - B/op",
            "value": 2453409,
            "unit": "B/op",
            "extra": "4498 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10 - allocs/op",
            "value": 42362,
            "unit": "allocs/op",
            "extra": "4498 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10",
            "value": 1880982,
            "unit": "ns/op\t 1370257 B/op\t   22061 allocs/op",
            "extra": "6139 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10 - ns/op",
            "value": 1880982,
            "unit": "ns/op",
            "extra": "6139 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10 - B/op",
            "value": 1370257,
            "unit": "B/op",
            "extra": "6139 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10 - allocs/op",
            "value": 22061,
            "unit": "allocs/op",
            "extra": "6139 times\n4 procs"
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
          "id": "f067db45609abb029db29e65fbffd0dbf754b202",
          "message": "Merge pull request #5 from prometheus/codeowners\n\nAdd Codeowners",
          "timestamp": "2026-04-20T16:57:00-03:00",
          "tree_id": "f70af72384a59ab8dfb08b4685bcb5fa0f9543f3",
          "url": "https://github.com/prometheus/opentelemetry-collector-bridge/commit/f067db45609abb029db29e65fbffd0dbf754b202"
        },
        "date": 1776715092928,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10",
            "value": 1189716,
            "unit": "ns/op\t  845415 B/op\t   12062 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10 - ns/op",
            "value": 1189716,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10 - B/op",
            "value": 845415,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10 - allocs/op",
            "value": 12062,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10",
            "value": 2659305,
            "unit": "ns/op\t 2453418 B/op\t   42362 allocs/op",
            "extra": "4412 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10 - ns/op",
            "value": 2659305,
            "unit": "ns/op",
            "extra": "4412 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10 - B/op",
            "value": 2453418,
            "unit": "B/op",
            "extra": "4412 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10 - allocs/op",
            "value": 42362,
            "unit": "allocs/op",
            "extra": "4412 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10",
            "value": 1792113,
            "unit": "ns/op\t 1370258 B/op\t   22061 allocs/op",
            "extra": "6692 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10 - ns/op",
            "value": 1792113,
            "unit": "ns/op",
            "extra": "6692 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10 - B/op",
            "value": 1370258,
            "unit": "B/op",
            "extra": "6692 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10 - allocs/op",
            "value": 22061,
            "unit": "allocs/op",
            "extra": "6692 times\n4 procs"
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
          "id": "8d9338897ca90fb999c71f43c8d000f0571d69b5",
          "message": "Merge pull request #28 from prometheus/logwiring\n\nAdd receiver settings to Start and Shutdown methods",
          "timestamp": "2026-04-23T15:12:21-03:00",
          "tree_id": "7b953192c9b911594a554a1d74b7ce09980a50b6",
          "url": "https://github.com/prometheus/opentelemetry-collector-bridge/commit/8d9338897ca90fb999c71f43c8d000f0571d69b5"
        },
        "date": 1776967995934,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10",
            "value": 1304050,
            "unit": "ns/op\t  845414 B/op\t   12062 allocs/op",
            "extra": "9285 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10 - ns/op",
            "value": 1304050,
            "unit": "ns/op",
            "extra": "9285 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10 - B/op",
            "value": 845414,
            "unit": "B/op",
            "extra": "9285 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10 - allocs/op",
            "value": 12062,
            "unit": "allocs/op",
            "extra": "9285 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10",
            "value": 2836937,
            "unit": "ns/op\t 2453416 B/op\t   42362 allocs/op",
            "extra": "4208 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10 - ns/op",
            "value": 2836937,
            "unit": "ns/op",
            "extra": "4208 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10 - B/op",
            "value": 2453416,
            "unit": "B/op",
            "extra": "4208 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10 - allocs/op",
            "value": 42362,
            "unit": "allocs/op",
            "extra": "4208 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10",
            "value": 1918764,
            "unit": "ns/op\t 1370259 B/op\t   22061 allocs/op",
            "extra": "6334 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10 - ns/op",
            "value": 1918764,
            "unit": "ns/op",
            "extra": "6334 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10 - B/op",
            "value": 1370259,
            "unit": "B/op",
            "extra": "6334 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10 - allocs/op",
            "value": 22061,
            "unit": "allocs/op",
            "extra": "6334 times\n4 procs"
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
          "id": "b223e6767c10c51a6363207284934f58a3992933",
          "message": "Merge pull request #29 from prometheus/deps-update/opentelemetry-go-dependencies\n\nUpdate OpenTelemetry Go dependencies",
          "timestamp": "2026-04-28T18:37:50-03:00",
          "tree_id": "4fb71c799071d0c37dd42d8bb0f252f0a9f01517",
          "url": "https://github.com/prometheus/opentelemetry-collector-bridge/commit/b223e6767c10c51a6363207284934f58a3992933"
        },
        "date": 1777412347828,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10",
            "value": 1261338,
            "unit": "ns/op\t  845411 B/op\t   12062 allocs/op",
            "extra": "9402 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10 - ns/op",
            "value": 1261338,
            "unit": "ns/op",
            "extra": "9402 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10 - B/op",
            "value": 845411,
            "unit": "B/op",
            "extra": "9402 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10 - allocs/op",
            "value": 12062,
            "unit": "allocs/op",
            "extra": "9402 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10",
            "value": 2776672,
            "unit": "ns/op\t 2453416 B/op\t   42362 allocs/op",
            "extra": "4263 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10 - ns/op",
            "value": 2776672,
            "unit": "ns/op",
            "extra": "4263 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10 - B/op",
            "value": 2453416,
            "unit": "B/op",
            "extra": "4263 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10 - allocs/op",
            "value": 42362,
            "unit": "allocs/op",
            "extra": "4263 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10",
            "value": 1906242,
            "unit": "ns/op\t 1370257 B/op\t   22061 allocs/op",
            "extra": "6316 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10 - ns/op",
            "value": 1906242,
            "unit": "ns/op",
            "extra": "6316 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10 - B/op",
            "value": 1370257,
            "unit": "B/op",
            "extra": "6316 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10 - allocs/op",
            "value": 22061,
            "unit": "allocs/op",
            "extra": "6316 times\n4 procs"
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
          "id": "5551af82db56c01a9a24504dcdeafa36f82d39fc",
          "message": "Merge pull request #30 from prometheus/custom-config-decoders\n\nAdd ConfigDecoder interface, removing requirement of mapstructure tags",
          "timestamp": "2026-05-06T14:51:29-03:00",
          "tree_id": "9bb75ce0c283a6836e8f96f882e08e09f3ce36ed",
          "url": "https://github.com/prometheus/opentelemetry-collector-bridge/commit/5551af82db56c01a9a24504dcdeafa36f82d39fc"
        },
        "date": 1778089952518,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10",
            "value": 1252039,
            "unit": "ns/op\t  845414 B/op\t   12062 allocs/op",
            "extra": "9694 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10 - ns/op",
            "value": 1252039,
            "unit": "ns/op",
            "extra": "9694 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10 - B/op",
            "value": 845414,
            "unit": "B/op",
            "extra": "9694 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10 - allocs/op",
            "value": 12062,
            "unit": "allocs/op",
            "extra": "9694 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10",
            "value": 2771713,
            "unit": "ns/op\t 2453413 B/op\t   42362 allocs/op",
            "extra": "4424 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10 - ns/op",
            "value": 2771713,
            "unit": "ns/op",
            "extra": "4424 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10 - B/op",
            "value": 2453413,
            "unit": "B/op",
            "extra": "4424 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10 - allocs/op",
            "value": 42362,
            "unit": "allocs/op",
            "extra": "4424 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10",
            "value": 1862522,
            "unit": "ns/op\t 1370258 B/op\t   22061 allocs/op",
            "extra": "6483 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10 - ns/op",
            "value": 1862522,
            "unit": "ns/op",
            "extra": "6483 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10 - B/op",
            "value": 1370258,
            "unit": "B/op",
            "extra": "6483 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10 - allocs/op",
            "value": 22061,
            "unit": "allocs/op",
            "extra": "6483 times\n4 procs"
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
          "id": "71f4c0e84f997664cdf4e6c1290b55490c5fdc63",
          "message": "Merge pull request #31 from prometheus/deps-update/opentelemetry-go-dependencies\n\nUpdate OpenTelemetry Go dependencies",
          "timestamp": "2026-05-11T14:42:01-03:00",
          "tree_id": "53f2bac1003f495a1a703505d60532aaad25732c",
          "url": "https://github.com/prometheus/opentelemetry-collector-bridge/commit/71f4c0e84f997664cdf4e6c1290b55490c5fdc63"
        },
        "date": 1778521410419,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10",
            "value": 1250166,
            "unit": "ns/op\t  845413 B/op\t   12062 allocs/op",
            "extra": "9506 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10 - ns/op",
            "value": 1250166,
            "unit": "ns/op",
            "extra": "9506 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10 - B/op",
            "value": 845413,
            "unit": "B/op",
            "extra": "9506 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10 - allocs/op",
            "value": 12062,
            "unit": "allocs/op",
            "extra": "9506 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10",
            "value": 2774592,
            "unit": "ns/op\t 2453419 B/op\t   42362 allocs/op",
            "extra": "4294 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10 - ns/op",
            "value": 2774592,
            "unit": "ns/op",
            "extra": "4294 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10 - B/op",
            "value": 2453419,
            "unit": "B/op",
            "extra": "4294 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10 - allocs/op",
            "value": 42362,
            "unit": "allocs/op",
            "extra": "4294 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10",
            "value": 1859935,
            "unit": "ns/op\t 1370253 B/op\t   22061 allocs/op",
            "extra": "6439 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10 - ns/op",
            "value": 1859935,
            "unit": "ns/op",
            "extra": "6439 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10 - B/op",
            "value": 1370253,
            "unit": "B/op",
            "extra": "6439 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10 - allocs/op",
            "value": 22061,
            "unit": "allocs/op",
            "extra": "6439 times\n4 procs"
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
          "id": "23696235080f3e44e5f5fbe59fcf4bed0661e5fb",
          "message": "Merge pull request #32 from kgeckhart/kgeckhart/receiver-config-decoder\n\nconfig: make exporter Validate optional via type assertion",
          "timestamp": "2026-05-12T08:49:56-03:00",
          "tree_id": "a4e424cd85ee1ddfaefa21196921b5d41063f69a",
          "url": "https://github.com/prometheus/opentelemetry-collector-bridge/commit/23696235080f3e44e5f5fbe59fcf4bed0661e5fb"
        },
        "date": 1778586655354,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10",
            "value": 1239980,
            "unit": "ns/op\t  845418 B/op\t   12062 allocs/op",
            "extra": "9504 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10 - ns/op",
            "value": 1239980,
            "unit": "ns/op",
            "extra": "9504 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10 - B/op",
            "value": 845418,
            "unit": "B/op",
            "extra": "9504 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10 - allocs/op",
            "value": 12062,
            "unit": "allocs/op",
            "extra": "9504 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10",
            "value": 2691988,
            "unit": "ns/op\t 2453413 B/op\t   42362 allocs/op",
            "extra": "4506 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10 - ns/op",
            "value": 2691988,
            "unit": "ns/op",
            "extra": "4506 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10 - B/op",
            "value": 2453413,
            "unit": "B/op",
            "extra": "4506 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10 - allocs/op",
            "value": 42362,
            "unit": "allocs/op",
            "extra": "4506 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10",
            "value": 1852851,
            "unit": "ns/op\t 1370255 B/op\t   22061 allocs/op",
            "extra": "6452 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10 - ns/op",
            "value": 1852851,
            "unit": "ns/op",
            "extra": "6452 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10 - B/op",
            "value": 1370255,
            "unit": "B/op",
            "extra": "6452 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10 - allocs/op",
            "value": 22061,
            "unit": "allocs/op",
            "extra": "6452 times\n4 procs"
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
          "id": "5008f6fde161294b8130f310e26412153db519b0",
          "message": "Merge pull request #33 from kgeckhart/kgeckhart/bridge-author-docs\n\ndoc: expand package docs for exporter authors",
          "timestamp": "2026-05-12T17:25:17-03:00",
          "tree_id": "02949e42ec1f95bc7ea46f6bb11f4ced3ff36366",
          "url": "https://github.com/prometheus/opentelemetry-collector-bridge/commit/5008f6fde161294b8130f310e26412153db519b0"
        },
        "date": 1778617577996,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10",
            "value": 1401308,
            "unit": "ns/op\t  845415 B/op\t   12062 allocs/op",
            "extra": "8635 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10 - ns/op",
            "value": 1401308,
            "unit": "ns/op",
            "extra": "8635 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10 - B/op",
            "value": 845415,
            "unit": "B/op",
            "extra": "8635 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10 - allocs/op",
            "value": 12062,
            "unit": "allocs/op",
            "extra": "8635 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10",
            "value": 3130739,
            "unit": "ns/op\t 2453417 B/op\t   42362 allocs/op",
            "extra": "3832 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10 - ns/op",
            "value": 3130739,
            "unit": "ns/op",
            "extra": "3832 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10 - B/op",
            "value": 2453417,
            "unit": "B/op",
            "extra": "3832 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10 - allocs/op",
            "value": 42362,
            "unit": "allocs/op",
            "extra": "3832 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10",
            "value": 2107961,
            "unit": "ns/op\t 1370254 B/op\t   22061 allocs/op",
            "extra": "5691 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10 - ns/op",
            "value": 2107961,
            "unit": "ns/op",
            "extra": "5691 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10 - B/op",
            "value": 1370254,
            "unit": "B/op",
            "extra": "5691 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10 - allocs/op",
            "value": 22061,
            "unit": "allocs/op",
            "extra": "5691 times\n4 procs"
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
          "id": "de613a1516fb5e9340cee5b6fb1050d0cb638f85",
          "message": "Merge pull request #34 from prometheus/deps-update/opentelemetry-go-dependencies\n\nUpdate OpenTelemetry Go dependencies to v0.152.1",
          "timestamp": "2026-05-20T09:38:26-03:00",
          "tree_id": "291f402fde2d9728c31a98ecbe354b05b7853bfa",
          "url": "https://github.com/prometheus/opentelemetry-collector-bridge/commit/de613a1516fb5e9340cee5b6fb1050d0cb638f85"
        },
        "date": 1779280781876,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10",
            "value": 1202979,
            "unit": "ns/op\t  845415 B/op\t   12062 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10 - ns/op",
            "value": 1202979,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10 - B/op",
            "value": 845415,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10 - allocs/op",
            "value": 12062,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10",
            "value": 2850804,
            "unit": "ns/op\t 2453413 B/op\t   42362 allocs/op",
            "extra": "4480 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10 - ns/op",
            "value": 2850804,
            "unit": "ns/op",
            "extra": "4480 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10 - B/op",
            "value": 2453413,
            "unit": "B/op",
            "extra": "4480 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10 - allocs/op",
            "value": 42362,
            "unit": "allocs/op",
            "extra": "4480 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10",
            "value": 1828296,
            "unit": "ns/op\t 1370255 B/op\t   22061 allocs/op",
            "extra": "6242 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10 - ns/op",
            "value": 1828296,
            "unit": "ns/op",
            "extra": "6242 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10 - B/op",
            "value": 1370255,
            "unit": "B/op",
            "extra": "6242 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10 - allocs/op",
            "value": 22061,
            "unit": "allocs/op",
            "extra": "6242 times\n4 procs"
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
          "id": "46922494b3099374b592304ee413597c48de584b",
          "message": "Merge pull request #45 from prometheus/deps-update/golangci-golangci-lint-action-9.x\n\nUpdate golangci/golangci-lint-action action to v9.2.1",
          "timestamp": "2026-05-22T10:26:03-03:00",
          "tree_id": "57552e95efd4fe3860f1584f899add2bfe620e50",
          "url": "https://github.com/prometheus/opentelemetry-collector-bridge/commit/46922494b3099374b592304ee413597c48de584b"
        },
        "date": 1779456435268,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10",
            "value": 1235890,
            "unit": "ns/op\t  845418 B/op\t   12062 allocs/op",
            "extra": "8460 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10 - ns/op",
            "value": 1235890,
            "unit": "ns/op",
            "extra": "8460 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10 - B/op",
            "value": 845418,
            "unit": "B/op",
            "extra": "8460 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10 - allocs/op",
            "value": 12062,
            "unit": "allocs/op",
            "extra": "8460 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10",
            "value": 2879786,
            "unit": "ns/op\t 2453410 B/op\t   42362 allocs/op",
            "extra": "4227 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10 - ns/op",
            "value": 2879786,
            "unit": "ns/op",
            "extra": "4227 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10 - B/op",
            "value": 2453410,
            "unit": "B/op",
            "extra": "4227 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10 - allocs/op",
            "value": 42362,
            "unit": "allocs/op",
            "extra": "4227 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10",
            "value": 1872879,
            "unit": "ns/op\t 1370252 B/op\t   22061 allocs/op",
            "extra": "6399 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10 - ns/op",
            "value": 1872879,
            "unit": "ns/op",
            "extra": "6399 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10 - B/op",
            "value": 1370252,
            "unit": "B/op",
            "extra": "6399 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10 - allocs/op",
            "value": 22061,
            "unit": "allocs/op",
            "extra": "6399 times\n4 procs"
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
          "id": "97f39bcbe3553cde70a0bd7cb21f7cfbfdce5341",
          "message": "Merge pull request #35 from prometheus/migrate-mapstructure\n\nMigrate from unmaintained mapstructure",
          "timestamp": "2026-05-22T11:07:07-03:00",
          "tree_id": "3546c0b9ba88ffe90c55df89af42784c62b96e4a",
          "url": "https://github.com/prometheus/opentelemetry-collector-bridge/commit/97f39bcbe3553cde70a0bd7cb21f7cfbfdce5341"
        },
        "date": 1779458906005,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10",
            "value": 1277214,
            "unit": "ns/op\t  845415 B/op\t   12062 allocs/op",
            "extra": "9456 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10 - ns/op",
            "value": 1277214,
            "unit": "ns/op",
            "extra": "9456 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10 - B/op",
            "value": 845415,
            "unit": "B/op",
            "extra": "9456 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10 - allocs/op",
            "value": 12062,
            "unit": "allocs/op",
            "extra": "9456 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10",
            "value": 2746690,
            "unit": "ns/op\t 2453417 B/op\t   42362 allocs/op",
            "extra": "4393 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10 - ns/op",
            "value": 2746690,
            "unit": "ns/op",
            "extra": "4393 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10 - B/op",
            "value": 2453417,
            "unit": "B/op",
            "extra": "4393 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10 - allocs/op",
            "value": 42362,
            "unit": "allocs/op",
            "extra": "4393 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10",
            "value": 1893086,
            "unit": "ns/op\t 1370256 B/op\t   22061 allocs/op",
            "extra": "6314 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10 - ns/op",
            "value": 1893086,
            "unit": "ns/op",
            "extra": "6314 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10 - B/op",
            "value": 1370256,
            "unit": "B/op",
            "extra": "6314 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10 - allocs/op",
            "value": 22061,
            "unit": "allocs/op",
            "extra": "6314 times\n4 procs"
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
          "id": "6dce2f28977d96b0dd3a5142641f411b8935455c",
          "message": "Merge pull request #50 from prometheus/deps-update/opentelemetry-go-dependencies\n\nUpdate OpenTelemetry Go dependencies",
          "timestamp": "2026-05-25T09:31:11-03:00",
          "tree_id": "0bf8bada84d73824a51621d3db763a3f2a91e093",
          "url": "https://github.com/prometheus/opentelemetry-collector-bridge/commit/6dce2f28977d96b0dd3a5142641f411b8935455c"
        },
        "date": 1779712342254,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10",
            "value": 1196847,
            "unit": "ns/op\t  845415 B/op\t   12062 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10 - ns/op",
            "value": 1196847,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10 - B/op",
            "value": 845415,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10 - allocs/op",
            "value": 12062,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10",
            "value": 2676548,
            "unit": "ns/op\t 2453415 B/op\t   42362 allocs/op",
            "extra": "4510 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10 - ns/op",
            "value": 2676548,
            "unit": "ns/op",
            "extra": "4510 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10 - B/op",
            "value": 2453415,
            "unit": "B/op",
            "extra": "4510 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10 - allocs/op",
            "value": 42362,
            "unit": "allocs/op",
            "extra": "4510 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10",
            "value": 1813443,
            "unit": "ns/op\t 1370254 B/op\t   22061 allocs/op",
            "extra": "6402 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10 - ns/op",
            "value": 1813443,
            "unit": "ns/op",
            "extra": "6402 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10 - B/op",
            "value": 1370254,
            "unit": "B/op",
            "extra": "6402 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10 - allocs/op",
            "value": 22061,
            "unit": "allocs/op",
            "extra": "6402 times\n4 procs"
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
          "id": "c638c9cc2cd83ba491ffab7a8b4b9e40959a8f19",
          "message": "Merge pull request #52 from prometheus/deps-update/opentelemetry-go-dependencies\n\nUpdate OpenTelemetry Go dependencies to v1.44.0",
          "timestamp": "2026-05-27T15:44:15-03:00",
          "tree_id": "cb59812843708507fc56437d88a7062ddb95b3cb",
          "url": "https://github.com/prometheus/opentelemetry-collector-bridge/commit/c638c9cc2cd83ba491ffab7a8b4b9e40959a8f19"
        },
        "date": 1779907528333,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10",
            "value": 1229358,
            "unit": "ns/op\t  845417 B/op\t   12062 allocs/op",
            "extra": "9780 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10 - ns/op",
            "value": 1229358,
            "unit": "ns/op",
            "extra": "9780 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10 - B/op",
            "value": 845417,
            "unit": "B/op",
            "extra": "9780 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10 - allocs/op",
            "value": 12062,
            "unit": "allocs/op",
            "extra": "9780 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10",
            "value": 2689143,
            "unit": "ns/op\t 2453413 B/op\t   42362 allocs/op",
            "extra": "4410 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10 - ns/op",
            "value": 2689143,
            "unit": "ns/op",
            "extra": "4410 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10 - B/op",
            "value": 2453413,
            "unit": "B/op",
            "extra": "4410 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10 - allocs/op",
            "value": 42362,
            "unit": "allocs/op",
            "extra": "4410 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10",
            "value": 1816913,
            "unit": "ns/op\t 1370255 B/op\t   22061 allocs/op",
            "extra": "6561 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10 - ns/op",
            "value": 1816913,
            "unit": "ns/op",
            "extra": "6561 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10 - B/op",
            "value": 1370255,
            "unit": "B/op",
            "extra": "6561 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10 - allocs/op",
            "value": 22061,
            "unit": "allocs/op",
            "extra": "6561 times\n4 procs"
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
          "id": "5524807be2b6b63a42600f95d9ab7f69c18535f5",
          "message": "Merge pull request #53 from prometheus/update-from-prombot\n\nAdd changes from https://github.com/prometheus/opentelemetry-collecto…",
          "timestamp": "2026-05-27T15:48:28-03:00",
          "tree_id": "60b377c32e53a6de51e7441f8b0b663d6b42bd00",
          "url": "https://github.com/prometheus/opentelemetry-collector-bridge/commit/5524807be2b6b63a42600f95d9ab7f69c18535f5"
        },
        "date": 1779907762172,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10",
            "value": 1220408,
            "unit": "ns/op\t  845415 B/op\t   12062 allocs/op",
            "extra": "9784 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10 - ns/op",
            "value": 1220408,
            "unit": "ns/op",
            "extra": "9784 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10 - B/op",
            "value": 845415,
            "unit": "B/op",
            "extra": "9784 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10 - allocs/op",
            "value": 12062,
            "unit": "allocs/op",
            "extra": "9784 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10",
            "value": 2723656,
            "unit": "ns/op\t 2453418 B/op\t   42362 allocs/op",
            "extra": "4411 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10 - ns/op",
            "value": 2723656,
            "unit": "ns/op",
            "extra": "4411 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10 - B/op",
            "value": 2453418,
            "unit": "B/op",
            "extra": "4411 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10 - allocs/op",
            "value": 42362,
            "unit": "allocs/op",
            "extra": "4411 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10",
            "value": 1838457,
            "unit": "ns/op\t 1370256 B/op\t   22061 allocs/op",
            "extra": "6512 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10 - ns/op",
            "value": 1838457,
            "unit": "ns/op",
            "extra": "6512 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10 - B/op",
            "value": 1370256,
            "unit": "B/op",
            "extra": "6512 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10 - allocs/op",
            "value": 22061,
            "unit": "allocs/op",
            "extra": "6512 times\n4 procs"
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
          "id": "278258119d532f0bab3ba55f1141f6cb1ad82fc6",
          "message": "Merge pull request #54 from prometheus/deps-update/golangci-golangci-lint-action-9.x\n\nUpdate golangci/golangci-lint-action action to v9.2.1",
          "timestamp": "2026-05-27T15:50:00-03:00",
          "tree_id": "739371fa452d3bcb6b7af620ef41357c9caa8aa9",
          "url": "https://github.com/prometheus/opentelemetry-collector-bridge/commit/278258119d532f0bab3ba55f1141f6cb1ad82fc6"
        },
        "date": 1779907860375,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10",
            "value": 1214000,
            "unit": "ns/op\t  845415 B/op\t   12062 allocs/op",
            "extra": "9993 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10 - ns/op",
            "value": 1214000,
            "unit": "ns/op",
            "extra": "9993 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10 - B/op",
            "value": 845415,
            "unit": "B/op",
            "extra": "9993 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10 - allocs/op",
            "value": 12062,
            "unit": "allocs/op",
            "extra": "9993 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10",
            "value": 2707783,
            "unit": "ns/op\t 2453412 B/op\t   42362 allocs/op",
            "extra": "4456 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10 - ns/op",
            "value": 2707783,
            "unit": "ns/op",
            "extra": "4456 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10 - B/op",
            "value": 2453412,
            "unit": "B/op",
            "extra": "4456 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10 - allocs/op",
            "value": 42362,
            "unit": "allocs/op",
            "extra": "4456 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10",
            "value": 1842268,
            "unit": "ns/op\t 1370254 B/op\t   22061 allocs/op",
            "extra": "6541 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10 - ns/op",
            "value": 1842268,
            "unit": "ns/op",
            "extra": "6541 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10 - B/op",
            "value": 1370254,
            "unit": "B/op",
            "extra": "6541 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10 - allocs/op",
            "value": 22061,
            "unit": "allocs/op",
            "extra": "6541 times\n4 procs"
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
          "id": "72ef3d8e47780a5a791112331e691ff29f1892b6",
          "message": "Merge pull request #55 from prometheus/deps-update/opentelemetry-go-dependencies",
          "timestamp": "2026-05-28T08:02:53-03:00",
          "tree_id": "b90eac60fde88cc914320aec32ce08f1a5201dad",
          "url": "https://github.com/prometheus/opentelemetry-collector-bridge/commit/72ef3d8e47780a5a791112331e691ff29f1892b6"
        },
        "date": 1779966254283,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10",
            "value": 1241909,
            "unit": "ns/op\t  845424 B/op\t   12062 allocs/op",
            "extra": "9583 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10 - ns/op",
            "value": 1241909,
            "unit": "ns/op",
            "extra": "9583 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10 - B/op",
            "value": 845424,
            "unit": "B/op",
            "extra": "9583 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10 - allocs/op",
            "value": 12062,
            "unit": "allocs/op",
            "extra": "9583 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10",
            "value": 2867861,
            "unit": "ns/op\t 2453413 B/op\t   42362 allocs/op",
            "extra": "4237 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10 - ns/op",
            "value": 2867861,
            "unit": "ns/op",
            "extra": "4237 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10 - B/op",
            "value": 2453413,
            "unit": "B/op",
            "extra": "4237 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10 - allocs/op",
            "value": 42362,
            "unit": "allocs/op",
            "extra": "4237 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10",
            "value": 1897508,
            "unit": "ns/op\t 1370256 B/op\t   22061 allocs/op",
            "extra": "6273 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10 - ns/op",
            "value": 1897508,
            "unit": "ns/op",
            "extra": "6273 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10 - B/op",
            "value": 1370256,
            "unit": "B/op",
            "extra": "6273 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10 - allocs/op",
            "value": 22061,
            "unit": "allocs/op",
            "extra": "6273 times\n4 procs"
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
          "id": "f2914e1d6e20910ad811cbb2799739f1580ee3da",
          "message": "Merge pull request #57 from roidelapluie/roidelapluie/gh-token-migrate\n\nci: harden actions/checkout with persist-credentials: false",
          "timestamp": "2026-06-01T14:18:33-03:00",
          "tree_id": "621421f58f3e2926dde3a878de6e7e73e438eb12",
          "url": "https://github.com/prometheus/opentelemetry-collector-bridge/commit/f2914e1d6e20910ad811cbb2799739f1580ee3da"
        },
        "date": 1780334369536,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10",
            "value": 1276507,
            "unit": "ns/op\t  845416 B/op\t   12062 allocs/op",
            "extra": "9273 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10 - ns/op",
            "value": 1276507,
            "unit": "ns/op",
            "extra": "9273 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10 - B/op",
            "value": 845416,
            "unit": "B/op",
            "extra": "9273 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10 - allocs/op",
            "value": 12062,
            "unit": "allocs/op",
            "extra": "9273 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10",
            "value": 2754307,
            "unit": "ns/op\t 2453413 B/op\t   42362 allocs/op",
            "extra": "4416 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10 - ns/op",
            "value": 2754307,
            "unit": "ns/op",
            "extra": "4416 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10 - B/op",
            "value": 2453413,
            "unit": "B/op",
            "extra": "4416 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10 - allocs/op",
            "value": 42362,
            "unit": "allocs/op",
            "extra": "4416 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10",
            "value": 1902107,
            "unit": "ns/op\t 1370257 B/op\t   22061 allocs/op",
            "extra": "6229 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10 - ns/op",
            "value": 1902107,
            "unit": "ns/op",
            "extra": "6229 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10 - B/op",
            "value": 1370257,
            "unit": "B/op",
            "extra": "6229 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10 - allocs/op",
            "value": 22061,
            "unit": "allocs/op",
            "extra": "6229 times\n4 procs"
          }
        ]
      }
    ]
  }
}