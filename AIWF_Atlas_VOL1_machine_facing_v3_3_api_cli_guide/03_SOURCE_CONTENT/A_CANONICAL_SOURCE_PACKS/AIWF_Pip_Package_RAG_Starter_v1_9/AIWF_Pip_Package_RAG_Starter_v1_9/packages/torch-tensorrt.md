# torch-tensorrt

## Identity
- **pip name:** `torch-tensorrt`
- **import/module clue:** `torch_tensorrt`
- **category:** `pytorch_tensorrt_bridge`
- **AIWF confidence:** source-reviewed for TensorRT/NVIDIA inference stack placement and support-risk classification.

## What it is
PyTorch-to-TensorRT compiler bridge that lets PyTorch/TorchScript/exported models use TensorRT backends.

## Why AIWF cares
TensorRT sits at the point where normal Python package support turns into compiled inference support. A model may export from PyTorch successfully, import ONNX successfully, and still fail when TensorRT parses, optimizes, serializes, or runs the engine. The support RAG must separate package installation from engine-building capability.

## Install and build notes
Must match torch, CUDA, TensorRT, Python ABI, and platform support. A successful install does not mean a given model graph can compile.

## Deep support notes
- Separate **training framework**, **export format**, **ONNX opset**, **ONNX parser**, **TensorRT builder**, **TensorRT runtime**, **engine plan**, **CUDA/cuDNN runtime**, and **GPU architecture**.
- TensorRT engines are not generic model files. They are compiled artifacts tied to TensorRT version, platform, GPU capability, precision flags, tactics, plugins, and sometimes dynamic-shape profiles.
- For support triage, always capture: GPU, driver, Python version, package versions, CUDA family, cuDNN major, `tensorrt.__version__` if importable, ONNX Runtime providers, source model hash, ONNX opset, TensorRT build log, precision mode, workspace/memory limits, and whether custom plugins were loaded.
- Do not mix CUDA family component packages accidentally. A venv containing CUDA 12 TensorRT libraries and CUDA 13 TensorRT bindings is suspect until proven by smoke test.
- Import success is not proof. The minimum useful test is import + version + plugin/library discovery + parse/build/run a tiny model or known-good ONNX sample.

## AIWF diagnostic checks
1. `python -m pip show torch-tensorrt`.
2. `python -m pip freeze | findstr /i "tensorrt onnx polygraphy cuda cudnn nvidia"` on Windows.
3. Try import/version when applicable.
4. Check whether the package is a metapackage, binding package, library package, or app/tooling package.
5. Validate against TensorRT support matrix before changing the user's environment.

## Windows risk
`very_high` — TensorRT workflows are sensitive to Python wheel tags, NVIDIA package index access, DLL loading, CUDA/cuDNN family, and platform support.

## Sources
https://pypi.org/project/torch-tensorrt/ | https://github.com/pytorch/TensorRT/releases | https://docs.pytorch.org/TensorRT/
