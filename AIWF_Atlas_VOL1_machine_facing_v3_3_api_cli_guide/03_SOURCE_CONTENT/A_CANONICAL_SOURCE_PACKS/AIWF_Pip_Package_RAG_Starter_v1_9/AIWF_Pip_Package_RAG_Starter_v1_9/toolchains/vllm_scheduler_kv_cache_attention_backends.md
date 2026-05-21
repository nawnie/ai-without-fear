# vLLM Scheduler, KV Cache, and Attention Backend Notes

## Why this matters
Modern LLM serving failures are often scheduler/cache/kernel failures, not normal Python exceptions. A user may report “vLLM is broken” when the real cause is context length too high, KV cache too small, incompatible quantized kernels, or an attention backend compiled for the wrong CUDA/Torch/GPU combination.

## Key evidence to capture
- GPU model and compute capability.
- Driver version.
- Torch version and `torch.version.cuda`.
- vLLM version.
- Attention backend/log lines.
- Model ID and context length.
- `--max-model-len`, `--gpu-memory-utilization`, `--kv-cache-memory-bytes`, `--max-num-seqs`, `--max-num-batched-tokens`.
- Quantization method and checkpoint format.
- Whether FlashInfer/FlashAttention/custom kernels were used.

## FlashInfer lane
FlashInfer documents Linux-only support and package families `flashinfer-python`, `flashinfer-cubin`, and `flashinfer-jit-cache`. Treat FlashInfer as an advanced kernel lane, especially for Windows support. Do not assume it is beginner-safe on a normal Windows desktop.

## Sources
https://docs.vllm.ai/en/latest/configuration/engine_args/ | https://docs.flashinfer.ai/installation.html
