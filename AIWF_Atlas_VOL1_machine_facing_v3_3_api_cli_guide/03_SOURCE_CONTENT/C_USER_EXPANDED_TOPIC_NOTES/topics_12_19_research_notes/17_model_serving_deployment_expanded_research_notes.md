# Model Serving and Deployment — Expanded Research Notes

## Purpose
Cover the practical serving layer for local and production AI: Ollama, llama.cpp, vLLM, TGI, APIs, containers, ports, remote access, batching, caching, and safe deployment defaults.

## Canonical summary
Model serving turns a model file into a usable system. The assistant should know the difference between beginner local serving with Ollama, lightweight GGUF serving with llama.cpp, high-throughput deployment with vLLM/TGI, and app-layer wrappers like Gradio or FastAPI. Deployment guidance must include security: do not expose local model/tool servers to the internet without authentication and network controls.

## In scope
- local model servers
- OpenAI-compatible APIs
- Ollama
- llama.cpp server
- vLLM
- Hugging Face TGI
- FastAPI/Gradio wrappers
- Docker patterns
- ports and firewalls
- batching and KV cache
- quantized serving
- fallback and routing

## Core concepts
- Ollama
- llama.cpp
- GGUF
- vLLM
- PagedAttention
- continuous batching
- prefix caching
- TGI
- OpenAI-compatible API
- FastAPI
- Docker
- port binding
- reverse proxy
- model routing
- fallback model

## AIWF interpretation
This topic is part of the adapter's machine-memory layer. It should help an AI assistant retrieve, reason, and answer with better domain maturity than a raw small model. Use this note as source content, but prefer the canonical lane files for direct answer routing.

## Source anchors
- vLLM documentation: https://docs.vllm.ai/en/latest/
- llama.cpp HTTP server README: https://github.com/ggml-org/llama.cpp/blob/master/tools/server/README.md
- llama-cpp-python OpenAI compatible server: https://llama-cpp-python.readthedocs.io/en/latest/server/
- Ollama: https://ollama.com/
- Hugging Face Text Generation Inference: https://huggingface.co/docs/text-generation-inference/index
