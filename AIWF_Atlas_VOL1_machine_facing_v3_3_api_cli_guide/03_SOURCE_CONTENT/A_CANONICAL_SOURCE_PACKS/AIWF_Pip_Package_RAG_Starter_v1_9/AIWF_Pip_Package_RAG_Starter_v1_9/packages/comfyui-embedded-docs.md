# comfyui-embedded-docs

## RAG identity

- **pip name:** `comfyui-embedded-docs`
- **import name:** `comfyui_embedded_docs`
- **category:** `comfyui_core_runtime`
- **confidence:** `upstream_confirmed`
- **priority:** `medium`
- **version seen:** `==0.5.0`
- **documented batch:** `v0.7-comfyui-runtime-grounding`

## Why AI Without Fear cares

Supplies embedded documentation/help assets for ComfyUI. Relevant for AIWF help-layer work and docs-aware UI support.

## Where this package came from

ComfyUI upstream requirements.txt; embedded docs package pinned by ComfyUI.

## Install / compatibility notes

Keep pinned with ComfyUI core; mismatch may affect docs/help behavior rather than model inference.

## Windows risk

`low`

## RAG usage rules

- Do not treat this as a model file, checkpoint, LoRA, or ComfyUI workflow JSON.
- Resolve import name vs pip name before writing troubleshooting steps.
- When imported from upstream ComfyUI requirements, prefer matching the upstream ComfyUI requirement instead of inventing a separate pin.
- If this package appears in both `pip freeze` and a custom node `requirements.txt`, record both sources; do not overwrite one with the other.

## Source URLs

- https://github.com/Comfy-Org/ComfyUI/blob/master/requirements.txt
- https://pypi.org/project/comfyui-embedded-docs/
