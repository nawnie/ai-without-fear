# TensorRT inference stack deep reference

TensorRT support is not just another `pip install`. It is the point where a Python environment becomes a compiled inference environment.

## The stack layers

1. **Model authoring/training layer**: PyTorch, TensorFlow, Diffusers, Transformers, PEFT, custom modules.
2. **Export layer**: ONNX export, Torch export, framework-specific export helpers.
3. **Graph cleanup layer**: ONNX GraphSurgeon, Polygraphy, onnxslim, ONNX simplifiers.
4. **TensorRT parser/builder layer**: ONNX parser, TensorRT network definition, builder config, optimization profiles, tactic selection, plugins.
5. **Engine plan layer**: serialized TensorRT engine/plan file.
6. **Runtime execution layer**: TensorRT runtime, CUDA driver/runtime, cuDNN, cuBLAS/cuBLASLt, plugin DLLs/shared objects, input/output buffer management.

## Why support systems get this wrong

A support assistant often sees `import tensorrt` succeed and concludes TensorRT is installed. That is too shallow. A correct support check asks whether import works, what package family supplied it, whether a known-good ONNX graph parses, whether an engine builds/runs, whether plugins and DLLs resolve, and whether optimized output matches a reference.

## TensorRT versus ONNX Runtime

ONNX Runtime with CUDA/TensorRT providers is not the same as a direct TensorRT Python workflow. ORT owns provider loading and graph partitioning. Direct TensorRT gives more control but requires more explicit handling of profiles, plugins, bindings, and serialization.

## Standard, lean, RTX, and LLM families

- **standard TensorRT**: general-purpose SDK/runtime for inference optimization and engine execution.
- **TensorRT lean**: smaller runtime/deployment family. Not the default for graph surgery or build troubleshooting.
- **TensorRT-RTX**: RTX-focused runtime/JIT-oriented product line. Keep separate from standard TensorRT in support logic.
- **TensorRT-LLM**: LLM-specific stack. It is much closer to a full inference product/toolkit than a simple helper package.

## AIWF rule

Never mutate a user's working ComfyUI or training environment with TensorRT packages until a clean throwaway venv proves the intended TensorRT family can install, import, parse/build/run a known-good model, and be uninstalled cleanly.
