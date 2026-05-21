# groundingdino-py

## RAG purpose
PyPI package-name variant for GroundingDINO imports.

## Why AI Without Fear cares
This package appears in the AI Without Fear / ComfyUI / local-AI tooling ecosystem. The RAG should know what it does, whether it belongs in runtime, training, RAG, dev, or custom-node environments, and what to check before adding it to a one-click install.

## Common import patterns
- `groundingdino`

## Install / pinning notes
Disambiguate pip name vs import path; not guaranteed to match every repo/node layout.

## Windows / ComfyUI risk level
**very_high**

## Quick diagnostic commands
```powershell
python -m pip show groundingdino-py
python -c "import importlib; m=importlib.import_module('groundingdino'); print('groundingdino import ok', getattr(m, '__version__', 'version not exposed'))"
```

## Common failure signatures
- Wrong venv / package installed outside the active interpreter
- Package installs but import name differs from pip name
- Version skew with neighboring packages in the same dependency cluster

## Dependency cluster notes
Category: `detection_segmentation`. Treat this as part of its dependency family, not as an isolated pip name. Confirm adjacent packages before blaming the node or model.

## Source context
Added in v0.9 custom-node/training/web package expansion.

## RAG tags
`pip-package`, `v0.9-custom-node-training-web-deps`, `medium`, `very_high`, `windows-ai`, `detection_segmentation`

## Source URLs
- https://pypi.org/project/groundingdino-py/
- https://huggingface.co/docs/transformers/en/model_doc/grounding-dino
