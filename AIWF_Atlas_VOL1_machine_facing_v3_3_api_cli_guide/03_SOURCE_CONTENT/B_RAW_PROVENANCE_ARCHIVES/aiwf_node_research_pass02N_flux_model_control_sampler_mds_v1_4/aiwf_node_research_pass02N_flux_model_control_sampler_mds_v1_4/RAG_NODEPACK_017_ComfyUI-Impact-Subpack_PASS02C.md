# RAG Nodepack 017 — ComfyUI-Impact-Subpack — Pass 02C

## Identity
- Repo: `ltdrdata/ComfyUI-Impact-Subpack`
- Role: companion detector-provider pack for Impact Pack.
- Exact workflow node: `UltralyticsDetectorProvider`.

## Workflow use
Use this when Impact Pack workflows require a `BBOX_DETECTOR` or `SEGM_DETECTOR` from Ultralytics YOLO models. Model folders are registered under `models/ultralytics`, `models/ultralytics/bbox`, and `models/ultralytics/segm`.

## AIWF rule
Safe to generate only when the dependency is installed and the model file exists. If the node is missing, the user likely installed Impact Pack without the Subpack.

