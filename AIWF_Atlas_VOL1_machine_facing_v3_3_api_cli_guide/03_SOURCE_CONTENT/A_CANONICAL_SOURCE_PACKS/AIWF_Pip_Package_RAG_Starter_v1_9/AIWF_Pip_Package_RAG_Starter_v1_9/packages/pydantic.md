# pydantic

## RAG purpose
Python data validation and settings/model schema library. Heavily used in FastAPI and many modern Python AI services.

## Why AI Without Fear cares
Pydantic is where API configs, request schemas, settings files, and strict type boundaries can become stable instead of loose dictionaries.

## Common import patterns
- `import pydantic`
- `from pydantic import BaseModel`

## Install / pinning notes
Do not cross major versions casually. Pydantic v1/v2 differences can break libraries even when imports succeed.

## Windows / ComfyUI risk level
**medium**

## Quick diagnostic commands
```powershell
python -c "import pydantic; print(pydantic.__version__)"
```

## Common failure signatures
- library expects Pydantic v1 but v2 is installed
- validation model import paths changed
- FastAPI app crashes during schema generation

## AIWF usage notes
For AIWF one-click tools, Pydantic is useful for validating settings JSON and user profiles before launch.

## RAG tags
`pip-package`, `v0.2-ui-api`, `medium`, `windows-ai`, `comfyui`, `gradio`, `local-ai`

## Source URLs
- https://pydantic.dev/docs/validation/latest/get-started/
- https://pypi.org/project/pydantic/
