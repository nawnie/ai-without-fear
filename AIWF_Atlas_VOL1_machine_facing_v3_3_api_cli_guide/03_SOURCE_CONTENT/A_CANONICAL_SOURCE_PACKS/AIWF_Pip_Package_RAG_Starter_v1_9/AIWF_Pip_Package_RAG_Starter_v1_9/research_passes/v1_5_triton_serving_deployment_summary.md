# v1.5 Research Pass — Triton Serving and Deployment

## Scope
This pass adds Triton serving knowledge for AIWF support: model repository layout, `config.pbtxt`, Triton client package behavior, Python backend, health/readiness, metrics, Perf Analyzer, Model Analyzer, Model Navigator, and local support bundle capture.

## Key conclusion
Triton is a service boundary. For support, never stop at package import. Capture server runtime, model repository, backend, model config, endpoint state, client request, logs, and metrics.

## Added packages
- pytriton
- triton-model-analyzer
- triton-model-navigator
- prometheus-client
- grpcio
- grpcio-tools
- geventhttpclient
- nvidia-pyindex
- nvidia-ml-py
- kubernetes

## Practical AIWF policy
Triton should be advanced/optional for beginners. It is powerful when multiple local apps need a shared inference service or when TensorRT/ONNX/PyTorch/Python models need production-like serving, but it adds model repository and endpoint complexity that ComfyUI-style direct inference avoids.
