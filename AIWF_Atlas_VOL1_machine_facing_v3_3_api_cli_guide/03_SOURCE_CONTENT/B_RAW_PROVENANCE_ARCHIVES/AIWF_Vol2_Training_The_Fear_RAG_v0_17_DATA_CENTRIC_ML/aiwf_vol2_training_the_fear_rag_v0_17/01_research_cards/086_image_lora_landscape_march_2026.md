# Image LoRA Landscape — March 2026 Snapshot

## What changed since the kohya / EveryDream era

Old LoRA training culture treated “Stable Diffusion LoRA” as a mostly single-family problem: SD 1.5, then SDXL, usually through kohya_ss/sd-scripts wrappers. By March 2026, image LoRA training is fragmented across model families:

- UNet diffusion models: SD 1.5, SDXL.
- MMDiT / diffusion transformer models: SD3/SD3.5.
- Rectified-flow transformer models: FLUX.1/FLUX.2.
- large multimodal image/edit systems: Qwen-Image, Qwen-Image-Edit.
- newer efficient/open candidates: Z-Image, HiDream, Lumina, Chroma, OmniGen2, others.

The important AIWF rule is: **do not transfer SDXL LoRA advice blindly to FLUX, Qwen-Image, or Z-Image**. Dataset size, captions, LR, resolution, memory behavior, and text encoder assumptions all change.

## Model-family selection ladder

1. **Teach first on SDXL.** It is the best conceptual bridge from SD 1.5, has mature tooling, and runs on 12GB-16GB GPUs with sane settings.
2. **Use FLUX.1 for quality/style experiments when the user can tolerate memory overhead.** SimpleTuner documents that FLUX can require unusually high system RAM just to quantize at startup.
3. **Use FLUX.2 Klein or Z-Image as the “new consumer frontier.”** These are the families to monitor for one-click training templates.
4. **Use Qwen-Image when fidelity/text/edit quality matters and hardware allows it.** It is not the first beginner target.
5. **Use musubi-tuner when architecture-specific scripts matter more than beginner friendliness.**
6. **Use AI Toolkit when AIWF needs a GUI/CLI backend to wrap.**

## Key March 2026 consequence

A Vol. 2 reader does not need a single magic LoRA recipe. They need a decision system:

- model family
- trainer backend
- dataset goal
- hardware tier
- caption policy
- training objective
- release/eval gate

AIWF should build a **Preset Builder** that emits backend-specific configs and warns when the user is applying old SDXL rules to a newer architecture.
