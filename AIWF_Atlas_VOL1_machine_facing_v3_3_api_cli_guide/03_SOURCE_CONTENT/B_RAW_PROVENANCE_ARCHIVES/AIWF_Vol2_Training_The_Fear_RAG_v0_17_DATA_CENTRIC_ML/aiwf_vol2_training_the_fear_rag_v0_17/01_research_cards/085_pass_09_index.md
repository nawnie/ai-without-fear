# Pass 09 Index — Image LoRA Family Deep Dive

Snapshot target: March 2026.

This pass expands the image-training side of **AI Without Fear Vol. 2: Training the Fear**. Earlier passes mapped the broad trainer landscape. Pass 09 answers the practical question: **which image model family should a consumer user train, with which trainer, and why?**

## Added cards

- 086 — March 2026 image LoRA landscape snapshot
- 087 — SD 1.5 / SDXL legacy baseline
- 088 — SD3 / SD3.5 LoRA training
- 089 — FLUX.1 LoRA training
- 090 — FLUX.2 / Klein March 2026 notes
- 091 — Qwen-Image / Qwen-Image-Edit / 2512 LoRA training
- 092 — Z-Image LoRA training
- 093 — HiDream / Lumina / OmniGen / Chroma watchlist
- 094 — Captioning and tagging by model family
- 095 — Trainer selection: SimpleTuner vs AI Toolkit vs sd-scripts vs musubi-tuner
- 096 — Consumer GPU image LoRA presets
- 097 — Image LoRA failure modes
- 098 — LoRA release packs for Hugging Face/Civitai
- 099 — AIWF Image LoRA Preset Builder spec

## Main conclusion

For March 2026, image LoRA training is no longer one workflow. It is a family decision:

- **SDXL** remains the best teaching baseline and most forgiving consumer target.
- **FLUX.1** is still a strong quality target but has unusual memory behavior and captioning rules.
- **FLUX.2 Klein / Z-Image** are the likely consumer-forward “new model” targets.
- **Qwen-Image** is high-quality but often too heavy for ordinary 16GB training; treat it as 24GB+ experimental or cloud-first unless a trainer/preset proves otherwise.
- **musubi-tuner** is becoming the serious architecture-specific route for Qwen/Z-Image/FLUX.2/Wan families.
- **AI Toolkit** is the best beginner-oriented diffusion trainer candidate for AIWF wrapping because it explicitly targets consumer hardware and has GUI/CLI paths.

## Core sources used in this pass

- SimpleTuner repository: https://github.com/bghira/SimpleTuner
- SimpleTuner FLUX quickstart: https://github.com/bghira/SimpleTuner/blob/main/documentation/quickstart/FLUX.md
- Ostris AI Toolkit repository: https://github.com/ostris/ai-toolkit
- kohya-ss sd-scripts repository: https://github.com/kohya-ss/sd-scripts
- kohya-ss musubi-tuner repository: https://github.com/kohya-ss/musubi-tuner
- Black Forest Labs FLUX.2 official repo: https://github.com/black-forest-labs/flux2
- Black Forest Labs FLUX.2 Klein page: https://bfl.ai/models/flux-2-klein
- Qwen-Image-2512 model card: https://huggingface.co/Qwen/Qwen-Image-2512
- Qwen-Image-Edit model card: https://huggingface.co/Qwen/Qwen-Image-Edit
- Stable Diffusion 3.5 Large model card: https://huggingface.co/stabilityai/stable-diffusion-3.5-large
- Stable Diffusion 3.5 Medium model card: https://huggingface.co/stabilityai/stable-diffusion-3.5-medium
- Diffusers LoRA training docs: https://huggingface.co/docs/diffusers/training/lora
