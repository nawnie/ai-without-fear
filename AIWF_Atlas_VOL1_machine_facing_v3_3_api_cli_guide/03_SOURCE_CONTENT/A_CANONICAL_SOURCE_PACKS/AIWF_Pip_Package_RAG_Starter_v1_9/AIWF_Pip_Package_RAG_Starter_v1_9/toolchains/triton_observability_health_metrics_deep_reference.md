# Triton Observability, Health, Metrics, and Performance Deep Reference

## Basic probes
```powershell
Invoke-WebRequest http://127.0.0.1:8000/v2/health/live -UseBasicParsing
Invoke-WebRequest http://127.0.0.1:8000/v2/health/ready -UseBasicParsing
Invoke-WebRequest http://127.0.0.1:8002/metrics -UseBasicParsing
```

## What the probes mean
- **Live**: server process is alive.
- **Ready**: server is ready to receive inference requests; depending on model control and loading status, this may differ from liveness.
- **Model ready**: specific model is ready, which is stronger than server readiness.
- **Metrics**: request counts, latencies, GPU/CPU metrics, pinned memory, cache stats, and custom metrics when enabled.

## Metrics are evidence, not decoration
Triton exposes Prometheus-format metrics by default on the metrics endpoint in standard configurations. For support, archive the metrics text with the server log and client request. This lets the RAG reason about latency, request count, execution count, memory pressure, GPU utilization, and batching effects.

## Perf Analyzer vs Model Analyzer
- **Perf Analyzer** sends load to a model and measures performance under different request/concurrency/input modes.
- **Model Analyzer** uses Perf Analyzer and GPU telemetry to characterize memory/compute behavior across batching and instance configurations.

## AIWF interpretation rules
- A single successful inference proves only basic correctness, not throughput.
- Random-input benchmarking can prove server path performance but not model-quality correctness.
- If request count and execution count differ, batching is happening.
- Latency outliers may be model warmup, engine build, dynamic shape compilation, Python backend overhead, or queueing.
- Compare metrics before and after config changes; do not tune by vibes.
