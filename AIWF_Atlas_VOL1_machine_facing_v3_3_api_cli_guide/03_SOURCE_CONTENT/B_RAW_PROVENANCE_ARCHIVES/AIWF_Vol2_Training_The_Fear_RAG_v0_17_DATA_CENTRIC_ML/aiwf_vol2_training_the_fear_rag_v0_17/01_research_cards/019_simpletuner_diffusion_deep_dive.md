# 019 — SimpleTuner Diffusion Training Deep Dive

## Identity

- Tool: SimpleTuner
- Repo: https://github.com/bghira/SimpleTuner
- Options docs: https://github.com/bghira/SimpleTuner/blob/main/documentation/OPTIONS.md
- Domain: image/video/audio diffusion fine-tuning and LoRA training
- AIWF priority: P0

## What it is

SimpleTuner is a modern general fine-tuning kit for diffusion models. It matters because it is not limited to old SD 1.5 or SDXL workflows. It tracks newer transformer-based diffusion models and includes memory-saving features that matter on consumer hardware.

## What it trains

The exact list changes quickly, but current project scope includes many modern image/video architectures. For AIWF, treat SimpleTuner as a high-priority research track for:

- SDXL
- Flux-family training
- SD3-style diffusion transformer models
- Wan/LTXVideo/Cosmos-style support where documented
- large transformer diffusion models that need offload and quantization tricks

## Consumer hardware angle

SimpleTuner is important because modern diffusion transformers can be VRAM-heavy. Official docs describe memory-saving options such as group offload, model CPU offload, quantization-related paths, and training component selection.

AIWF default stance:

- SDXL LoRA: realistic on consumer GPUs with correct settings.
- Flux LoRA: possible but heavier; 16GB users need conservative settings and may hit system RAM limits.
- Full Flux training: not a beginner consumer task.
- Video model training: possible only in constrained cases; often better on 24GB+ or cloud.

## Settings that need glossary treatment

- train batch size
- gradient accumulation
- resolution buckets
- aspect bucket rounding
- rank and alpha
- learning rate by component
- text encoder training on/off
- transformer/UNet training targets
- optimizer choice
- precision mode
- gradient checkpointing
- group offload
- CPU offload
- validation prompts
- sample cadence

## Dataset concepts

SimpleTuner-style training requires real dataset discipline:

- image/video files
- captions/prompts
- concept balancing
- repeat counts
- resolution buckets
- validation prompts
- held-out images
- metadata consistency

## Failure signatures

- Samples look unchanged: learning rate too low, wrong target modules, captions not binding concept, adapter not loaded.
- Samples overfit face/style: too many repeats, too high LR, too small dataset, no regularization/variation.
- Character identity inconsistent: dataset lacks angle/expression/lighting/clothing variation or captions conflict.
- Flux object LoRA does not learn: object concepts may be harder than style/identity; need stronger dataset and target tuning.
- OOM at startup: model quantization/offload/system RAM requirement too high.

## AIWF integration recommendation

SimpleTuner should be one of the main AIWF backend targets for serious image training:

- preset generator for SDXL/Flux/Z-Image-class training
- dataset bucket inspector
- caption conflict detector
- validation prompt builder
- sample-grid comparator

## Sources

- https://github.com/bghira/SimpleTuner
- https://github.com/bghira/SimpleTuner/blob/main/documentation/OPTIONS.md
- https://github.com/bghira/SimpleTuner/blob/main/documentation/quickstart/FLUX.md
