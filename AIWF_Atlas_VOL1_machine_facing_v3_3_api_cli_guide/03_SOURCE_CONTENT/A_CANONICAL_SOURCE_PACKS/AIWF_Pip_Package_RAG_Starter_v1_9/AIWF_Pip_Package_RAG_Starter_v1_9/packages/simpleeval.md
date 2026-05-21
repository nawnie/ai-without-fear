# simpleeval

## RAG identity

- **pip name:** `simpleeval`
- **import name:** `simpleeval`
- **category:** `safe_expression_eval`
- **confidence:** `upstream_confirmed`
- **priority:** `medium`
- **version seen:** `>=1.0.0`
- **documented batch:** `v0.7-comfyui-runtime-grounding`

## Why AI Without Fear cares

Small expression evaluator. Useful when workflows/extensions evaluate simple user expressions without full Python eval.

## Where this package came from

ComfyUI upstream requirements.txt; expression evaluation utility.

## Install / compatibility notes

Do not replace with raw eval. If expression nodes fail, check this dependency.

## Windows risk

`low`

## RAG usage rules

- Do not treat this as a model file, checkpoint, LoRA, or ComfyUI workflow JSON.
- Resolve import name vs pip name before writing troubleshooting steps.
- When imported from upstream ComfyUI requirements, prefer matching the upstream ComfyUI requirement instead of inventing a separate pin.
- If this package appears in both `pip freeze` and a custom node `requirements.txt`, record both sources; do not overwrite one with the other.

## Source URLs

- https://github.com/Comfy-Org/ComfyUI/blob/master/requirements.txt
- https://pypi.org/project/simpleeval/
