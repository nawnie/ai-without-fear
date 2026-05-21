# lion-pytorch

## RAG purpose
Training optimizer package used by older/custom trainer experiments.

## Why AI Without Fear cares
This package appears in the AI Without Fear / ComfyUI / local-AI tooling ecosystem. The RAG should know what it does, whether it belongs in runtime, training, RAG, dev, or custom-node environments, and what to check before adding it to a one-click install.

## Common import patterns
- `lion_pytorch`

## Install / pinning notes
Keep in trainer-specific venvs; requires torch.

## Windows / ComfyUI risk level
**low**

## Quick diagnostic commands
```powershell
python -m pip show lion-pytorch
python -c "import importlib; m=importlib.import_module('lion_pytorch'); print('lion_pytorch import ok', getattr(m, '__version__', 'version not exposed'))"
```

## Common failure signatures
- Wrong venv / package installed outside the active interpreter
- Package installs but import name differs from pip name
- Version skew with neighboring packages in the same dependency cluster

## Dependency cluster notes
Category: `training_optimizer`. Treat this as part of its dependency family, not as an isolated pip name. Confirm adjacent packages before blaming the node or model.

## Source context
Promoted from v0.8 stub/research queue.

## RAG tags
`pip-package`, `v0.9-custom-node-training-web-deps`, `low`, `low`, `windows-ai`, `training_optimizer`

## Source URLs
- https://pypi.org/project/lion-pytorch/
