# timm

## RAG purpose
PyTorch Image Models library: pretrained vision backbones, layers, training/eval utilities, and augmentations.

## Why AI Without Fear cares
Reference model zoo for image understanding, VQA prep, classifier features, and training examples.

## Common import patterns
- `timm`

## Install / pinning notes
Pin with torch/torchvision. Model names and pretrained weights can change across versions.

## Windows / ComfyUI risk level
**medium**

## Quick diagnostic commands
```powershell
python -c "import timm; print(timm.__version__); print(len(timm.list_models()))"
```

## Common failure signatures
- Model name not found after version change
- Weights download/cache failure
- Torchvision/torch mismatch

## Dependency cluster notes
Torch vision/model cluster: torch + torchvision + timm + huggingface_hub.

## Source context
Vision encoders, classifier/backbone models, training/eval scripts, image model utilities.

## RAG tags
`pip-package`, `v0.5-training-data-config-llm-framework`, `medium`, `windows-ai`, `training`, `rag`, `local-ai`

## Source URLs
- https://huggingface.co/docs/timm/index
- https://huggingface.co/timm
- https://pypi.org/project/timm/
