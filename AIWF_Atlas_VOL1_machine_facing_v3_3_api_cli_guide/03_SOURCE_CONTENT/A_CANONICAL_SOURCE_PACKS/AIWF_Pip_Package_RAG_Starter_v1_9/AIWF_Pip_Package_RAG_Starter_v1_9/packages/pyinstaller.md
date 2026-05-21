# pyinstaller

## RAG purpose
Executable/app bundling tool for one-click Windows utilities.

## Why AI Without Fear cares
This package appears in the AI Without Fear / ComfyUI / local-AI tooling ecosystem. The RAG should know what it does, whether it belongs in runtime, training, RAG, dev, or custom-node environments, and what to check before adding it to a one-click install.

## Common import patterns
- `PyInstaller`

## Install / pinning notes
Good for small tools; risky for bundling full CUDA/AI stacks without testing.

## Windows / ComfyUI risk level
**medium**

## Quick diagnostic commands
```powershell
python -m pip show pyinstaller
python -c "import importlib; m=importlib.import_module('PyInstaller'); print('PyInstaller import ok', getattr(m, '__version__', 'version not exposed'))"
```

## Common failure signatures
- Wrong venv / package installed outside the active interpreter
- Package installs but import name differs from pip name
- Version skew with neighboring packages in the same dependency cluster

## Dependency cluster notes
Category: `packaging`. Treat this as part of its dependency family, not as an isolated pip name. Confirm adjacent packages before blaming the node or model.

## Source context
Promoted from v0.8 stub/research queue.

## RAG tags
`pip-package`, `v0.9-custom-node-training-web-deps`, `low`, `medium`, `windows-ai`, `packaging`

## Source URLs
- https://www.pyinstaller.org/
