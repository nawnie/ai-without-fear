# scikit-image

## RAG purpose
Classical image-processing algorithms for filtering, morphology, measurement, segmentation utilities, transforms, and image-quality metrics.

## Why AI Without Fear cares
Useful for mask cleanup, connected components, restoration QA metrics, image analysis, deterministic preprocessing, and non-deep-learning postprocessing.

## Package identity
- Pip package: `scikit-image`
- Import name: `skimage`
- Priority: `medium`
- Windows / ComfyUI risk: `medium`

## Common import patterns
- `import skimage`
- `from skimage import morphology`
- `from skimage import measure`
- `from skimage.metrics import structural_similarity`

## Install / pinning notes
```powershell
python -m pip install -U scikit-image
python -c "import skimage; print(skimage.__version__)"
```

## Dependency / cluster notes
- numpy
- scipy
- Pillow
- imageio
- tifffile

## Common failure signatures
- Current versions may require newer Python; pip may backtrack.
- NumPy/SciPy compiled-wheel compatibility matters.
- Metrics are easy to misuse if data range/channel axis is wrong.

## Quick diagnostic command
```powershell
python -c "import skimage, numpy; print(skimage.__version__, numpy.__version__)"
```

## AIWF usage notes
Use for deterministic mask repair, morphology, measurements, and metrics.

## RAG tags
`pip-package`, `v0.3-image-restoration-face-segmentation`, `classical-image-processing`, `mask-cleanup`, `metrics`

## Source URLs
- https://scikit-image.org/
- https://scikit-image.org/docs/stable/user_guide/install.html
- https://pypi.org/project/scikit-image/
