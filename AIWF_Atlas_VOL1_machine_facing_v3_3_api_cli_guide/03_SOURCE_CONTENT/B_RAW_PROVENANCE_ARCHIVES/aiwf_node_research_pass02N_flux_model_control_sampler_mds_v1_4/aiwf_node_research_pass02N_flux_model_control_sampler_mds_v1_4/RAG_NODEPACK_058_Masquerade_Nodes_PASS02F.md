# RAG Nodepack 058 — Masquerade Nodes — PASS 02F Light Coverage

- Repository: `BadCafeCode/masquerade-nodes-comfyui`
- Coverage mode: light/default; dense only if this pack becomes first-choice capability.
- Rows captured: 8

## AIWF use

- `ClipSegNode` — Low-dependency mask tooling: Text-driven mask generation with positive/negative prompt and threshold. Policy: `guarded_generate_after_local_test`. Risks: `mask_tools,auto_install`.
- `MaskMorphologyNode` — Low-dependency mask tooling: Dilate/erode/open/close mask operations. Policy: `safe_generate_after_local_test`. Risks: `mask_tools`.
- `MaskCombineOp` — Low-dependency mask tooling: Union/intersection/difference/multiply/add comparisons for masks/images. Policy: `safe_generate_after_local_test`. Risks: `mask_tools`.
- `UnaryMaskOp` — Low-dependency mask tooling: Invert/average/round/clamp/abs mask operations. Policy: `safe_generate_after_local_test`. Risks: `mask_tools`.
- `BlurNode` — Low-dependency mask tooling: Gaussian blur utility for mask/image softening. Policy: `safe_generate_after_local_test`. Risks: `mask_tools`.
- `ImageToMask` — Low-dependency mask tooling: Convert image/alpha/intensity to MASK. Policy: `safe_generate_after_local_test`. Risks: `mask_tools`.
- `MixByMask` — Low-dependency mask tooling: Composite two images using mask. Policy: `safe_generate_after_local_test`. Risks: `mask_tools`.
- `CreateRectMask` — Low-dependency mask tooling: Generate pixel/percent rectangle masks. Policy: `safe_generate_after_local_test`. Risks: `mask_tools`.

## Notes
This pass intentionally favors broad coverage and overlap mapping over exhaustive socket capture. Use source_refs in the CSV for deeper follow-up.