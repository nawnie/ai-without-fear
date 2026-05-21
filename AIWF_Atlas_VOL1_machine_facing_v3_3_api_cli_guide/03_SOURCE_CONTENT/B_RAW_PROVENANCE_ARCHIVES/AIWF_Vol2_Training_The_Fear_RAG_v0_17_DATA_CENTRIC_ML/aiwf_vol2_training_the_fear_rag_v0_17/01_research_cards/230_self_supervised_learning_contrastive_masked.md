# 230 — Self-Supervised Learning: Contrastive and Masked Methods

## Why this matters for Vol. 2
Self-supervised learning is one of the major bridges from classical labels to foundation models. It explains why massive unlabeled data can become useful representations.

## Core facts
- SimCLR learns by making augmented views of the same sample close and different samples apart.
- CLIP aligns images and text through contrastive image-caption matching.
- MAE masks image patches and reconstructs them.
- These methods create representations before task-specific fine-tuning.

## AIWF rules of thumb
- Teach SSL as “make the data create its own practice problems.”
- Augmentation choice defines what invariances the model learns.
- Bad positive/negative construction can teach the wrong geometry.

## Exercise / lab hook
Design three self-supervised tasks for hotel reviews, personal photos, and short video clips. Name the positive pairs, negatives, and expected failure modes.

## Source anchors
- Deep Learning book — https://www.deeplearningbook.org/
- Dive into Deep Learning — https://d2l.ai/
- CS231n notes — https://cs231n.github.io/
- SimCLR — https://arxiv.org/abs/2002.05709
- CLIP — https://arxiv.org/abs/2103.00020
- MAE — https://arxiv.org/abs/2111.06377

## RAG tags
architecture, representation_learning, deep_learning, consumer_training, vol2_theory
