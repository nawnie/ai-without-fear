# sentence-transformers

## RAG purpose
Core embedding package for converting AIWF docs, package cards, node cards, and workflow notes into vectors. Also relevant for reranking once the RAG grows beyond simple keyword lookup.

## Why AI Without Fear cares
This is one of the packages that turns the archive from a folder of markdown into a searchable assistant brain. It sits above torch/transformers/tokenizers and below Chroma/LanceDB/FAISS.

## Common import patterns
- `from sentence_transformers import SentenceTransformer`
- `model = SentenceTransformer("all-MiniLM-L6-v2")`

## Install / pinning notes
Install into the same environment that owns torch/transformers. Treat it as part of the Hugging Face cluster, not as a standalone utility.

## Windows / ComfyUI risk level
**medium**

## Quick diagnostic commands
```powershell
python -c "from sentence_transformers import SentenceTransformer; print('sentence-transformers ok')"
```

## Common failure signatures
- Torch/transformers mismatch during model load
- Slow first run due to model download/cache setup
- CUDA unavailable because torch was installed as CPU-only

## AIWF usage notes
Embedding and reranker framework for local RAG, semantic search, duplicate detection, and AIWF knowledge-library indexing.

## RAG tags
`pip-package`, `v0.4-rag-ocr-llm-client`, `medium`, `rag`, `embeddings`, `huggingface`, `vector-search`, `aiwf-library`

## Source URLs
- https://sbert.net/docs/installation.html
- https://sbert.net/
