# RAG Nodepack 014 — comfyui-inpaint-nodes

Repo: Acly/comfyui-inpaint-nodes

## Purpose

Inpainting-focused nodes for Fooocus inpaint patching, VAE inpaint conditioning, mask fill/blur/grow/shrink/stabilize, model-based inpainting, and masked color matching.

## Key nodes

- `INPAINT_LoadFooocusInpaint`
- `INPAINT_ApplyFooocusInpaint`
- `INPAINT_VAEEncodeInpaintConditioning`
- `INPAINT_MaskedFill`
- `INPAINT_MaskedBlur`
- `INPAINT_LoadInpaintModel`
- `INPAINT_InpaintWithModel`
- `INPAINT_ColorMatch`
- `INPAINT_ExpandMask`
- `INPAINT_ShrinkMask`
- `INPAINT_StabilizeMask`
- `INPAINT_DenoiseToCompositingMask`
- `INPAINT_MaskBoundingBox`

## AIWF usage

Best immediate candidate in Pass 02A for building "ultimate inpaint" workflows because exact v3 node IDs and inputs are visible in source.

## Generation rule

Mask and color utility nodes are safe if installed. Fooocus/LaMa/MAT model nodes require local model files and local testing.
