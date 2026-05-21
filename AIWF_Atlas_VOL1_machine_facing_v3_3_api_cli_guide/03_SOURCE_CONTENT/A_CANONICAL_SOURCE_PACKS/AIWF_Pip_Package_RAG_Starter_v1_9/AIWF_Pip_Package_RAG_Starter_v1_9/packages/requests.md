# requests

## RAG purpose
Synchronous HTTP client for APIs, downloads, local service checks, and simple web requests.

## Why AI Without Fear cares
AIWF tooling touches local and remote services; requests is the stable baseline for simple HTTP.

## Common import patterns
- `requests`

## Install / pinning notes
Use timeouts. For async stacks use httpx/aiohttp instead.

## Windows / ComfyUI risk level
**low**

## Quick diagnostic commands
```powershell
python -c "import requests; print(requests.__version__)"
```

## Common failure signatures
- SSL/certificate errors
- Proxy/firewall blocks downloads
- Sync calls hang without timeout

## Dependency cluster notes
HTTP/API cluster: requests + httpx + openai + ollama clients.

## Source context
Downloads, API calls, local service health checks, GitHub/HF/Ollama/OpenAI-compatible calls.

## RAG tags
`pip-package`, `v0.5-training-data-config-llm-framework`, `low`, `windows-ai`, `training`, `rag`, `local-ai`

## Source URLs
- https://requests.readthedocs.io/
- https://requests.readthedocs.io/en/latest/user/install/
- https://pypi.org/project/requests/
