# ruff

## RAG purpose
Fast linter/formatter for GitHub-ready Python code.

## Why AI Without Fear cares
This package appears in the AI Without Fear / ComfyUI / local-AI tooling ecosystem. The RAG should know what it does, whether it belongs in runtime, training, RAG, dev, or custom-node environments, and what to check before adding it to a one-click install.

## Common import patterns
- `ruff`

## Install / pinning notes
Dev/tool dependency; useful quality gate for generated repos.

## Windows / ComfyUI risk level
**low**

## Quick diagnostic commands
```powershell
python -m pip show ruff
python -c "import importlib; m=importlib.import_module('ruff'); print('ruff import ok', getattr(m, '__version__', 'version not exposed'))"
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
- https://docs.astral.sh/ruff/
- https://docs.astral.sh/ruff/installation/
