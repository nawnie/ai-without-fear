# v1.4 research pass — TensorRT / TensorRT-LLM / ONNX graph surgery

This pass expands the package RAG from CUDA/cuDNN build support into NVIDIA inference optimization support.

## Added focus

- TensorRT package family separation.
- TensorRT lean versus full runtime.
- TensorRT-RTX boundary.
- TensorRT-LLM boundary.
- ONNX GraphSurgeon and Polygraphy support roles.
- Engine/plan lifecycle and manifest requirements.
- Failure signatures for install, parse, build, runtime, accuracy, and performance.

## Major support lesson

TensorRT support must not stop at `pip install`. The meaningful support boundary is package installed, Python import works, required libraries/plugins resolve, ONNX graph validates, TensorRT parses/builds/runs, output matches a reference, and performance is measured after warmup.
