# transparent-background

## RAG purpose
Alternative background-removal card for node compatibility and dependency comparison against rembg.

## Why AI Without Fear cares
Useful mostly as an option in the image-utility catalog; keep separate from core VQA dependencies unless a workflow truly needs it.

## Common import patterns
- `from transparent_background import Remover`

## Install / pinning notes
Package name uses hyphen; import name uses underscore. Confirm CLI entry point and Python interpreter path in ComfyUI/venv installs.

## Windows / ComfyUI risk level
**medium**

## Quick diagnostic commands
```powershell
python -c "import transparent_background; print('transparent_background ok')"
```

## Common failure signatures
- Installed into system Python but ComfyUI uses embedded/venv Python
- CLI command not found due to Scripts path
- Torch/CUDA dependency pressure for a non-core task

## AIWF usage notes
Background removal package powered by InSPyReNet; candidate alternative for cutout workflows.

## RAG tags
`pip-package`, `v0.4-rag-ocr-llm-client`, `medium`, `background-removal`, `image-preprocessing`, `package-name-mismatch`, `windows-path`

## Source URLs
- https://pypi.org/project/transparent-background/
- https://pypi.org/project/transparent-background/1.1.2/
