# Triton Inference Server Serving Deep Reference

## AIWF support position
Triton is not another Python library in the same category as `diffusers` or `torch`. It is a serving runtime. A support system must separate the process that calls inference from the process that owns model loading, scheduling, batching, backend execution, memory pools, HTTP/gRPC endpoints, metrics, and model lifecycle.

## Mental model
A Triton deployment has these layers:

1. **Hardware layer** — GPU, driver, CUDA-visible devices, MIG/compute mode if applicable.
2. **Server runtime layer** — Triton server binary/container, release tag, backends included, launch flags.
3. **Model repository layer** — directory or cloud repository containing model folders, version folders, model files, and `config.pbtxt`.
4. **Backend layer** — TensorRT, ONNX Runtime, PyTorch, Python, DALI, FIL, OpenVINO, TensorRT-LLM, vLLM, or custom backend.
5. **Model configuration layer** — platform/backend, inputs/outputs, dynamic batching, instance groups, optimization blocks, version policy, response cache, decoupled/sequence/stateful behavior.
6. **Client/API layer** — HTTP/REST, gRPC, C API, C++ wrapper, Python `tritonclient`, or in-process embedding.
7. **Observability layer** — health/readiness, logs, Prometheus metrics, traces, Model Analyzer/Perf Analyzer.

## Common support mistake
Do not equate `pip install tritonclient` with installing Triton. The client package can be healthy while the server is absent, wrong-versioned, CPU-only, not exposing ports, unable to load a model, missing plugins, or failing inside a backend.

## Standard endpoint boundary
Typical Triton examples expose HTTP/REST `8000`, gRPC `8001`, and Prometheus metrics `8002`. These are conventions from NVIDIA examples, not magic. Always capture the actual launch command and port mappings.

## Server launch data to capture
```text
tritonserver --model-repository=<path>
server/container version tag
GPU driver version
GPU model(s)
CUDA/cuDNN/TensorRT family
loaded backend list
model repository path(s)
model control mode
strict model config setting
HTTP/gRPC/metrics ports
server log from startup through model load
```

## Backend selection rules
- TensorRT `.plan` engines are fastest when already built correctly, but are version/platform/GPU-sensitive artifacts.
- ONNX Runtime models are more portable than TensorRT engines but still depend on providers, opset, CUDA/cuDNN compatibility, and unsupported operators.
- PyTorch backend expects supported TorchScript / PyTorch 2.0 paths; raw Python model code belongs in Python backend or PyTriton-style serving.
- Python backend is excellent for glue, preprocessing, postprocessing, and custom logic, but it can execute Python code and must be treated as trusted-code deployment.
- TensorRT-LLM backend is not ordinary TensorRT; it has its own model/build/deployment conventions.

## AIWF recommendation for local support systems
For beginner/local AI troubleshooting, Triton should be an advanced optional path. It is valuable for local AI service consolidation, model benchmarking, multi-client inference, and production-like serving, but it adds process, repository, backend, and endpoint complexity.
