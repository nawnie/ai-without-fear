# Source Usage Map

This maps source families to how the AIWF support system should use them.

## github_repositories

Use for upstream source truth, requirements files, install notes, and live project boundaries; verify whether the repo is official before treating it as primary.

## huggingface_ecosystem_docs

Use for Transformers, Diffusers, Datasets, Accelerate, PEFT, model loaders, tokenizers, and model/task docs.

## llm_serving_docs

Use for vLLM, SGLang, structured output, OpenAI-compatible serving, KV cache, scheduler, attention backend, and runtime metrics.

## nvidia_cuda_inference_docs

Use for CUDA Toolkit, cuDNN, TensorRT, Triton, TensorRT-LLM, NVIDIA PyPI component wheels, driver/runtime/compiler boundaries, and GPU inference failure signatures.

## onnx_runtime_docs

Use for ONNX Runtime providers, CUDA/cuDNN compatibility, DirectML boundaries, and provider verification.

## project_documentation

Use when it is the project's official docs site; verify package version when docs are branch-specific.

## pypi_package_metadata

Use for exact pip package names, extras, releases, wheel tags, Python requirements, and package summaries; do not use alone for deep compatibility claims.

## python_packaging_build_docs

Use for local wheelhouse, pip wheel, pyproject, cibuildwheel, scikit-build, maturin, pybind11, build isolation, and packaging standards.

## pytorch_docs

Use for torch/torchvision/torchaudio install selectors, C++/CUDA extensions, CUDA architecture flags, and PyTorch ABI/build behavior.

## scientific_python_docs

Use for NumPy/SciPy/Pandas/OpenCV/scikit-image binary/API behavior and image-array compatibility.

## web_api_runtime_docs

Use for FastAPI, Starlette, Pydantic, Uvicorn, gRPC, SSE, and local API service boundaries.



## v1.8 LLM model-loader sources
Use `sources/families/llm_model_loader_sources.md` when answering questions about GGUF, EXL2, safetensors shards, chat templates, local LLM server compatibility, or model folder layout.
