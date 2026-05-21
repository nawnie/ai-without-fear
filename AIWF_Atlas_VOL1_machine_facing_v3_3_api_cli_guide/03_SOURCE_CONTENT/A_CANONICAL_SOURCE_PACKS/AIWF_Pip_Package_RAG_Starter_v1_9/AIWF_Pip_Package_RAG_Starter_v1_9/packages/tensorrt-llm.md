# tensorrt-llm

## Identity
- **pip name:** `tensorrt-llm`
- **import/module clue:** `tensorrt_llm`
- **category:** `nvidia_tensorrt_llm`
- **AIWF confidence:** source-reviewed for TensorRT/NVIDIA inference stack placement and support-risk classification.

## What it is
NVIDIA TensorRT-LLM toolkit/runtime stack for optimized large language model inference on NVIDIA GPUs.

## Why AIWF cares
TensorRT sits at the point where normal Python package support turns into compiled inference support. A model may export from PyTorch successfully, import ONNX successfully, and still fail when TensorRT parses, optimizes, serializes, or runs the engine. The support RAG must separate package installation from engine-building capability.

## Install and build notes
Official docs emphasize Linux install/source-build paths and NGC containers. Treat Windows local support as advanced/experimental unless upstream explicitly supports the target path.

## Deep support notes
- Separate **training framework**, **export format**, **ONNX opset**, **ONNX parser**, **TensorRT builder**, **TensorRT runtime**, **engine plan**, **CUDA/cuDNN runtime**, and **GPU architecture**.
- TensorRT engines are not generic model files. They are compiled artifacts tied to TensorRT version, platform, GPU capability, precision flags, tactics, plugins, and sometimes dynamic-shape profiles.
- For support triage, always capture: GPU, driver, Python version, package versions, CUDA family, cuDNN major, `tensorrt.__version__` if importable, ONNX Runtime providers, source model hash, ONNX opset, TensorRT build log, precision mode, workspace/memory limits, and whether custom plugins were loaded.
- Do not mix CUDA family component packages accidentally. A venv containing CUDA 12 TensorRT libraries and CUDA 13 TensorRT bindings is suspect until proven by smoke test.
- Import success is not proof. The minimum useful test is import + version + plugin/library discovery + parse/build/run a tiny model or known-good ONNX sample.

## AIWF diagnostic checks
1. `python -m pip show tensorrt-llm`.
2. `python -m pip freeze | findstr /i "tensorrt onnx polygraphy cuda cudnn nvidia"` on Windows.
3. Try import/version when applicable.
4. Check whether the package is a metapackage, binding package, library package, or app/tooling package.
5. Validate against TensorRT support matrix before changing the user's environment.

## Windows risk
`very_high` — TensorRT workflows are sensitive to Python wheel tags, NVIDIA package index access, DLL loading, CUDA/cuDNN family, and platform support.

## Sources
https://docs.nvidia.com/tensorrt-llm/index.html | https://nvidia.github.io/TensorRT-LLM/installation/linux.html | https://pypi.org/project/tensorrt-llm/
