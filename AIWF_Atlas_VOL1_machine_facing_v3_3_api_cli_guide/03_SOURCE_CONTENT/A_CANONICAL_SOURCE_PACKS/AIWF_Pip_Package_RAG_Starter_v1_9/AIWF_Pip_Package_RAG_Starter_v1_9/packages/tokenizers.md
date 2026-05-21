# tokenizers

## RAG purpose
Supports local/Hugging Face model tokenization paths used by embedding models, VQA models, and text-generation adapters.

## Why AI Without Fear cares
For Hugging Face models, tokenization is not optional glue; it is part of the model contract. Bad tokenizer versions can break model load even when torch is healthy.

## Common import patterns
- `import tokenizers`
- `from tokenizers import Tokenizer`

## Install / pinning notes
Usually arrives through transformers. Direct installs are fine, but version skew can affect tokenizer/model loading.

## Windows / ComfyUI risk level
**medium**

## Quick diagnostic commands
```powershell
python -c "import tokenizers; print(tokenizers.__version__)"
```

## Common failure signatures
- Transformers/tokenizers version mismatch
- Rust-backed wheel/build issues
- Tokenizer files missing from downloaded model snapshot

## AIWF usage notes
Hugging Face fast tokenizer backend used by transformers and many local model stacks.

## RAG tags
`pip-package`, `v0.4-rag-ocr-llm-client`, `medium`, `huggingface`, `tokenization`, `transformers`, `model-loading`

## Source URLs
- https://huggingface.co/docs/tokenizers/installation
- https://huggingface.co/docs/tokenizers/index
