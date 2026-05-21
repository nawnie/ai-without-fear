# FLUX.1 LoRA Training

## Why FLUX.1 still matters in March 2026

FLUX.1 established the modern high-quality rectified-flow image model branch. FLUX.2 and Klein are emerging, but FLUX.1 remains widely used in community workflows, ComfyUI stacks, and trainer guides.

## Hardware reality

SimpleTuner's FLUX quickstart warns that FLUX needs unusually high system RAM in addition to VRAM; it states that quantizing the model at startup alone can require about 50GB system RAM. Its example rank-16 LoRA memory notes range from just over 30GB VRAM unquantized down to roughly 9GB with aggressive quantization modes. This does not mean a 10GB card is comfortable; it means the backend is doing serious memory tricks.

## Captioning difference

Community FLUX training notes repeatedly suggest that FLUX LoRAs can behave differently from SDXL LoRAs. One major practical warning for AIWF: **long tag-soup captions may not be best**. Some FLUX subject/style training benefits from simpler captions or even caption-light/captionless strategies depending on trainer and goal.

## Trainer options

- SimpleTuner: strong for FLUX, detailed docs, more advanced knobs.
- AI Toolkit: strong beginner candidate and GUI/CLI backend.
- sd-scripts: supports FLUX.1 and remains important for users coming from kohya.
- musubi-tuner: more focused on later FLUX Kontext/FLUX.2 and adjacent architectures.

## AIWF presets

Beginner-safe FLUX.1 presets should expose:

- quantization mode
- LoRA rank
- target component coverage
- caption policy
- system RAM warning
- sample prompt grid
- validation image comparison

## AIWF rule

FLUX is not “SDXL but prettier.” Treat it as a separate family with separate caption and memory defaults.
