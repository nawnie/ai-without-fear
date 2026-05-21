# v1.6 Research Pass — vLLM / SGLang / TGI / OpenAI-Compatible LLM Serving

## Added
- LLM serving engine package cards.
- Guided decoding/structured output packages.
- Quantization/compressed checkpoint support packages.
- API/streaming support dependencies.
- vLLM and serving-boundary deep references.

## Core support lesson
OpenAI-compatible local serving is not one layer. The support system must split client, gateway, engine, attention kernels, quantization, model format, tokenizer/chat template, server endpoint, metrics, and deployment runtime.

## Notable source findings
- vLLM provides an OpenAI-compatible local server and defaults to localhost port 8000 in standard quickstart docs.
- vLLM exposes production metrics from the OpenAI-compatible server via `/metrics`.
- FlashInfer packages are advanced kernel packages and its docs list Linux-only prerequisites.
- SGLang is a separate high-performance serving framework with OpenAI/Hugging Face compatibility and multimodal support.
- Hugging Face TGI is documented as maintenance mode, with recommendation toward vLLM/SGLang/local engines going forward.
