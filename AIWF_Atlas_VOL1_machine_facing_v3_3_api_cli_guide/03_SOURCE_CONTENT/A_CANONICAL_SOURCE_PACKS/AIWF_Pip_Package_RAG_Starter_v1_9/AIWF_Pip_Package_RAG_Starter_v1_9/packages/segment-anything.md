# segment-anything

## RAG purpose
Meta Segment Anything Model v1 package for promptable object mask generation from points, boxes, or automatic mask generation.

## Why AI Without Fear cares
Foundational for inpaint mask generation, object isolation, scratch/region repair, old-photo segmentation, and teaching promptable segmentation.

## Package identity
- Pip package: `segment-anything`
- Import name: `segment_anything`
- Priority: `high`
- Windows / ComfyUI risk: `medium`

## Common import patterns
- `from segment_anything import sam_model_registry`
- `from segment_anything import SamPredictor`
- `from segment_anything import SamAutomaticMaskGenerator`

## Install / pinning notes
```powershell
python -m pip install git+https://github.com/facebookresearch/segment-anything.git
python -c "import segment_anything; print(segment_anything.__file__)"
```

## Dependency / cluster notes
- python>=3.8
- torch
- torchvision
- opencv-python
- SAM checkpoint files

## Common failure signatures
- SAM v1 and SAM 2 are distinct installs/checkpoints/configs.
- Checkpoint path must match architecture key.
- Automatic masks can over-segment and need filtering.

## Quick diagnostic command
```powershell
python -c "import segment_anything; print(segment_anything.__file__)"
```

## AIWF usage notes
Use for image masks; prefer SAM2 path for video masks.

## RAG tags
`pip-package`, `v0.3-image-restoration-face-segmentation`, `sam-v1`, `segmentation`, `inpaint-mask`

## Source URLs
- https://github.com/facebookresearch/segment-anything
- https://segment-anything.com/
