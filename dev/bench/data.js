window.BENCHMARK_DATA = {
  "lastUpdate": 1772811127638,
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
          "id": "93847fa0082b31111d7d4d60792bf5b117d601ef",
          "message": "Merge pull request #14 from prometheus/bench\n\nAdjust benchmark",
          "timestamp": "2026-03-06T12:31:15-03:00",
          "tree_id": "e59515cc4ac114d0308e44f66db2b5e84c86d116",
          "url": "https://github.com/prometheus/opentelemetry-collector-bridge/commit/93847fa0082b31111d7d4d60792bf5b117d601ef"
        },
        "date": 1772811126680,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_10/cardinality_10",
            "value": 111531,
            "unit": "ns/op\t  110750 B/op\t    1245 allocs/op",
            "extra": "9880 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_10/cardinality_10 - ns/op",
            "value": 111531,
            "unit": "ns/op",
            "extra": "9880 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_10/cardinality_10 - B/op",
            "value": 110750,
            "unit": "B/op",
            "extra": "9880 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_10/cardinality_10 - allocs/op",
            "value": 1245,
            "unit": "allocs/op",
            "extra": "9880 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_10/cardinality_100",
            "value": 1194070,
            "unit": "ns/op\t  755479 B/op\t   10316 allocs/op",
            "extra": "1017 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_10/cardinality_100 - ns/op",
            "value": 1194070,
            "unit": "ns/op",
            "extra": "1017 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_10/cardinality_100 - B/op",
            "value": 755479,
            "unit": "B/op",
            "extra": "1017 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_10/cardinality_100 - allocs/op",
            "value": 10316,
            "unit": "allocs/op",
            "extra": "1017 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10",
            "value": 1254527,
            "unit": "ns/op\t  829396 B/op\t   12062 allocs/op",
            "extra": "957 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10 - ns/op",
            "value": 1254527,
            "unit": "ns/op",
            "extra": "957 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10 - B/op",
            "value": 829396,
            "unit": "B/op",
            "extra": "957 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10 - allocs/op",
            "value": 12062,
            "unit": "allocs/op",
            "extra": "957 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_100",
            "value": 13719141,
            "unit": "ns/op\t 7095386 B/op\t  102721 allocs/op",
            "extra": "88 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_100 - ns/op",
            "value": 13719141,
            "unit": "ns/op",
            "extra": "88 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_100 - B/op",
            "value": 7095386,
            "unit": "B/op",
            "extra": "88 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_100 - allocs/op",
            "value": 102721,
            "unit": "allocs/op",
            "extra": "88 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_1000/cardinality_10",
            "value": 13992774,
            "unit": "ns/op\t 7805915 B/op\t  120129 allocs/op",
            "extra": "85 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_1000/cardinality_10 - ns/op",
            "value": 13992774,
            "unit": "ns/op",
            "extra": "85 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_1000/cardinality_10 - B/op",
            "value": 7805915,
            "unit": "B/op",
            "extra": "85 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_1000/cardinality_10 - allocs/op",
            "value": 120129,
            "unit": "allocs/op",
            "extra": "85 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_1000/cardinality_100",
            "value": 169971408,
            "unit": "ns/op\t69431770 B/op\t 1026580 allocs/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_1000/cardinality_100 - ns/op",
            "value": 169971408,
            "unit": "ns/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_1000/cardinality_100 - B/op",
            "value": 69431770,
            "unit": "B/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_1000/cardinality_100 - allocs/op",
            "value": 1026580,
            "unit": "allocs/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_10/cardinality_10",
            "value": 228025,
            "unit": "ns/op\t  271545 B/op\t    4275 allocs/op",
            "extra": "5046 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_10/cardinality_10 - ns/op",
            "value": 228025,
            "unit": "ns/op",
            "extra": "5046 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_10/cardinality_10 - B/op",
            "value": 271545,
            "unit": "B/op",
            "extra": "5046 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_10/cardinality_10 - allocs/op",
            "value": 4275,
            "unit": "allocs/op",
            "extra": "5046 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_10/cardinality_100",
            "value": 2767891,
            "unit": "ns/op\t 2356911 B/op\t   40346 allocs/op",
            "extra": "405 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_10/cardinality_100 - ns/op",
            "value": 2767891,
            "unit": "ns/op",
            "extra": "405 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_10/cardinality_100 - B/op",
            "value": 2356911,
            "unit": "B/op",
            "extra": "405 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_10/cardinality_100 - allocs/op",
            "value": 40346,
            "unit": "allocs/op",
            "extra": "405 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10",
            "value": 2727734,
            "unit": "ns/op\t 2437374 B/op\t   42362 allocs/op",
            "extra": "444 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10 - ns/op",
            "value": 2727734,
            "unit": "ns/op",
            "extra": "444 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10 - B/op",
            "value": 2437374,
            "unit": "B/op",
            "extra": "444 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10 - allocs/op",
            "value": 42362,
            "unit": "allocs/op",
            "extra": "444 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_100",
            "value": 35587462,
            "unit": "ns/op\t23109821 B/op\t  403021 allocs/op",
            "extra": "33 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_100 - ns/op",
            "value": 35587462,
            "unit": "ns/op",
            "extra": "33 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_100 - B/op",
            "value": 23109821,
            "unit": "B/op",
            "extra": "33 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_100 - allocs/op",
            "value": 403021,
            "unit": "allocs/op",
            "extra": "33 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_1000/cardinality_10",
            "value": 34546585,
            "unit": "ns/op\t23885930 B/op\t  423129 allocs/op",
            "extra": "36 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_1000/cardinality_10 - ns/op",
            "value": 34546585,
            "unit": "ns/op",
            "extra": "36 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_1000/cardinality_10 - B/op",
            "value": 23885930,
            "unit": "B/op",
            "extra": "36 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_1000/cardinality_10 - allocs/op",
            "value": 423129,
            "unit": "allocs/op",
            "extra": "36 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_1000/cardinality_100",
            "value": 370677911,
            "unit": "ns/op\t229575773 B/op\t 4029580 allocs/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_1000/cardinality_100 - ns/op",
            "value": 370677911,
            "unit": "ns/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_1000/cardinality_100 - B/op",
            "value": 229575773,
            "unit": "B/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_1000/cardinality_100 - allocs/op",
            "value": 4029580,
            "unit": "allocs/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_10/cardinality_10",
            "value": 161817,
            "unit": "ns/op\t  158456 B/op\t    2154 allocs/op",
            "extra": "6589 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_10/cardinality_10 - ns/op",
            "value": 161817,
            "unit": "ns/op",
            "extra": "6589 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_10/cardinality_10 - B/op",
            "value": 158456,
            "unit": "B/op",
            "extra": "6589 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_10/cardinality_10 - allocs/op",
            "value": 2154,
            "unit": "allocs/op",
            "extra": "6589 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_10/cardinality_100",
            "value": 1779298,
            "unit": "ns/op\t 1231064 B/op\t   19325 allocs/op",
            "extra": "660 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_10/cardinality_100 - ns/op",
            "value": 1779298,
            "unit": "ns/op",
            "extra": "660 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_10/cardinality_100 - B/op",
            "value": 1231064,
            "unit": "B/op",
            "extra": "660 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_10/cardinality_100 - allocs/op",
            "value": 19325,
            "unit": "allocs/op",
            "extra": "660 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10",
            "value": 1927773,
            "unit": "ns/op\t 1354243 B/op\t   22061 allocs/op",
            "extra": "616 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10 - ns/op",
            "value": 1927773,
            "unit": "ns/op",
            "extra": "616 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10 - B/op",
            "value": 1354243,
            "unit": "B/op",
            "extra": "616 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10 - allocs/op",
            "value": 22061,
            "unit": "allocs/op",
            "extra": "616 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_100",
            "value": 21065975,
            "unit": "ns/op\t12326820 B/op\t  201820 allocs/op",
            "extra": "64 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_100 - ns/op",
            "value": 21065975,
            "unit": "ns/op",
            "extra": "64 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_100 - B/op",
            "value": 12326820,
            "unit": "B/op",
            "extra": "64 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_100 - allocs/op",
            "value": 201820,
            "unit": "allocs/op",
            "extra": "64 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_1000/cardinality_10",
            "value": 20350258,
            "unit": "ns/op\t13101948 B/op\t  221028 allocs/op",
            "extra": "58 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_1000/cardinality_10 - ns/op",
            "value": 20350258,
            "unit": "ns/op",
            "extra": "58 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_1000/cardinality_10 - B/op",
            "value": 13101948,
            "unit": "B/op",
            "extra": "58 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_1000/cardinality_10 - allocs/op",
            "value": 221028,
            "unit": "allocs/op",
            "extra": "58 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_1000/cardinality_100",
            "value": 242134595,
            "unit": "ns/op\t122221707 B/op\t 2026580 allocs/op",
            "extra": "5 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_1000/cardinality_100 - ns/op",
            "value": 242134595,
            "unit": "ns/op",
            "extra": "5 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_1000/cardinality_100 - B/op",
            "value": 122221707,
            "unit": "B/op",
            "extra": "5 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_1000/cardinality_100 - allocs/op",
            "value": 2026580,
            "unit": "allocs/op",
            "extra": "5 times\n4 procs"
          }
        ]
      }
    ]
  }
}