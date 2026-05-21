# albumentations

## RAG purpose
Fast image augmentation library for CV/training pipelines.

## Why AI Without Fear cares
This package appears in the AI Without Fear / ComfyUI / local-AI tooling ecosystem. The RAG should know what it does, whether it belongs in runtime, training, RAG, dev, or custom-node environments, and what to check before adding it to a one-click install.

## Common import patterns
- `albumentations`

## Install / pinning notes
Training/data-prep dependency; keep away from basic ComfyUI unless required.

## Windows / ComfyUI risk level
**medium**

## Quick diagnostic commands
```powershell
python -m pip show albumentations
python -c "import importlib; m=importlib.import_module('albumentations'); print('albumentations import ok', getattr(m, '__version__', 'version not exposed'))"
```

## Common failure signatures
- Wrong venv / package installed outside the active interpreter
- Package installs but import name differs from pip name
- Version skew with neighboring packages in the same dependency cluster

## Dependency cluster notes
Category: `training_augmentation`. Treat this as part of its dependency family, not as an isolated pip name. Confirm adjacent packages before blaming the node or model.

## Source context
Added in v0.9 custom-node/training/web package expansion.

## RAG tags
`pip-package`, `v0.9-custom-node-training-web-deps`, `medium`, `medium`, `windows-ai`, `training_augmentation`

## Source URLs
- https://albumentations.ai/docs/1-introduction/installation/
- https://pypi.org/project/albumentations/
