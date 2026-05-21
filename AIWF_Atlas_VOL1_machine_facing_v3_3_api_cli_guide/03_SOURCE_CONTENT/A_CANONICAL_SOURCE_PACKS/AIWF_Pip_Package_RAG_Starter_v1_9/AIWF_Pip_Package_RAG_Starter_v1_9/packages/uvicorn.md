# uvicorn

## RAG purpose
ASGI web server used to run FastAPI, Starlette, and many Python API apps.

## Why AI Without Fear cares
AIWF modular apps may use Uvicorn to run local workers or the main control API. It matters for ports, network binding, reload behavior, and Windows console process control.

## Common import patterns
- `import uvicorn`

## Install / pinning notes
Minimal `uvicorn` is enough for many local tools. `uvicorn[standard]` adds optional performance extras; those extras may not be needed for beginner/local workflows.

## Windows / ComfyUI risk level
**low**

## Quick diagnostic commands
```powershell
python -c "import uvicorn; print(uvicorn.__version__)"
```
```powershell
uvicorn app:app --host 127.0.0.1 --port 8000
```

## Common failure signatures
- command not found even though FastAPI imports
- port already in use
- app only binds localhost when phone/LAN access is expected
- reload spawns duplicate processes

## AIWF usage notes
Connect this card to AIWF EnvPack port diagnostics.

## RAG tags
`pip-package`, `v0.2-ui-api`, `low`, `windows-ai`, `comfyui`, `gradio`, `local-ai`

## Source URLs
- https://uvicorn.dev/
- https://pypi.org/project/uvicorn/
- https://fastapi.tiangolo.com/deployment/manually/
