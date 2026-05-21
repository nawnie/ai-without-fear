# AIWF ComfyUI Node Research — Pass 02D A-Tier Completion

Date: 2026-05-19

Archive type: Markdown + CSV node research only. This is not a full AIWF project archive.

## Purpose

Pass 02D closes the remaining A-tier node-pack rows from the original coverage list at pack level. It does not claim every individual node in every large pack is safe for workflow JSON generation. Large packs such as AnimateDiff Evolved, HunyuanVideoWrapper, Fluxtapoz, and FluxTrainer still need deeper module-specific schema sweeps before broad JSON generation.

## Main files

- `PASS_02_NODE_INDEX.csv` — combined Pass 02 node index.
- `ORIGINAL_COVERAGE_LEDGER.csv` — original 291-row node-pack coverage ledger.
- `NODEPACK_SUMMARY.csv` — per-pack row and policy counts.
- `PASS_02D_COVERAGE_STATUS.md` — coverage numbers and remaining work.
- `PASS_02D_WORKFLOW_POLICY.md` — generation policy for the updated archive.

## Original list coverage

- Original list rows: **291**
- Covered rows: **30**
- Remaining rows: **261**
- A-tier rows: **24**
- A-tier covered: **24**
- A-tier remaining: **0**

Important: original list rows are node-pack rows, not individual ComfyUI node IDs.

## Pass 02D row additions

| Pack # | Pack | New rows |
|---:|---|---:|
| 23 | ComfyUI-HunyuanVideoWrapper | 28 |
| 24 | AnimateDiff Evolved | 129 |
| 25 | ComfyUI-SUPIR | 10 |
| 26 | UltimateSDUpscale | 3 |
| 27 | ComfyUI-nunchaku | 16 |
| 28 | x-flux-comfyui | 8 |
| 29 | ComfyUI-Fluxtapoz | 22 |
| 30 | ComfyUI-FluxTrainer | 13 |

## Pass 02 totals

- Pass 02 CSV rows total: **454**
- New rows this pass: **229**
- Schema/key-schema rows: **165**
- Mapping-confirmed rows: **257**
- Module-inventory rows: **32**
- Safe-to-generate candidates: **35**
- Local-test-required rows: **382**
- Do-not-generate rows: **245**

## Source-backed highlights

- HunyuanVideoWrapper mapping and several core schemas were confirmed from `__init__.py` and `nodes.py`.
- AnimateDiff Evolved was added as a mapping-confirmed expert video/motion pack.
- SUPIR v2 core encode/decode/first-stage/sample/conditioner nodes were schema-confirmed.
- UltimateSDUpscale nodes were schema-confirmed but guarded because the pack wraps the original A1111 Ultimate SD Upscale script.
- Nunchaku was resolved to the active `nunchaku-ai/ComfyUI-nunchaku` repo and added as hardware/CUDA-sensitive.
- x-flux core LoRA/ControlNet/IPAdapter/sampler nodes were schema-confirmed from source.
- Fluxtapoz was added as mapping-confirmed Flux inversion/edit/regional attention support.
- FluxTrainer was added as training RAG coverage, not inference workflow foundation.
