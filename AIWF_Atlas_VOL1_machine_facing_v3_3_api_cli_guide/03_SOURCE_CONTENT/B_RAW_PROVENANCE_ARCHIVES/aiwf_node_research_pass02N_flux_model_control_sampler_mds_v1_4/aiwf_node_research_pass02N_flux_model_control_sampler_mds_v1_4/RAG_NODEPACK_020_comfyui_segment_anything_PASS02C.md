# RAG Nodepack 020 — storyicon segment anything — Pass 02C

## Identity
- Repo: `storyicon/comfyui_segment_anything`
- Core nodes: `SAMModelLoader (segment anything)`, `GroundingDinoModelLoader (segment anything)`, `GroundingDinoSAMSegment (segment anything)`, `InvertMask (segment anything)`, `IsMaskEmpty`.

## Workflow use
Use for classic text-prompt object segmentation: GroundingDINO finds boxes, SAM turns those boxes into masks.

## AIWF rule
Still useful for shared workflow repair and semantic masks. Prefer Kijai SAM2 for new video masking; use this pack when GroundingDINO+SAM prompt-to-mask is the needed behavior.

