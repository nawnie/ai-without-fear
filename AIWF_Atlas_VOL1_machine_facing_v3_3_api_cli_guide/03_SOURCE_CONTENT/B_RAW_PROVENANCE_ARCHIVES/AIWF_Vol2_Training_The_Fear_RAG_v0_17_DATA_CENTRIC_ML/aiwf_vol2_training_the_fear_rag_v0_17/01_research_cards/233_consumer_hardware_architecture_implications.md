# 233 — Consumer Hardware Implications of Architecture Choice

## Why this matters for Vol. 2
The book’s promise is practical training. Readers need to connect architecture to VRAM, speed, batch size, and feasible exercises.

## Core facts
- Attention memory grows with token count and batch size.
- Image resolution affects patch/token count and latent size.
- Video multiplies spatial tokens by frame count.
- Activation memory during training often dominates over parameter memory.
- Checkpointing, quantization, gradient accumulation, low-rank adapters, and freezing are architecture-specific levers.

## AIWF rules of thumb
- For 16GB consumer GPUs, prefer adapters, smaller backbones, short context, lower resolution, small batch, accumulation, and checkpointing.
- Teach “what to freeze” before teaching “how to buy a bigger GPU.”
- Estimate memory before launching training.

## Exercise / lab hook
Create a training feasibility estimate for: SDXL LoRA, 7B QLoRA, 13B QLoRA, video LoRA, VLM projector tune, and full fine-tune.

## Source anchors
- Deep Learning book — https://www.deeplearningbook.org/
- Dive into Deep Learning — https://d2l.ai/
- CS231n notes — https://cs231n.github.io/


## RAG tags
architecture, representation_learning, deep_learning, consumer_training, vol2_theory
