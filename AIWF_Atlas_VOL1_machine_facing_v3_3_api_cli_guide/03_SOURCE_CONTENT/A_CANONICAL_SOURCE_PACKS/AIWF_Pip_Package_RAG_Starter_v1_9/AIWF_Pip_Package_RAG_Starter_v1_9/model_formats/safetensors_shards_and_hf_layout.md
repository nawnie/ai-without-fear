# Safetensors Shards and Hugging Face Model Layout

Large Hugging Face models commonly ship as sharded safetensors. The key support file is often `model.safetensors.index.json`, which maps tensors to shard files.

## Required assets to check
- `config.json`
- one or more `.safetensors` files
- `model.safetensors.index.json` when sharded
- tokenizer assets: `tokenizer.json`, `tokenizer.model`, `vocab.*`, `merges.txt`, `special_tokens_map.json`, `tokenizer_config.json`
- `generation_config.json` when present
- processor assets for multimodal models

## Failure modes
- Missing shard.
- Partial download.
- Wrong branch/revision.
- Loader does not understand model architecture.
- Trust-remote-code/custom code requirement ignored.
- safetensors is installed, but the folder is incomplete.

Sources: https://huggingface.co/docs/safetensors/index | https://huggingface.co/docs/huggingface_hub/en/package_reference/serialization
