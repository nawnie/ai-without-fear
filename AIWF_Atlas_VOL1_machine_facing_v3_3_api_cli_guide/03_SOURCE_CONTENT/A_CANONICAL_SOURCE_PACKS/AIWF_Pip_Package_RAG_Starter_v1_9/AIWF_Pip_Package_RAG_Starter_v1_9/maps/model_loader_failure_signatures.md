# Model Loader Failure Signatures

## Import succeeds, model fails
Likely model artifact/layout issue: missing shard, missing tokenizer, wrong architecture support, bad revision, unsupported quantization, or custom-code requirement.

## Model loads, replies weirdly
Likely chat-template/generation-config issue: wrong role tokens, missing add-generation-prompt, duplicated BOS/EOS, stop strings wrong, or sampling defaults inappropriate.

## GGUF rejected
Likely outdated loader, unsupported architecture/quantization, corrupt partial file, or runtime built without needed backend.

## EXL2 rejected
Likely wrong loader family, missing EXL2 metadata/config, incompatible ExLlamaV2 version, or CUDA/Torch kernel issue.

## Context too high / OOM
Likely KV cache or RoPE/context mismatch. Capture context length, batch, concurrency, GPU memory, and KV-cache settings.

## OpenAI-compatible client fails
Check base URL, route prefix, model name, server health, streaming mode, timeout, and whether the server actually implements the endpoint being called.
