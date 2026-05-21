# starlette

## RAG purpose
Lightweight ASGI framework/toolkit that sits underneath FastAPI and related web stacks.

## Why AI Without Fear cares
When Starlette is wrong, FastAPI/Gradio errors often look like mysterious middleware or routing failures. It should usually be managed through FastAPI constraints.

## Common import patterns
- `import starlette`

## Install / pinning notes
Do not manually pin Starlette unless a project specifically requires it. FastAPI documents that different FastAPI versions use specific newer Starlette versions.

## Windows / ComfyUI risk level
**medium**

## Quick diagnostic commands
```powershell
python -c "import starlette; print(starlette.__version__)"
```

## Common failure signatures
- middleware signature errors
- routing/mounting errors in Gradio/FastAPI hybrids
- legacy app breaks after web stack upgrade

## AIWF usage notes
RAG should treat Starlette as a transitive web-stack compatibility node.

## RAG tags
`pip-package`, `v0.2-ui-api`, `medium`, `windows-ai`, `comfyui`, `gradio`, `local-ai`

## Source URLs
- https://starlette.dev/
- https://fastapi.tiangolo.com/deployment/versions/
