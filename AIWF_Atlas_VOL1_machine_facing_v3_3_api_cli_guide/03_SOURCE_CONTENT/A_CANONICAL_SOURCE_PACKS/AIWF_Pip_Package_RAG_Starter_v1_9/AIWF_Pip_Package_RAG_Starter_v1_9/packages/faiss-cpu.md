# faiss-cpu

## RAG purpose
Low-level vector index option for experiments where AIWF wants control over embeddings, IDs, and metadata stored separately.

## Why AI Without Fear cares
FAISS is not a full RAG database; it is an index. Use it when the app already owns metadata and persistence and only needs fast nearest-neighbor search.

## Common import patterns
- `import faiss`

## Install / pinning notes
Prefer CPU package on Windows unless a known GPU path is verified. FAISS GPU support is platform/CUDA constrained and should not be assumed for Windows pip.

## Windows / ComfyUI risk level
**high**

## Quick diagnostic commands
```powershell
python -c "import faiss; print(faiss.__version__)"
```

## Common failure signatures
- Confusion between `faiss`, `faiss-cpu`, conda packages, and GPU variants
- GPU availability wrongly assumed from a CPU wheel
- Windows/platform wheel mismatch

## AIWF usage notes
Fast vector similarity index library; useful for lightweight local retrieval experiments without a full vector database.

## RAG tags
`pip-package`, `v0.4-rag-ocr-llm-client`, `high`, `rag`, `vector-index`, `similarity-search`, `cpu`

## Source URLs
- https://github.com/facebookresearch/faiss/blob/main/INSTALL.md
- https://pypi.org/project/faiss-cpu/
