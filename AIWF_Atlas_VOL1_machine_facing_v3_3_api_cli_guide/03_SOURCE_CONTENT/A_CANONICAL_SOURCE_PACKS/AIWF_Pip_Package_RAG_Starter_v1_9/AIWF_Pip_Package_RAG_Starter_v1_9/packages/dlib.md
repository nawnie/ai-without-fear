# dlib

## RAG purpose
Legacy face detection and landmark package with frequent native build risk.

## Why AI Without Fear cares
This package appears in the AI Without Fear / ComfyUI / local-AI tooling ecosystem. The RAG should know what it does, whether it belongs in runtime, training, RAG, dev, or custom-node environments, and what to check before adding it to a one-click install.

## Common import patterns
- `dlib`

## Install / pinning notes
Avoid unless required; prefer modern alternatives where scope allows.

## Windows / ComfyUI risk level
**very_high**

## Quick diagnostic commands
```powershell
python -m pip show dlib
python -c "import importlib; m=importlib.import_module('dlib'); print('dlib import ok', getattr(m, '__version__', 'version not exposed'))"
```

## Common failure signatures
- Wrong venv / package installed outside the active interpreter
- Package installs but import name differs from pip name
- Version skew with neighboring packages in the same dependency cluster

## Dependency cluster notes
Category: `face_detection`. Treat this as part of its dependency family, not as an isolated pip name. Confirm adjacent packages before blaming the node or model.

## Source context
Promoted from v0.8 stub/research queue.

## RAG tags
`pip-package`, `v0.9-custom-node-training-web-deps`, `medium`, `very_high`, `windows-ai`, `face_detection`

## Source URLs
- https://pypi.org/project/dlib/
- http://dlib.net/
