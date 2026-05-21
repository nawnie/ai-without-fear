# RAG — 2026 Modern Tier Field Report Overlay

**Pass:** 02J  
**Date:** 2026-05-19  
**Source:** Uploaded field report: `ComfyUI Custom Nodes_ 2026 Modern Tier Field Report.md`  
**Role:** Decision-policy overlay for AI Without Fear modern-tier workflow planning.

## RAG Summary

The uploaded field report is valuable because it is not just another node list. It defines a 2026 default stack for AIWF:

- **Native Wan 2.2** is the modern local-video default.
- **WanVideoWrapper** is advanced, not baseline.
- **AnimateDiff** is now legacy SD1.5 animation, still useful but not modern default.
- **CropAndStitch + Acly Fooocus inpaint + DifferentialDiffusion/SAM2** form the practical modern inpaint path.
- **FaceDetailer** should be the default face-quality workflow, not ReActor.
- **UltimateSDUpscale** is the default modern tiled generative upscaler.
- **SUPIR/CCSR/SeedVR2/advanced restorers** are comparison/advanced workflows, not beginner defaults.
- **IPAdapter remains SDXL/SD1.5 specific**; for Flux/Wan use native reference-conditioning patterns where available.

## AIWF Modern Tier Workflow Ladder

### P0 Defaults

1. `AIWF_MODERN_VIDEO_01_WAN22_5B_NATIVE`
   - Native ComfyUI core Wan 2.2 path.
   - Uses `UNETLoader`, `CLIPLoader`, `VAELoader`, `ModelSamplingSD3`, `Wan22ImageToVideoLatent`, `KSampler`, `VAEDecode`, `CreateVideo`, `SaveVideo`.
   - Teach this before wrapper workflows.

2. `AIWF_MODERN_INPAINT_01_CROP_STITCH_FOOOCUS`
   - `LoadImage → Mask/Edit → InpaintCrop → InpaintModelConditioning + Fooocus patch → KSampler → InpaintStitch`.
   - Use non-distilled SDXL checkpoints for Fooocus inpaint patch.

3. `AIWF_FACE_01_FACEDETAILER_DEFAULT`
   - Impact Pack `FaceDetailer` plus Impact Subpack detector provider.
   - Teach as face-quality repair, not identity swap.

4. `AIWF_UPSCALE_01_ULTIMATE_SDUPSCALE_COMPARE`
   - Default modern tiled denoised upscale.
   - Distinguish from deterministic `ImageUpscaleWithModel`.

### P1 Advanced / Optional

1. Wan 2.2 14B + Lightx2v 4-step Lightning LoRA.
2. SAM2 automatic masking path.
3. IPAdapter SDXL/SD1.5 identity/style workflows.
4. InstantID / PuLID / InfiniteYou / HyperLoRA identity-control experiments.
5. CCSR and SUPIR advanced restoration comparisons.

### P2 Legacy / Compatibility

1. AnimateDiff Evolved SD1.5.
2. WAS / Efficiency / LayerStyle / large utility suites.
3. ReActor with explicit consent/licensing warning.
4. Legacy prompt and style helper packs.

## Workflow Generation Rules

- Do not build Wan 2.2 beginner workflows on `ComfyUI-WanVideoWrapper` unless the user needs wrapper-only features.
- Do not use IPAdapter as the default reference-conditioning system for Wan/Flux.
- Do not lead beginner face workflows with ReActor.
- Do not treat LayerStyle dynamic imports as safe automatic JSON targets.
- Do not use Fooocus inpaint patch with Turbo, Lightning, Hyper, or other distilled SDXL checkpoints.
- Do pin class_type strings and model filenames inside workflow notes.
- Do include local-test status until Shawn runs the workflows on hardware.

## RAG Tags

`modern-tier`, `workflow-defaults`, `wan22`, `native-comfyui`, `inpainting`, `face-detailer`, `ultimate-sd-upscale`, `identity-control`, `animate-diff-legacy`, `local-ai`, `aiwf-decision-layer`
