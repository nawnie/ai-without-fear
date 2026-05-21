# k-diffusion

## RAG purpose
Sampler/backend package used by SD tooling and older WebUI sampler stacks.

## Why AI Without Fear cares
This package appears in the AI Without Fear / ComfyUI / local-AI tooling ecosystem. The RAG should know what it does, whether it belongs in runtime, training, RAG, dev, or custom-node environments, and what to check before adding it to a one-click install.

## Common import patterns
- `k_diffusion`

## Install / pinning notes
PyPI library install differs from full repo/editable scripts.

## Windows / ComfyUI risk level
**medium**

## Quick diagnostic commands
```powershell
python -m pip show k-diffusion
python -c "import importlib; m=importlib.import_module('k_diffusion'); print('k_diffusion import ok', getattr(m, '__version__', 'version not exposed'))"
```

## Common failure signatures
- Wrong venv / package installed outside the active interpreter
- Package installs but import name differs from pip name
- Version skew with neighboring packages in the same dependency cluster

## Dependency cluster notes
Category: `sampler_backend`. Treat this as part of its dependency family, not as an isolated pip name. Confirm adjacent packages before blaming the node or model.

## Source context
Promoted from v0.8 stub/research queue.

## RAG tags
`pip-package`, `v0.9-custom-node-training-web-deps`, `high`, `medium`, `windows-ai`, `sampler_backend`

## Source URLs
- https://github.com/crowsonkb/k-diffusion
- https://pypi.org/project/k-diffusion/
