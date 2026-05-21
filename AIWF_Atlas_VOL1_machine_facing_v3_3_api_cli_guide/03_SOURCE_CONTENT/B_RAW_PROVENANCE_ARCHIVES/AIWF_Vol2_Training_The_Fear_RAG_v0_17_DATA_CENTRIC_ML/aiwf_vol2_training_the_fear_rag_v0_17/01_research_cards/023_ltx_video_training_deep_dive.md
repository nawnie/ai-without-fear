# 023 — LTX Video and LTX-2 Training Deep Dive

## Identity

- Projects: LTX-Video, LTX-2, LTX trainer tools
- LTX-Video repo: https://github.com/Lightricks/LTX-Video
- LTX-2 repo: https://github.com/Lightricks/LTX-2
- LTX docs: https://docs.ltx.video/
- Domain: video generation LoRA/full fine-tuning/IC-LoRA
- AIWF priority: P0/P1

## What it is

LTX is a major open video model ecosystem. The LTX-2 project is organized with core model code, pipelines, and trainer tooling. Current docs describe LoRA, full fine-tuning, and IC-LoRA-style video-to-video transformation training.

## Why it matters

AIWF users are already working with LTX and Wan. Vol. 2 needs to explain video training in a way that does not pretend it is just image LoRA with more files. LTX is useful because its training docs explicitly separate training modes and dataset preparation.

## Training modes to research deeper

- standard LoRA
- full fine-tuning
- IC-LoRA / video-to-video transformation/control training
- audio-video training where supported
- T2V and I2V inference integration

## Consumer hardware angle

LTX training is not a casual beginner task, but LoRA/IC-LoRA experiments may be possible depending on model size, resolution, and training settings.

AIWF should classify LTX as:

- beginner for inference/use
- intermediate for curated LoRA experiments
- advanced for full fine-tuning or IC-LoRA
- cloud/prosumer for serious/high-resolution work

## Dataset requirements

Video dataset preparation should include:

- video clips with consistent technical format
- captions that describe subject, action, scene, camera motion, and style
- duration limits
- frame-rate normalization
- bad-frame filtering
- consent/release tracking for people/voices
- holdout clips for evaluation

## Failure signatures

- Trained LoRA cannot be loaded: adapter format mismatch or trainer/inference mismatch.
- Motion style does not transfer: captions did not isolate motion; insufficient motion examples.
- IC-LoRA over-constrains output: control examples too narrow.
- VRAM OOM: resolution, frame length, or batch size too high.
- Output flicker: temporal consistency not learned or dataset too inconsistent.

## AIWF integration recommendation

LTX needs its own video-training lab:

- train a tiny style/motion LoRA
- compare fixed prompt before/after
- test with held-out subject/action combinations
- produce a model card documenting limits

## Sources

- https://github.com/Lightricks/LTX-Video
- https://github.com/Lightricks/LTX-2
- https://docs.ltx.video/open-source-model/ltx-2-trainer/ltx-2-training
- https://github.com/Lightricks/LTX-Video-Trainer
- https://github.com/Lightricks/LTX-Video-Trainer/blob/main/docs/troubleshooting.md
