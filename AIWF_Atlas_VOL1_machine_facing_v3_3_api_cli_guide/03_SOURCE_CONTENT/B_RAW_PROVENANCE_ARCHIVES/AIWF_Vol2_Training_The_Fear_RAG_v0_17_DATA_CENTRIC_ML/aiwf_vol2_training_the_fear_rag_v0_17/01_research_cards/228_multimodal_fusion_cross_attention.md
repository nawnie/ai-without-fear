# 228 — Multimodal Fusion and Cross-Attention

## Why this matters for Vol. 2
AIWF Vol. 2 must connect image, text, audio, and video training. Multimodal systems differ mainly in how they encode modalities and where they fuse signals.

## Core facts
- Early fusion combines inputs before deep processing.
- Late fusion combines separate model outputs.
- Cross-attention lets one modality query another, such as image latents attending to text tokens.
- Dual encoders like CLIP align image/text spaces using contrastive objectives.

## AIWF rules of thumb
- For each multimodal trainer, identify encoders, projection layers, fusion point, frozen parts, and trainable adapters.
- A VLM LoRA is not “just an LLM LoRA” if the vision projector or image encoder matters.
- Caption quality controls alignment quality.

## Exercise / lab hook
Diagram CLIP-style dual encoder vs text-conditioned diffusion cross-attention vs VLM image-token injection.

## Source anchors
- Deep Learning book — https://www.deeplearningbook.org/
- Dive into Deep Learning — https://d2l.ai/
- CS231n notes — https://cs231n.github.io/
- CLIP — https://arxiv.org/abs/2103.00020
- OpenAI CLIP blog — https://openai.com/index/clip/

## RAG tags
architecture, representation_learning, deep_learning, consumer_training, vol2_theory
