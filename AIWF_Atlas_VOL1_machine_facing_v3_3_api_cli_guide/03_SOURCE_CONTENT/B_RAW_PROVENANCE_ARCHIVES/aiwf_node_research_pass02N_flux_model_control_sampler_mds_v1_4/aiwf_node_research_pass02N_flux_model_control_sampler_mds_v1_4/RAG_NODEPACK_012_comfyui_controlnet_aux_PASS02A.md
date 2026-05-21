# RAG Nodepack 012 — comfyui_controlnet_aux

Repo: Fannovel16/comfyui_controlnet_aux

## Purpose

Large collection of ControlNet preprocessors with dynamic wrapper import.

## Key nodes

- `AIO_Preprocessor`
- `ControlNetPreprocessorSelector`
- `ExecuteAllControlNetPreprocessors`
- `ControlNetAuxSimpleAddText`

## AIWF usage

Use for preprocessor education and control-image generation. Do not assume all wrapper nodes exist; modules are dynamically imported and dependencies may fail.

## Generation rule

`AIO_Preprocessor` is useful, but the selected preprocessor's exact schema needs confirmation before publishing a workflow.
