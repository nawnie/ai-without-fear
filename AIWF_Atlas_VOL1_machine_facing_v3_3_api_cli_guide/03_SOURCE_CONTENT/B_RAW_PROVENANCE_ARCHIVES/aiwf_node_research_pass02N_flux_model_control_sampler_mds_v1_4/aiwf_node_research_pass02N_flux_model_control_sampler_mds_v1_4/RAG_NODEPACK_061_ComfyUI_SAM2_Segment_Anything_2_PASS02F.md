# RAG Nodepack 061 — ComfyUI SAM2(Segment Anything 2) — PASS 02F Light Coverage

- Repository: `neverbiasu/ComfyUI-SAM2`
- Coverage mode: light/default; dense only if this pack becomes first-choice capability.
- Rows captured: 5

## AIWF use

- `SAM2ModelLoader (segment anything2)` — Alternative SAM2/GroundingDINO segmentation: Load SAM2 model. Policy: `guarded_generate_after_schema`. Risks: `sam2,groundingdino,segmentation,needs_schema`.
- `GroundingDinoModelLoader (segment anything2)` — Alternative SAM2/GroundingDINO segmentation: Load GroundingDINO. Policy: `guarded_generate_after_schema`. Risks: `sam2,groundingdino,segmentation,needs_schema`.
- `GroundingDinoSAM2Segment (segment anything2)` — Alternative SAM2/GroundingDINO segmentation: Text-prompted GroundingDINO + SAM2 segmentation. Policy: `guarded_generate_after_schema`. Risks: `sam2,groundingdino,segmentation,needs_schema`.
- `InvertMask (segment anything)` — Alternative SAM2/GroundingDINO segmentation: Invert generated mask. Policy: `guarded_generate_after_schema`. Risks: `sam2,groundingdino,segmentation,needs_schema`.
- `IsMaskEmpty` — Alternative SAM2/GroundingDINO segmentation: Mask validity/empty check. Policy: `guarded_generate_after_schema`. Risks: `sam2,groundingdino,segmentation,needs_schema`.

## Notes
This pass intentionally favors broad coverage and overlap mapping over exhaustive socket capture. Use source_refs in the CSV for deeper follow-up.