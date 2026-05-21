# Pillow

## RAG purpose
Maintained PIL fork for image loading, saving, conversion, resizing, filtering, alpha/mask work, and common image file support.

## Why AI Without Fear cares
Core glue for Gradio apps, workflow pre/post-processing, inpaint masks, old-photo restoration, and guide asset packaging.

## Package identity
- Pip package: `Pillow`
- Import name: `PIL`
- Priority: `critical`
- Windows / ComfyUI risk: `low`

## Common import patterns
- `from PIL import Image`
- `from PIL import ImageFilter`
- `from PIL import ImageOps`

## Install / pinning notes
```powershell
python -m pip install -U Pillow
python -c "from PIL import Image; print(Image.__version__)"
```

## Dependency / cluster notes
- NumPy bridge optional
- common image codecs in wheels

## Common failure signatures
- Do not install abandoned legacy PIL package.
- Mode mismatch RGB/RGBA/L causes bad masks and inpaint inputs.
- EXIF orientation can be ignored unless corrected before model input.

## Quick diagnostic command
```powershell
python -c "from PIL import Image; print(Image.__version__); print(Image.registered_extensions())"
```

## AIWF usage notes
Keep image mode explicit in workflow metadata: RGB, RGBA, grayscale L, binary mask, alpha mask.

## RAG tags
`pip-package`, `v0.3-image-restoration-face-segmentation`, `image-io`, `masking`, `gradio`, `workflow-preprocess`

## Source URLs
- https://pillow.readthedocs.io/
- https://pypi.org/project/pillow/
- https://github.com/python-pillow/Pillow
