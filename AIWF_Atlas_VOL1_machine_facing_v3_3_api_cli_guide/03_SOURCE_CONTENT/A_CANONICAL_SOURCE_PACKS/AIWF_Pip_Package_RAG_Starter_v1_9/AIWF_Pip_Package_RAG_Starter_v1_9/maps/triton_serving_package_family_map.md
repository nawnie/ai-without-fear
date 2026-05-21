# Triton Serving Package Family Map

## Server/runtime layer
- `tritonserver` is usually installed/run through NVIDIA containers, system packages, or release artifacts, not as the same thing as `pip install tritonclient`.
- Backends live in the server runtime and may include TensorRT, ONNX Runtime, PyTorch, Python, DALI, FIL, TensorRT-LLM, vLLM, or custom backend shared libraries.

## Client/API layer
- `tritonclient`: Python HTTP/gRPC client.
- `grpcio`: gRPC transport layer.
- `grpcio-tools`: proto generation/build tooling.
- `geventhttpclient`: HTTP transport dependency in some client paths.

## Python serving/wrapper layer
- `pytriton`: Pythonic Triton-serving wrapper for binding models/callables.
- Python backend itself is server/backend behavior, not merely a pip package in the client venv.

## Optimization/deployment tooling
- `triton-model-navigator`: explores export/conversion/deployment paths.
- `triton-model-analyzer`: characterizes memory/compute behavior and configuration tradeoffs.
- Perf Analyzer is commonly obtained through Triton SDK/container tooling rather than a normal beginner pip package.

## Observability layer
- `prometheus-client`: Python-side metrics helper; Triton itself exposes Prometheus-format metrics.
- `nvidia-ml-py`: Python NVML bindings useful for local GPU telemetry support probes.

## Cluster/orchestration layer
- `kubernetes`: advanced remote deployment automation. Not needed for local Windows beginner support.
