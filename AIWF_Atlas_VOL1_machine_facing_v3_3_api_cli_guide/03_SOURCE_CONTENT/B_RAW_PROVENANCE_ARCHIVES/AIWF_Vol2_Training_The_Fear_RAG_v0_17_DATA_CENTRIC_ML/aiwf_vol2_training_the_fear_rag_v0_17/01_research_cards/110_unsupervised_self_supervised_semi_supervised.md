# 110 — Unsupervised, Self-Supervised, and Semi-Supervised Learning

## Core claim

Not all learning needs human labels. Modern AI depends heavily on learning structure from unlabeled or weakly labeled data.

## Unsupervised learning

Learns structure without labels.

Examples:

- clustering
- dimensionality reduction
- density estimation
- anomaly detection

## Self-supervised learning

Creates the training signal from the data itself.

Examples:

- language modeling: predict next/masked token
- contrastive image-text learning
- masked image/audio modeling
- denoising objectives

## Semi-supervised learning

Uses small labeled data plus large unlabeled data.

Examples:

- pseudo-labeling
- consistency regularization
- teacher/student methods

## AIWF connection

Foundation models are mostly self-supervised before they are instruction-tuned. This is why pretraining data distribution matters more than beginners expect.

## Reader exercise

Cluster unlabeled embeddings, label a few clusters manually, and compare the discovered structure to human expectations.
