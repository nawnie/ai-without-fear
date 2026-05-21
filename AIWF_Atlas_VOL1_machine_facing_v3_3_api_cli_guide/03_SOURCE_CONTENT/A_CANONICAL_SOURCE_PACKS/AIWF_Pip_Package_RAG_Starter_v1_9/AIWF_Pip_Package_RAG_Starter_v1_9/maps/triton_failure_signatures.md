# Triton Failure Signatures

## Client/server boundary failures
- `Connection refused`: server is not running, wrong host/port, container port not mapped, firewall, or service crashed.
- HTTP health live works but ready fails: server alive but not ready, often model load/model-control issue.
- Client import works but inference fails: client package is fine; inspect server logs and model config.

## Model repository failures
- `failed to load model`: inspect `config.pbtxt`, folder layout, backend, version folder, model filename.
- `no version is available`: missing numeric version directory or version policy mismatch.
- `unexpected inference input`: input name mismatch.
- `unexpected shape`: client shape/batching config mismatch.
- `unexpected datatype`: dtype mismatch, especially FP16/FP32/INT64/INT32 differences.

## Backend failures
- TensorRT: engine/runtime/plugin/GPU/TensorRT version mismatch.
- ONNX Runtime: unsupported opset/operator/provider/DLL mismatch.
- Python backend: missing Python dependency, wrong execution environment, exception in model.py.
- PyTorch backend: model format/export backend expectation mismatch.

## Performance failures
- Good latency but poor throughput: instance count, dynamic batching, client concurrency, or GPU underutilization.
- High throughput but bad tail latency: batching queue delay, Python backend overhead, CPU preprocessing, network transport.
- VRAM OOM on load: too many instances, too-large engine, multiple models, wrong precision, or memory pool config.
- First request very slow: warmup, lazy allocation, engine build, dynamic shape path, or Python import/model load.

## Security failure class
- Exposed model loading API or writable model repository with Python backend enabled can become arbitrary code execution. Restrict repository write access and dynamic model control.
