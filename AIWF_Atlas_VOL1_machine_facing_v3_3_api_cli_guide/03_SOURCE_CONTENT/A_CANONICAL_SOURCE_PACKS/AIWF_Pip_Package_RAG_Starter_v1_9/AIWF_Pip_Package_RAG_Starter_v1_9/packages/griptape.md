# griptape

## RAG purpose
Agent/RAG framework to evaluate before rebuilding orchestration logic.

## Why AI Without Fear cares
This package appears in the AI Without Fear / ComfyUI / local-AI tooling ecosystem. The RAG should know what it does, whether it belongs in runtime, training, RAG, dev, or custom-node environments, and what to check before adding it to a one-click install.

## Common import patterns
- `griptape`

## Install / pinning notes
Use in dedicated app venv first; provider integrations may be separate.

## Windows / ComfyUI risk level
**medium**

## Quick diagnostic commands
```powershell
python -m pip show griptape
python -c "import importlib; m=importlib.import_module('griptape'); print('griptape import ok', getattr(m, '__version__', 'version not exposed'))"
```

## Common failure signatures
- Wrong venv / package installed outside the active interpreter
- Package installs but import name differs from pip name
- Version skew with neighboring packages in the same dependency cluster

## Dependency cluster notes
Category: `agent_framework`. Treat this as part of its dependency family, not as an isolated pip name. Confirm adjacent packages before blaming the node or model.

## Source context
Promoted from v0.8 stub/research queue.

## RAG tags
`pip-package`, `v0.9-custom-node-training-web-deps`, `low`, `medium`, `windows-ai`, `agent_framework`

## Source URLs
- https://docs.griptape.ai/stable/griptape-framework/
- https://github.com/griptape-ai/griptape
