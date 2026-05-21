# v0.4 RAG / OCR / LLM-Client Compatibility Notes

## 1. RAG stack is not one package
For AIWF, retrieval usually means at least four layers:

1. document parsing / cleanup
2. embedding model (`sentence-transformers` or provider embeddings)
3. vector/index backend (`chromadb`, `lancedb`, or `faiss-cpu`)
4. answer model client (`ollama`, `openai`, or another adapter)

Do not debug these as one flat install. Smoke-test each layer independently.

## 2. Chroma, LanceDB, and FAISS are different shapes
- `chromadb`: easiest local vector DB and client/server path.
- `lancedb`: table-like vector database with strong metadata/multimodal appeal.
- `faiss-cpu`: fast index library, not a full document database. Metadata persistence must be handled elsewhere.

## 3. OCR packages split into wrapper vs runtime
- `pytesseract` is a Python wrapper around the external Tesseract binary. Pip success does not prove OCR readiness.
- `easyocr` is deep-learning OCR and inherits torch/torchvision behavior. Install torch first on Windows.

## 4. Tokenizers are model contracts
- `tiktoken` is useful for OpenAI-style context budgeting.
- `tokenizers` is the Hugging Face fast tokenizer backend and must stay compatible with `transformers`.
- Token counts are model-family-specific; do not assume OpenAI token counts match local llama/qwen tokenizers.

## 5. ONNX Runtime providers must be inspected
`onnxruntime`, `onnxruntime-gpu`, and `onnxruntime-directml` can all import as `onnxruntime`. The import name alone does not identify the execution provider. Always check:

```powershell
python -c "import onnxruntime as ort; print(ort.__version__); print(ort.get_available_providers())"
```

## 6. Background removal is optional utility, not core VQA
`rembg` and `transparent-background` belong in the image-preprocessing utility lane. Do not let them destabilize a working VQA/ComfyUI environment unless a specific node/workflow needs them.
