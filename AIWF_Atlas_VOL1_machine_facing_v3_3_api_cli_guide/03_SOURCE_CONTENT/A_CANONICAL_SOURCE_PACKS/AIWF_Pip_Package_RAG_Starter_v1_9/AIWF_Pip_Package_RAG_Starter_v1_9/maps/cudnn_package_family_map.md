# AIWF cuDNN / CUDA Package Family Map

## Backend runtime packages

| Package | Lane | Support meaning |
|---|---:|---|
| `nvidia-cudnn-cu11` | CUDA 11 / legacy | Older CUDA 11/cuDNN 8-era stacks; do not use for modern CUDA 12 unless reproducing legacy. |
| `nvidia-cudnn-cu12` | CUDA 12 | Main modern stable lane for many current PyTorch/ONNX/TensorRT-style stacks. |
| `nvidia-cudnn-cu13` | CUDA 13 | Future/bleeding-edge lane; isolate until frameworks/custom nodes explicitly support it. |
| `nvidia-cudnn` | meta/index | Discovery/meta path; prefer explicit CUDA-family packages in manifests. |

## JIT/engine-adjacent packages

| Package | Lane | Support meaning |
|---|---:|---|
| `nvidia-cudnn-jit-cu12` | CUDA 12 | cuDNN JIT/engine-related component lane; capture if present. |
| `nvidia-cudnn-jit-cu13` | CUDA 13 | CUDA 13 JIT/engine lane; high experimental risk locally. |

## Frontend packages

| Package | Meaning |
|---|---|
| `nvidia-cudnn-frontend` | Python/C++ frontend API over cuDNN Graph API; developer/research/source-build relevant. |

## CUDA Python/toolkit discovery packages

| Package | Meaning |
|---|---|
| `cuda-python` | CUDA Python ecosystem umbrella. |
| `cuda-toolkit` | PyPI metapackage path for optional Toolkit components. |
| `cuda-bindings` | Low-level Python bindings to CUDA C APIs. |
| `cuda-core` | Pythonic CUDA runtime/core access. |
| `cuda-pathfinder` | Utilities for locating CUDA components in Python environments. |

## Manifest rule

Every wheelhouse manifest should record:

- CUDA lane: cu11 / cu12 / cu13
- cuDNN lane: cuDNN 8 / cuDNN 9 / unknown
- source: framework bundled / NVIDIA pip wheel / manual Windows install / conda / source build
- exact package versions or manual archive version
- smoke test result
