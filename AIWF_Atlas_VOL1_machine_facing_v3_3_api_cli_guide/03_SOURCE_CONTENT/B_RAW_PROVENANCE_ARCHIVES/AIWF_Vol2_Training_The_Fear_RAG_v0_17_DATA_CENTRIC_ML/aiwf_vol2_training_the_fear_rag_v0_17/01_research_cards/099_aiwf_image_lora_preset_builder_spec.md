# Spec — AIWF Image LoRA Preset Builder v0.1

## Purpose

Generate safe, backend-specific image LoRA training configs from a user-friendly questionnaire.

## Inputs

- hardware tier: VRAM, system RAM, OS, GPU model
- model family: SD1.5, SDXL, SD3.5, FLUX.1, FLUX.2 Klein, Qwen-Image, Z-Image
- goal: character, style, product/object, typography, edit behavior
- dataset folder
- caption files present: yes/no
- target backend: auto, AI Toolkit, SimpleTuner, sd-scripts, musubi-tuner
- output target: ComfyUI, Forge, diffusers, Hugging Face, Civitai

## Outputs

- backend config file
- install/run command
- dataset audit report
- validation prompt grid
- sample schedule
- expected memory warning
- resume command
- release-pack template

## Decision rules

- If user chooses Qwen-Image on 16GB, warn: advanced/cloud-first unless tested preset exists.
- If user chooses FLUX.1 and system RAM is below 64GB, warn about startup quantization/system RAM behavior.
- If user chooses SDXL, offer beginner-safe presets first.
- If user chooses FLUX.2 dev, route to cloud/large VRAM warning.
- If user chooses Z-Image/Klein, mark as experimental but promising.
- If dataset has fewer than 10 images, force “tiny experiment” mode.
- If no holdout prompts exist, generate them before training.

## Backend router

- SDXL beginner: AI Toolkit or kohya GUI
- SDXL advanced: SimpleTuner or sd-scripts
- FLUX.1: SimpleTuner or AI Toolkit
- FLUX.2 Klein: AI Toolkit or musubi-tuner
- Qwen-Image: AI Toolkit or musubi-tuner
- Z-Image: AI Toolkit or musubi-tuner

## Future ComfyUI node pack placement

All nodes should live under the **AI Without Fear node pack** so they can start as individual nodes and later become full packs:

- AIWF Dataset Doctor
- AIWF LoRA Preset Builder
- AIWF Training Launcher
- AIWF Training Judge
- AIWF Release Pack Builder
