# LLM Serving Failure Signatures

## Import works, server fails
Likely model/runtime/kernel issue. Check model load logs, CUDA, attention backend, torch version, and GPU memory.

## Server starts, `/v1/models` fails
Likely route/server binding issue, wrong port, auth/API-key mismatch, or OpenAI-compatible server not actually running.

## `/v1/models` works, chat fails
Likely model name mismatch, chat template problem, endpoint mismatch, payload format issue, or unsupported API feature.

## OOM during load
Reduce model size, quantize, lower max model length, lower GPU memory utilization, reduce concurrent sequences, or use a model suited to VRAM.

## OOM during requests
Likely KV cache/concurrency/context problem. Capture max input tokens, output tokens, max_num_seqs, max_num_batched_tokens, and prompt cache behavior.

## Streaming hangs
Check SSE/client timeout/proxy buffering, server logs, event loop, and whether the client expects OpenAI-compatible streaming chunks.

## JSON/tool output invalid
Move from prompt-only formatting to guided decoding. Capture guided backend, schema, tokenizer, and response format parameters.

## Quantized model slower than FP16
Check whether the checkpoint format has an optimized kernel for the GPU/engine. Quantization reduces memory, but it is not automatically faster.

## Windows native build explosion
Prefer container, WSL/Linux, prebuilt wheelhouse, or non-kernel fallback. Capture MSVC, CUDA Toolkit, torch CUDA build, Python ABI, and compute capability.
