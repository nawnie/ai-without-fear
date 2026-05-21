# aiohttp

## RAG identity

- **pip name:** `aiohttp`
- **import name:** `aiohttp`
- **category:** `async_web_server`
- **confidence:** `upstream_confirmed`
- **priority:** `high`
- **version seen:** `>=3.11.8`
- **documented batch:** `v0.7-comfyui-runtime-grounding`

## Why AI Without Fear cares

Async HTTP framework/client stack used by ComfyUI server-side networking and API paths.

## Where this package came from

ComfyUI upstream requirements.txt; server/API async HTTP stack.

## Install / compatibility notes

Pin with yarl/multidict/frozenlist cluster when web server errors occur. Do not confuse with FastAPI stack.

## Windows risk

`medium`

## RAG usage rules

- Do not treat this as a model file, checkpoint, LoRA, or ComfyUI workflow JSON.
- Resolve import name vs pip name before writing troubleshooting steps.
- When imported from upstream ComfyUI requirements, prefer matching the upstream ComfyUI requirement instead of inventing a separate pin.
- If this package appears in both `pip freeze` and a custom node `requirements.txt`, record both sources; do not overwrite one with the other.

## Source URLs

- https://github.com/Comfy-Org/ComfyUI/blob/master/requirements.txt
- https://docs.aiohttp.org/
- https://pypi.org/project/aiohttp/
