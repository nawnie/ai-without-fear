# NVIDIA CUDA Component Wheel Map

## Runtime / core

| Package | Role |
|---|---|
| `nvidia-cuda-runtime-cu12` | CUDA runtime libraries |
| `nvidia-cuda-runtime-cu13` | CUDA 13 runtime family where supported |
| `nvidia-cuda-nvcc-cu12` | CUDA compiler component package |
| `nvidia-cuda-nvrtc-cu12` | runtime compilation library |
| `nvidia-nvjitlink-cu12` | JIT linker component |
| `nvidia-cuda-cccl-cu12` | CUDA C++ Core Libraries headers/templates |

## Deep learning/math

| Package | Role |
|---|---|
| `nvidia-cudnn-cu12` | deep learning primitives |
| `nvidia-cudnn-cu13` | CUDA 13 cuDNN family where supported |
| `nvidia-cublas-cu12` | dense linear algebra |
| `nvidia-cufft-cu12` | Fourier transforms |
| `nvidia-curand-cu12` | random number generation |
| `nvidia-cusolver-cu12` | solvers |
| `nvidia-cusparse-cu12` | sparse linear algebra |

## Image/media

| Package | Role |
|---|---|
| `nvidia-npp-cu12` | image/signal primitives |
| `nvidia-nvjpeg-cu12` | JPEG acceleration |

## Profiling/diagnostics/management

| Package | Role |
|---|---|
| `nvidia-nvtx-cu12` | profiling ranges/markers |
| `nvidia-cuda-cupti-cu12` | profiling/tracing interface |
| `nvidia-cuda-sanitizer-api-cu12` | compute sanitizer API |
| `nvidia-nvml-dev-cu12` | GPU management/dev interface |

## Policy

Keep CUDA family consistent inside a wheelhouse. Do not install component wheels blindly into a working ComfyUI venv. Record whether a package came from PyPI, NVIDIA NGC/PyPI, PyTorch index, or local wheelhouse. Treat `cu13` as an advanced target until the whole stack supports it.
