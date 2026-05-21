# FlagEmbedding

## RAG purpose
BGE embedding/reranking package for stronger retrieval workflows.

## Why AI Without Fear cares
This package appears in the AI Without Fear / ComfyUI / local-AI tooling ecosystem. The RAG should know what it does, whether it belongs in runtime, training, RAG, dev, or custom-node environments, and what to check before adding it to a one-click install.

## Common import patterns
- `FlagEmbedding`

## Install / pinning notes
Inference install is lighter; finetune extras belong in training venvs.

## Windows / ComfyUI risk level
**medium**

## Quick diagnostic commands
```powershell
python -m pip show FlagEmbedding
python -c "import importlib; m=importlib.import_module('FlagEmbedding'); print('FlagEmbedding import ok', getattr(m, '__version__', 'version not exposed'))"
```

## Common failure signatures
- Wrong venv / package installed outside the active interpreter
- Package installs but import name differs from pip name
- Version skew with neighboring packages in the same dependency cluster

## Dependency cluster notes
Category: `embeddings`. Treat this as part of its dependency family, not as an isolated pip name. Confirm adjacent packages before blaming the node or model.

## Source context
Promoted from v0.8 stub/research queue.

## RAG tags
`pip-package`, `v0.9-custom-node-training-web-deps`, `medium`, `medium`, `windows-ai`, `embeddings`

## Source URLs
- https://github.com/FlagOpen/FlagEmbedding
- https://bge-model.com/Introduction/installation.html
