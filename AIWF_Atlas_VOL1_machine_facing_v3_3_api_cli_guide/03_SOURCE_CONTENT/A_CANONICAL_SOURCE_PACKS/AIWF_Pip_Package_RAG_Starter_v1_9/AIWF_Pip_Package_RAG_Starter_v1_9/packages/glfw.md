# glfw

## RAG identity

- **pip name:** `glfw`
- **import name:** `glfw`
- **category:** `opengl_windowing`
- **confidence:** `upstream_confirmed`
- **priority:** `low`
- **version seen:** `not pinned`
- **documented batch:** `v0.7-comfyui-runtime-grounding`

## Why AI Without Fear cares

Python bindings for GLFW window/context handling. Relevant when OpenGL preview/display components fail.

## Where this package came from

ComfyUI upstream requirements.txt non-essential dependency; OpenGL/window context support.

## Install / compatibility notes

GLFW import success does not prove GPU/driver/window context health.

## Windows risk

`medium`

## RAG usage rules

- Do not treat this as a model file, checkpoint, LoRA, or ComfyUI workflow JSON.
- Resolve import name vs pip name before writing troubleshooting steps.
- When imported from upstream ComfyUI requirements, prefer matching the upstream ComfyUI requirement instead of inventing a separate pin.
- If this package appears in both `pip freeze` and a custom node `requirements.txt`, record both sources; do not overwrite one with the other.

## Source URLs

- https://github.com/Comfy-Org/ComfyUI/blob/master/requirements.txt
- https://pypi.org/project/glfw/
- https://www.glfw.org/
