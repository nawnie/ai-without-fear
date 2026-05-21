# 011 — musubi-tuner

## Identity

- Tool: musubi-tuner
- Repo: https://github.com/kohya-ss/musubi-tuner
- Domain: modern video/image LoRA training scripts
- AIWF priority: P0

## What it trains

musubi-tuner supports LoRA training for HunyuanVideo, Wan2.1/2.2, FramePack, FLUX.1 Kontext, FLUX.2 dev/klein, Qwen-Image, Z-Image, and related architectures. It also added LoHa/LoKr support through LyCORIS-style methods.

## Why it matters

This is currently one of the most important video LoRA research repos. It is especially relevant to AIWF because Shawn is already working heavily with Wan workflows in ComfyUI.

## Consumer hardware reality

This needs direct testing. Community notes suggest block swapping/offload can make surprisingly large experiments possible, but AIWF should not promise beginner reliability until we validate exact settings on 16GB.

## Needed AIWF tests

1. Install on isolated venv.
2. Train a tiny Wan-compatible LoRA with image-only dataset.
3. Train a tiny video/motion LoRA with short clips.
4. Test adapter loading in ComfyUI.
5. Record exact VRAM, system RAM, disk, time, and output quality.
6. Write failure signatures.

## Sources

- https://github.com/kohya-ss/musubi-tuner
