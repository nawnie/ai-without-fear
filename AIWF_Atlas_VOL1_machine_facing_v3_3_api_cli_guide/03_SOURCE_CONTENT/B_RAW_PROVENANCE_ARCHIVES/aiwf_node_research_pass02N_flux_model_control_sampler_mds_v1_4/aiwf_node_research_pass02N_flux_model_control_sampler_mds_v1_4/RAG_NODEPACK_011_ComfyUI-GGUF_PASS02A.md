# RAG Nodepack 011 — ComfyUI-GGUF

Repo: city96/ComfyUI-GGUF

## Purpose

Loads GGUF quantized UNet/diffusion and CLIP/text-encoder models inside ComfyUI.

## Key nodes

- `UnetLoaderGGUF`
- `UnetLoaderGGUFAdvanced`
- `CLIPLoaderGGUF`
- `DualCLIPLoaderGGUF`
- `TripleCLIPLoaderGGUF`
- `QuadrupleCLIPLoaderGGUF`

## AIWF usage

Use for low-VRAM/quantized experiments. Do not use as the default teaching path because model format, dtype, patching behavior, and text-encoder compatibility are local-environment sensitive.

## Source notes

`__init__.py` imports `NODE_CLASS_MAPPINGS` from `nodes.py`; `nodes.py` registers the six loader classes and adds `.gguf` model-folder handling.
