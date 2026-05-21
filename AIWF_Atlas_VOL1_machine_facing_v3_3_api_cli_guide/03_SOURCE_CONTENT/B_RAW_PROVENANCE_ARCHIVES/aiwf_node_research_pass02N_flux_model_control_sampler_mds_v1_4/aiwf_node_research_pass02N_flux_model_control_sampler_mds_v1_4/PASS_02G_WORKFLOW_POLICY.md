# PASS 02G Workflow Policy Addendum

## Light-mode rule

For popular packs over roughly 10k downloads, use light coverage unless they introduce a missing capability or first-of-type workflow path.

## New dense-pass candidates from this pass

- ProPainter video inpaint/outpaint
- Video matting / BRIAAI matting
- LivePortrait / face animation
- InstantID / PuLID / PhotoMaker identity conditioning
- Flux-specific identity conditioning
- LayerStyle Advance segmentation/caption/VLM utilities

## Default generation status

Most rows in this pass are RAG/compatibility rows. Production workflow generation should start only from rows marked `schema_confirmed` and still require local testing when risk tags include `identity`, `video`, `onnx`, `hf_download`, `heavy_vram`, or `base_model_specific`.
