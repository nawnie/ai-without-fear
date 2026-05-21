# controlnet-aux

## RAG purpose
Pip-installable ControlNet auxiliary annotators/preprocessors for hint-image generation.

## Why AI Without Fear cares
Package-level layer behind canny, depth, lineart, pose, normal, tile, scribble, and other conditioning maps; the conditioning image can matter more than the text prompt.

## Package identity
- Pip package: `controlnet-aux`
- Import name: `controlnet_aux`
- Priority: `high`
- Windows / ComfyUI risk: `medium`

## Common import patterns
- `from controlnet_aux import CannyDetector`
- `from controlnet_aux import MidasDetector`
- `from controlnet_aux import OpenposeDetector`
- `from controlnet_aux import ZoeDetector`

## Install / pinning notes
```powershell
python -m pip install -U controlnet-aux
python -c "import controlnet_aux; print(controlnet_aux.__file__)"
```

## Dependency / cluster notes
- Pillow
- numpy
- opencv-python
- torch
- transformers/huggingface_hub for some detectors
- detector model files

## Common failure signatures
- Do not confuse pip package with ComfyUI custom-node pack.
- Detector model downloads may fail if HF cache/network is unavailable.
- AIO preprocessor nodes may hide thresholds needed by advanced workflows.

## Quick diagnostic command
```powershell
python -c "import controlnet_aux; print(controlnet_aux.__file__)"
```

## AIWF usage notes
Document the exact preprocessor output type: canny, depth, pose, lineart, normal, tile, scribble, etc.

## RAG tags
`pip-package`, `v0.3-image-restoration-face-segmentation`, `controlnet`, `preprocessor`, `conditioning-image`, `depth`, `pose`

## Source URLs
- https://github.com/huggingface/controlnet_aux
- https://github.com/Fannovel16/comfyui_controlnet_aux
- https://github.com/comfyorg/comfyui-controlnet-aux
