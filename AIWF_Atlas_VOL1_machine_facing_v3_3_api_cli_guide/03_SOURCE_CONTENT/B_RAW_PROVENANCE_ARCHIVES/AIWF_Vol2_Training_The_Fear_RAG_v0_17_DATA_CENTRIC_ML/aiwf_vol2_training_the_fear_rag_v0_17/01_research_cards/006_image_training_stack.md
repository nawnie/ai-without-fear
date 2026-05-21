# 006 — Image Training Stack

## Scope

Image training used to be summarized as DreamBooth, kohya_ss, EveryDream2, and Textual Inversion. For Vol. 2, that is not enough.

Modern image training includes:

- SD 1.5 LoRA
- SDXL LoRA
- SD3/3.5 LoRA/ControlNet
- Flux.1 LoRA
- Flux.2 Dev/Klein LoRA
- Z-Image LoRA
- Qwen Image LoRA
- inpaint/edit-model adaptation
- sliders/concept direction adapters
- ControlNet and conditioning model training

## Main tools

- SimpleTuner
- Ostris AI-Toolkit
- OneTrainer
- kohya_ss / sd-scripts
- FluxGym
- Hugging Face Diffusers scripts

## Consumer hardware reality

- SD 1.5 LoRA: beginner-friendly.
- SDXL LoRA: realistic on 8–16GB.
- Flux.1 LoRA: possible, but heavier and more version-sensitive.
- Flux.2 Klein / Z-Image: likely better local-modern targets than Flux.2 Dev.
- Qwen Image: high VRAM; probably 24GB+ and often cloud.
- Flux.2 Dev: mostly cloud/pro GPU for serious training.

## Dataset reality

The dataset teaches the model. The trainer just enforces the lesson.

Common beginner mistakes:

- too few images,
- too many near-duplicates,
- bad captions,
- wrong trigger word strategy,
- mixed styles without labels,
- training face identity but expecting body/clothing consistency,
- no holdout prompts,
- judging only one lucky sample.

## AIWF decision

Build a training ladder:

1. SDXL character/style LoRA.
2. SDXL restoration/detail LoRA or concept LoRA.
3. Flux/Z-Image local adapter test.
4. Modern Qwen/Flux2 only after hardware reality is documented.

## Sources

- https://github.com/bghira/SimpleTuner
- https://github.com/ostris/ai-toolkit
- https://github.com/Nerogar/OneTrainer
- https://github.com/cocktailpeanut/fluxgym
- https://github.com/huggingface/diffusers/tree/main/examples
