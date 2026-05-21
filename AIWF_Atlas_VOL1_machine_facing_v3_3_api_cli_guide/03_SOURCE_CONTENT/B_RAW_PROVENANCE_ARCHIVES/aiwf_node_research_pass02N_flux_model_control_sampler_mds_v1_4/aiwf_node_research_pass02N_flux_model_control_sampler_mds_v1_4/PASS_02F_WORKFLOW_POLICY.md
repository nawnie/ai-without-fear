# PASS 02F Workflow Policy

Date: 2026-05-19

## Light mode default

Common utility, prompt, metadata, and UI packs are now captured in light mode unless they become a workflow target.

## Safe candidates from this pass

- `Save Image w/Metadata`
- `SDPromptReader`
- `SDPromptSaver`
- `SDXLPromptStyler`
- `SDXLPromptStylerAdvanced`
- Masquerade non-model mask operations after local test

## Guarded / needs schema before workflow JSON

- ComfyUI-RMBG dynamic modules
- BiRefNet/BRIA/InSPyReNet background-removal alternatives
- YoloWorld/EfficientSAM model loaders beyond detector provider
- alternate SAM2 node schemas beyond mapping
- OneButtonPrompt and DynamicPrompts nodes when deterministic outputs matter

## Do not generate as workflow nodes

- Quick Connections
- AIGODLIKE Studio
- AIGODLIKE Translation

These are UI/localization/management tools, not portable workflow JSON dependencies.
