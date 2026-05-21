# ComfyUI Advanced Research Pass 02 — Datatype Boundaries

This pass adds a canonical lane for ComfyUI datatype conversion and boundary reasoning.

## Added

- `31_comfyui_datatype_conversion_boundaries`
- 12 Atlas cards
- official ComfyUI source anchors for datatype, image/mask/latent, node property, lazy evaluation, and V3 schema claims
- datatype conversion retrieval recipe
- updated ComfyUI advanced assistant rules

## Primary use

This pass is intended to answer advanced user questions such as:

- How do I change a custom node from `IMAGE` input to `LATENT` input?
- What is actually inside a `LATENT` object?
- Why does my mask shape break compositing?
- When do I use VAE Encode/Decode?
- How do I design a node that accepts more than one datatype?

## Integrity note

The pass does not claim that arbitrary image operations can be performed on latents. It treats VAE encode/decode as the usual image/latent boundary and requires code-level changes when socket contracts change.
