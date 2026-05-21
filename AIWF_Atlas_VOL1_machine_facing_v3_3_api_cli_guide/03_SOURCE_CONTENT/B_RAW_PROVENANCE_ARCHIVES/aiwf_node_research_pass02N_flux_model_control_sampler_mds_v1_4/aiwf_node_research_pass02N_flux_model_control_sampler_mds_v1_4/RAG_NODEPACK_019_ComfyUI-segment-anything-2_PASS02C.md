# RAG Nodepack 019 — Kijai SAM2 — Pass 02C

## Identity
- Repo: `kijai/ComfyUI-segment-anything-2`
- Core nodes: `DownloadAndLoadSAM2Model`, `Sam2Segmentation`, `Sam2AutoSegmentation`, `Sam2VideoSegmentationAddPoints`, `Sam2VideoSegmentation`, `Florence2toCoordinates`.

## Workflow use
Use for modern SAM2 image/video segmentation, especially mask creation for inpaint, video object tracking, and prompt-to-box-to-mask pipelines.

## AIWF rule
Guard video/stateful SAM2 nodes. Single-image segmentation is a strong modern masking tool; auto-mask and video propagation are local-test-required because they are VRAM and state sensitive.

