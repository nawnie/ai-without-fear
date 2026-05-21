# Pass 02I Retry + Expansion Findings

## Resolved retries

### Prompt Control

This was not found by legacy `NODE_CLASS_MAPPINGS` search because it uses ComfyUI's newer V3 extension style. Its entrypoint imports base, hooks, tools, lazy, and anima modules and returns node classes through `ComfyExtension.get_node_list`.

### CLIPSeg

The listed time-river path resolved as a repository but did not expose fetchable node source through the available source calls. A functional ComfyUI-CLIPSeg implementation was captured from an equivalent fork/clone and should be used for red-node repair knowledge.

### SeedVR2

The listed numz path did not resolve as a direct active source, but an active V3 ComfyUI SeedVR2 integration was found and schema-reviewed. This is a modern video-upscaling capability and deserves a future dense/local-test pass.

## Expanded too-light packs

### Video Matting

Robust Video Matting and BRIAAI Matting were upgraded from mapping-only to schema-confirmed. This is useful because video alpha/matte support is a distinct workflow capability.

### InfiniteYou

InfiniteYou is not just another face tool. It is a Flux identity-control path with face detector, ArcFace embedding, pose image, InfuseNet load, and InfuseNet apply nodes.

### HyperLoRA

HyperLoRA generates and applies LoRA weights from identity/base conditions. It is a new adaptation system, not a normal LoRA loader, so it should stay guarded until tested locally.
