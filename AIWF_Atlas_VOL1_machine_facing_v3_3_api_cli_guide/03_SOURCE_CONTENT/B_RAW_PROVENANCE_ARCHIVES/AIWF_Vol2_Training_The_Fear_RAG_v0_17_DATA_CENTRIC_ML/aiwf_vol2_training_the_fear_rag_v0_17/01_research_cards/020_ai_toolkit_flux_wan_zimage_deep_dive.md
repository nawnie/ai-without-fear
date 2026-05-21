# 020 — AI Toolkit Deep Dive: Flux, Wan, Z-Image, and Modern Diffusion Training

## Identity

- Tool: Ostris AI Toolkit
- Repo: https://github.com/ostris/ai-toolkit
- Domain: image/video diffusion LoRA training, GUI/CLI workflows
- AIWF priority: P0

## What it is

AI Toolkit is a modern diffusion training suite intended to support new image and video models on consumer-grade hardware. It is valuable for AIWF because it aims to be easier than raw scripts while still covering modern models.

## What it trains

The repo positions itself around image and video model training and frequently tracks models such as:

- Flux-family models
- Wan video models
- Z-Image-style models
- Qwen Image-style models
- other current diffusion architectures as they emerge

Because this project moves fast, AIWF cards must be updated per model family, not just once at the tool level.

## Consumer hardware angle

AI Toolkit's value is practical accessibility, but model size still rules.

AIWF default expectations:

- Z-Image or smaller modern image LoRA: likely more approachable locally.
- Flux-family LoRA: possible but may require 24GB or compromises depending on model/version.
- Qwen Image/Flux 2-class training: likely high VRAM/cloud unless strong low-memory support exists.
- Wan video LoRA: possible in carefully constrained cases, but users should expect longer preprocessing, stricter datasets, and more failure modes.

## Why it matters to AIWF

This may be a better beginner-facing route than raw SimpleTuner for some modern models. It should be evaluated as:

- one-click install candidate
- GUI training backend candidate
- preset library target
- video LoRA teaching path

## Required future research

For each supported model family, AIWF needs a separate card:

- exact model files needed
- supported training mode
- minimum VRAM observed
- dataset image/video format
- caption format
- config fields
- output adapter format
- ComfyUI inference compatibility
- Civitai/Hugging Face publishing compatibility

## Failure signatures

- Training completes but LoRA has no effect: wrong model family, wrong adapter path, wrong inference loader, low LR, or bad captions.
- Good still images but poor motion: video dataset lacks motion diversity or temporal captions.
- Character trains but outfit/background also sticks: captions did not separate identity from incidental details.
- Video LoRA causes flicker: temporal data too inconsistent or model cannot generalize motion concept.

## AIWF integration recommendation

Create AIWF presets around tasks, not model names:

- character LoRA
- style LoRA
- product/object LoRA
- motion LoRA
- scene/environment LoRA
- image-to-video consistency LoRA

Then map each task to AI Toolkit/SimpleTuner/musubi-tuner depending on model.

## Sources

- https://github.com/ostris/ai-toolkit
- https://www.runcomfy.com/trainer/ai-toolkit/getting-started
