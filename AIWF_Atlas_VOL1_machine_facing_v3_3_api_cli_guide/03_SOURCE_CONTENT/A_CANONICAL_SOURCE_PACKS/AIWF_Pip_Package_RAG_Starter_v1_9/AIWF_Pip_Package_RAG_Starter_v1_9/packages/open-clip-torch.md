# open-clip-torch

## RAG purpose
OpenCLIP package for CLIP-like vision-language models.

## Why AI Without Fear cares
This package appears in the AI Without Fear / ComfyUI / local-AI tooling ecosystem. The RAG should know what it does, whether it belongs in runtime, training, RAG, dev, or custom-node environments, and what to check before adding it to a one-click install.

## Common import patterns
- `open_clip`

## Install / pinning notes
Imports as open_clip; depends on torch/torchvision/model cache.

## Windows / ComfyUI risk level
**medium**

## Quick diagnostic commands
```powershell
python -m pip show open-clip-torch
python -c "import importlib; m=importlib.import_module('open_clip'); print('open_clip import ok', getattr(m, '__version__', 'version not exposed'))"
```

## Common failure signatures
- Wrong venv / package installed outside the active interpreter
- Package installs but import name differs from pip name
- Version skew with neighboring packages in the same dependency cluster

## Dependency cluster notes
Category: `vision_language_model`. Treat this as part of its dependency family, not as an isolated pip name. Confirm adjacent packages before blaming the node or model.

## Source context
Added in v0.9 custom-node/training/web package expansion.

## RAG tags
`pip-package`, `v0.9-custom-node-training-web-deps`, `medium`, `medium`, `windows-ai`, `vision_language_model`

## Source URLs
- https://pypi.org/project/open-clip-torch/
- https://github.com/mlfoundations/open_clip
