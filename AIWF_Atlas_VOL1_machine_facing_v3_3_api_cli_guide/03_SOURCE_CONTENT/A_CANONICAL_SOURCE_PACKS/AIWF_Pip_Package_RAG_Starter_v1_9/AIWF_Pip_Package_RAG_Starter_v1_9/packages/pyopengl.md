# PyOpenGL

## RAG identity

- **pip name:** `PyOpenGL`
- **import name:** `OpenGL`
- **category:** `opengl_display`
- **confidence:** `upstream_confirmed`
- **priority:** `low`
- **version seen:** `not pinned`
- **documented batch:** `v0.7-comfyui-runtime-grounding`

## Why AI Without Fear cares

Python OpenGL bindings. Relevant for preview/display/UI components that need GL context support.

## Where this package came from

ComfyUI upstream requirements.txt non-essential dependency; OpenGL support.

## Install / compatibility notes

Pip package is not the GPU driver. Missing/broken GL context may require driver/OS/UI troubleshooting.

## Windows risk

`medium`

## RAG usage rules

- Do not treat this as a model file, checkpoint, LoRA, or ComfyUI workflow JSON.
- Resolve import name vs pip name before writing troubleshooting steps.
- When imported from upstream ComfyUI requirements, prefer matching the upstream ComfyUI requirement instead of inventing a separate pin.
- If this package appears in both `pip freeze` and a custom node `requirements.txt`, record both sources; do not overwrite one with the other.

## Source URLs

- https://github.com/Comfy-Org/ComfyUI/blob/master/requirements.txt
- https://pypi.org/project/PyOpenGL/
