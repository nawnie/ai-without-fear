# TensorRT engine/plan lifecycle

A TensorRT engine is a compiled inference artifact. Treat it like a build output, not a source file.

## Lifecycle

1. Source model: PyTorch/TensorFlow/HF/checkpoint.
2. Export: ONNX or framework-specific export.
3. Clean/repair: ONNX GraphSurgeon, Polygraphy, onnxslim, manual node changes.
4. Build: TensorRT parser + network + builder config + optimization profiles.
5. Serialize: engine/plan file.
6. Deploy: load runtime + plugins + CUDA/cuDNN libraries.
7. Validate: output comparison against source model or ONNX Runtime.
8. Cache: store engine with manifest.

## Manifest fields AIWF should store

- source model name/path/hash
- exporter version and ONNX opset/hash
- TensorRT version and family
- CUDA family, driver, and cuDNN major/version if relevant
- GPU model and compute capability
- precision mode and optimization profiles
- plugin libraries and hashes
- build command/env vars
- calibration data manifest for INT8 or quantized builds
- validation tolerance and result summary

## Support warnings

Do not move engine plans across OS/platforms and assume portability. Do not assume engine built on one GPU class is ideal or valid on another. Do not trust performance without warmup, fixed shapes/profiles, and benchmark logs.
