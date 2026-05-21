# black

## RAG purpose
Python formatter for consistent generated code.

## Why AI Without Fear cares
This package appears in the AI Without Fear / ComfyUI / local-AI tooling ecosystem. The RAG should know what it does, whether it belongs in runtime, training, RAG, dev, or custom-node environments, and what to check before adding it to a one-click install.

## Common import patterns
- `black`

## Install / pinning notes
Requires Python 3.10+ per current docs; Ruff may cover formatting too.

## Windows / ComfyUI risk level
**low**

## Quick diagnostic commands
```powershell
python -m pip show black
python -c "import importlib; m=importlib.import_module('black'); print('black import ok', getattr(m, '__version__', 'version not exposed'))"
```

## Common failure signatures
- Wrong venv / package installed outside the active interpreter
- Package installs but import name differs from pip name
- Version skew with neighboring packages in the same dependency cluster

## Dependency cluster notes
Category: `lint_format`. Treat this as part of its dependency family, not as an isolated pip name. Confirm adjacent packages before blaming the node or model.

## Source context
Promoted from v0.8 stub/research queue.

## RAG tags
`pip-package`, `v0.9-custom-node-training-web-deps`, `low`, `low`, `windows-ai`, `lint_format`

## Source URLs
- https://black.readthedocs.io/en/stable/getting_started.html
- https://pypi.org/project/black/
