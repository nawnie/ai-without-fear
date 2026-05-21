# comfyui-frontend-package

## RAG identity

- **pip name:** `comfyui-frontend-package`
- **import name:** `comfyui_frontend_package`
- **category:** `comfyui_core_runtime`
- **confidence:** `upstream_confirmed`
- **priority:** `high`
- **version seen:** `==1.43.18`
- **documented batch:** `v0.7-comfyui-runtime-grounding`

## Why AI Without Fear cares

Provides/version-locks ComfyUI frontend assets for current ComfyUI core. RAG should treat this as ComfyUI infrastructure, not a user workflow package.

## Where this package came from

ComfyUI upstream requirements.txt; frontend asset/runtime package pinned by ComfyUI.

## Install / compatibility notes

Install through ComfyUI requirements unless intentionally maintaining a ComfyUI fork. Pin follows upstream ComfyUI.

## Windows risk

`low`

## RAG usage rules

- Do not treat this as a model file, checkpoint, LoRA, or ComfyUI workflow JSON.
- Resolve import name vs pip name before writing troubleshooting steps.
- When imported from upstream ComfyUI requirements, prefer matching the upstream ComfyUI requirement instead of inventing a separate pin.
- If this package appears in both `pip freeze` and a custom node `requirements.txt`, record both sources; do not overwrite one with the other.

## Source URLs

- https://github.com/Comfy-Org/ComfyUI/blob/master/requirements.txt
- https://pypi.org/project/comfyui-frontend-package/
