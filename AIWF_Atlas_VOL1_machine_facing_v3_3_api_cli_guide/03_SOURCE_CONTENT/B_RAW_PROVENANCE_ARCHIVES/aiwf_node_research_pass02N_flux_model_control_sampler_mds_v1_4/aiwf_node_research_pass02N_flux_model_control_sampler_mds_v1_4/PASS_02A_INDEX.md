# AIWF ComfyUI Node Research — Pass 02A

Date: 2026-05-19

Scope: first modern model/control/video/inpaint-support pass after polished Pass 01K. This archive is Markdown/CSV-only and does not repackage the full AIWF project.

## Packs covered

1. 011 — ComfyUI-GGUF
2. 012 — comfyui_controlnet_aux
3. 013 — ComfyUI_IPAdapter_plus
4. 014 — comfyui-inpaint-nodes
5. 015 — ComfyUI-WanVideoWrapper
6. 016 — ComfyUI-Advanced-ControlNet

## Stats

- Total CSV rows: 141
- Schema-confirmed rows: 42
- Mapping-confirmed rows: 68
- Module-inventory rows: 30
- Safe-to-generate rows: 14
- Guarded/local-test rows: 131
- RAG-only / do-not-generate rows: 42

## Hard workflow-generation rules

- Do not use GGUF loaders as beginner defaults; they are useful, but model-format and hardware-sensitive.
- ControlNet Aux `AIO_Preprocessor` is a router over dynamically imported wrapper nodes; use it only after the selected preprocessor is locally confirmed.
- IPAdapter Plus is high value for identity/style/composition, but most apply nodes are mapping-confirmed only in this pass; helper schemas are more reliable than the large apply-node family.
- Acly inpaint nodes are the safest workflow-building target in this pass because the v3 node schemas expose exact node IDs and inputs.
- WanVideoWrapper is RAG-critical but should be generated as expert/local workflows only until the specific sampler/model/utility modules are deeply swept.
- Advanced ControlNet exact IDs are mapping-confirmed; generate only after per-node schema sweep unless the workflow is clearly marked experimental.

## Files

- `PASS_02_NODE_INDEX.csv` — combined machine-parseable node index.
- `NODEPACK_SUMMARY.csv` — per-pack coverage stats.
- `NODE_INDEX_*.csv` — per-pack CSV extracts.
- `RAG_NODEPACK_011_*.md` through `RAG_NODEPACK_016_*.md` — human RAG notes.
- `PASS_02A_WORKFLOW_POLICY.md` — generation rules.
- `PASS_02A_CHANGELOG.md` — changelog.
