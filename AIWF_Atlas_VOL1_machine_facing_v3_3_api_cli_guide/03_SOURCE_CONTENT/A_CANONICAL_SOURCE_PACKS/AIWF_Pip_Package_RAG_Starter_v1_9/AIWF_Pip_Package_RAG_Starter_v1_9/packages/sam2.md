# sam2

## RAG purpose
Meta Segment Anything Model 2 repo/package for image and video promptable segmentation, SAM 2.1 checkpoints, and video-aware memory.

## Why AI Without Fear cares
Modern target for inpaint automation, video masking, last-frame workflows, and object-consistent segmentation across frames. Treat as repo/editable install.

## Package identity
- Pip package: `SAM-2 / editable sam2 repo`
- Import name: `sam2`
- Priority: `high`
- Windows / ComfyUI risk: `high`

## Common import patterns
- `import sam2`
- `from sam2.build_sam import build_sam2`
- `from sam2.sam2_image_predictor import SAM2ImagePredictor`

## Install / pinning notes
```powershell
git clone https://github.com/facebookresearch/sam2.git
cd sam2
python -m pip install -e .
python -m pip install -e ".[notebooks]"
# Windows fallback when CUDA extension build is not needed:
$env:SAM2_BUILD_CUDA="0"; python -m pip install -e ".[notebooks]"
```

## Dependency / cluster notes
- python>=3.10
- torch>=2.5.1 per upstream notes
- torchvision>=0.20.1
- CUDA toolkit/NVCC if building extension
- checkpoints/configs

## Common failure signatures
- Upstream recommends WSL/Ubuntu for Windows.
- CUDA extension can fail while core SAM2 still runs with limited post-processing.
- Old install may not load SAM2.1 checkpoints.
- MissingConfigException usually means editable install/PYTHONPATH/config issue.
- Pip may upgrade torch if not isolated.

## Quick diagnostic command
```powershell
python -c "import torch; from torch.utils.cpp_extension import CUDA_HOME; print(torch.__version__, torch.cuda.is_available(), CUDA_HOME)"
```

## AIWF usage notes
Install in isolated worker venv first; protect main ComfyUI venv.

## RAG tags
`pip-package`, `v0.3-image-restoration-face-segmentation`, `sam2`, `video-segmentation`, `cuda-extension-risk`, `repo-install`

## Source URLs
- https://github.com/facebookresearch/sam2
- https://github.com/facebookresearch/sam2/blob/main/INSTALL.md
