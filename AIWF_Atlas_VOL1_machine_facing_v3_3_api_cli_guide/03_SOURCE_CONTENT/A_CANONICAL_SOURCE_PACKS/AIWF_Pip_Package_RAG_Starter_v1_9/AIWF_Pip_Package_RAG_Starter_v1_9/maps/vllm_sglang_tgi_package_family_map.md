# v1.6 LLM Serving Package Family Map

## Engines
- `vllm`
- `sglang`
- `text-generation-inference` server ecosystem; Python client card: `text-generation`

## Gateway / router
- `litellm`
- `openai` client package, already tracked earlier

## Distributed serving
- `ray`
- existing `kubernetes` and Triton deployment packages when scaling beyond local desktop

## Attention/kernel acceleration
- `flash-attn`
- `flashinfer-python`
- `flashinfer-cubin`
- `flashinfer-jit-cache`
- `sgl-kernel`

## Quantization / compressed checkpoint tooling
- `bitsandbytes`
- `compressed-tensors`
- `llmcompressor`
- `gptqmodel`
- `autoawq`
- `auto-gptq`
- `torchao`

## Structured output / guided decoding
- `xgrammar`
- `outlines`
- `lm-format-enforcer`
- `guidance`

## API/streaming support dependencies
- `msgspec`
- `uvloop`
- `httptools`
- `h11`
- `sse-starlette`
- `watchfiles`
