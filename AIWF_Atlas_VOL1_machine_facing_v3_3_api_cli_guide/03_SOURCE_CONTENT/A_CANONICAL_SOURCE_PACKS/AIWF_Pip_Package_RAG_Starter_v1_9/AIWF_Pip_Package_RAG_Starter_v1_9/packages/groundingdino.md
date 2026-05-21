# groundingdino

## RAG purpose
Text-guided/open-vocabulary detection used before SAM/SAM2 mask refinement.

## Why AI Without Fear cares
This package appears in the AI Without Fear / ComfyUI / local-AI tooling ecosystem. The RAG should know what it does, whether it belongs in runtime, training, RAG, dev, or custom-node environments, and what to check before adding it to a one-click install.

## Common import patterns
- `groundingdino`

## Install / pinning notes
Prefer Transformers inference route when it covers the scope; native installs can be fragile.

## Windows / ComfyUI risk level
**very_high**

## Quick diagnostic commands
```powershell
python -m pip show groundingdino
python -c "import importlib; m=importlib.import_module('groundingdino'); print('groundingdino import ok', getattr(m, '__version__', 'version not exposed'))"
```

## Common failure signatures
- Wrong venv / package installed outside the active interpreter
- Package installs but import name differs from pip name
- Version skew with neighboring packages in the same dependency cluster

## Dependency cluster notes
Category: `detection_segmentation`. Treat this as part of its dependency family, not as an isolated pip name. Confirm adjacent packages before blaming the node or model.

## Source context
Promoted from v0.8 stub/research queue.

## RAG tags
`pip-package`, `v0.9-custom-node-training-web-deps`, `high`, `very_high`, `windows-ai`, `detection_segmentation`

## Source URLs
- https://huggingface.co/docs/transformers/en/model_doc/grounding-dino
- https://huggingface.co/docs/transformers/en/tasks/zero_shot_object_detection
- https://pypi.org/project/groundingdino-py/
