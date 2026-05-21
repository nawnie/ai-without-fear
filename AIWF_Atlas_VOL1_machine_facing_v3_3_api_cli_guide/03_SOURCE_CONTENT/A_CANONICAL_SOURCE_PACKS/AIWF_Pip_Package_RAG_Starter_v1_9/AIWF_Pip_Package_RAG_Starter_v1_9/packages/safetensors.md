# safetensors

## RAG purpose
Safe and fast tensor serialization format/library used for checkpoints, LoRAs, VAEs, ControlNets, and model metadata inspection.

## Why AI Without Fear cares
AIWF model sorting, LoRA cataloging, checkpoint inspection, and safe loading all depend on understanding safetensors headers and metadata.

## Common import patterns
- `import safetensors`
- `from safetensors.torch import load_file`

## Install / pinning notes
Usually safe to install directly. Essential for modern local AI model archives. Prefer `.safetensors` over pickle-based `.ckpt` when possible.

## Windows / ComfyUI risk level
**low**

## Quick diagnostic commands
```powershell
python -c "import safetensors; print(safetensors.__version__)"
```

## Common failure signatures
- missing safetensors when loading modern model files
- header too large/corrupt file errors
- metadata parsing failure in model sorter

## AIWF usage notes
Document header-read patterns separately for AWF model checker.

## RAG tags
`pip-package`, `v0.2-model-io`, `low`, `windows-ai`, `comfyui`, `gradio`, `local-ai`

## Source URLs
- https://huggingface.co/docs/safetensors/index
- https://github.com/safetensors/safetensors
- https://huggingface.co/docs/diffusers/main/en/using-diffusers/using_safetensors


## v1.8 sharded-model addendum
Large Hugging Face models may ship as `model-00001-of-000xx.safetensors` shards plus `model.safetensors.index.json`. Support must verify the index file points to the expected shards, that every shard exists, and that the loader/version is compatible with the architecture. A single import of `safetensors` does not prove the model folder is complete.

Sources: https://huggingface.co/docs/safetensors/index | https://huggingface.co/docs/huggingface_hub/en/package_reference/serialization
