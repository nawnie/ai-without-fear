# llama-index

## RAG purpose
Framework option for context-augmented LLM applications, document connectors, indices, retrievers, and query engines.

## Why AI Without Fear cares
Can turn AIWF manuals/node docs/package docs/workflows into queryable context, but curated source cards remain ground truth.

## Common import patterns
- `llama_index`

## Install / pinning notes
Modern LlamaIndex is modular/namespaced; starter install may need extra integration packages.

## Windows / ComfyUI risk level
**medium**

## Quick diagnostic commands
```powershell
python -c "import llama_index; print('llama_index import ok')"
```
```powershell
python -m pip show llama-index
```

## Common failure signatures
- Import path changes
- Missing reader/vector/LLM integration package
- Dependency bloat in shared venv
- RAG drift if source docs not curated

## Dependency cluster notes
RAG framework cluster: llama-index + vector store + embeddings + provider integrations.

## Source context
RAG planning for AIWF manuals/package docs/node docs; document ingestion/orchestration.

## RAG tags
`pip-package`, `v0.5-training-data-config-llm-framework`, `medium`, `windows-ai`, `training`, `rag`, `local-ai`

## Source URLs
- https://developers.llamaindex.ai/python/framework/
- https://developers.llamaindex.ai/python/framework/getting_started/installation/
- https://pypi.org/project/llama-index/
