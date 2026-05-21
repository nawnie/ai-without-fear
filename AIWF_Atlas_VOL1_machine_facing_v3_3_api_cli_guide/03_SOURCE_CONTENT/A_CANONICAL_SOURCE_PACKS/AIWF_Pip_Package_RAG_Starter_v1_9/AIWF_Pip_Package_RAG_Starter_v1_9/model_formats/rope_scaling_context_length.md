# RoPE Scaling and Context-Length Support

Context length is not only a slider. RoPE/position-embedding behavior must match model architecture, loader support, and runtime memory limits.

## Support checklist
- Inspect `config.json` for max position embeddings and RoPE fields.
- Verify loader support for the model's RoPE variant.
- Capture requested context length, KV-cache settings, and GPU memory use.
- Separate “model can theoretically support longer context” from “this runtime can serve it on this hardware.”

## Failure modes
- Loader rejects unknown rope field.
- vLLM/SGLang/Transformers version mismatch around RoPE schema.
- Context set higher than KV cache can support.
- Model degrades because extended context is not actually trained/tuned for target length.

Sources: https://huggingface.co/docs/transformers/internal/rope_utils | https://huggingface.co/docs/text-generation-inference/basic_tutorials/preparing_model
