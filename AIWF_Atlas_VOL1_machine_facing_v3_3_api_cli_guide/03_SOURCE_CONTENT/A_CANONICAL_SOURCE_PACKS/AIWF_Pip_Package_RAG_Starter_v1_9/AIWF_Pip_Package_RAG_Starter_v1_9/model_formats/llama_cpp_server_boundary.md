# llama.cpp Server Boundary

llama.cpp's server is a lightweight C/C++ HTTP server around llama.cpp inference. It can expose OpenAI-compatible routes depending on the build/version.

## Support checklist
- Capture exact executable/build commit.
- Capture backend: CPU, CUDA, Vulkan, Metal, etc.
- Capture loaded GGUF model metadata and quantization.
- Capture context, batch, GPU layers/offload, and parallel settings.
- Confirm API route compatibility with client expectations.

Sources: https://github.com/ggml-org/llama.cpp/blob/master/tools/server/README.md | https://github.com/ggml-org/llama.cpp
