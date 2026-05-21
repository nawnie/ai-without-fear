# v0.9 Custom Node, Training, and Web Dependency Notes

Release day: 2026-05-19

## What changed
v0.9 promotes all v0.8 stubs/research cards to source-reviewed full cards and adds 15 custom-node/training/web packages.

## New families
- Detection / segmentation / annotation: `mediapipe`, `albumentations`, `supervision`, `pycocotools`, `groundingdino-py`.
- Vision-language / prompt interrogation / QA: `open-clip-torch`, `clip-interrogator`, `lpips`.
- Training / experiment tracking: `peft`, `wandb`, `tensorboard`.
- App/API/realtime tooling: `httpx`, `websockets`, `orjson`, `watchdog`.

## AIWF install triage rule
Split dependencies into runtime groups instead of making one giant requirements file:

1. Core ComfyUI/runtime.
2. Image/video custom-node extras.
3. Training-only extras.
4. RAG/LLM-client extras.
5. Dev/test/build extras.

This reduces the chance that training-only packages destabilize the beginner ComfyUI environment.
