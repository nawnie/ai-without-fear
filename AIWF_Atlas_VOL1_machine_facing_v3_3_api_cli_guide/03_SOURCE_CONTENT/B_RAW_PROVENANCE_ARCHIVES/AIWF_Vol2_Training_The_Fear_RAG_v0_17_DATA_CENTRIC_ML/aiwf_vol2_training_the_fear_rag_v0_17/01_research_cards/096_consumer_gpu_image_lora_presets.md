# Consumer GPU Image LoRA Presets — March 2026 Draft

## Hardware tiers

### 8GB VRAM

- Best target: SD 1.5 LoRA, tiny SDXL experiments.
- Avoid: Qwen-Image, FLUX.2 dev, serious video LoRAs.
- AIWF UI wording: “learning tier, not production tier.”

### 12GB VRAM

- Best target: SDXL LoRA with memory-safe settings.
- Possible: SD3.5 Medium or FLUX.1 only with aggressive quant/offload and patience.
- Avoid as default: Qwen-Image, FLUX.2 dev.

### 16GB VRAM

- Best target: SDXL, FLUX.1 experiments, possibly Z-Image/Klein 4B depending on backend.
- User GPU match: RTX 4070 Ti Super 16GB sits here.
- AIWF should create “16GB safe” presets with conservative defaults.

### 24GB VRAM

- Best target: serious SDXL/FLUX.1, SD3.5, Z-Image, some Qwen-Image attempts depending on trainer.
- Still may need system RAM and offload tuning.

### 32GB+ VRAM / cloud

- Best target: Qwen-Image, FLUX.2 dev, heavier fine-tunes, larger batch/resolution experiments.

## 16GB safe preset philosophy

For the user's likely RTX 4070 Ti Super class, the AIWF preset builder should default to:

- SDXL first
- Z-Image/Klein experiments second
- FLUX.1 with explicit system RAM warning
- Qwen-Image only as “advanced/cloud recommended” unless a tested preset proves otherwise

## Rule

A preset is not safe until it includes expected VRAM, expected system RAM, resume behavior, sample frequency, output format, and failure triage.
