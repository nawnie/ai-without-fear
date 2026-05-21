# AIWF cuDNN Backend / Frontend Deep Reference

## The first correction: “cuDNN Toolkit” is usually imprecise

Users say **cuDNN Toolkit**, but the cleaner support model is:

1. **NVIDIA driver** — lets the OS talk to the GPU.
2. **CUDA Toolkit** — developer environment: compiler/toolchain pieces such as NVCC, headers, libraries, debug/profiling tools.
3. **CUDA runtime/component wheels** — Python-distributed NVIDIA runtime pieces such as CUDA runtime, cuBLAS, cuFFT, cuDNN, NVRTC, NVJitLink, etc.
4. **cuDNN Backend** — the actual deep-neural-network primitive libraries and DLLs.
5. **cuDNN Frontend** — Python/C++ API layer over the cuDNN Graph API; useful for modern graph/fusion/developer workflows.
6. **Framework runtime ABI** — PyTorch, ONNX Runtime, TensorRT, TensorFlow, or a custom extension must match the CUDA/cuDNN major family they were built for.

Do not collapse these into “I installed CUDA.” That is how support systems give wrong fixes.

## cuDNN backend on Windows

NVIDIA's Windows cuDNN backend install path supports graphical installer, tarball/archive install, and Python wheels. The manual tarball/install model gives three important file classes:

- `bin\cudnn*.dll` — runtime DLLs that must be visible to the process at load time.
- `include\cudnn*.h` — headers for compiling cuDNN-dependent source.
- `lib\x64\cudnn*.lib` — Windows import libraries for linking native projects.

If only DLLs exist, inference may run but native compilation/linking can still fail. If only headers/import libs exist but PATH cannot find DLLs, build may succeed while runtime fails.

## cuDNN v9 library structure

cuDNN v9 is not a single mental object. NVIDIA documents that v9 is reorganized into sub-libraries separating older legacy/shim layers, graph API libraries, and engine implementation libraries. This matters because errors may name internal engine/graph pieces instead of the simple `cudnn64_*.dll` mental model.

Support interpretation:

- `cudnn_graph` style failures point toward Graph API/frontend/backend split.
- `cudnn_ops`, `cudnn_cnn`, `cudnn_adv` style names often indicate legacy/fixed-function or shim layer paths.
- Engine/heuristic/runtime-compiled failures may point toward JIT/engine package visibility, version mismatch, or an unsupported GPU/operation path.

## cuDNN frontend

cuDNN Frontend is the recommended higher-level way to access graph functionality for most users building directly against cuDNN. It provides Python and C++ API layers. The C++ frontend is header-only; the Python frontend can be installed from pip or from source.

Support rule: most ComfyUI users do **not** need cuDNN Frontend directly. It matters for bleeding-edge kernels, source builds, samples, research repos, and packages that explicitly mention cuDNN Graph API or frontend.

## When AIWF should ask about cuDNN

Ask for cuDNN details when:

- ONNX Runtime CUDA provider is missing or fails to create.
- A custom node imports but silently falls back to CPU.
- Source build errors mention `cudnn.h`, `cudnn_frontend.h`, unresolved external cuDNN symbols, or missing `cudnn*.dll`.
- PyTorch sees CUDA but a model/runtime that uses ONNX/TensorRT does not.
- A user installed CUDA Toolkit 13 but the framework wheel expects CUDA 12 or vice versa.
- A package says cuDNN 9 is required but the environment was built around older PyTorch/cuDNN 8-era wheels.

## Source anchors

- https://docs.nvidia.com/deeplearning/cudnn/installation/latest/index.html
- https://docs.nvidia.com/deeplearning/cudnn/installation/latest/windows.html
- https://docs.nvidia.com/deeplearning/cudnn/backend/latest/api/overview.html
- https://docs.nvidia.com/deeplearning/cudnn/frontend/latest/index.html
- https://docs.nvidia.com/deeplearning/cudnn/installation/latest/python-frontend-install.html
- https://docs.nvidia.com/deeplearning/cudnn/installation/latest/cpp-frontend-install.html
