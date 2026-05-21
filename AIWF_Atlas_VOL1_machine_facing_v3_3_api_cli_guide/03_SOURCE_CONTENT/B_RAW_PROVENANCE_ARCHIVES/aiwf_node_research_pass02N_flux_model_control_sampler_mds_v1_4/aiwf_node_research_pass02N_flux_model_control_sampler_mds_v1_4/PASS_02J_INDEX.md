# PASS 02J Index — Field Report Overlay

**Date:** 2026-05-19  
**Archive policy:** Markdown/CSV/JSON node research only; no full AIWF project re-archive.  
**Mode:** Analyze and add uploaded field report.

## Files Added or Updated

- `PASS_02_NODE_INDEX.csv` — updated with 11 native/core Wan 2.2 rows.
- `NODE_INDEX_990_ComfyUI_Core_Native_Wan22.csv` — new native Wan node index.
- `AIWF_MODERN_TIER_DECISION_LAYER_PASS02J.csv` — workflow/capability decision layer.
- `RAG_FIELD_REPORT_2026_MODERN_TIER_PASS02J.md` — RAG-ready synthesis of the uploaded report.
- `PASS_02J_FIELD_REPORT_ANALYSIS.md` — analysis, accepted claims, and guardrails.
- `PASS_02J_WORKFLOW_POLICY.md` — updated future workflow-generation policy.
- `PASS_02J_COVERAGE_STATUS.md` — counts and remaining backlog.
- `PASS_02J_CHANGELOG.md`
- `PASS_02J_MANIFEST.json`

## Added Rows

- New rows in `PASS_02_NODE_INDEX.csv`: 11
- New decision rows: 10
- New source layer: uploaded 2026 Modern Tier Field Report

## Main Decision

The modern-tier workflow build order should pivot:

1. Native Wan 2.2 5B video workflow.
2. CropAndStitch + Acly Fooocus inpaint workflow.
3. FaceDetailer default face quality workflow.
4. UltimateSDUpscale modern upscaler.
5. AnimateDiff SD1.5 as legacy/fallback, not default.

## Note

The uploaded field report was added as a decision overlay, not as unconditional truth. High-risk claims are marked guarded when they need direct template/schema/local verification.
