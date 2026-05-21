# numpy

## RAG purpose
Base N-dimensional array package and bridge between PIL/OpenCV images, masks, tensors, embeddings, and numerical diagnostics.

## Why AI Without Fear cares
Nearly every AIWF stack touches NumPy indirectly; it is the ABI surface under OpenCV, ONNX Runtime, scikit-image, metrics, and older restoration packages.

## Package identity
- Pip package: `numpy`
- Import name: `numpy`
- Priority: `critical`
- Windows / ComfyUI risk: `medium`

## Common import patterns
- `import numpy as np`

## Install / pinning notes
```powershell
python -m pip install -U numpy
python -c "import numpy as np; print(np.__version__); print(np.__file__)"
```

## Dependency / cluster notes
- compiled extension ABI for downstream packages
- OpenCV
- scikit-image
- onnxruntime

## Common failure signatures
- NumPy 2.x can expose binary compatibility issues in packages compiled against older C APIs.
- dtype size changed / _ARRAY_API failures usually mean compiled wheel mismatch.
- Plain pip upgrades can move NumPy outside the range expected by older nodes.

## Quick diagnostic command
```powershell
python -c "import numpy as np; print(np.__version__); print(np.__file__)"
```

## AIWF usage notes
For image debugging log shape, dtype, min/max, channel count, and channel order before changing model settings.

## RAG tags
`pip-package`, `v0.3-image-restoration-face-segmentation`, `numeric-core`, `abi-risk`, `image-array`

## Source URLs
- https://numpy.org/install/
- https://numpy.org/devdocs/numpy_2_0_migration_guide.html
- https://numpy.org/doc/2.0/dev/depending_on_numpy.html
- https://pypi.org/project/numpy/
