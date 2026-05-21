# lancedb

## RAG purpose
Vector database candidate for AIWF archives where metadata, versioning, and multimodal records matter as much as raw vectors.

## Why AI Without Fear cares
LanceDB is attractive for image/workflow archives because it treats the retrieval layer more like a table/database than only a vector index.

## Common import patterns
- `import lancedb`
- `db = lancedb.connect("./lancedb")`

## Install / pinning notes
Good fit for local-first experiments that need vectors plus metadata/table semantics. Check pyarrow/native dependency behavior in Windows venvs.

## Windows / ComfyUI risk level
**medium**

## Quick diagnostic commands
```powershell
python -c "import lancedb; print('lancedb ok')"
```

## Common failure signatures
- Native dependency install issues on unusual Python versions
- Path/locking issues if multiple apps write the same local DB
- Schema drift when evolving metadata fields without migration notes

## AIWF usage notes
Embedded or server-backed vector/multimodal data layer for RAG, semantic search, and AI assistant memory.

## RAG tags
`pip-package`, `v0.4-rag-ocr-llm-client`, `medium`, `rag`, `vector-db`, `metadata`, `multimodal`, `local-first`

## Source URLs
- https://docs.lancedb.com/quickstart
- https://lancedb.github.io/lancedb/python/python/
