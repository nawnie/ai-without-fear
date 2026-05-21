# watchdog

## RAG purpose
Filesystem watcher for model folders, auto-refresh, and dev tools.

## Why AI Without Fear cares
This package appears in the AI Without Fear / ComfyUI / local-AI tooling ecosystem. The RAG should know what it does, whether it belongs in runtime, training, RAG, dev, or custom-node environments, and what to check before adding it to a one-click install.

## Common import patterns
- `watchdog`

## Install / pinning notes
watchdog[watchmedo] adds CLI utility; platform observers differ.

## Windows / ComfyUI risk level
**low**

## Quick diagnostic commands
```powershell
python -m pip show watchdog
python -c "import importlib; m=importlib.import_module('watchdog'); print('watchdog import ok', getattr(m, '__version__', 'version not exposed'))"
```

## Common failure signatures
- Wrong venv / package installed outside the active interpreter
- Package installs but import name differs from pip name
- Version skew with neighboring packages in the same dependency cluster

## Dependency cluster notes
Category: `filesystem_watch`. Treat this as part of its dependency family, not as an isolated pip name. Confirm adjacent packages before blaming the node or model.

## Source context
Added in v0.9 custom-node/training/web package expansion.

## RAG tags
`pip-package`, `v0.9-custom-node-training-web-deps`, `low`, `low`, `windows-ai`, `filesystem_watch`

## Source URLs
- https://github.com/gorakhargosh/watchdog
- https://pypi.org/project/watchdog/
