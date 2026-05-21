# vLLM / OpenAI-Compatible Local Serving Deep Reference

## Core mental model
vLLM is an LLM inference engine and server boundary. It is not just another transformer helper. AIWF support should split every vLLM issue into these layers:

1. Python environment and package resolution.
2. Torch/CUDA/cuDNN/driver compatibility.
3. Attention kernel availability and selected backend.
4. Model architecture and Hugging Face model loading.
5. Tokenizer and chat template behavior.
6. KV cache sizing and GPU memory policy.
7. Quantization/checkpoint format.
8. OpenAI-compatible HTTP API adapter.
9. Streaming, structured output, tools, and sampling extensions.
10. Metrics and support-bundle evidence.

## Online serving boundary
The local server is normally started with `vllm serve <model>`. The API compatibility target is OpenAI-style `/v1/*` endpoints. Verify `/v1/models` before testing chat/completions. A successful Python import does not prove that a model can load, that CUDA kernels are available, or that the API server is reachable.

## GPU memory and KV cache
The two knobs a support agent must recognize first are `--gpu-memory-utilization` and `--kv-cache-memory-bytes`. `gpu_memory_utilization` limits the fraction of GPU memory available to the model executor per vLLM instance. `kv_cache_memory_bytes` can override automatic sizing. On 16 GB consumer GPUs, wrong KV/cache/model length choices cause failures that look like package breakage but are actually capacity planning errors.

## API compatibility is not full feature identity
OpenAI-compatible means request/response shape compatibility for supported endpoints; it does not mean every provider extension, tool parser, response format, or streaming behavior is identical. Record the exact client package, base URL, endpoint, model name, payload, and returned status code.

## Sources
https://docs.vllm.ai/en/latest/getting_started/quickstart/ | https://docs.vllm.ai/en/latest/serving/openai_compatible_server/ | https://docs.vllm.ai/en/latest/configuration/engine_args/ | https://docs.vllm.ai/en/stable/usage/metrics/
