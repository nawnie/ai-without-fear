# tiktoken

## RAG purpose
Helps the RAG builder measure chunk sizes and keep prompts inside model context windows.

## Why AI Without Fear cares
A RAG system that cannot count tokens will eventually break at the prompt assembly layer. This package supports budget-aware retrieval.

## Common import patterns
- `import tiktoken`
- `enc = tiktoken.encoding_for_model("gpt-4o")`

## Install / pinning notes
Use for token counting, not text generation. If a wheel is unavailable for a new Python version, installs may try to build native/Rust components.

## Windows / ComfyUI risk level
**medium**

## Quick diagnostic commands
```powershell
python -c "import tiktoken; print(tiktoken.get_encoding('o200k_base').encode('hello'))"
```

## Common failure signatures
- Model-name tokenizer mapping unavailable for newer model names
- Build failure on very new Python versions
- Assuming tokenizer counts match non-OpenAI local models

## AIWF usage notes
Fast BPE tokenizer used for OpenAI-style token counting and prompt budgeting.

## RAG tags
`pip-package`, `v0.4-rag-ocr-llm-client`, `medium`, `tokenization`, `context-window`, `rag-chunking`, `prompt-budget`

## Source URLs
- https://github.com/openai/tiktoken
- https://github.com/openai/openai-cookbook/blob/main/examples/How_to_count_tokens_with_tiktoken.ipynb
