# v0.9 Custom Node, Training, and Web Dependency Summary

Release day: 2026-05-19

## Packages added
- mediapipe
- albumentations
- supervision
- pycocotools
- groundingdino-py
- open-clip-torch
- clip-interrogator
- lpips
- peft
- wandb
- tensorboard
- httpx
- websockets
- orjson
- watchdog

## Stub/research cards promoted
- lion-pytorch
- ipywidgets
- dlib
- k-diffusion
- opencv-python-headless
- groundingdino
- FlagEmbedding
- nomic
- griptape
- tomli
- tomli-w
- pytest
- ruff
- black
- pyinstaller

## Practical findings
- `open-clip-torch` imports as `open_clip`.
- `groundingdino-py` may not match every GroundingDINO repo/node layout.
- GroundingDINO should be a decision point, not a default compile step.
- Training dependencies should be isolated from ComfyUI runtime whenever possible.
- Experiment tracking packages need privacy/offline decisions before inclusion in AIWF beginner workflows.

## Validation
- Inventory regenerated.
- Package cards regenerated/indexed.
- Source index regenerated.
- No missing package-card paths.
- No duplicate package IDs.
- No duplicate pip names.
