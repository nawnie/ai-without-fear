# 226 — Flow Matching, Rectified Flow, and Modern Generative Paths

## Why this matters for Vol. 2
By March 2026, many newer image/video model families use diffusion-like or flow/rectified-flow training language. The RAG needs a bridge from DDPM intuition to flow matching.

## Core facts
- Flow matching learns a vector field that transports samples from a simple distribution to data.
- It can be framed as learning paths through probability space.
- It overlaps conceptually with diffusion but changes the training/sampling formulation.
- Flow matching work emphasizes stable training and efficient sampling with ODE-style solvers.

## AIWF rules of thumb
- Teach flow as “learn the velocity of transformation,” while diffusion is “learn denoising/backward steps.”
- Do not collapse all modern generators into “diffusion”; track objective family.
- For LoRA training, know whether the trainer’s loss/objective matches the base model family.

## Exercise / lab hook
Create a two-column comparison: diffusion denoising objective vs flow vector-field objective; list what a LoRA trainer must know.

## Source anchors
- Deep Learning book — https://www.deeplearningbook.org/
- Dive into Deep Learning — https://d2l.ai/
- CS231n notes — https://cs231n.github.io/
- Flow Matching — https://arxiv.org/abs/2210.02747
- Flow Matching Guide and Code — https://arxiv.org/abs/2412.06264

## RAG tags
architecture, representation_learning, deep_learning, consumer_training, vol2_theory
