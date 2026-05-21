# llama.cpp runtime

## Role in AIWF
llama.cpp is the C/C++ runtime family behind many GGUF-based local LLM apps and servers. It is a runtime/toolchain project, not a normal pip dependency.

## Support boundary
- Model format: GGUF.
- Runtime binaries: llama-cli, llama-server, conversion tools, backend-specific builds.
- Python binding: `llama-cpp-python` is separate.
- App wrappers: LM Studio, KoboldCpp, Ollama, and others may use llama.cpp-family concepts but have their own packaging.

## Install / runtime notes
llama.cpp requires GGUF models. The HTTP server provides REST APIs, web UI, OpenAI-compatible chat/responses/embeddings routes, Anthropic-compatible routes, batching, monitoring, and multimodal support depending on build/features.

## Windows risk
High when compiling with CUDA/Vulkan/other backends. Low/medium when using known-good prebuilt binaries.

## Sources
- https://github.com/ggml-org/llama.cpp
- https://github.com/ggml-org/llama.cpp/blob/master/tools/server/README.md
