# Triton Model Repository and config.pbtxt Deep Reference

## Why this matters
Most Triton failures are not Python import failures. They are model repository failures: wrong folder layout, wrong model filename, missing `config.pbtxt`, incorrect input/output names, dtype mismatch, shape mismatch, wrong backend/platform, missing version folder, or engine/backend incompatibility.

## Minimal repository pattern
```text
model_repository/
  model_name/
    config.pbtxt
    1/
      model_file_here
```

## Common file names by backend
- TensorRT plan: commonly `model.plan`.
- ONNX Runtime: commonly `model.onnx`.
- TorchScript/PyTorch backend: commonly `model.pt` or backend-specific expected file.
- Python backend: default Python file is `model.py`.
- OpenVINO: `model.xml` plus `model.bin`.
- DALI: `model.dali`.

## Minimum config fields to inspect
```protobuf
name: "model_name"
backend: "python"
max_batch_size: 0
input [
  { name: "INPUT__0" data_type: TYPE_FP32 dims: [ 1, 3, 224, 224 ] }
]
output [
  { name: "OUTPUT__0" data_type: TYPE_FP32 dims: [ 1000 ] }
]
```

## Key config concepts
- `max_batch_size: 0` means the model does not support Triton-side batching.
- If `max_batch_size > 0`, Triton expects an implicit batch dimension and client request shape rules change.
- `dynamic_batching {}` changes latency/throughput behavior and can make single-request tests misleading.
- `instance_group` controls how many model instances load and where they run; bad settings can exhaust VRAM.
- Shape tensors, ragged batching, sequence batching, decoupled responses, and streaming all require explicit support logic.

## AIWF support bundle fields
Always archive repository tree, `config.pbtxt`, model filename/hash/size, server startup log, backend, client request, expected/actual dtype and shape, health/readiness result, and metrics snapshot.

## Security note
A writable model repository is not a harmless file-drop directory. Python backend models can execute code; dynamic model loading and repository polling should not be exposed to untrusted users.
