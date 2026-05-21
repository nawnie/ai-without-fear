# tensorrt-libs

## Identity
- **pip name:** `tensorrt-libs`
- **import/module clue:** `tensorrt runtime libraries`
- **category:** `nvidia_tensorrt_libraries`
- **AIWF confidence:** source-reviewed for TensorRT/NVIDIA inference stack placement and support-risk classification.

## What it is
TensorRT library component package pulled by TensorRT metapackages or installed explicitly for runtime library placement.

## Why AIWF cares
TensorRT sits at the point where normal Python package support turns into compiled inference support. A model may export from PyTorch successfully, import ONNX successfully, and still fail when TensorRT parses, optimizes, serializes, or runs the engine. The support RAG must separate package installation from engine-building capability.

## Install and build notes
Do not confuse library package presence with a working Python import. Verify DLL/shared library loading, provider/runtime availability, and engine build/inference smoke tests.

## Deep support notes
- Separate **training framework**, **export format**, **ONNX opset**, **ONNX parser**, **TensorRT builder**, **TensorRT runtime**, **engine plan**, **CUDA/cuDNN runtime**, and **GPU architecture**.
- TensorRT engines are not generic model files. They are compiled artifacts tied to TensorRT version, platform, GPU capability, precision flags, tactics, plugins, and sometimes dynamic-shape profiles.
- For support triage, always capture: GPU, driver, Python version, package versions, CUDA family, cuDNN major, `tensorrt.__version__` if importable, ONNX Runtime providers, source model hash, ONNX opset, TensorRT build log, precision mode, workspace/memory limits, and whether custom plugins were loaded.
- Do not mix CUDA family component packages accidentally. A venv containing CUDA 12 TensorRT libraries and CUDA 13 TensorRT bindings is suspect until proven by smoke test.
- Import success is not proof. The minimum useful test is import + version + plugin/library discovery + parse/build/run a tiny model or known-good ONNX sample.

## AIWF diagnostic checks
1. `python -m pip show tensorrt-libs`.
2. `python -m pip freeze | findstr /i "tensorrt onnx polygraphy cuda cudnn nvidia"` on Windows.
3. Try import/version when applicable.
4. Check whether the package is a metapackage, binding package, library package, or app/tooling package.
5. Validate against TensorRT support matrix before changing the user's environment.

## Windows risk
`high` — TensorRT workflows are sensitive to Python wheel tags, NVIDIA package index access, DLL loading, CUDA/cuDNN family, and platform support.

## Sources
https://pypi.nvidia.com/ | https://pypi.org/project/tensorrt/
