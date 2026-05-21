# 217 — U-Net, Encoder-Decoders, and Skip Connections

## Why this matters for Vol. 2
U-Net is foundational for segmentation, diffusion, image restoration, inpainting, and many ComfyUI workflows. It is also a perfect teaching diagram for information bottlenecks.

## Core facts
- Encoder path compresses context.
- Decoder path reconstructs spatial output.
- Skip connections pass fine detail around the bottleneck.
- U-Net showed strong results with limited annotated data using augmentation and precise localization.

## AIWF rules of thumb
- Teach U-Net as “understand globally, redraw locally.”
- For inpainting/restoration, if skip/fine detail is weak, outputs become blurry or semantically right but locally wrong.
- For diffusion, the U-Net predicts denoising directions conditioned on timestep and prompt/context.

## Exercise / lab hook
Label a U-Net diagram: input, down blocks, bottleneck, up blocks, skip links, output map. Then map the same pattern onto diffusion denoising.

## Source anchors
- Deep Learning book — https://www.deeplearningbook.org/
- Dive into Deep Learning — https://d2l.ai/
- CS231n notes — https://cs231n.github.io/
- U-Net paper — https://arxiv.org/abs/1505.04597

## RAG tags
architecture, representation_learning, deep_learning, consumer_training, vol2_theory
