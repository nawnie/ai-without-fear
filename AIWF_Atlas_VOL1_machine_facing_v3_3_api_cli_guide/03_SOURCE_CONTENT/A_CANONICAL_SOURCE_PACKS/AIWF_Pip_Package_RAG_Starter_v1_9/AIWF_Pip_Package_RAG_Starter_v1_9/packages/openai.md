# openai

## RAG purpose
Optional cloud-side LLM and embedding bridge for AIWF tools when local models are not enough or when comparing local vs hosted behavior.

## Why AI Without Fear cares
Useful as an adapter, not as a required dependency for local-first AIWF. Treat it as a swappable provider behind an interface.

## Common import patterns
- `from openai import OpenAI`
- `client = OpenAI()`

## Install / pinning notes
Keep API keys out of committed files. Pin SDK versions for reproducible tools because client interfaces can evolve.

## Windows / ComfyUI risk level
**low**

## Quick diagnostic commands
```powershell
python -c "from openai import OpenAI; print('openai sdk ok')"
```

## Common failure signatures
- Missing API key/environment variable
- Code written for pre-1.0 SDK style
- Network/proxy/rate-limit errors confused with package install errors

## AIWF usage notes
Official OpenAI Python SDK for API access, cloud model calls, embeddings, and tool/API experiments.

## RAG tags
`pip-package`, `v0.4-rag-ocr-llm-client`, `low`, `llm-client`, `api-client`, `embeddings`, `provider-adapter`

## Source URLs
- https://developers.openai.com/api/docs/libraries
- https://pypi.org/project/openai/
