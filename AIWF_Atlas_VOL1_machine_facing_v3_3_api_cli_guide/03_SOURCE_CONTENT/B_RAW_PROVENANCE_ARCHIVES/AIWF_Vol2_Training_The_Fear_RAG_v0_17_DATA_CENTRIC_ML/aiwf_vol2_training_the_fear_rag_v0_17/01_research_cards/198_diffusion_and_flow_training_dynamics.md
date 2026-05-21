# 198 — Diffusion and Flow Training Dynamics

**Pass:** 14 — Optimization and Training Dynamics  
**Snapshot framing:** March 2026 Vol. 2 research state  
**Reader level:** college/postgrad, written in field-manual style  
**Primary role in Vol. 2:** Maps optimization concepts into image/video model training.

## Core idea
Diffusion and flow-style models learn denoising or transformation behavior across noise/time levels. Training quality depends on caption alignment, timestep/noise sampling, model family, resolution buckets, VAE/text encoder choices, and adapter placement.

## What the reader must learn
Know timestep, noise schedule, denoising target, latent vs pixel training, caption dropout, resolution buckets, and why image/video LoRA does not behave exactly like LLM SFT.

## Practical rules
Start with family-specific known-good recipes. For small image datasets, inspect samples throughout the run; loss alone is not enough. For video, motion consistency and temporal artifacts are validation targets.

## Failure signatures
Overcooked style, identity drift, prompt collapse, motion smear, temporal flicker, latent artifacts.

## AIWF application
Vol. 2 should explicitly separate LLM “next token” intuition from diffusion/video “denoise trajectory” intuition.

## Exercise hook
Train or evaluate a tiny diffusion LoRA across checkpoints and write which checkpoint generalizes best, not merely which has lowest loss.

## Source anchors
- PyTorch Performance Tuning Guide: https://docs.pytorch.org/tutorials/recipes/recipes/tuning_guide.html
