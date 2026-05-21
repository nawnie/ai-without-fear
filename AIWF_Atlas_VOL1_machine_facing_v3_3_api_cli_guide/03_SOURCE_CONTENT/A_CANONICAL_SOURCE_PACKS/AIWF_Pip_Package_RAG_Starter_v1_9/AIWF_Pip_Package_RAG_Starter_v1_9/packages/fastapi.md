# fastapi

## RAG purpose
Modern Python API framework built on ASGI. Commonly appears under Gradio/OpenWebUI-style stacks and is useful for AIWF modular backends.

## Why AI Without Fear cares
FastAPI is the natural control-plane API for a modular AIWF app: one UI can call separate worker processes, venvs, and scripts while keeping interfaces typed and documented.

## Common import patterns
- `from fastapi import FastAPI`

## Install / pinning notes
Let FastAPI control its compatible Starlette version. Use `fastapi[standard]` or explicit uvicorn only when building your own server app; do not hand-upgrade Starlette inside legacy stacks.

## Windows / ComfyUI risk level
**medium**

## Quick diagnostic commands
```powershell
python -c "import fastapi; print(fastapi.__version__)"
```

## Common failure signatures
- Pydantic v1/v2 mismatch
- Starlette version mismatch
- server missing uvicorn when app expects it
- legacy Gradio breaks after FastAPI upgrade

## AIWF usage notes
For RAG, map FastAPI + Pydantic + Starlette + Uvicorn as a cluster, not isolated packages.

## RAG tags
`pip-package`, `v0.2-ui-api`, `medium`, `windows-ai`, `comfyui`, `gradio`, `local-ai`

## Source URLs
- https://fastapi.tiangolo.com/tutorial/
- https://fastapi.tiangolo.com/deployment/versions/
- https://fastapi.tiangolo.com/deployment/manually/
