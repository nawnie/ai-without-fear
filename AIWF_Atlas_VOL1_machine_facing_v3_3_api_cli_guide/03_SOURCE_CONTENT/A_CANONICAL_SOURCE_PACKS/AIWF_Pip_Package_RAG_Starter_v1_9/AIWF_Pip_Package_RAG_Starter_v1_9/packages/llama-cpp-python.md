# llama-cpp-python

## RAG purpose
Python bindings for llama.cpp; local GGUF inference and optional server/OpenAI-compatible API patterns.

## Why AI Without Fear cares
Candidate backend for small local models and offline AIWF experiments, but high Windows build risk.

## Common import patterns
- `llama_cpp`

## Install / pinning notes
May compile native code; GPU acceleration requires correct build flags and isolated install recipe.

## Windows / ComfyUI risk level
**very_high**

## Quick diagnostic commands
```powershell
python -c "from llama_cpp import Llama; print('llama_cpp import ok')"
```
```powershell
python -m pip show llama-cpp-python
```

## Common failure signatures
- Build fails due to missing compiler/CMake
- CPU-only build when GPU expected
- Cached wheel ignores build flags
- GGUF loads but context/VRAM settings are wrong

## Dependency cluster notes
Local inference runtime cluster: llama-cpp-python + huggingface_hub + GGUF models + optional server API.

## Source context
Local LLM runtime research; GGUF models; sub-1GB model UI idea.

## RAG tags
`pip-package`, `v0.5-training-data-config-llm-framework`, `very_high`, `windows-ai`, `training`, `rag`, `local-ai`

## Source URLs
- https://github.com/abetlen/llama-cpp-python
- https://llama-cpp-python.readthedocs.io/en/latest/api-reference/


## v1.8 model-loader/server addendum
`llama-cpp-python[server]` is the Python-binding route for an OpenAI-compatible local server around llama.cpp-compatible GGUF models. This is separate from the upstream C/C++ llama.cpp runtime and separate from apps like KoboldCpp or LM Studio. Support should capture build flags, backend acceleration, model GGUF metadata, chat template, context size, and server base URL.

Sources: https://github.com/abetlen/llama-cpp-python/blob/main/docs/server.md | https://pypi.org/project/llama-cpp-python/
