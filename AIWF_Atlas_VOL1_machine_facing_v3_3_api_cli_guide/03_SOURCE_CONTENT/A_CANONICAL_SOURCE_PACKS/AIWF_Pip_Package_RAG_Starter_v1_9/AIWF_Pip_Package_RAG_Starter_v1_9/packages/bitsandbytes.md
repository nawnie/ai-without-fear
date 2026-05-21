# bitsandbytes

## RAG purpose
Low-bit quantization and optimizer package used to fit LLM loading or training into smaller VRAM budgets.

## Why AI Without Fear cares
8-bit optimizers and 8-bit/4-bit quantization support for inference and LoRA/QLoRA-style training stacks.

## Common import patterns
- `bitsandbytes`

## Install / pinning notes
Treat as CUDA/backend-sensitive. Verify torch/CUDA/backend support; do not trust import success alone.

## Windows / ComfyUI risk level
**very_high**

## Quick diagnostic commands
```powershell
python -m bitsandbytes
```
```powershell
python -c "import bitsandbytes as bnb; print(bnb.__version__)"
```

## Common failure signatures
- CUDA setup failed despite torch seeing GPU
- Imports but CUDA kernels unavailable
- Windows wheel/backend mismatch
- Transformers quantized loading errors

## Dependency cluster notes
Quantization cluster: torch + transformers + accelerate + bitsandbytes + CUDA runtime.

## Source context
Consumer hardware quantization and Volume II training research.

## RAG tags
`pip-package`, `v0.5-training-data-config-llm-framework`, `very_high`, `windows-ai`, `training`, `rag`, `local-ai`

## Source URLs
- https://huggingface.co/docs/bitsandbytes/en/installation
- https://huggingface.co/docs/bitsandbytes/index
