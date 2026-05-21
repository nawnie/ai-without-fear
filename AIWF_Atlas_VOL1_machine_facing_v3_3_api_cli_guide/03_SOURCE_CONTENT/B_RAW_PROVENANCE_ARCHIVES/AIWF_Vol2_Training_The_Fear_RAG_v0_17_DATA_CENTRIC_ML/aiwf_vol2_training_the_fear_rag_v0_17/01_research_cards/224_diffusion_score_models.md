# 224 — Diffusion and Score-Based Generative Models

## Why this matters for Vol. 2
Diffusion is central to Volume I image/video workflows and Volume II training. Students need to understand denoising objectives, timesteps, noise schedules, and conditioning.

## Core facts
- Diffusion trains a model to reverse a noising process.
- The model learns denoising directions or score-like information.
- Sampling uses many denoising steps or distilled/faster variants.
- Conditioning can enter through text, class labels, images, masks, ControlNet-like signals, or cross-attention.

## AIWF rules of thumb
- Teach diffusion as “learn the path back from noise to data.”
- Prompt failures are often conditioning/data failures, not just sampler failures.
- LoRA training modifies part of that denoising behavior for a concept, style, or domain.

## Exercise / lab hook
Draw a noise ladder from clean image to noise and back; mark where prompt conditioning influences denoising.

## Source anchors
- Deep Learning book — https://www.deeplearningbook.org/
- Dive into Deep Learning — https://d2l.ai/
- CS231n notes — https://cs231n.github.io/
- DDPM — https://arxiv.org/abs/2006.11239

## RAG tags
architecture, representation_learning, deep_learning, consumer_training, vol2_theory
