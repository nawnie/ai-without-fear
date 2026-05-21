# scipy

## RAG purpose
Scientific numerical backend used directly or indirectly by image, trainer, and analysis packages.

## Why AI Without Fear cares
Optimization, interpolation, signal/image processing, sparse matrices, stats, and numerical routines.

## Common import patterns
- `scipy`

## Install / pinning notes
Pin with numpy. Wheels/Python-version compatibility matter.

## Windows / ComfyUI risk level
**medium**

## Quick diagnostic commands
```powershell
python -c "import scipy; print(scipy.__version__)"
```

## Common failure signatures
- No compatible wheel for Python version
- NumPy/SciPy ABI mismatch
- Dependent package breaks after SciPy upgrade

## Dependency cluster notes
Compiled numeric stack: numpy + scipy + scikit-image + pandas.

## Source context
Image/science stack; trainer dependencies; signal/numeric algorithms.

## RAG tags
`pip-package`, `v0.5-training-data-config-llm-framework`, `medium`, `windows-ai`, `training`, `rag`, `local-ai`

## Source URLs
- https://scipy.org/
- https://scipy.org/install/
- https://docs.scipy.org/doc/scipy/reference/
