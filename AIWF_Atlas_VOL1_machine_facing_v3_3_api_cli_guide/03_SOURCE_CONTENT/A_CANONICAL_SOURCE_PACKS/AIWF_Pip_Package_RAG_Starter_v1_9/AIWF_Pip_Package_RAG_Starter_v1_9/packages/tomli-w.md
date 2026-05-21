# tomli-w

## RAG purpose
Write-only TOML writer for scaffolding configs/pyproject files.

## Why AI Without Fear cares
This package appears in the AI Without Fear / ComfyUI / local-AI tooling ecosystem. The RAG should know what it does, whether it belongs in runtime, training, RAG, dev, or custom-node environments, and what to check before adding it to a one-click install.

## Common import patterns
- `tomli_w`

## Install / pinning notes
Use for tooling; runtime nodes usually should not need it.

## Windows / ComfyUI risk level
**low**

## Quick diagnostic commands
```powershell
python -m pip show tomli-w
python -c "import importlib; m=importlib.import_module('tomli_w'); print('tomli_w import ok', getattr(m, '__version__', 'version not exposed'))"
```

## Common failure signatures
- Wrong venv / package installed outside the active interpreter
- Package installs but import name differs from pip name
- Version skew with neighboring packages in the same dependency cluster

## Dependency cluster notes
Category: `config`. Treat this as part of its dependency family, not as an isolated pip name. Confirm adjacent packages before blaming the node or model.

## Source context
Promoted from v0.8 stub/research queue.

## RAG tags
`pip-package`, `v0.9-custom-node-training-web-deps`, `low`, `low`, `windows-ai`, `config`

## Source URLs
- https://pypi.org/project/tomli-w/
- https://github.com/hukkin/tomli-w
