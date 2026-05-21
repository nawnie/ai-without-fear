# EXL2 / ExLlamaV2 / TabbyAPI Boundary

EXL2 is a quantized model artifact family typically served through ExLlamaV2 and TabbyAPI. It is not GGUF, and it should not be routed to llama.cpp-style loaders.

## Support checklist
- Confirm model folder is EXL2 and includes expected config/tokenizer files.
- Confirm ExLlamaV2 version and CUDA/Torch environment.
- Confirm TabbyAPI config points to the intended model path.
- Confirm OpenAI-compatible base URL and loaded model name.
- Capture startup logs and first failed request.

## AIWF rule
EXL2 is often excellent for single-GPU local inference, but it should live in its own isolated environment. Do not mix its dependencies into ComfyUI unless there is a deliberate reason.

Sources: https://github.com/turboderp-org/exllamav2 | https://github.com/theroyallab/tabbyAPI/
