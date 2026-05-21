# anyio

## RAG purpose
Async compatibility layer used by web stacks such as Starlette/FastAPI and HTTP client/server code.

## Why AI Without Fear cares
Usually transitive, but it appears in tracebacks. RAG should teach that AnyIO errors are often symptoms of async task failure elsewhere, not always the root package to upgrade.

## Common import patterns
- `import anyio`

## Install / pinning notes
Let FastAPI/Starlette/HTTPX/Gradio resolve it unless a project pins it.

## Windows / ComfyUI risk level
**low**

## Quick diagnostic commands
```powershell
python -c 'import anyio; import importlib.metadata as m; print(m.version("anyio"))'
```

## Common failure signatures
- exception groups/task group tracebacks
- async cancellation errors masking the real app exception
- web UI crash logs point to anyio internals

## AIWF usage notes
RAG answer pattern: read above the anyio frame for the application-level exception.

## RAG tags
`pip-package`, `v0.2-ui-api`, `low`, `windows-ai`, `comfyui`, `gradio`, `local-ai`

## Source URLs
- https://anyio.readthedocs.io/
- https://fastapi.tiangolo.com/
