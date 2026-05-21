# GGUF Loader Boundary

GGUF is a model-file format boundary, not a model quality guarantee. A GGUF file can be valid while still failing because the runtime lacks architecture support, the quantization is unsupported, the context/chat template is wrong, or the backend build lacks the requested acceleration.

## Support checklist
- Confirm file extension and file size.
- Confirm runtime: llama.cpp, llama-cpp-python, KoboldCpp, LM Studio, Ollama, etc.
- Confirm quantization: Q4_K_M, Q5_K_M, Q8_0, IQ variants, or other.
- Confirm architecture support in the chosen runtime version.
- Confirm context length and KV cache memory settings.
- Confirm prompt/chat template behavior.

## AIWF rule
Do not tell a user “GGUF works everywhere.” Say: “GGUF is the right file family for llama.cpp-style loaders, but the loader version and model architecture still matter.”

Sources: https://github.com/ggml-org/llama.cpp | https://github.com/ggml-org/llama.cpp/blob/master/tools/server/README.md
