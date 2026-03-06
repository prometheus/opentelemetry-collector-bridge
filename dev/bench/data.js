window.BENCHMARK_DATA = {
  "lastUpdate": 1772810847658,
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
          "id": "89d5f497178bc62c7bb5512a9bc5093e5c89a5f7",
          "message": "Merge pull request #11 from prometheus/benchmarks\n\nAdd benchmarks",
          "timestamp": "2026-03-06T12:21:50-03:00",
          "tree_id": "e10151850eb36ddbad3d0e1a1b688a98914f8a84",
          "url": "https://github.com/prometheus/opentelemetry-collector-bridge/commit/89d5f497178bc62c7bb5512a9bc5093e5c89a5f7"
        },
        "date": 1772810582302,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_1",
            "value": 152133,
            "unit": "ns/op\t  150751 B/op\t    1851 allocs/op",
            "extra": "7105 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_1 - ns/op",
            "value": 152133,
            "unit": "ns/op",
            "extra": "7105 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_1 - B/op",
            "value": 150751,
            "unit": "B/op",
            "extra": "7105 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_1 - allocs/op",
            "value": 1851,
            "unit": "allocs/op",
            "extra": "7105 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10",
            "value": 1248248,
            "unit": "ns/op\t  829421 B/op\t   12062 allocs/op",
            "extra": "949 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10 - ns/op",
            "value": 1248248,
            "unit": "ns/op",
            "extra": "949 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10 - B/op",
            "value": 829421,
            "unit": "B/op",
            "extra": "949 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10 - allocs/op",
            "value": 12062,
            "unit": "allocs/op",
            "extra": "949 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_100",
            "value": 14203690,
            "unit": "ns/op\t 7095378 B/op\t  102721 allocs/op",
            "extra": "84 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_100 - ns/op",
            "value": 14203690,
            "unit": "ns/op",
            "extra": "84 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_100 - B/op",
            "value": 7095378,
            "unit": "B/op",
            "extra": "84 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_100 - allocs/op",
            "value": 102721,
            "unit": "allocs/op",
            "extra": "84 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_1000/cardinality_1",
            "value": 1553917,
            "unit": "ns/op\t 1200727 B/op\t   18070 allocs/op",
            "extra": "768 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_1000/cardinality_1 - ns/op",
            "value": 1553917,
            "unit": "ns/op",
            "extra": "768 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_1000/cardinality_1 - B/op",
            "value": 1200727,
            "unit": "B/op",
            "extra": "768 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_1000/cardinality_1 - allocs/op",
            "value": 18070,
            "unit": "allocs/op",
            "extra": "768 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_1000/cardinality_10",
            "value": 13841936,
            "unit": "ns/op\t 7805919 B/op\t  120129 allocs/op",
            "extra": "85 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_1000/cardinality_10 - ns/op",
            "value": 13841936,
            "unit": "ns/op",
            "extra": "85 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_1000/cardinality_10 - B/op",
            "value": 7805919,
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
            "value": 163528104,
            "unit": "ns/op\t69431781 B/op\t 1026580 allocs/op",
            "extra": "7 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_1000/cardinality_100 - ns/op",
            "value": 163528104,
            "unit": "ns/op",
            "extra": "7 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_1000/cardinality_100 - B/op",
            "value": 69431781,
            "unit": "B/op",
            "extra": "7 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_1000/cardinality_100 - allocs/op",
            "value": 1026580,
            "unit": "allocs/op",
            "extra": "7 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_10000/cardinality_1",
            "value": 19541278,
            "unit": "ns/op\t12975051 B/op\t  180172 allocs/op",
            "extra": "61 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_10000/cardinality_1 - ns/op",
            "value": 19541278,
            "unit": "ns/op",
            "extra": "61 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_10000/cardinality_1 - B/op",
            "value": 12975051,
            "unit": "B/op",
            "extra": "61 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_10000/cardinality_1 - allocs/op",
            "value": 180172,
            "unit": "allocs/op",
            "extra": "61 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_10000/cardinality_10",
            "value": 169768112,
            "unit": "ns/op\t77992913 B/op\t 1200623 allocs/op",
            "extra": "7 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_10000/cardinality_10 - ns/op",
            "value": 169768112,
            "unit": "ns/op",
            "extra": "7 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_10000/cardinality_10 - B/op",
            "value": 77992913,
            "unit": "B/op",
            "extra": "7 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_10000/cardinality_10 - allocs/op",
            "value": 1200623,
            "unit": "allocs/op",
            "extra": "7 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_10000/cardinality_100",
            "value": 2005836644,
            "unit": "ns/op\t723662520 B/op\t10268296 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_10000/cardinality_100 - ns/op",
            "value": 2005836644,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_10000/cardinality_100 - B/op",
            "value": 723662520,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_10000/cardinality_100 - allocs/op",
            "value": 10268296,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_1",
            "value": 297340,
            "unit": "ns/op\t  321148 B/op\t    5051 allocs/op",
            "extra": "3552 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_1 - ns/op",
            "value": 297340,
            "unit": "ns/op",
            "extra": "3552 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_1 - B/op",
            "value": 321148,
            "unit": "B/op",
            "extra": "3552 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_1 - allocs/op",
            "value": 5051,
            "unit": "allocs/op",
            "extra": "3552 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10",
            "value": 2691725,
            "unit": "ns/op\t 2437402 B/op\t   42362 allocs/op",
            "extra": "434 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10 - ns/op",
            "value": 2691725,
            "unit": "ns/op",
            "extra": "434 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10 - B/op",
            "value": 2437402,
            "unit": "B/op",
            "extra": "434 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10 - allocs/op",
            "value": 42362,
            "unit": "allocs/op",
            "extra": "434 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_100",
            "value": 30833440,
            "unit": "ns/op\t23109796 B/op\t  403021 allocs/op",
            "extra": "38 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_100 - ns/op",
            "value": 30833440,
            "unit": "ns/op",
            "extra": "38 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_100 - B/op",
            "value": 23109796,
            "unit": "B/op",
            "extra": "38 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_100 - allocs/op",
            "value": 403021,
            "unit": "allocs/op",
            "extra": "38 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_1000/cardinality_1",
            "value": 3358687,
            "unit": "ns/op\t 2904745 B/op\t   50070 allocs/op",
            "extra": "357 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_1000/cardinality_1 - ns/op",
            "value": 3358687,
            "unit": "ns/op",
            "extra": "357 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_1000/cardinality_1 - B/op",
            "value": 2904745,
            "unit": "B/op",
            "extra": "357 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_1000/cardinality_1 - allocs/op",
            "value": 50070,
            "unit": "allocs/op",
            "extra": "357 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_1000/cardinality_10",
            "value": 30725411,
            "unit": "ns/op\t23885943 B/op\t  423129 allocs/op",
            "extra": "36 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_1000/cardinality_10 - ns/op",
            "value": 30725411,
            "unit": "ns/op",
            "extra": "36 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_1000/cardinality_10 - B/op",
            "value": 23885943,
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
            "value": 345219168,
            "unit": "ns/op\t229575789 B/op\t 4029580 allocs/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_1000/cardinality_100 - ns/op",
            "value": 345219168,
            "unit": "ns/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_1000/cardinality_100 - B/op",
            "value": 229575789,
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
            "name": "BenchmarkScrapeAndExport/histograms/metrics_10000/cardinality_1",
            "value": 42593721,
            "unit": "ns/op\t30015064 B/op\t  500172 allocs/op",
            "extra": "31 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_10000/cardinality_1 - ns/op",
            "value": 42593721,
            "unit": "ns/op",
            "extra": "31 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_10000/cardinality_1 - B/op",
            "value": 30015064,
            "unit": "B/op",
            "extra": "31 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_10000/cardinality_1 - allocs/op",
            "value": 500172,
            "unit": "allocs/op",
            "extra": "31 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_10000/cardinality_10",
            "value": 356762567,
            "unit": "ns/op\t238793176 B/op\t 4230625 allocs/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_10000/cardinality_10 - ns/op",
            "value": 356762567,
            "unit": "ns/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_10000/cardinality_10 - B/op",
            "value": 238793176,
            "unit": "B/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_10000/cardinality_10 - allocs/op",
            "value": 4230625,
            "unit": "allocs/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_10000/cardinality_100",
            "value": 3559072794,
            "unit": "ns/op\t2324994136 B/op\t40298309 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_10000/cardinality_100 - ns/op",
            "value": 3559072794,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_10000/cardinality_100 - B/op",
            "value": 2324994136,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_10000/cardinality_100 - allocs/op",
            "value": 40298309,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_1",
            "value": 208698,
            "unit": "ns/op\t  205921 B/op\t    2907 allocs/op",
            "extra": "5205 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_1 - ns/op",
            "value": 208698,
            "unit": "ns/op",
            "extra": "5205 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_1 - B/op",
            "value": 205921,
            "unit": "B/op",
            "extra": "5205 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_1 - allocs/op",
            "value": 2907,
            "unit": "allocs/op",
            "extra": "5205 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10",
            "value": 1871246,
            "unit": "ns/op\t 1354247 B/op\t   22061 allocs/op",
            "extra": "632 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10 - ns/op",
            "value": 1871246,
            "unit": "ns/op",
            "extra": "632 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10 - B/op",
            "value": 1354247,
            "unit": "B/op",
            "extra": "632 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10 - allocs/op",
            "value": 22061,
            "unit": "allocs/op",
            "extra": "632 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_100",
            "value": 19005183,
            "unit": "ns/op\t12326806 B/op\t  201820 allocs/op",
            "extra": "64 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_100 - ns/op",
            "value": 19005183,
            "unit": "ns/op",
            "extra": "64 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_100 - B/op",
            "value": 12326806,
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
            "name": "BenchmarkScrapeAndExport/mixed/metrics_1000/cardinality_1",
            "value": 2158641,
            "unit": "ns/op\t 1757499 B/op\t   28726 allocs/op",
            "extra": "554 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_1000/cardinality_1 - ns/op",
            "value": 2158641,
            "unit": "ns/op",
            "extra": "554 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_1000/cardinality_1 - B/op",
            "value": 1757499,
            "unit": "B/op",
            "extra": "554 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_1000/cardinality_1 - allocs/op",
            "value": 28726,
            "unit": "allocs/op",
            "extra": "554 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_1000/cardinality_10",
            "value": 19879900,
            "unit": "ns/op\t13101948 B/op\t  221028 allocs/op",
            "extra": "61 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_1000/cardinality_10 - ns/op",
            "value": 19879900,
            "unit": "ns/op",
            "extra": "61 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_1000/cardinality_10 - B/op",
            "value": 13101948,
            "unit": "B/op",
            "extra": "61 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_1000/cardinality_10 - allocs/op",
            "value": 221028,
            "unit": "allocs/op",
            "extra": "61 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_1000/cardinality_100",
            "value": 231095333,
            "unit": "ns/op\t122221604 B/op\t 2026579 allocs/op",
            "extra": "5 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_1000/cardinality_100 - ns/op",
            "value": 231095333,
            "unit": "ns/op",
            "extra": "5 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_1000/cardinality_100 - B/op",
            "value": 122221604,
            "unit": "B/op",
            "extra": "5 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_1000/cardinality_100 - allocs/op",
            "value": 2026579,
            "unit": "allocs/op",
            "extra": "5 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_10000/cardinality_1",
            "value": 26996441,
            "unit": "ns/op\t18547832 B/op\t  286828 allocs/op",
            "extra": "39 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_10000/cardinality_1 - ns/op",
            "value": 26996441,
            "unit": "ns/op",
            "extra": "39 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_10000/cardinality_1 - B/op",
            "value": 18547832,
            "unit": "B/op",
            "extra": "39 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_10000/cardinality_1 - allocs/op",
            "value": 286828,
            "unit": "allocs/op",
            "extra": "39 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_10000/cardinality_10",
            "value": 238429052,
            "unit": "ns/op\t131001025 B/op\t 2210522 allocs/op",
            "extra": "5 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_10000/cardinality_10 - ns/op",
            "value": 238429052,
            "unit": "ns/op",
            "extra": "5 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_10000/cardinality_10 - B/op",
            "value": 131001025,
            "unit": "B/op",
            "extra": "5 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_10000/cardinality_10 - allocs/op",
            "value": 2210522,
            "unit": "allocs/op",
            "extra": "5 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_10000/cardinality_100",
            "value": 2762643257,
            "unit": "ns/op\t1252037032 B/op\t20277302 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_10000/cardinality_100 - ns/op",
            "value": 2762643257,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_10000/cardinality_100 - B/op",
            "value": 1252037032,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_10000/cardinality_100 - allocs/op",
            "value": 20277302,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
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
          "id": "965a1f620cf917250089838def38a7b783dc6941",
          "message": "Merge pull request #10 from prometheus/deps-update/actions-checkout-5.x\n\nUpdate actions/checkout action to v5",
          "timestamp": "2026-03-06T12:22:09-03:00",
          "tree_id": "d2511bcb0535c229c7b16e46b28666affcf46924",
          "url": "https://github.com/prometheus/opentelemetry-collector-bridge/commit/965a1f620cf917250089838def38a7b783dc6941"
        },
        "date": 1772810599132,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_1",
            "value": 155372,
            "unit": "ns/op\t  150752 B/op\t    1851 allocs/op",
            "extra": "7710 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_1 - ns/op",
            "value": 155372,
            "unit": "ns/op",
            "extra": "7710 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_1 - B/op",
            "value": 150752,
            "unit": "B/op",
            "extra": "7710 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_1 - allocs/op",
            "value": 1851,
            "unit": "allocs/op",
            "extra": "7710 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10",
            "value": 1263310,
            "unit": "ns/op\t  829408 B/op\t   12062 allocs/op",
            "extra": "957 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10 - ns/op",
            "value": 1263310,
            "unit": "ns/op",
            "extra": "957 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10 - B/op",
            "value": 829408,
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
            "value": 13516010,
            "unit": "ns/op\t 7095381 B/op\t  102721 allocs/op",
            "extra": "79 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_100 - ns/op",
            "value": 13516010,
            "unit": "ns/op",
            "extra": "79 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_100 - B/op",
            "value": 7095381,
            "unit": "B/op",
            "extra": "79 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_100 - allocs/op",
            "value": 102721,
            "unit": "allocs/op",
            "extra": "79 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_1000/cardinality_1",
            "value": 1585831,
            "unit": "ns/op\t 1200734 B/op\t   18070 allocs/op",
            "extra": "770 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_1000/cardinality_1 - ns/op",
            "value": 1585831,
            "unit": "ns/op",
            "extra": "770 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_1000/cardinality_1 - B/op",
            "value": 1200734,
            "unit": "B/op",
            "extra": "770 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_1000/cardinality_1 - allocs/op",
            "value": 18070,
            "unit": "allocs/op",
            "extra": "770 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_1000/cardinality_10",
            "value": 13628593,
            "unit": "ns/op\t 7805927 B/op\t  120129 allocs/op",
            "extra": "84 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_1000/cardinality_10 - ns/op",
            "value": 13628593,
            "unit": "ns/op",
            "extra": "84 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_1000/cardinality_10 - B/op",
            "value": 7805927,
            "unit": "B/op",
            "extra": "84 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_1000/cardinality_10 - allocs/op",
            "value": 120129,
            "unit": "allocs/op",
            "extra": "84 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_1000/cardinality_100",
            "value": 167927305,
            "unit": "ns/op\t69431816 B/op\t 1026580 allocs/op",
            "extra": "7 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_1000/cardinality_100 - ns/op",
            "value": 167927305,
            "unit": "ns/op",
            "extra": "7 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_1000/cardinality_100 - B/op",
            "value": 69431816,
            "unit": "B/op",
            "extra": "7 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_1000/cardinality_100 - allocs/op",
            "value": 1026580,
            "unit": "allocs/op",
            "extra": "7 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_10000/cardinality_1",
            "value": 19257243,
            "unit": "ns/op\t12975052 B/op\t  180172 allocs/op",
            "extra": "55 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_10000/cardinality_1 - ns/op",
            "value": 19257243,
            "unit": "ns/op",
            "extra": "55 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_10000/cardinality_1 - B/op",
            "value": 12975052,
            "unit": "B/op",
            "extra": "55 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_10000/cardinality_1 - allocs/op",
            "value": 180172,
            "unit": "allocs/op",
            "extra": "55 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_10000/cardinality_10",
            "value": 173528938,
            "unit": "ns/op\t77992912 B/op\t 1200623 allocs/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_10000/cardinality_10 - ns/op",
            "value": 173528938,
            "unit": "ns/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_10000/cardinality_10 - B/op",
            "value": 77992912,
            "unit": "B/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_10000/cardinality_10 - allocs/op",
            "value": 1200623,
            "unit": "allocs/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_10000/cardinality_100",
            "value": 1735334977,
            "unit": "ns/op\t723625224 B/op\t10268288 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_10000/cardinality_100 - ns/op",
            "value": 1735334977,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_10000/cardinality_100 - B/op",
            "value": 723625224,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_10000/cardinality_100 - allocs/op",
            "value": 10268288,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_1",
            "value": 292410,
            "unit": "ns/op\t  321145 B/op\t    5051 allocs/op",
            "extra": "3608 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_1 - ns/op",
            "value": 292410,
            "unit": "ns/op",
            "extra": "3608 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_1 - B/op",
            "value": 321145,
            "unit": "B/op",
            "extra": "3608 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_1 - allocs/op",
            "value": 5051,
            "unit": "allocs/op",
            "extra": "3608 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10",
            "value": 2716127,
            "unit": "ns/op\t 2437385 B/op\t   42362 allocs/op",
            "extra": "414 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10 - ns/op",
            "value": 2716127,
            "unit": "ns/op",
            "extra": "414 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10 - B/op",
            "value": 2437385,
            "unit": "B/op",
            "extra": "414 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10 - allocs/op",
            "value": 42362,
            "unit": "allocs/op",
            "extra": "414 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_100",
            "value": 31925685,
            "unit": "ns/op\t23109790 B/op\t  403021 allocs/op",
            "extra": "40 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_100 - ns/op",
            "value": 31925685,
            "unit": "ns/op",
            "extra": "40 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_100 - B/op",
            "value": 23109790,
            "unit": "B/op",
            "extra": "40 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_100 - allocs/op",
            "value": 403021,
            "unit": "allocs/op",
            "extra": "40 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_1000/cardinality_1",
            "value": 3354169,
            "unit": "ns/op\t 2904748 B/op\t   50070 allocs/op",
            "extra": "338 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_1000/cardinality_1 - ns/op",
            "value": 3354169,
            "unit": "ns/op",
            "extra": "338 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_1000/cardinality_1 - B/op",
            "value": 2904748,
            "unit": "B/op",
            "extra": "338 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_1000/cardinality_1 - allocs/op",
            "value": 50070,
            "unit": "allocs/op",
            "extra": "338 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_1000/cardinality_10",
            "value": 32854259,
            "unit": "ns/op\t23885939 B/op\t  423129 allocs/op",
            "extra": "38 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_1000/cardinality_10 - ns/op",
            "value": 32854259,
            "unit": "ns/op",
            "extra": "38 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_1000/cardinality_10 - B/op",
            "value": 23885939,
            "unit": "B/op",
            "extra": "38 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_1000/cardinality_10 - allocs/op",
            "value": 423129,
            "unit": "allocs/op",
            "extra": "38 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_1000/cardinality_100",
            "value": 362936623,
            "unit": "ns/op\t229576109 B/op\t 4029583 allocs/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_1000/cardinality_100 - ns/op",
            "value": 362936623,
            "unit": "ns/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_1000/cardinality_100 - B/op",
            "value": 229576109,
            "unit": "B/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_1000/cardinality_100 - allocs/op",
            "value": 4029583,
            "unit": "allocs/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_10000/cardinality_1",
            "value": 41443789,
            "unit": "ns/op\t30015083 B/op\t  500172 allocs/op",
            "extra": "31 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_10000/cardinality_1 - ns/op",
            "value": 41443789,
            "unit": "ns/op",
            "extra": "31 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_10000/cardinality_1 - B/op",
            "value": 30015083,
            "unit": "B/op",
            "extra": "31 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_10000/cardinality_1 - allocs/op",
            "value": 500172,
            "unit": "allocs/op",
            "extra": "31 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_10000/cardinality_10",
            "value": 359784864,
            "unit": "ns/op\t238792904 B/op\t 4230623 allocs/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_10000/cardinality_10 - ns/op",
            "value": 359784864,
            "unit": "ns/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_10000/cardinality_10 - B/op",
            "value": 238792904,
            "unit": "B/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_10000/cardinality_10 - allocs/op",
            "value": 4230623,
            "unit": "allocs/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_10000/cardinality_100",
            "value": 4070177095,
            "unit": "ns/op\t2324963704 B/op\t40298325 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_10000/cardinality_100 - ns/op",
            "value": 4070177095,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_10000/cardinality_100 - B/op",
            "value": 2324963704,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_10000/cardinality_100 - allocs/op",
            "value": 40298325,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_1",
            "value": 211790,
            "unit": "ns/op\t  205920 B/op\t    2907 allocs/op",
            "extra": "5193 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_1 - ns/op",
            "value": 211790,
            "unit": "ns/op",
            "extra": "5193 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_1 - B/op",
            "value": 205920,
            "unit": "B/op",
            "extra": "5193 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_1 - allocs/op",
            "value": 2907,
            "unit": "allocs/op",
            "extra": "5193 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10",
            "value": 1865677,
            "unit": "ns/op\t 1354237 B/op\t   22061 allocs/op",
            "extra": "630 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10 - ns/op",
            "value": 1865677,
            "unit": "ns/op",
            "extra": "630 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10 - B/op",
            "value": 1354237,
            "unit": "B/op",
            "extra": "630 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10 - allocs/op",
            "value": 22061,
            "unit": "allocs/op",
            "extra": "630 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_100",
            "value": 19109733,
            "unit": "ns/op\t12326805 B/op\t  201820 allocs/op",
            "extra": "63 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_100 - ns/op",
            "value": 19109733,
            "unit": "ns/op",
            "extra": "63 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_100 - B/op",
            "value": 12326805,
            "unit": "B/op",
            "extra": "63 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_100 - allocs/op",
            "value": 201820,
            "unit": "allocs/op",
            "extra": "63 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_1000/cardinality_1",
            "value": 2160174,
            "unit": "ns/op\t 1757501 B/op\t   28726 allocs/op",
            "extra": "554 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_1000/cardinality_1 - ns/op",
            "value": 2160174,
            "unit": "ns/op",
            "extra": "554 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_1000/cardinality_1 - B/op",
            "value": 1757501,
            "unit": "B/op",
            "extra": "554 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_1000/cardinality_1 - allocs/op",
            "value": 28726,
            "unit": "allocs/op",
            "extra": "554 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_1000/cardinality_10",
            "value": 19613483,
            "unit": "ns/op\t13101948 B/op\t  221028 allocs/op",
            "extra": "58 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_1000/cardinality_10 - ns/op",
            "value": 19613483,
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
            "value": 230349257,
            "unit": "ns/op\t122229448 B/op\t 2026580 allocs/op",
            "extra": "5 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_1000/cardinality_100 - ns/op",
            "value": 230349257,
            "unit": "ns/op",
            "extra": "5 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_1000/cardinality_100 - B/op",
            "value": 122229448,
            "unit": "B/op",
            "extra": "5 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_1000/cardinality_100 - allocs/op",
            "value": 2026580,
            "unit": "allocs/op",
            "extra": "5 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_10000/cardinality_1",
            "value": 27163122,
            "unit": "ns/op\t18547834 B/op\t  286828 allocs/op",
            "extra": "43 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_10000/cardinality_1 - ns/op",
            "value": 27163122,
            "unit": "ns/op",
            "extra": "43 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_10000/cardinality_1 - B/op",
            "value": 18547834,
            "unit": "B/op",
            "extra": "43 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_10000/cardinality_1 - allocs/op",
            "value": 286828,
            "unit": "allocs/op",
            "extra": "43 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_10000/cardinality_10",
            "value": 239714475,
            "unit": "ns/op\t131001028 B/op\t 2210522 allocs/op",
            "extra": "5 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_10000/cardinality_10 - ns/op",
            "value": 239714475,
            "unit": "ns/op",
            "extra": "5 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_10000/cardinality_10 - B/op",
            "value": 131001028,
            "unit": "B/op",
            "extra": "5 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_10000/cardinality_10 - allocs/op",
            "value": 2210522,
            "unit": "allocs/op",
            "extra": "5 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_10000/cardinality_100",
            "value": 2850833919,
            "unit": "ns/op\t1251963464 B/op\t20277297 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_10000/cardinality_100 - ns/op",
            "value": 2850833919,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_10000/cardinality_100 - B/op",
            "value": 1251963464,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_10000/cardinality_100 - allocs/op",
            "value": 20277297,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
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
          "id": "a8269fee035b22ea642802c963e93f72700cfeed",
          "message": "Merge pull request #12 from prometheus/deps-update/actions-checkout-5.x\n\nUpdate actions/checkout action to v5",
          "timestamp": "2026-03-06T12:26:16-03:00",
          "tree_id": "a1831d5593452da0f9005741bd25eb8b767bdb9e",
          "url": "https://github.com/prometheus/opentelemetry-collector-bridge/commit/a8269fee035b22ea642802c963e93f72700cfeed"
        },
        "date": 1772810847195,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_1",
            "value": 152666,
            "unit": "ns/op\t  150750 B/op\t    1851 allocs/op",
            "extra": "7502 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_1 - ns/op",
            "value": 152666,
            "unit": "ns/op",
            "extra": "7502 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_1 - B/op",
            "value": 150750,
            "unit": "B/op",
            "extra": "7502 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_1 - allocs/op",
            "value": 1851,
            "unit": "allocs/op",
            "extra": "7502 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10",
            "value": 1258709,
            "unit": "ns/op\t  829418 B/op\t   12062 allocs/op",
            "extra": "937 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10 - ns/op",
            "value": 1258709,
            "unit": "ns/op",
            "extra": "937 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10 - B/op",
            "value": 829418,
            "unit": "B/op",
            "extra": "937 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_10 - allocs/op",
            "value": 12062,
            "unit": "allocs/op",
            "extra": "937 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_100",
            "value": 13454805,
            "unit": "ns/op\t 7095386 B/op\t  102721 allocs/op",
            "extra": "82 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_100 - ns/op",
            "value": 13454805,
            "unit": "ns/op",
            "extra": "82 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_100 - B/op",
            "value": 7095386,
            "unit": "B/op",
            "extra": "82 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_100/cardinality_100 - allocs/op",
            "value": 102721,
            "unit": "allocs/op",
            "extra": "82 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_1000/cardinality_1",
            "value": 1627303,
            "unit": "ns/op\t 1200743 B/op\t   18070 allocs/op",
            "extra": "772 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_1000/cardinality_1 - ns/op",
            "value": 1627303,
            "unit": "ns/op",
            "extra": "772 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_1000/cardinality_1 - B/op",
            "value": 1200743,
            "unit": "B/op",
            "extra": "772 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_1000/cardinality_1 - allocs/op",
            "value": 18070,
            "unit": "allocs/op",
            "extra": "772 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_1000/cardinality_10",
            "value": 13827692,
            "unit": "ns/op\t 7805915 B/op\t  120129 allocs/op",
            "extra": "86 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_1000/cardinality_10 - ns/op",
            "value": 13827692,
            "unit": "ns/op",
            "extra": "86 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_1000/cardinality_10 - B/op",
            "value": 7805915,
            "unit": "B/op",
            "extra": "86 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_1000/cardinality_10 - allocs/op",
            "value": 120129,
            "unit": "allocs/op",
            "extra": "86 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_1000/cardinality_100",
            "value": 166175642,
            "unit": "ns/op\t69431779 B/op\t 1026580 allocs/op",
            "extra": "7 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_1000/cardinality_100 - ns/op",
            "value": 166175642,
            "unit": "ns/op",
            "extra": "7 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_1000/cardinality_100 - B/op",
            "value": 69431779,
            "unit": "B/op",
            "extra": "7 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_1000/cardinality_100 - allocs/op",
            "value": 1026580,
            "unit": "allocs/op",
            "extra": "7 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_10000/cardinality_1",
            "value": 19542294,
            "unit": "ns/op\t12975050 B/op\t  180172 allocs/op",
            "extra": "60 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_10000/cardinality_1 - ns/op",
            "value": 19542294,
            "unit": "ns/op",
            "extra": "60 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_10000/cardinality_1 - B/op",
            "value": 12975050,
            "unit": "B/op",
            "extra": "60 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_10000/cardinality_1 - allocs/op",
            "value": 180172,
            "unit": "allocs/op",
            "extra": "60 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_10000/cardinality_10",
            "value": 171535737,
            "unit": "ns/op\t77992917 B/op\t 1200623 allocs/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_10000/cardinality_10 - ns/op",
            "value": 171535737,
            "unit": "ns/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_10000/cardinality_10 - B/op",
            "value": 77992917,
            "unit": "B/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_10000/cardinality_10 - allocs/op",
            "value": 1200623,
            "unit": "allocs/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_10000/cardinality_100",
            "value": 1869103790,
            "unit": "ns/op\t723588200 B/op\t10268283 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_10000/cardinality_100 - ns/op",
            "value": 1869103790,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_10000/cardinality_100 - B/op",
            "value": 723588200,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/counters/metrics_10000/cardinality_100 - allocs/op",
            "value": 10268283,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_1",
            "value": 291602,
            "unit": "ns/op\t  321146 B/op\t    5051 allocs/op",
            "extra": "3735 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_1 - ns/op",
            "value": 291602,
            "unit": "ns/op",
            "extra": "3735 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_1 - B/op",
            "value": 321146,
            "unit": "B/op",
            "extra": "3735 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_1 - allocs/op",
            "value": 5051,
            "unit": "allocs/op",
            "extra": "3735 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10",
            "value": 2689470,
            "unit": "ns/op\t 2437399 B/op\t   42362 allocs/op",
            "extra": "441 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10 - ns/op",
            "value": 2689470,
            "unit": "ns/op",
            "extra": "441 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10 - B/op",
            "value": 2437399,
            "unit": "B/op",
            "extra": "441 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_10 - allocs/op",
            "value": 42362,
            "unit": "allocs/op",
            "extra": "441 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_100",
            "value": 31382059,
            "unit": "ns/op\t23109802 B/op\t  403021 allocs/op",
            "extra": "34 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_100 - ns/op",
            "value": 31382059,
            "unit": "ns/op",
            "extra": "34 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_100 - B/op",
            "value": 23109802,
            "unit": "B/op",
            "extra": "34 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_100/cardinality_100 - allocs/op",
            "value": 403021,
            "unit": "allocs/op",
            "extra": "34 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_1000/cardinality_1",
            "value": 3384572,
            "unit": "ns/op\t 2904745 B/op\t   50070 allocs/op",
            "extra": "355 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_1000/cardinality_1 - ns/op",
            "value": 3384572,
            "unit": "ns/op",
            "extra": "355 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_1000/cardinality_1 - B/op",
            "value": 2904745,
            "unit": "B/op",
            "extra": "355 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_1000/cardinality_1 - allocs/op",
            "value": 50070,
            "unit": "allocs/op",
            "extra": "355 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_1000/cardinality_10",
            "value": 31566181,
            "unit": "ns/op\t23885928 B/op\t  423129 allocs/op",
            "extra": "38 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_1000/cardinality_10 - ns/op",
            "value": 31566181,
            "unit": "ns/op",
            "extra": "38 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_1000/cardinality_10 - B/op",
            "value": 23885928,
            "unit": "B/op",
            "extra": "38 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_1000/cardinality_10 - allocs/op",
            "value": 423129,
            "unit": "allocs/op",
            "extra": "38 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_1000/cardinality_100",
            "value": 354433402,
            "unit": "ns/op\t229575810 B/op\t 4029580 allocs/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_1000/cardinality_100 - ns/op",
            "value": 354433402,
            "unit": "ns/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_1000/cardinality_100 - B/op",
            "value": 229575810,
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
            "name": "BenchmarkScrapeAndExport/histograms/metrics_10000/cardinality_1",
            "value": 43822535,
            "unit": "ns/op\t30015073 B/op\t  500172 allocs/op",
            "extra": "28 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_10000/cardinality_1 - ns/op",
            "value": 43822535,
            "unit": "ns/op",
            "extra": "28 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_10000/cardinality_1 - B/op",
            "value": 30015073,
            "unit": "B/op",
            "extra": "28 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_10000/cardinality_1 - allocs/op",
            "value": 500172,
            "unit": "allocs/op",
            "extra": "28 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_10000/cardinality_10",
            "value": 368642802,
            "unit": "ns/op\t238792973 B/op\t 4230623 allocs/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_10000/cardinality_10 - ns/op",
            "value": 368642802,
            "unit": "ns/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_10000/cardinality_10 - B/op",
            "value": 238792973,
            "unit": "B/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_10000/cardinality_10 - allocs/op",
            "value": 4230623,
            "unit": "allocs/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_10000/cardinality_100",
            "value": 4115574997,
            "unit": "ns/op\t2325078072 B/op\t40298352 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_10000/cardinality_100 - ns/op",
            "value": 4115574997,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_10000/cardinality_100 - B/op",
            "value": 2325078072,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/histograms/metrics_10000/cardinality_100 - allocs/op",
            "value": 40298352,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_1",
            "value": 211260,
            "unit": "ns/op\t  205921 B/op\t    2907 allocs/op",
            "extra": "5112 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_1 - ns/op",
            "value": 211260,
            "unit": "ns/op",
            "extra": "5112 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_1 - B/op",
            "value": 205921,
            "unit": "B/op",
            "extra": "5112 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_1 - allocs/op",
            "value": 2907,
            "unit": "allocs/op",
            "extra": "5112 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10",
            "value": 1904335,
            "unit": "ns/op\t 1354240 B/op\t   22061 allocs/op",
            "extra": "626 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10 - ns/op",
            "value": 1904335,
            "unit": "ns/op",
            "extra": "626 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10 - B/op",
            "value": 1354240,
            "unit": "B/op",
            "extra": "626 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_10 - allocs/op",
            "value": 22061,
            "unit": "allocs/op",
            "extra": "626 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_100",
            "value": 20386734,
            "unit": "ns/op\t12326806 B/op\t  201820 allocs/op",
            "extra": "52 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_100 - ns/op",
            "value": 20386734,
            "unit": "ns/op",
            "extra": "52 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_100 - B/op",
            "value": 12326806,
            "unit": "B/op",
            "extra": "52 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_100/cardinality_100 - allocs/op",
            "value": 201820,
            "unit": "allocs/op",
            "extra": "52 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_1000/cardinality_1",
            "value": 2165822,
            "unit": "ns/op\t 1757504 B/op\t   28726 allocs/op",
            "extra": "556 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_1000/cardinality_1 - ns/op",
            "value": 2165822,
            "unit": "ns/op",
            "extra": "556 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_1000/cardinality_1 - B/op",
            "value": 1757504,
            "unit": "B/op",
            "extra": "556 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_1000/cardinality_1 - allocs/op",
            "value": 28726,
            "unit": "allocs/op",
            "extra": "556 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_1000/cardinality_10",
            "value": 20018984,
            "unit": "ns/op\t13101977 B/op\t  221028 allocs/op",
            "extra": "58 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_1000/cardinality_10 - ns/op",
            "value": 20018984,
            "unit": "ns/op",
            "extra": "58 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_1000/cardinality_10 - B/op",
            "value": 13101977,
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
            "value": 233006076,
            "unit": "ns/op\t122221604 B/op\t 2026579 allocs/op",
            "extra": "5 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_1000/cardinality_100 - ns/op",
            "value": 233006076,
            "unit": "ns/op",
            "extra": "5 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_1000/cardinality_100 - B/op",
            "value": 122221604,
            "unit": "B/op",
            "extra": "5 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_1000/cardinality_100 - allocs/op",
            "value": 2026579,
            "unit": "allocs/op",
            "extra": "5 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_10000/cardinality_1",
            "value": 28051840,
            "unit": "ns/op\t18547831 B/op\t  286828 allocs/op",
            "extra": "42 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_10000/cardinality_1 - ns/op",
            "value": 28051840,
            "unit": "ns/op",
            "extra": "42 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_10000/cardinality_1 - B/op",
            "value": 18547831,
            "unit": "B/op",
            "extra": "42 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_10000/cardinality_1 - allocs/op",
            "value": 286828,
            "unit": "allocs/op",
            "extra": "42 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_10000/cardinality_10",
            "value": 250669580,
            "unit": "ns/op\t131001188 B/op\t 2210524 allocs/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_10000/cardinality_10 - ns/op",
            "value": 250669580,
            "unit": "ns/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_10000/cardinality_10 - B/op",
            "value": 131001188,
            "unit": "B/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_10000/cardinality_10 - allocs/op",
            "value": 2210524,
            "unit": "allocs/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_10000/cardinality_100",
            "value": 2838298557,
            "unit": "ns/op\t1252110808 B/op\t20277309 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_10000/cardinality_100 - ns/op",
            "value": 2838298557,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_10000/cardinality_100 - B/op",
            "value": 1252110808,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkScrapeAndExport/mixed/metrics_10000/cardinality_100 - allocs/op",
            "value": 20277309,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          }
        ]
      }
    ]
  }
}