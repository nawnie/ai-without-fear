# realesrgan

## RAG purpose
Real-ESRGAN implementation for practical general image/video restoration and upscaling.

## Why AI Without Fear cares
Baseline non-diffusion upscaler for comparing against SUPIR, CCSR, HYPIR, tiled VAEs, and diffusion upscalers.

## Package identity
- Pip package: `realesrgan`
- Import name: `realesrgan`
- Priority: `high`
- Windows / ComfyUI risk: `high`

## Common import patterns
- `from realesrgan import RealESRGANer`

## Install / pinning notes
```powershell
python -m pip install realesrgan
python -c "import realesrgan; print(realesrgan.__file__)"
```

## Dependency / cluster notes
- torch
- basicsr
- facexlib
- gfpgan optional
- model weights

## Common failure signatures
- Shares BasicSR/TorchVision legacy failure modes.
- Wrong x2/x4/anime/general model causes artifact mismatch.
- Video use can flicker; not a temporal consistency system.
- Large tiles can OOM without tiling.

## Quick diagnostic command
```powershell
python -m pip show realesrgan basicsr gfpgan facexlib
```

## AIWF usage notes
Good baseline; combine carefully with face-specific restoration for faces.

## RAG tags
`pip-package`, `v0.3-image-restoration-face-segmentation`, `upscaling`, `restoration`, `baseline-upscaler`

## Source URLs
- https://github.com/xinntao/Real-ESRGAN
- https://pypi.org/project/realesrgan/
- https://github.com/xinntao/Real-ESRGAN/issues/768
