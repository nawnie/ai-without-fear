# xformers

## RAG purpose
Optimized transformer building blocks, especially memory-efficient attention. In diffusion stacks it can reduce VRAM and speed up attention-heavy model inference/training.

## Why AI Without Fear cares
xformers is useful but brittle. It is tied to the torch, CUDA, Python, and wheel build. When it cannot load its C++/CUDA extensions, generation may still run but performance and memory behavior change.

## Common import patterns
- `import xformers`

## Install / pinning notes
Prefer the wheel expected by the active torch build. If a working ComfyUI install already uses PyTorch attention or SageAttention, do not add xformers unless the workflow actually needs it.

## Windows / ComfyUI risk level
**very_high**

## Quick diagnostic commands
```powershell
python -c "import torch, xformers; print(torch.__version__); print(xformers.__version__)"
```
```powershell
$env:XFORMERS_MORE_DETAILS="1"; python -c "import xformers; import xformers.ops"
```

## Common failure signatures
- `WARNING[XFORMERS]: xFormers can't load C++/CUDA extensions`
- message says xformers was built for a different PyTorch/CUDA/Python version
- sudden OOM after disabling or breaking xformers

## AIWF usage notes
In RAG troubleshooting, xformers should be treated as an acceleration backend, not a general cure. First record torch/CUDA/Python versions.

## RAG tags
`pip-package`, `v0.2-core-runtime`, `very_high`, `windows-ai`, `comfyui`, `gradio`, `local-ai`

## Source URLs
- https://github.com/facebookresearch/xformers
- https://huggingface.co/docs/diffusers/en/optimization/xformers
