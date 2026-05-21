# Pass 02H Workflow Policy

## Default generation stance

Light-covered packs are **RAG reference first**. Do not generate production workflow JSON from mapping-only rows unless the exact node schema has been inspected.

## Safe-ish after local/schema pass

- CCSR restoration/upscale nodes
- Tiled Diffusion / Tiled VAE
- Tiled KSampler
- APISR / InvSR / AuraSR / LDSR comparison paths
- Face restore/detailer compatibility nodes

## Do not use as portable defaults

- External-app bridges such as Topaz unless the user explicitly wants that dependency.
- Identity/adaptation packs without explicit user intent and local dependency validation.
- Retry/stale rows.

## AIWF default guidance

For teaching foundations, prefer core ComfyUI, Essentials, Impact, rgthree, VHS, and the already-reviewed inpaint/crop-stitch paths. Use these Pass 02H packs as capability coverage, compatibility knowledge, and future comparison candidates.
