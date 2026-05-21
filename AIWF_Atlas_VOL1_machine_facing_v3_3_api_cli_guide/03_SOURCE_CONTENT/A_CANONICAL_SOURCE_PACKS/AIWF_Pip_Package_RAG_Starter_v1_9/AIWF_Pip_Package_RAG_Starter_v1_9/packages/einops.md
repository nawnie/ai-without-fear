# einops

## RAG purpose
Tensor shape manipulation language used throughout diffusion, video, and model architecture code.

## Why AI Without Fear cares
Readable rearrange/reduce/repeat patterns expose batch/frame/channel/latent dimensionality problems.

## Common import patterns
- `einops`

## Install / pinning notes
Light dependency. Most failures are shape/pattern bugs, not install bugs.

## Windows / ComfyUI risk level
**low**

## Quick diagnostic commands
```powershell
python -c "from einops import rearrange; import numpy as np; print(rearrange(np.zeros((2,3)), 'h w -> w h').shape)"
```

## Common failure signatures
- Pattern axis missing or duplicated
- Batch/frame/channel order mismatch
- BCHW vs BHWC confusion

## Dependency cluster notes
Tensor utility cluster: einops + torch + numpy.

## Source context
Diffusion/video/model code; tensor rearrange patterns; ComfyUI custom nodes.

## RAG tags
`pip-package`, `v0.5-training-data-config-llm-framework`, `low`, `windows-ai`, `training`, `rag`, `local-ai`

## Source URLs
- https://einops.rocks/
- https://einops.rocks/1-einops-basics/
