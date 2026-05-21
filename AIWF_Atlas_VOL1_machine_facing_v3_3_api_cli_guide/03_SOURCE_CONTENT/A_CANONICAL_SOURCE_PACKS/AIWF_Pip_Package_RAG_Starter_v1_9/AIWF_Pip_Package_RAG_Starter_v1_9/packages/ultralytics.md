# ultralytics

## RAG purpose
Ultralytics YOLO package for detection, segmentation, classification, pose, tracking, training, validation, prediction, and export.

## Why AI Without Fear cares
Useful for auto-mask routing, person/object/clothing regions, dataset creation, and ComfyUI helper nodes using YOLO-family models.

## Package identity
- Pip package: `ultralytics`
- Import name: `ultralytics`
- Priority: `high`
- Windows / ComfyUI risk: `medium`

## Common import patterns
- `from ultralytics import YOLO`

## Install / pinning notes
```powershell
python -m pip install -U ultralytics
yolo checks
python -c "from ultralytics import YOLO; print(YOLO)"
```

## Dependency / cluster notes
- torch
- opencv-python
- numpy
- Pillow
- PyYAML
- utility deps

## Common failure signatures
- Install can pull/modify torch/opencv; protect working ComfyUI CUDA stack.
- Detect/segment/pose model outputs are different.
- Auto-download/cache paths matter for portable workflows.

## Quick diagnostic command
```powershell
yolo checks
```

## AIWF usage notes
Record model task type, classes, boxes, masks, confidence thresholds, and output schema.

## RAG tags
`pip-package`, `v0.3-image-restoration-face-segmentation`, `yolo`, `detection`, `segmentation`, `auto-mask`

## Source URLs
- https://docs.ultralytics.com/
- https://docs.ultralytics.com/quickstart/
- https://docs.ultralytics.com/usage/python/
- https://pypi.org/project/ultralytics/
