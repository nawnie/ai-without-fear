# opencv-python

## RAG purpose
Pre-built OpenCV Python bindings. Pip package is opencv-python; import name is cv2.

## Why AI Without Fear cares
Used for frame/image I/O, Canny/edge, resizing, color conversion, masks, video utilities, detectors, and VQA preprocessing.

## Package identity
- Pip package: `opencv-python`
- Import name: `cv2`
- Priority: `critical`
- Windows / ComfyUI risk: `medium`

## Common import patterns
- `import cv2`

## Install / pinning notes
```powershell
python -m pip install -U opencv-python
# headless worker alternative:
python -m pip install -U opencv-python-headless
python -c "import cv2; print(cv2.__version__)"
```

## Dependency / cluster notes
- numpy
- video/image codecs depending on operation
- GUI libs unless headless package is used

## Common failure signatures
- Do not install multiple OpenCV wheel variants together unless intentional.
- Users search for cv2 but pip package is not cv2.
- OpenCV often uses BGR while PIL/diffusion tooling uses RGB.
- Pip may try source builds if no wheel exists for a new Python.

## Quick diagnostic command
```powershell
python -c "import cv2; print(cv2.__version__); print(cv2.__file__)"
```

## AIWF usage notes
Whenever cv2 and PIL appear together, warn about BGR/RGB conversion and dtype/range.

## RAG tags
`pip-package`, `v0.3-image-restoration-face-segmentation`, `image-video-io`, `cv2`, `detectors`, `headless-choice`

## Source URLs
- https://pypi.org/project/opencv-python/
- https://github.com/opencv/opencv-python
- https://docs.opencv.org/
