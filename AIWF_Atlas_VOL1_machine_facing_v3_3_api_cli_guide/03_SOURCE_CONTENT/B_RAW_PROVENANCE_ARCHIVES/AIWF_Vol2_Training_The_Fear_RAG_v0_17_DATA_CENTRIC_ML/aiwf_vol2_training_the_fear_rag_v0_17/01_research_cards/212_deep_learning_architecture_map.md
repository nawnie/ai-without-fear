# 212 — Deep Learning Architecture Map

## Why this matters for Vol. 2
Vol. 2 needs to teach that architectures are not fashion labels. They are collections of inductive biases, memory layouts, objective assumptions, and deployment tradeoffs.

## Core facts
- MLPs learn generic function approximations but have weak spatial/sequence bias.
- CNNs build locality and translation bias into the model.
- RNNs/SSMs process sequences as state evolution.
- Transformers process token sets through attention.
- U-Nets and encoder-decoders solve dense output and generative denoising problems.
- Diffusion and flow models learn generative dynamics rather than direct labels.

## AIWF rules of thumb
- Start every architecture chapter with: input structure, output structure, invariances, memory cost, failure mode, and dataset assumption.
- Do not teach “Transformer beats CNN” as a universal rule; teach bias/scale/data regimes.
- Consumer hardware changes the architecture decision because attention, video, and long context can be memory-bound before they are compute-bound.

## Exercise / lab hook
Given image classification, image segmentation, chatbot SFT, video LoRA, and tabular risk scoring, write the expected data shape and choose one reasonable architecture family for each.

## Source anchors
- Deep Learning book — https://www.deeplearningbook.org/
- Dive into Deep Learning — https://d2l.ai/
- CS231n notes — https://cs231n.github.io/


## RAG tags
architecture, representation_learning, deep_learning, consumer_training, vol2_theory
