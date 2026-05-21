# diffusers

## RAG purpose
Hugging Face diffusion pipeline library for text-to-image, img2img, inpainting, ControlNet-style workflows, and many newer model families.

## Why AI Without Fear cares
Diffusers is the clean app-building layer for AIWF Gradio tools and training/reference demos. It is often easier to script than ComfyUI JSON when building a focused single-purpose app.

## Common import patterns
- `import diffusers`
- `from diffusers import AutoPipelineForInpainting`

## Install / pinning notes
Pin alongside transformers, accelerate, safetensors, huggingface_hub, and torch. Avoid mixing old SD-era pins with newest model repos without a project-specific venv.

## Windows / ComfyUI risk level
**medium**

## Quick diagnostic commands
```powershell
python -c "import diffusers; print(diffusers.__version__)"
```

## Common failure signatures
- pipeline class missing because diffusers is too old
- model repo requires a newer scheduler/pipeline
- safetensors or transformers version mismatch during load

## AIWF usage notes
For AIWF RAG, record which pipeline classes matter: inpainting, ControlNet, SDXL, Flux-adjacent, video/image variants, and whether custom pipeline code is required.

## RAG tags
`pip-package`, `v0.2-huggingface-diffusion`, `medium`, `windows-ai`, `comfyui`, `gradio`, `local-ai`

## Source URLs
- https://huggingface.co/docs/diffusers/index
- https://huggingface.co/docs/diffusers/en/optimization/xformers
- https://huggingface.co/docs/diffusers/main/en/using-diffusers/using_safetensors
