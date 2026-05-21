# PASS 02J Workflow Policy — Modern Tier Decision Overlay

**Date:** 2026-05-19  
**Base:** Pass 02I policy + uploaded field report analysis

## Policy Change

Pass 02J adds a workflow-priority layer. Node coverage alone is no longer enough. Future workflow JSON should follow this sequence:

1. Build default modern-tier workflows first.
2. Use dense schema review only for first-of-type or model-family-specific systems.
3. Treat broad utility packs as RAG/compatibility knowledge unless a specific workflow requires them.
4. Use official/native core nodes where they now cover the scope.

## New Default Workflow Targets

| Priority | Workflow target | Status |
|---|---|---|
| P0 | Wan 2.2 5B native ComfyUI video | Ready for JSON drafting after final node schema/template check |
| P0 | CropAndStitch + Acly Fooocus inpaint | Ready for workflow-focused schema polish |
| P0 | Impact FaceDetailer default face-quality path | Ready for workflow-focused schema polish |
| P0 | UltimateSDUpscale modern upscaler | Ready for workflow-focused schema polish |
| P1 | Wan 2.2 14B Lightning | Needs exact subgraph/schema extraction |
| P1 | SAM2 auto-mask into inpaint | Needs UI/local testing |
| P1 | IPAdapter SDXL / FaceID | Needs model/license notes and local test |
| P2 | AnimateDiff SD1.5 legacy | Good to include, but after modern defaults |

## Native Wan 2.2 Rule

Use native ComfyUI Wan 2.2 for the default modern video workflow. The official 5B template confirms the core path using `UNETLoader`, `CLIPLoader`, `VAELoader`, `Wan22ImageToVideoLatent`, `ModelSamplingSD3`, `KSampler`, `VAEDecode`, `CreateVideo`, and `SaveVideo`.

`ComfyUI-WanVideoWrapper` remains important for advanced features, but it is not the beginner/default path.

## Identity / Face Rules

- Default face improvement: Impact `FaceDetailer`.
- Advanced identity conditioning: IPAdapter, InstantID, PuLID, InfiniteYou, HyperLoRA.
- Face swap: ReActor only with explicit consent, licensing, and deepfake-risk notes.

## Inpainting Rules

- Default advanced inpaint: CropAndStitch + Acly Fooocus nodes.
- Use `InpaintModelConditioning` for denoise flexibility.
- Add DifferentialDiffusion + Gaussian/blurred mask as a seam-control lesson.
- Add SAM2 as an optional mask-generation route.

## Upscale Rules

- Foundation tier: stock `UpscaleModelLoader` + `ImageUpscaleWithModel`.
- Modern default: `UltimateSDUpscale`.
- Advanced comparison: SUPIR, CCSR, APISR, InvSR, SeedVR2 depending on task.
