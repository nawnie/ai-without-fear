# AIWF Node Research Pass 02C — A-tier Expansion

**Date:** 2026-05-19  
**Archive type:** Markdown + CSV node research only.  
**Base:** Pass 02B plus six additional A-tier packs.

## Added in this pass

- ComfyUI-Impact-Subpack
- ComfyUI-Inpaint-CropAndStitch
- ComfyUI-segment-anything-2
- storyicon/comfyui_segment_anything
- ComfyUI-ReActor
- ComfyUI-LTXVideo

## Combined CSV stats

- Total Pass 02 CSV rows: **225**
- New/updated Pass 02C rows: **83**
- Schema-confirmed rows: **121**
- Mapping-confirmed rows: **74**
- Module-inventory rows: **30**
- Safe-to-generate rows: **33**
- Local-test-required rows: **154**

## Original list remaining

See `PASS_02C_COVERAGE_STATUS.md` and `ORIGINAL_COVERAGE_LEDGER.csv`.

- Original-list rows covered: **22/291**
- Original-list rows remaining: **269**
- A-tier rows covered: **16/24**
- A-tier rows remaining: **8**

## Workflow-generation notes

- CropAndStitch + Acly inpaint are now the strongest immediate advanced inpaint build target.
- Kijai SAM2 and storyicon GroundingDINO+SAM provide two distinct masking routes: modern video/object propagation vs. classic prompt-to-mask.
- ReActor is documented for face/identity workflows, restoration, and QA; keep it guarded due to model/dependency and identity-safety implications.
- LTXVideo has enough mapping coverage for RAG repair and selected sampler schema coverage, but not enough for full workflow generation across the whole pack.
