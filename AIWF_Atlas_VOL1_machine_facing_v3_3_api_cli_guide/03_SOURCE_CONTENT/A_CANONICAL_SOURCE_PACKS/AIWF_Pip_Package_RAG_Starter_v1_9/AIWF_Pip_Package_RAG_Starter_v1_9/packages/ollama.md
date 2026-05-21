# ollama

## RAG purpose
Allows AIWF tools to call local LLMs for prompt cleanup, workflow explanation, model routing, and RAG answers without embedding a model runtime in the tool.

## Why AI Without Fear cares
This keeps GUI/tool logic separate from model hosting. The Python app sends requests; Ollama handles local model serving.

## Common import patterns
- `import ollama`
- `response = ollama.chat(model="qwen2.5", messages=[{"role":"user","content":"hello"}])`

## Install / pinning notes
This package is only the client. The Ollama application/service must already be installed, running, and have models pulled.

## Windows / ComfyUI risk level
**low**

## Quick diagnostic commands
```powershell
python -c "import ollama; print('ollama client ok')"
```
```powershell
ollama list
```

## Common failure signatures
- `import ollama` works but no local Ollama service is running
- Model name missing because `ollama pull` was never run
- Port/firewall/service conflict around localhost Ollama API

## AIWF usage notes
Python client for talking to a running Ollama local LLM service.

## RAG tags
`pip-package`, `v0.4-rag-ocr-llm-client`, `low`, `llm-client`, `ollama`, `local-ai`, `routing`, `rag-answering`

## Source URLs
- https://github.com/ollama/ollama-python
- https://ollama.com/blog/functions-as-tools


## v1.8 Modelfile/storage addendum
Ollama support should separate the Python client from the Ollama runtime/service and model storage. Modelfiles can build from existing Ollama models, Safetensors models, GGUF files, adapters, parameters, templates, system prompts, and message examples. Importing a GGUF or adapter is a model-artifact operation, not a Python package install.

Sources: https://docs.ollama.com/modelfile | https://docs.ollama.com/import
