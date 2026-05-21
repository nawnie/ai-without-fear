# AIWF ComfyUI Node Research — Pass 02B Deep Schema

Date: 2026-05-19

Scope: deepen Pass 02A modern model/control/inpaint packs without adding unrelated packs.

Archive type: Markdown + CSV node research only. No workflow JSONs and no full project re-archive.

## Stats

- Combined rows: 142
- Schema-confirmed rows: 88
- Mapping-confirmed rows: 24
- Module-inventory rows: 30
- Safe-to-generate candidates: 21
- Local-test-required rows: 52

## Deepened this pass

1. **ComfyUI_IPAdapter_plus**
   - Main apply nodes upgraded from mapping-only to schema-confirmed: simple, advanced, batch, FaceID, tiled, embeds, params, style/composition, precise style/composition, and dev enhancer paths.
   - Loader/helper rows were clarified around IPADAPTER, CLIPVision, InsightFace, and `.ipadpt` embeds.

2. **ComfyUI-Advanced-ControlNet**
   - Core loader/apply schemas confirmed.
   - Weights and keyframe nodes upgraded enough for future router/control workflows.
   - Deprecated IDs remain do-not-generate.

3. **ComfyUI-WanVideoWrapper**
   - `WanVideoSampler` added as schema-confirmed but expert/local-test only.
   - It is not a beginner-safe workflow foundation by itself because it depends on many upstream embed/model/control/cache paths.

4. **comfyui_controlnet_aux**
   - Dynamic router/helper nodes are schema-confirmed.
   - Individual wrapper preprocessors still require per-wrapper file sweeps before exact JSON generation.

## Current build recommendation

- First build candidate from Pass 02 remains **Acly comfyui-inpaint-nodes**, because its node IDs and schemas are clean and modern.
- IPAdapter is now usable for controlled workflow drafts after local model availability checks.
- Advanced-ControlNet is usable for advanced drafts if we keep exact class IDs and avoid deprecated IDs.
- WanVideoWrapper remains RAG/indexed, not automatic workflow generation default.

## Files

- `PASS_02_NODE_INDEX.csv` — combined updated CSV
- `PASS_02_NODE_INDEX_ORIGINAL_02A.csv` — previous pass snapshot
- `NODE_INDEX_*.csv` — per-pack indexes
- `NODEPACK_SUMMARY.csv` — per-pack counts
- `PASS_02B_WORKFLOW_POLICY.md` — generation rules
- `PASS_02B_CHANGELOG.md` — day-only changelog
