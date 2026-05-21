# Z-Image LoRA Training

## Why it matters

Z-Image is a key March 2026 watch target because it appears in modern trainer support lists and is positioned as a more efficient image model path than the heaviest Qwen/FLUX dev-class models.

## Tooling

- AI Toolkit lists Z-Image Turbo, Z-Image, and Z-Image De-Turbo support.
- musubi-tuner verified LoRA and fine-tuning for Z-Image-Base in January 2026 and added related documentation.
- musubi-tuner also added optimizer/blocks-to-swap compatibility notes for Z-Image fine-tuning in February 2026.

## AIWF use case

Z-Image may become the practical middle lane:

- newer than SDXL
- lighter than Qwen-Image/FLUX.2 dev
- potentially suitable for consumer-friendly one-click training presets
- useful for fast generation variants and style/subject adapters

## Dataset guidance

Treat Z-Image as its own family, not SDXL with a new checkpoint name. Presets should validate:

- whether the target is Turbo/Base/De-Turbo
- whether training uses a base model or a distilled fast model
- whether the LoRA transfers cleanly into ComfyUI
- whether sample generation requires conversion utilities

## AIWF rule

Z-Image should be in the first experimental preset pack once AIWF builds the image LoRA preset builder. It is not yet as pedagogically stable as SDXL, but it is too relevant to ignore.
