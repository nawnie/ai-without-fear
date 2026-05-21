# orjson

## RAG purpose
Fast JSON serializer/deserializer for APIs, manifests, and RAG loaders.

## Why AI Without Fear cares
This package appears in the AI Without Fear / ComfyUI / local-AI tooling ecosystem. The RAG should know what it does, whether it belongs in runtime, training, RAG, dev, or custom-node environments, and what to check before adding it to a one-click install.

## Common import patterns
- `orjson`

## Install / pinning notes
Optional optimization unless required; source builds may need Rust if no wheel exists.

## Windows / ComfyUI risk level
**low**

## Quick diagnostic commands
```powershell
python -m pip show orjson
python -c "import importlib; m=importlib.import_module('orjson'); print('orjson import ok', getattr(m, '__version__', 'version not exposed'))"
```

## Common failure signatures
- Wrong venv / package installed outside the active interpreter
- Package installs but import name differs from pip name
- Version skew with neighboring packages in the same dependency cluster

## Dependency cluster notes
Category: `json_serialization`. Treat this as part of its dependency family, not as an isolated pip name. Confirm adjacent packages before blaming the node or model.

## Source context
Added in v0.9 custom-node/training/web package expansion.

## RAG tags
`pip-package`, `v0.9-custom-node-training-web-deps`, `medium`, `low`, `windows-ai`, `json_serialization`

## Source URLs
- https://pypi.org/project/orjson/
- https://github.com/ijl/orjson/releases
