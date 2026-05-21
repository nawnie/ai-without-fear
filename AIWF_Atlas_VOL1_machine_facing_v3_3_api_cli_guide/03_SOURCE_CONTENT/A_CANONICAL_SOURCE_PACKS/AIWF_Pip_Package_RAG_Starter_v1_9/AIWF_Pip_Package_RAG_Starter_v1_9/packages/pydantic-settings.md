# pydantic-settings

## RAG identity

- **pip name:** `pydantic-settings`
- **import name:** `pydantic_settings`
- **category:** `settings_config`
- **confidence:** `upstream_confirmed`
- **priority:** `medium`
- **version seen:** `~=2.0`
- **documented batch:** `v0.7-comfyui-runtime-grounding`

## Why AI Without Fear cares

Settings management layer for apps using Pydantic 2. RAG should link it with Pydantic version family.

## Where this package came from

ComfyUI upstream requirements.txt non-essential dependency; Pydantic 2 settings support.

## Install / compatibility notes

Must track Pydantic 2.x compatibility. Pydantic 1/2 mismatches are common web/app breakage sources.

## Windows risk

`low`

## RAG usage rules

- Do not treat this as a model file, checkpoint, LoRA, or ComfyUI workflow JSON.
- Resolve import name vs pip name before writing troubleshooting steps.
- When imported from upstream ComfyUI requirements, prefer matching the upstream ComfyUI requirement instead of inventing a separate pin.
- If this package appears in both `pip freeze` and a custom node `requirements.txt`, record both sources; do not overwrite one with the other.

## Source URLs

- https://github.com/Comfy-Org/ComfyUI/blob/master/requirements.txt
- https://docs.pydantic.dev/latest/concepts/pydantic_settings/
- https://pypi.org/project/pydantic-settings/
