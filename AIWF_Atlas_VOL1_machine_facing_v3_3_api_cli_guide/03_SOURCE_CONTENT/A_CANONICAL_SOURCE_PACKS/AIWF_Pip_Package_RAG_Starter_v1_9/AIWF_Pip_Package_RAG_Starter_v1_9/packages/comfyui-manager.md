# comfyui_manager

## RAG identity

- **pip name:** `comfyui_manager`
- **import name:** `comfyui_manager`
- **category:** `comfyui_manager_runtime`
- **confidence:** `upstream_confirmed`
- **priority:** `high`
- **version seen:** `==4.2.1`
- **documented batch:** `v0.7-comfyui-runtime-grounding`

## Why AI Without Fear cares

ComfyUI Manager package used for install/update/enable/disable workflows and custom node dependency management.

## Where this package came from

ComfyUI upstream manager_requirements.txt; manager runtime package.

## Install / compatibility notes

Keep aligned with ComfyUI manager_requirements.txt. This package is manager infrastructure, not a workflow node.

## Windows risk

`medium`

## RAG usage rules

- Do not treat this as a model file, checkpoint, LoRA, or ComfyUI workflow JSON.
- Resolve import name vs pip name before writing troubleshooting steps.
- When imported from upstream ComfyUI requirements, prefer matching the upstream ComfyUI requirement instead of inventing a separate pin.
- If this package appears in both `pip freeze` and a custom node `requirements.txt`, record both sources; do not overwrite one with the other.

## Source URLs

- https://github.com/Comfy-Org/ComfyUI/blob/master/manager_requirements.txt
- https://pypi.org/project/comfyui-manager/
