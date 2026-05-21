# Source Log — Pass 09 Image LoRA Family Deep Dive

Snapshot target: March 2026.

## Official / primary project sources

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

## Notes

- Some repositories have changed after March 2026. The archive treats Pass 09 as a March 2026 working snapshot and flags fast-moving areas.
- For publication, verify exact backend support against release tags or commit dates before making hard installation promises.
- AI Toolkit, SimpleTuner, sd-scripts, and musubi-tuner are all active; the AIWF layer should assume breaking changes and isolate presets by backend version.
