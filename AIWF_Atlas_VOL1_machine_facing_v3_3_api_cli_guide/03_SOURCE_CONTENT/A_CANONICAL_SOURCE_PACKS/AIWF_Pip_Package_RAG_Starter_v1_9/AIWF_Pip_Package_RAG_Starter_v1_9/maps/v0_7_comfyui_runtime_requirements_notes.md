# v0.7 ComfyUI Runtime Requirements Notes

This pass grounds the pip RAG against current upstream ComfyUI requirement files instead of only project memory.

## Core pattern

ComfyUI now carries several packages that are not generic AI libraries. The RAG should recognize them as ComfyUI app/runtime infrastructure:

- `comfyui-frontend-package`
- `comfyui-workflow-templates`
- `comfyui-embedded-docs`
- `comfy-kitchen`
- `comfy-aimdo`
- `comfyui_manager`

Do not advise installing or pinning those casually inside unrelated custom-node packages. They should follow the ComfyUI install being targeted.

## Server/runtime cluster

ComfyUI's async web stack includes `aiohttp` and `yarl`; this is separate from the Gradio/FastAPI stack already documented earlier. Web errors should be triaged by the correct stack:

- ComfyUI server/API runtime: `aiohttp`, `yarl`, related transitive async packages.
- Gradio app stack: `gradio`, `fastapi`, `starlette`, `uvicorn`, `pydantic`.

## App state/database cluster

The upstream requirements include `alembic` and `SQLAlchemy>=2.0.0`. Treat database/schema errors as app-state issues, not model checkpoint issues.

## Upscale/model architecture cluster

`spandrel` is important for upscaler/restoration model architecture loading. If ESRGAN/SwinIR-style model loading fails, the RAG should check package support and architecture detection before blaming the model file.

## UI/OpenGL cluster

`PyOpenGL` and `glfw` are non-essential but relevant for display/preview UI functionality. Import success does not prove that the GPU driver, OpenGL context, and UI runtime are healthy.

## Source grounding

Primary sources for this pass:

- ComfyUI `requirements.txt`
- ComfyUI `manager_requirements.txt`
