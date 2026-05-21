# yarl

## RAG identity

- **pip name:** `yarl`
- **import name:** `yarl`
- **category:** `async_web_server`
- **confidence:** `upstream_confirmed`
- **priority:** `medium`
- **version seen:** `>=1.18.0`
- **documented batch:** `v0.7-comfyui-runtime-grounding`

## Why AI Without Fear cares

URL parsing/building package in the aiohttp async stack. Relevant when resolver conflicts hit web/API dependencies.

## Where this package came from

ComfyUI upstream requirements.txt; aiohttp URL handling dependency.

## Install / compatibility notes

Usually transitive; upstream ComfyUI explicitly pins minimum. Keep with aiohttp-compatible versions.

## Windows risk

`low`

## RAG usage rules

- Do not treat this as a model file, checkpoint, LoRA, or ComfyUI workflow JSON.
- Resolve import name vs pip name before writing troubleshooting steps.
- When imported from upstream ComfyUI requirements, prefer matching the upstream ComfyUI requirement instead of inventing a separate pin.
- If this package appears in both `pip freeze` and a custom node `requirements.txt`, record both sources; do not overwrite one with the other.

## Source URLs

- https://github.com/Comfy-Org/ComfyUI/blob/master/requirements.txt
- https://pypi.org/project/yarl/
