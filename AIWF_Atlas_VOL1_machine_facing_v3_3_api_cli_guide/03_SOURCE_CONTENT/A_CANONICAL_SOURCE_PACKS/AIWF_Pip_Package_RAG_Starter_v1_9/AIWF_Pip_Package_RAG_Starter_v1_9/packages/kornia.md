# kornia

## RAG purpose
PyTorch-native differentiable computer vision operations and image-processing utilities.

## Why AI Without Fear cares
Useful for GPU tensor image transforms without constant PIL/OpenCV roundtrips.

## Common import patterns
- `kornia`

## Install / pinning notes
Depends on PyTorch; validate torch/CUDA first.

## Windows / ComfyUI risk level
**medium**

## Quick diagnostic commands
```powershell
python -c "import kornia; print(kornia.__version__)"
```

## Common failure signatures
- Torch/CUDA issue appears as Kornia issue
- Tensor layout/channel assumptions wrong
- Version mismatch with torch/Python

## Dependency cluster notes
Torch vision utility cluster: torch + torchvision + kornia + timm.

## Source context
Differentiable image processing, augmentation, geometry, restoration/control helpers.

## RAG tags
`pip-package`, `v0.5-training-data-config-llm-framework`, `medium`, `windows-ai`, `training`, `rag`, `local-ai`

## Source URLs
- https://kornia.readthedocs.io/en/latest/get-started/installation.html
- https://pypi.org/project/kornia/
