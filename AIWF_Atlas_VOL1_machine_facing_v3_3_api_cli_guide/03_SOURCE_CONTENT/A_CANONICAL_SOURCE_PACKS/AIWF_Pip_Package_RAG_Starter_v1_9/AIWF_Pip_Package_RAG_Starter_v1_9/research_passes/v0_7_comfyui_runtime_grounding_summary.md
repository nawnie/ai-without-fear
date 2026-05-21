# v0.7 Research Pass — ComfyUI Runtime Grounding

## Goal

Move the pip package RAG from a guessed AI package list toward an environment-grounded reference that can ingest actual ComfyUI installs.

## Added package cards

- `comfyui-frontend-package`
- `comfyui-workflow-templates`
- `comfyui-embedded-docs`
- `torchsde`
- `aiohttp`
- `yarl`
- `alembic`
- `SQLAlchemy`
- `filelock`
- `comfy-kitchen`
- `comfy-aimdo`
- `simpleeval`
- `blake3`
- `spandrel`
- `pydantic-settings`
- `PyOpenGL`
- `glfw`
- `comfyui_manager`

## Practical change

The RAG now knows that not every pip package in a ComfyUI environment is an image/model package. Some are frontend assets, embedded docs, workflow templates, database state, async server infrastructure, OpenGL/windowing, or package-manager infrastructure.

## Why this matters

A broken ComfyUI install can fail from:

- wrong torch/CUDA family;
- broken custom-node dependencies;
- async web stack mismatch;
- app state/database migration mismatch;
- frontend/package infrastructure mismatch;
- missing model architecture loader;
- OpenGL/windowing/display context failure.

The RAG should classify the failure family before giving install commands.
