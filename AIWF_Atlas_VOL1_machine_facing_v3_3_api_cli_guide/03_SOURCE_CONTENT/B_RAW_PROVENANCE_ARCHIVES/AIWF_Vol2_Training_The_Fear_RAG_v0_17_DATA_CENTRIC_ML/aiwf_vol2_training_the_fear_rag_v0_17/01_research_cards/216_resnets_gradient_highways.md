# 216 — ResNets and Gradient Highways

## Why this matters for Vol. 2
ResNets are one of the cleanest examples of an architecture invention solving an optimization problem, not just adding layers.

## Core facts
- Residual connections let layers learn updates around an identity path.
- They improve gradient flow and make very deep models trainable.
- The residual idea appears in CNNs, transformers, diffusion U-Nets, adapters, and many modern blocks.

## AIWF rules of thumb
- Explain residuals as “do not relearn the whole signal; learn the correction.”
- When a model collapses as depth increases, ask whether information and gradients have a clean path.
- LoRA itself can be taught as a low-rank residual update to frozen weights.

## Exercise / lab hook
Compare a plain deep MLP/CNN with a residual version on the same dataset; graph loss stability and validation behavior.

## Source anchors
- Deep Learning book — https://www.deeplearningbook.org/
- Dive into Deep Learning — https://d2l.ai/
- CS231n notes — https://cs231n.github.io/
- ResNet paper — https://arxiv.org/abs/1512.03385

## RAG tags
architecture, representation_learning, deep_learning, consumer_training, vol2_theory
