# comfy-aimdo

## RAG identity

- **pip name:** `comfy-aimdo`
- **import name:** `comfy_aimdo`
- **category:** `comfyui_core_runtime`
- **confidence:** `upstream_confirmed`
- **priority:** `medium`
- **version seen:** `==0.3.0`
- **documented batch:** `v0.7-comfyui-runtime-grounding`

## Why AI Without Fear cares

ComfyUI ecosystem support package. RAG should not classify it as a generic AI library.

## Where this package came from

ComfyUI upstream requirements.txt; ComfyUI ecosystem package.

## Install / compatibility notes

Pinned upstream. Install through requirements.txt unless maintaining a forked ComfyUI.

## Windows risk

`low`

## RAG usage rules

- Do not treat this as a model file, checkpoint, LoRA, or ComfyUI workflow JSON.
- Resolve import name vs pip name before writing troubleshooting steps.
- When imported from upstream ComfyUI requirements, prefer matching the upstream ComfyUI requirement instead of inventing a separate pin.
- If this package appears in both `pip freeze` and a custom node `requirements.txt`, record both sources; do not overwrite one with the other.

## Source URLs

- https://github.com/Comfy-Org/ComfyUI/blob/master/requirements.txt
- https://pypi.org/project/comfy-aimdo/
