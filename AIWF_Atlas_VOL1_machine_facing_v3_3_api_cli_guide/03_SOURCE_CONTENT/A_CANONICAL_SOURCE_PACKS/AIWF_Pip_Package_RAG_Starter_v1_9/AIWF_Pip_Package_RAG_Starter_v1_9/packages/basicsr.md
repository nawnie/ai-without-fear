# basicsr

## RAG purpose
Basic Super Restoration framework used by older super-resolution, denoise, deblur, JPEG artifact, GFPGAN, and Real-ESRGAN-era projects.

## Why AI Without Fear cares
Hidden root of many old-photo/upscaler breakages; treat as infrastructure under GFPGAN/Real-ESRGAN rather than a user-facing model.

## Package identity
- Pip package: `basicsr`
- Import name: `basicsr`
- Priority: `high`
- Windows / ComfyUI risk: `high`

## Common import patterns
- `import basicsr`

## Install / pinning notes
```powershell
python -m pip install basicsr
python -c "import basicsr; print(basicsr.__file__)"
```

## Dependency / cluster notes
- torch
- torchvision
- numpy
- opencv-python
- lmdb
- pyyaml
- tqdm

## Common failure signatures
- Known failure: ModuleNotFoundError for torchvision.transforms.functional_tensor with newer TorchVision.
- Older restoration repos assume old torch/torchvision APIs.
- Full training framework may be unnecessary when only inference wrapper is needed.

## Quick diagnostic command
```powershell
python -c "import basicsr, torchvision; print(basicsr.__file__); print(torchvision.__version__)"
```

## AIWF usage notes
Treat functional_tensor errors as version skew, not as a missing random package.

## RAG tags
`pip-package`, `v0.3-image-restoration-face-segmentation`, `restoration-framework`, `legacy-risk`, `torchvision-api-risk`

## Source URLs
- https://github.com/XPixelGroup/BasicSR
- https://basicsr.readthedocs.io/
- https://pypi.org/project/basicsr/
- https://github.com/xinntao/Real-ESRGAN/issues/768
