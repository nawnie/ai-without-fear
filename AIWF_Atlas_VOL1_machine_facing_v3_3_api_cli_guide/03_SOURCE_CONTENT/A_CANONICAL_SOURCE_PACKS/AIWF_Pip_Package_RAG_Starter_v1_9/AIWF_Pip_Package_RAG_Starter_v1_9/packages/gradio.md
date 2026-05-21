# gradio

## RAG purpose
Python UI library for quickly building local or shareable ML web apps. Useful for AIWF beginner-friendly wrappers, photo tools, validators, and single-task workflow apps.

## Why AI Without Fear cares
Gradio is one of AIWF’s strongest options for a simple local app that can be accessed from another device on the network. It is easier for beginners than a custom frontend.

## Common import patterns
- `import gradio as gr`

## Install / pinning notes
Use a dedicated venv per app where dependency risk is high. Modern Gradio requires a modern Python baseline; legacy A1111/Forge-era apps may need old Gradio pins.

## Windows / ComfyUI risk level
**medium**

## Quick diagnostic commands
```powershell
python -c "import gradio as gr; print(gr.__version__)"
```

## Common failure signatures
- FastAPI/Starlette/Pydantic mismatch after upgrading Gradio
- app boots but components changed between major Gradio versions
- remote/share/network launch arguments misunderstood

## AIWF usage notes
For AIWF modular tool launcher, prefer separate worker venvs behind a controlling UI rather than one mega-venv.

## RAG tags
`pip-package`, `v0.2-ui-api`, `medium`, `windows-ai`, `comfyui`, `gradio`, `local-ai`

## Source URLs
- https://www.gradio.app/guides/quickstart
- https://www.gradio.app/docs
- https://www.gradio.app/docs/gradio/mount_gradio_app
