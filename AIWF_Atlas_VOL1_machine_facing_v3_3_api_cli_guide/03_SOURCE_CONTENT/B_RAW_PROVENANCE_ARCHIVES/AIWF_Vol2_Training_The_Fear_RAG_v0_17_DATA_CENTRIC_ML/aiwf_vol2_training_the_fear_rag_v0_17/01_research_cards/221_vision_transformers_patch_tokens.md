# 221 — Vision Transformers and Patch Tokens

## Why this matters for Vol. 2
Vision transformers connect image training to token thinking. They also explain CLIP encoders, VLMs, some diffusion backbones, and why caption/image alignment matters.

## Core facts
- ViT treats an image as a sequence of patches.
- Large-scale pretraining makes pure transformers competitive in vision.
- Compared with CNNs, ViTs usually rely less on local inductive bias and more on data/scale.
- Patch size is a tradeoff between resolution, token count, detail, and compute.

## AIWF rules of thumb
- Teach patches as “image words,” but warn that patch tokens are not human objects.
- Use ViT to bridge Volume I prompting/captioning with Volume II representation learning.
- For consumer hardware, patch count and image resolution directly affect memory.

## Exercise / lab hook
Calculate how many tokens a 512x512 image has under 16x16 patches, then compare to 8x8 patches.

## Source anchors
- Deep Learning book — https://www.deeplearningbook.org/
- Dive into Deep Learning — https://d2l.ai/
- CS231n notes — https://cs231n.github.io/
- Vision Transformer — https://arxiv.org/abs/2010.11929

## RAG tags
architecture, representation_learning, deep_learning, consumer_training, vol2_theory
