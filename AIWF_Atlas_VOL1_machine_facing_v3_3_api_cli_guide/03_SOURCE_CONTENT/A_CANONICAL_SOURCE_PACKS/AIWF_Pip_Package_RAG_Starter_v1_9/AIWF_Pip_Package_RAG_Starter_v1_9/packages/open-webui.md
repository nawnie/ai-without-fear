# open-webui

## RAG purpose
Self-hosted LLM web UI for local/cloud providers, especially Ollama and OpenAI-compatible APIs.

## Why AI Without Fear cares
Reference implementation to evaluate before building AIWF guide-facing local chat UI.

## Common import patterns
- `open_webui`

## Install / pinning notes
Treat as an app/runtime. Prefer Docker or dedicated venv; do not drop into ComfyUI venv casually.

## Windows / ComfyUI risk level
**high**

## Quick diagnostic commands
```powershell
python -m pip show open-webui
```
```powershell
open-webui --help
```

## Common failure signatures
- Wrong venv
- Port conflict
- Provider service not running
- Dependency collision inside ComfyUI environment

## Dependency cluster notes
Local LLM app cluster: open-webui + Ollama service/client + OpenAI-compatible endpoints.

## Source context
Local LLM UI comparisons; Ollama/OpenAI-compatible local UI planning.

## RAG tags
`pip-package`, `v0.5-training-data-config-llm-framework`, `high`, `windows-ai`, `training`, `rag`, `local-ai`

## Source URLs
- https://docs.openwebui.com/
- https://docs.openwebui.com/getting-started/
- https://github.com/open-webui/open-webui
