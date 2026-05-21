# comfyui-workflow-templates

## RAG identity

- **pip name:** `comfyui-workflow-templates`
- **import name:** `comfyui_workflow_templates`
- **category:** `comfyui_core_runtime`
- **confidence:** `upstream_confirmed`
- **priority:** `medium`
- **version seen:** `==0.9.77`
- **documented batch:** `v0.7-comfyui-runtime-grounding`

## Why AI Without Fear cares

Template/workflow asset package used by newer ComfyUI builds. Important when workflows/templates appear or fail to load.

## Where this package came from

ComfyUI upstream requirements.txt; workflow template package pinned by ComfyUI.

## Install / compatibility notes

Do not install as a random custom node dependency. Keep aligned to ComfyUI core requirements.

## Windows risk

`low`

## RAG usage rules

- Do not treat this as a model file, checkpoint, LoRA, or ComfyUI workflow JSON.
- Resolve import name vs pip name before writing troubleshooting steps.
- When imported from upstream ComfyUI requirements, prefer matching the upstream ComfyUI requirement instead of inventing a separate pin.
- If this package appears in both `pip freeze` and a custom node `requirements.txt`, record both sources; do not overwrite one with the other.

## Source URLs

- https://github.com/Comfy-Org/ComfyUI/blob/master/requirements.txt
- https://pypi.org/project/comfyui-workflow-templates/
