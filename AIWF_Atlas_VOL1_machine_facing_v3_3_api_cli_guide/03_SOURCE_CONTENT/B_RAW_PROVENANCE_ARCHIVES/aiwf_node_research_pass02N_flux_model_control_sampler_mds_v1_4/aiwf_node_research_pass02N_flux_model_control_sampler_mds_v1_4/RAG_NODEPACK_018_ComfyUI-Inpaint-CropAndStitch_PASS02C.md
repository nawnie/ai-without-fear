# RAG Nodepack 018 — ComfyUI-Inpaint-CropAndStitch — Pass 02C

## Identity
- Repo: `lquesada/ComfyUI-Inpaint-CropAndStitch`
- Exact nodes: `InpaintCropImproved`, `InpaintStitchImproved`.

## Workflow use
This is a high-value AIWF inpaint workflow target. The crop node cuts the masked/context area to a sane sampling size, then the stitch node pastes the result back into the original image using `STITCHER` metadata.

## AIWF rule
Use this before Acly inpaint or SDXL inpaint sampling when the masked area is small relative to the canvas. Keep crop and stitch paired; do not invent the `STITCHER` object manually.

