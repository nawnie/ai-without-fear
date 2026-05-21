# spandrel

## RAG identity

- **pip name:** `spandrel`
- **import name:** `spandrel`
- **category:** `upscale_model_architecture`
- **confidence:** `upstream_confirmed`
- **priority:** `high`
- **version seen:** `not pinned`
- **documented batch:** `v0.7-comfyui-runtime-grounding`

## Why AI Without Fear cares

Model architecture detection/loading support used around upscalers and restoration models. Important for ESRGAN/SwinIR-style model handling in ComfyUI.

## Where this package came from

ComfyUI upstream requirements.txt non-essential dependency; upscale/model architecture loading.

## Install / compatibility notes

Treat as image-model infrastructure. If upscale model loading fails, check Spandrel before blaming the model file.

## Windows risk

`medium`

## RAG usage rules

- Do not treat this as a model file, checkpoint, LoRA, or ComfyUI workflow JSON.
- Resolve import name vs pip name before writing troubleshooting steps.
- When imported from upstream ComfyUI requirements, prefer matching the upstream ComfyUI requirement instead of inventing a separate pin.
- If this package appears in both `pip freeze` and a custom node `requirements.txt`, record both sources; do not overwrite one with the other.

## Source URLs

- https://github.com/Comfy-Org/ComfyUI/blob/master/requirements.txt
- https://github.com/chaiNNer-org/spandrel
- https://pypi.org/project/spandrel/
