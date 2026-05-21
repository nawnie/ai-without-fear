# exllamav2

## Role in AIWF
ExLlamaV2 is the EXL2/GPTQ-side local LLM inference loader for modern consumer NVIDIA GPUs. It is especially relevant when a user wants high-throughput local inference from quantized models without moving to GGUF.

## Support boundary
- Library/backend: `exllamav2`
- Server wrapper: usually TabbyAPI
- Model artifact: EXL2 quantized model folder, not a single GGUF file
- API layer: TabbyAPI/OpenAI-compatible endpoint when serving to apps

## Install / runtime notes
- PyPI package exists, but newest features may require source install.
- GPU support depends on Torch/CUDA alignment and compiled kernels.
- Treat model errors separately from package import errors: bad quant folder, missing config/tokenizer/template, or unsupported architecture can look like runtime failure.

## Windows risk
High. Isolate in its own venv, document torch/CUDA version, and capture GPU architecture.

## Sources
- https://github.com/turboderp-org/exllamav2
- https://pypi.org/project/exllamav2/
