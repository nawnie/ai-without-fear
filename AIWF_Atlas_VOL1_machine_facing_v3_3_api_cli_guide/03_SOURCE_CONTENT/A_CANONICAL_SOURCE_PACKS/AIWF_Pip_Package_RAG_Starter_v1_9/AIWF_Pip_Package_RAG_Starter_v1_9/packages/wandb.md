# wandb

## RAG purpose
Weights & Biases experiment tracking SDK.

## Why AI Without Fear cares
This package appears in the AI Without Fear / ComfyUI / local-AI tooling ecosystem. The RAG should know what it does, whether it belongs in runtime, training, RAG, dev, or custom-node environments, and what to check before adding it to a one-click install.

## Common import patterns
- `wandb`

## Install / pinning notes
Requires account/API/offline-mode decisions; privacy matters in local-first guide.

## Windows / ComfyUI risk level
**low**

## Quick diagnostic commands
```powershell
python -m pip show wandb
python -c "import importlib; m=importlib.import_module('wandb'); print('wandb import ok', getattr(m, '__version__', 'version not exposed'))"
```

## Common failure signatures
- Wrong venv / package installed outside the active interpreter
- Package installs but import name differs from pip name
- Version skew with neighboring packages in the same dependency cluster

## Dependency cluster notes
Category: `experiment_tracking`. Treat this as part of its dependency family, not as an isolated pip name. Confirm adjacent packages before blaming the node or model.

## Source context
Added in v0.9 custom-node/training/web package expansion.

## RAG tags
`pip-package`, `v0.9-custom-node-training-web-deps`, `medium`, `low`, `windows-ai`, `experiment_tracking`

## Source URLs
- https://docs.wandb.ai/models/quickstart
- https://pypi.org/project/wandb/
