# chromadb

## RAG purpose
Vector store candidate for AIWF docs, node cards, package cards, images metadata, and workflow snippets.

## Why AI Without Fear cares
Chroma is useful when the priority is simple local RAG with a Python API and CLI. It is less ideal inside fragile image-generation venvs because it can add dependency pressure.

## Common import patterns
- `import chromadb`
- `client = chromadb.PersistentClient(path="./chroma")`

## Install / pinning notes
Good beginner RAG DB, but keep it isolated from ComfyUI venvs when possible because it can pull a broad server/API dependency graph.

## Windows / ComfyUI risk level
**medium**

## Quick diagnostic commands
```powershell
python -c "import chromadb; print(chromadb.__version__)"
```

## Common failure signatures
- Dependency conflicts with existing FastAPI/Pydantic stacks
- SQLite/path/permissions issues when using persistent local storage
- Accidentally using a cloud profile when intending local-only

## AIWF usage notes
Local/client-server vector database for RAG prototypes and document retrieval.

## RAG tags
`pip-package`, `v0.4-rag-ocr-llm-client`, `medium`, `rag`, `vector-db`, `local-search`, `knowledge-base`

## Source URLs
- https://docs.trychroma.com/docs/overview/getting-started
- https://pypi.org/project/chromadb/
