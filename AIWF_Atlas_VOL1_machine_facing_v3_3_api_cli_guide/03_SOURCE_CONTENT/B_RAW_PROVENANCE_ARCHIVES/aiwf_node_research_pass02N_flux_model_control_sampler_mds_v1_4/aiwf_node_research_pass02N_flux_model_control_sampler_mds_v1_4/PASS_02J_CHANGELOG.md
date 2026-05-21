# PASS 02J Changelog

**Date:** 2026-05-19

## Added

- Added uploaded 2026 Modern Tier Field Report as a RAG decision layer.
- Added 11 native/core Wan 2.2 rows to the combined Pass 02 CSV.
- Added `NODE_INDEX_990_ComfyUI_Core_Native_Wan22.csv`.
- Added `AIWF_MODERN_TIER_DECISION_LAYER_PASS02J.csv`.
- Added `RAG_FIELD_REPORT_2026_MODERN_TIER_PASS02J.md`.

## Changed

- Workflow policy now prioritizes native Wan 2.2 5B as the default modern video workflow.
- AnimateDiff is reclassified as legacy SD1.5 animation/fallback rather than modern default.
- ReActor remains warning-only/advanced; FaceDetailer is the default face-quality path.
- UltimateSDUpscale is promoted to the default modern-tier upscaler.
- CropAndStitch + Acly Fooocus inpaint is promoted to the default modern-tier advanced inpaint path.

## Not Changed

- No full AIWF project re-archive.
- No new workflow JSON generated in this pass.
- Stale retry rows remain stale where repos could not be resolved.
