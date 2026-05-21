# PASS 02J — Field Report Overlay and Modern-Tier Decision Layer

**Date:** 2026-05-19  
**Mode:** Analyze-and-add pass  
**Base package:** Pass 02I retry/repair archive  
**Source added:** `ComfyUI Custom Nodes_ 2026 Modern Tier Field Report.md`

## Purpose

This pass adds a decision layer on top of the node-pack inventory. Earlier passes answered: **what exists, what class_type strings are known, and what still needs schema or local testing**. The uploaded field report adds a more useful modern-tier question: **what should AI Without Fear teach and build first?**

The answer is not to dense-review everything. The new rule is:

> Use broad RAG coverage for common/legacy/overlapping packs, but add dense review when a pack is first-of-type, model-family-specific, a 2026 technique, or a missing capability.

## Accepted Into RAG

### 1. Native Wan 2.2 becomes the default modern video track

The field report argues that modern local video should start with **native ComfyUI Wan 2.2**, not Hunyuan, Mochi, CogVideoX, LTX, AnimateDiff, or the Wan wrapper for the basic case. This aligns with the official Wan 2.2 5B template I checked: the template uses core nodes including `UNETLoader`, `CLIPLoader`, `VAELoader`, `Wan22ImageToVideoLatent`, `ModelSamplingSD3`, `KSampler`, `CreateVideo`, and `SaveVideo`.

**RAG action:** Added `NODE_INDEX_990_ComfyUI_Core_Native_Wan22.csv` and 11 rows to `PASS_02_NODE_INDEX.csv`.

**Workflow target added:** `AIWF_MODERN_VIDEO_01_WAN22_5B_NATIVE`

## Key Accepted Defaults

| Capability | AIWF default | Why |
|---|---|---|
| Modern video | Wan 2.2 5B native ComfyUI | Core nodes, fewer custom dependencies, broad hardware reach |
| Advanced video | Wan 2.2 14B + Lightx2v 4-step LoRA | Higher quality but 24 GB-class path |
| Legacy animation | AnimateDiff SD1.5 Gen2 | Useful only when SD1.5 checkpoint/LoRA ecosystem matters |
| Modern inpaint | CropAndStitch + Acly Fooocus inpaint + core conditioning | Best immediate advanced inpaint stack |
| Auto mask | SAM2 + PointsEditor/KJNodes | Strong bridge into inpaint workflows |
| Face quality | Impact FaceDetailer | Safer default than face swap |
| Identity control | IPAdapter for SDXL/SD1.5; InstantID/PuLID/InfiniteYou/HyperLoRA advanced | Model-family-specific identity approaches |
| Upscaling | UltimateSDUpscale default; SUPIR/CCSR advanced | Simple default vs. advanced restoration comparisons |

## Guarded / Not Blindly Accepted

The uploaded report contains strong 2026 recommendations, but the RAG should not treat every claim as workflow-generation-ready. These are now marked as guarded:

- `WanFirstLastFrameToVideo` — high-value, but needs direct official template/schema fetch before JSON generation.
- `EmptyHunyuanLatentVideo` for Wan 2.2 14B — report says it is used, but the fetched official 14B file contains a subgraph wrapper; inspect internal graph before generating.
- IPAdapter FaceID / ReActor / InstantID family — identity-sensitive and often InsightFace-dependent.
- SUPIR — advanced and license-sensitive.
- LayerStyle / LayerStyle Advance — broad dynamic imports, useful for compatibility but not a clean default foundation.
- Wrapper-based Wan — useful for cutting-edge features, not the beginner default.

## New Files Added

- `AIWF_MODERN_TIER_DECISION_LAYER_PASS02J.csv`
- `RAG_FIELD_REPORT_2026_MODERN_TIER_PASS02J.md`
- `NODE_INDEX_990_ComfyUI_Core_Native_Wan22.csv`
- `PASS_02J_FIELD_REPORT_ANALYSIS.md`
- `PASS_02J_COVERAGE_STATUS.md`
- `PASS_02J_WORKFLOW_POLICY.md`
- `PASS_02J_INDEX.md`
- `PASS_02J_CHANGELOG.md`
- `PASS_02J_MANIFEST.json`

## Counts

- Pass 02I rows: 632
- Added rows: 11
- Pass 02J rows: 643
- Decision-layer rows: 10
- New retry/stale rows resolved in this pass: 0
- New stale rows added: 0

## Practical Result

This pass changes the build order. The next workflow-building phase should prioritize:

1. Wan 2.2 5B native core workflow.
2. Advanced inpaint workflow: CropAndStitch + Acly Fooocus + optional SAM2.
3. FaceDetailer default face-quality workflow.
4. UltimateSDUpscale default modern upscaler.
5. SD1.5 AnimateDiff legacy workflow only after the modern defaults exist.
