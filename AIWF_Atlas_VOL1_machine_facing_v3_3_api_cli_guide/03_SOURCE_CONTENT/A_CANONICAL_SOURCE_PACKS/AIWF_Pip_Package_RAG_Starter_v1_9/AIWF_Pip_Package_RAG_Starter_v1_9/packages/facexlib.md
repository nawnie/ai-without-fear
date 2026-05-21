# facexlib

## RAG purpose
Ready-to-use face-related functions: detection, alignment, parsing, and restoration helpers around open-source reference methods.

## Why AI Without Fear cares
Transitive dependency under GFPGAN/restoration; face alignment quality decides whether face restoration helps or damages identity.

## Package identity
- Pip package: `facexlib`
- Import name: `facexlib`
- Priority: `high`
- Windows / ComfyUI risk: `medium`

## Common import patterns
- `import facexlib`
- `from facexlib.utils.face_restoration_helper import FaceRestoreHelper`

## Install / pinning notes
```powershell
python -m pip install facexlib
python -c "import facexlib; print(facexlib.__file__)"
```

## Dependency / cluster notes
- torch
- torchvision
- opencv-python
- numpy
- model weights for some helpers

## Common failure signatures
- Underlying models/algorithms may have separate licenses.
- Face detection failure causes wrong crops or skipped restoration.
- Multiple face stacks can disagree on ONNX/OpenCV/NumPy constraints.

## Quick diagnostic command
```powershell
python -c "import facexlib; print(facexlib.__file__)"
```

## AIWF usage notes
Store face crop/alignment assumptions in workflow metadata.

## RAG tags
`pip-package`, `v0.3-image-restoration-face-segmentation`, `face-utils`, `face-alignment`, `license-check`

## Source URLs
- https://github.com/xinntao/facexlib
- https://pypi.org/project/facexlib/
