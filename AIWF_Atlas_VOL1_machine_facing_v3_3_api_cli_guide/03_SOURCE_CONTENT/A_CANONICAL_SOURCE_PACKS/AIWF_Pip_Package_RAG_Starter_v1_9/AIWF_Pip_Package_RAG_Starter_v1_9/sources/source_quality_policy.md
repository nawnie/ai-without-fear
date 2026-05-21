# Source Quality Policy

AIWF support answers should prefer source families in this order:

1. Official vendor/framework docs for install, compatibility, ABI, CUDA, cuDNN, TensorRT, ONNX Runtime, Triton, and vLLM behavior.
2. Official package metadata from PyPI when validating package names, extras, supported Python tags, releases, and wheel availability.
3. Official upstream GitHub repositories when docs are incomplete or when the relevant truth is in requirements files, README install notes, issues, or source layout.
4. Project ReadTheDocs-style documentation when it is the upstream project's official documentation host.
5. Supporting references only when primary sources do not cover the question.

## Volatility rules

High-volatility sources must be refreshed before giving hard install commands:

- PyTorch CUDA wheel selector and CUDA index URLs.
- NVIDIA CUDA/cuDNN/TensorRT component package pages.
- ONNX Runtime CUDA Execution Provider compatibility tables.
- vLLM, SGLang, FlashInfer, TensorRT-LLM, Triton, and ComfyUI requirements.
- Packages with native extension builds, CUDA kernels, or rapidly changing Windows support.

## Anti-hallucination rules

- Do not infer that `import package` proves GPU/provider support.
- Do not infer that pip installing a client package installs a server/runtime.
- Do not treat a CUDA runtime wheel as a CUDA Toolkit compiler install.
- Do not treat cuDNN runtime libraries as headers/import libs for C++ builds unless the source explicitly says they are included.
- Do not treat OpenAI-compatible APIs as full behavioral compatibility between engines.
