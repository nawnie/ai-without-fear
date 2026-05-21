# 007 — SimpleTuner

## Identity

- Tool: SimpleTuner
- Repo: https://github.com/bghira/SimpleTuner
- Domain: image/video/audio diffusion fine-tuning
- AIWF priority: P0

## What it trains

SimpleTuner covers a wide range of diffusion models, including SDXL, SD3, Flux.1, Flux.2, ACE-Step, Chroma, Auraflow, Sana, Lumina2, LongCat video/image, LTX Video, Hunyuan Video, Wan Video, Qwen Image, Stable Cascade, Kandinsky 5, and more.

## Training methods

- PEFT LoRA
- LyCORIS
- full-rank/full fine-tuning
- ControlNet for supported models
- quantized training paths such as int8/fp8/nf4 where supported
- video/audio diffusion training support

## Hardware reality

SimpleTuner's own guidance roughly separates:

- small models under 2B: 12GB class,
- medium models 2B–8B: 16GB+ for LoRA,
- large models 12B+: 24GB+ for LoRA/LyCORIS and much larger for full-rank.

That makes it a strong Vol. 2 reference because it spans beginner to advanced without hiding the hardware cliff.

## AIWF use

Use SimpleTuner as the advanced all-domain diffusion trainer reference. It deserves detailed cards for SDXL, Flux, Z-Image, Wan, LTX, and Hunyuan separately.

## Sources

- https://github.com/bghira/SimpleTuner
