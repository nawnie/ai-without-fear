# nvidia-cuda-cupti-cu12

## Identity
- **pip name:** `nvidia-cuda-cupti-cu12`
- **import/module clue:** `nvidia.cupti`
- **category:** `nvidia_profiling`
- **AIWF confidence:** source-reviewed for role and install-risk classification.

## What it is
CUPTI profiling/tracing component for CUDA 12-family stacks.

## Why AIWF cares
Cutting-edge AI packages increasingly depend on NVIDIA CUDA component wheels instead of only a monolithic system CUDA Toolkit install. This package belongs in the CUDA/NVIDIA wheelhouse map so the installer can separate runtime libraries, developer compiler pieces, profiling/debugging pieces, and C++ header/template libraries.

## Install and build notes
Profiling/tooling dependency; keep separate from runtime correctness checks.

NVIDIA's Windows CUDA install guide states that CUDA pip wheels are primarily for using CUDA with Python and are intended for runtime use; developer tools may still need separate installation. It also lists CUDA pip metapackages such as `nvidia-cuda-runtime-cu12`, `nvidia-cuda-nvcc-cu12`, `nvidia-cublas-cu12`, `nvidia-cudnn-cu12`, and other CUDA component packages.

## AIWF diagnostic checks
1. Confirm the package is actually installed in the active venv: `python -m pip show nvidia-cuda-cupti-cu12`.
2. Record CUDA family (`cu12`, `cu13`, etc.) in the wheelhouse manifest.
3. Compare against `torch.version.cuda`, `torch.cuda.is_available()`, and `torch.backends.cudnn.version()` when relevant.
4. For native builds, capture `nvcc --version`, `cl.exe` availability, `CUDA_PATH`, and `TORCH_CUDA_ARCH_LIST`.

## Windows risk
**medium**. The main risk is not the package name by itself; it is mixing CUDA component families, system Toolkit versions, PyTorch-bundled libraries, and custom node source builds without recording the full environment.

## Source anchors
- NVIDIA CUDA Installation Guide for Microsoft Windows: https://docs.nvidia.com/cuda/cuda-installation-guide-microsoft-windows/
- NVIDIA PyPI package index: https://pypi.nvidia.com/
- CUDA Toolkit downloads: https://developer.nvidia.com/cuda-downloads
