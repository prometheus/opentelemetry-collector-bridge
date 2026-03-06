window.BENCHMARK_DATA = {
  "lastUpdate": 1772810582591,
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
      }
    ]
  }
}