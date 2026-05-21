# RAG Nodepack 052 — ComfyUI-RMBG — PASS 02F Light Coverage

- Repository: `1038lab/ComfyUI-RMBG`
- Coverage mode: light/default; dense only if this pack becomes first-choice capability.
- Rows captured: 9

## AIWF use

- `AILab_RMBG_MODULE` — High-value segmentation/removal suite: background removal and matting. Policy: `guarded_generate_after_dense_schema`. Risks: `segmentation,background_removal,dynamic_import,model_download`.
- `AILab_BiRefNet_MODULE` — High-value segmentation/removal suite: BiRefNet saliency/matting. Policy: `guarded_generate_after_dense_schema`. Risks: `segmentation,background_removal,dynamic_import,model_download`.
- `AILab_SAM2_MODULE` — High-value segmentation/removal suite: SAM2 object segmentation. Policy: `guarded_generate_after_dense_schema`. Risks: `segmentation,background_removal,dynamic_import,model_download`.
- `AILab_SAM3_MODULE` — High-value segmentation/removal suite: SAM3/object segmentation. Policy: `guarded_generate_after_dense_schema`. Risks: `segmentation,background_removal,dynamic_import,model_download`.
- `AILab_Florence2_MODULE` — High-value segmentation/removal suite: prompt/box/coordinate vision-language helper. Policy: `guarded_generate_after_dense_schema`. Risks: `segmentation,background_removal,dynamic_import,model_download`.
- `AILab_YoloV8_MODULE` — High-value segmentation/removal suite: detector-backed segmentation. Policy: `guarded_generate_after_dense_schema`. Risks: `segmentation,background_removal,dynamic_import,model_download`.
- `AILab_Face_Body_Fashion_Cloth_SEGMENT_MODULES` — High-value segmentation/removal suite: human/garment/body mask generation. Policy: `guarded_generate_after_dense_schema`. Risks: `segmentation,background_removal,dynamic_import,model_download`.
- `AILab_LamaRemover_MODULE` — High-value segmentation/removal suite: object/removal/inpaint preprocessing. Policy: `guarded_generate_after_dense_schema`. Risks: `segmentation,background_removal,dynamic_import,model_download`.
- `AILab_ImageMaskTools_MODULE` — High-value segmentation/removal suite: mask transforms and compositing helpers. Policy: `guarded_generate_after_dense_schema`. Risks: `segmentation,background_removal,dynamic_import,model_download`.

## Notes
This pass intentionally favors broad coverage and overlap mapping over exhaustive socket capture. Use source_refs in the CSV for deeper follow-up.