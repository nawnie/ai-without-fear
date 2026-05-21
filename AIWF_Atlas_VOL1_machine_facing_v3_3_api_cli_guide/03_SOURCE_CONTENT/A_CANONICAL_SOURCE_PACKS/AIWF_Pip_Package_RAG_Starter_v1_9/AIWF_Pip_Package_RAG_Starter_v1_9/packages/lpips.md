# lpips

## RAG purpose
Learned perceptual similarity metric for image QA/evaluation.

## Why AI Without Fear cares
This package appears in the AI Without Fear / ComfyUI / local-AI tooling ecosystem. The RAG should know what it does, whether it belongs in runtime, training, RAG, dev, or custom-node environments, and what to check before adding it to a one-click install.

## Common import patterns
- `lpips`

## Install / pinning notes
Torch-based metric; not a restoration model by itself.

## Windows / ComfyUI risk level
**medium**

## Quick diagnostic commands
```powershell
python -m pip show lpips
python -c "import importlib; m=importlib.import_module('lpips'); print('lpips import ok', getattr(m, '__version__', 'version not exposed'))"
```

## Common failure signatures
- Wrong venv / package installed outside the active interpreter
- Package installs but import name differs from pip name
- Version skew with neighboring packages in the same dependency cluster

## Dependency cluster notes
Category: `image_quality_metric`. Treat this as part of its dependency family, not as an isolated pip name. Confirm adjacent packages before blaming the node or model.

## Source context
Added in v0.9 custom-node/training/web package expansion.

## RAG tags
`pip-package`, `v0.9-custom-node-training-web-deps`, `medium`, `medium`, `windows-ai`, `image_quality_metric`

## Source URLs
- https://github.com/richzhang/PerceptualSimilarity
- https://lightning.ai/docs/torchmetrics/stable//image/learned_perceptual_image_patch_similarity.html
