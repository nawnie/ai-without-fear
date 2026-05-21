# gfpgan

## RAG purpose
Practical real-world/blind face restoration package using pretrained face priors.

## Why AI Without Fear cares
Important for old-photo workflows, face repair passes, and comparisons against CodeFormer/ReActor-style face enhancement; it is face restoration, not a general upscaler.

## Package identity
- Pip package: `gfpgan`
- Import name: `gfpgan`
- Priority: `high`
- Windows / ComfyUI risk: `high`

## Common import patterns
- `from gfpgan import GFPGANer`

## Install / pinning notes
```powershell
python -m pip install gfpgan
# existing Comfy/SD venv option after reviewing deps:
python -m pip install gfpgan --no-deps
```

## Dependency / cluster notes
- torch
- basicsr
- facexlib
- realesrgan
- opencv-python
- Pillow
- model weights

## Common failure signatures
- Resolver may alter torch/torchvision/basicsr/NumPy in a working venv.
- Missing model weights cause runtime failure after import succeeds.
- Over-restoration creates waxy faces or identity drift, especially across video frames.

## Quick diagnostic command
```powershell
python -m pip show gfpgan basicsr facexlib realesrgan
```

## AIWF usage notes
Use as a targeted face pass and verify identity/temporal consistency before baking into workflows.

## RAG tags
`pip-package`, `v0.3-image-restoration-face-segmentation`, `face-restore`, `old-photo`, `restoration`, `model-weights`

## Source URLs
- https://github.com/TencentARC/GFPGAN
- https://pypi.org/project/gfpgan/
