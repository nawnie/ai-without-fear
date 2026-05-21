# Diffusion LoRA Presets — Image and Video Training Control Surface

## Why this matters
Image/video LoRA training is where beginners burn the most time. The same words — rank, LR, captions, steps — behave differently across SD1.5, SDXL, Flux, Wan, LTX, Hunyuan, and other model families.

## Concept types

### Character / identity LoRA
Goal: preserve a person/character/object identity across prompts.

Data needs:
- varied angles
- varied expressions/poses
- varied lighting/backgrounds
- remove near-identical duplicates
- captions should describe mutable attributes so the model does not bake them into identity

### Style LoRA
Goal: teach rendering style, not a specific subject.

Data needs:
- many subjects in same style
- avoid one recurring character unless intentional
- captions should separate style from content

### Object/product LoRA
Goal: preserve a physical design.

Data needs:
- multiple angles
- scale/context variation
- closeups and full object views
- captions should describe object identity and mutable scene details

### Motion/video LoRA
Goal: teach motion pattern, subject behavior, camera move, or temporal style.

Data needs:
- clip trimming
- consistent frame extraction
- motion captions
- avoid watermarks/overlays
- watch storage and VRAM

## Captioning strategy
Caption everything the model should be able to change. Avoid captioning the trigger token as a normal descriptive word. Use consistent trigger tokens. For identity training, label outfit/background/pose so they do not become fused with identity.

## Checkpoint sampling
Do not judge only final checkpoint. Save/sample periodically:
- early checkpoint: underfit view
- middle checkpoint: likely useful
- late checkpoint: overfit detection

## Common preset families

### SDXL character LoRA
- rank: 16–32 first
- resolution: 1024-ish buckets
- LR: conservative baseline
- captions: natural language or tag mix depending workflow

### Flux character/style LoRA
- trainer-specific; AI Toolkit and SimpleTuner are key current candidates
- use lower/conservative LR first
- use trainer-compatible LoRA format for ComfyUI deployment

### Wan/LTX video LoRA
- use musubi-tuner/SimpleTuner/LTX-specific trainer paths
- short clips first
- motion captions matter
- expect high storage and long run times

## Red flags
- All images same outfit/background.
- Captions omit major repeated details.
- Dataset includes copyrighted/unauthorized people/styles without review.
- Training samples get worse while loss improves.
- Trigger token summons exact training pose.

## AIWF workflow connection
Dataset Doctor should output:
- caption coverage report
- duplicate/near-duplicate report
- concept leakage warnings
- resolution/bucket report
- consent/provenance status
- recommended trainer preset

## Sources
- Diffusers textual inversion: https://huggingface.co/docs/diffusers/en/training/text_inversion
- Diffusers LoRA: https://huggingface.co/docs/diffusers/en/training/lora
- Diffusers Flux training notes: https://github.com/huggingface/diffusers/blob/main/examples/advanced_diffusion_training/README_flux.md
- SimpleTuner options: https://github.com/bghira/SimpleTuner/blob/main/documentation/OPTIONS.md
- AI Toolkit repo: https://github.com/ostris/ai-toolkit
- LyCORIS repo: https://github.com/KohakuBlueleaf/LyCORIS
- musubi-tuner repo: https://github.com/kohya-ss/musubi-tuner
