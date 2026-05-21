# AIWF Consumer GPU Training Runbook

## Goal

Give AIWF a practical decision runbook for users with 8GB, 12GB, 16GB, 24GB, and multi-GPU setups.

## 8GB VRAM

Reasonable:

- tiny/small LLM LoRA or QLoRA;
- small classifier training;
- embedding/reranker experiments;
- SD 1.5 LoRA with conservative resolution/batch;
- ASR small-model experiments.

Avoid:

- large VLM training;
- video LoRA except extremely constrained experiments;
- full fine-tuning of modern LLMs;
- long-context training.

## 12GB VRAM

Reasonable:

- 0.5B–7B QLoRA depending on sequence length;
- SDXL LoRA with careful settings;
- small VLM LoRA experiments at reduced resolution;
- Whisper small/medium style work;
- Flux LoRA only if trainer/settings are proven for 12GB.

Avoid:

- 13B+ unless using very aggressive methods and accepting instability;
- long video LoRAs;
- high-res VLM training.

## 16GB VRAM

Reasonable:

- 7B QLoRA with better margin;
- small 13B experiments in constrained configs;
- SDXL and some Flux/modern image LoRAs;
- small video LoRAs with aggressive constraints;
- VLM LoRA on small models.

Shawn’s 4070 Ti Super 16GB class belongs here.

## 24GB VRAM

Reasonable:

- 7B/13B QLoRA much more comfortably;
- heavier SDXL/Flux LoRAs;
- more realistic VLM LoRA experiments;
- short/low-res video LoRAs;
- better eval/generation during training.

Still not free:

- full fine-tuning large models;
- long-context 13B+ training;
- large video models at high frame count/resolution.

## Multi-GPU 24GB+

Reasonable:

- FSDP/DeepSpeed workflows;
- larger QLoRA/full-ish fine-tune experiments;
- serious video/VLM experiments;
- larger ASR training.

Risk:

- config complexity increases fast;
- interconnect, CPU, RAM, disk, and checkpointing become bottlenecks.

## Universal local-first rules

1. Baseline before training.
2. Clean the dataset before touching learning rate.
3. Start with adapters, not full fine-tunes.
4. Use a validation set.
5. Save config, seed, base model, dataset hash, and eval prompt set.
6. Stop early if eval worsens even when train loss improves.
7. Never judge a trainer by one lucky sample.

## AIWF preset philosophy

Presets should be conservative and explainable:

- safe starter;
- quality slow;
- speed test;
- low VRAM rescue;
- overfit diagnostic;
- final polish/eval.
