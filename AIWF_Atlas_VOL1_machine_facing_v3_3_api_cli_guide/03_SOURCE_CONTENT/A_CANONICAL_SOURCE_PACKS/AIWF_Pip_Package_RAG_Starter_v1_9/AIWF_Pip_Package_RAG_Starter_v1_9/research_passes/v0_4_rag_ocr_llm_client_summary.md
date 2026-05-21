# v0.4 Research Pass — RAG / OCR / LLM Client Packages

## Scope
Documented the package group used for AIWF knowledge retrieval, OCR ingestion, token counting, and local/cloud LLM client calls.

## Packages documented
`sentence-transformers`, `chromadb`, `lancedb`, `faiss-cpu`, `ollama`, `openai`, `tiktoken`, `tokenizers`, `spacy`, `pytesseract`, `easyocr`, `rembg`, `transparent-background`, `onnxruntime-directml`, `protobuf`, `PyYAML`.

## Main decisions
- Treat RAG as layered infrastructure: parser → embeddings → vector/index backend → answer client.
- Keep `ollama` and `openai` as provider adapters, not core business logic.
- Separate wrapper packages from runtime dependencies; `pytesseract` is the clearest example.
- Separate ONNX Runtime providers by package and provider list, not by import name.
- Keep background-removal utilities outside the critical VQA path unless a workflow specifically needs them.

## Install-triage emphasis
This pass is less about CUDA throughput and more about environment correctness: external binaries, local services, API keys, tokenizer/model mismatch, and vector database persistence paths.

## Next recommended pass
Training/data/config/dev tooling: `datasets`, `bitsandbytes`, `omegaconf`, `pandas`, `regex`, `scipy`, `ftfy`, `tqdm`, `requests`, `einops`, `kornia`, `timm`, `sentencepiece`, `open-webui`, `llama-cpp-python`, `llama-index`, `langchain`.
