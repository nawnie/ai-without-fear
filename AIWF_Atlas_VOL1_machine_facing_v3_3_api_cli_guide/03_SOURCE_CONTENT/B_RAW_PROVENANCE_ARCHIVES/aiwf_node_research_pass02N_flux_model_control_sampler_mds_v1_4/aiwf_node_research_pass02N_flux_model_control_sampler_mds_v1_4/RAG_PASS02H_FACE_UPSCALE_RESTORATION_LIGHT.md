# RAG Pass 02H — Face, Upscale, Restoration Light Coverage

## Summary

This pass covers the next popular/high-value block after the identity/video-layer group. It prioritizes breadth and capability mapping over deep socket-level schema.

## Face and portrait packs

FUSE Face Enhancer, DZ-FaceDetailer, Facerestore CF, and Portrait Maker are useful for old workflow repair and face-specific enhancement/rebuild experiments. They overlap strongly with Impact Pack, ReActor, InstantID, IPAdapter, FaceAnalysis, and restore/upscale workflows. Treat them as compatibility knowledge until a specific workflow need appears.

InfiniteYou and HyperLoRA are more important than a normal utility pack because they may represent newer identity/adaptation methods. They should be dense-reviewed before any AIWF identity-preserving workflow relies on them.

## Tiled and restoration packs

Tiled Diffusion, Tiled KSampler, and CCSR affect generation/upscale behavior directly. They are not just postprocessing filters. They can change seams, memory use, color behavior, sampling behavior, and final detail. CCSR is especially useful for the AIWF upscaler comparison plan, but it needs local testing.

APISR, InvSR, NNLatentUpscale, SD-Latent-Upscaler, Latent-Interposer, Flowty LDSR, AuraSR, and Topaz are useful comparison candidates. For AIWF, the immediate value is knowing they exist and how they overlap rather than fully wiring every one today.

## Retry items

- comfyui-portrait-master-zh-cn
- ComfyUI-SeedVR2_VideoUpscaler

Both should be retried later with broader search or manual repo confirmation.
