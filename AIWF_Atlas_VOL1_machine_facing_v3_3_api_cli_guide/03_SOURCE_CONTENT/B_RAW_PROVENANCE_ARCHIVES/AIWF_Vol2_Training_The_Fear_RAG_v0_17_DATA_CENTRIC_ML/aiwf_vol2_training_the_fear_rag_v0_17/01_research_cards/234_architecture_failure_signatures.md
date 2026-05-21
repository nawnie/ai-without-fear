# 234 — Architecture Failure Signatures

## Why this matters for Vol. 2
Failure diagnosis should distinguish data problems from architecture mismatch, optimization instability, and objective mismatch.

## Core facts
- Blurry images can be VAE/latent/detail loss, not just low steps.
- Repeating text can be data duplication, objective collapse, or decoding issue.
- Poor long-context recall can be architecture/context/eval mismatch.
- Good train loss with bad validation can be leakage, overfit, or wrong split.
- Fast memorization in LoRA can indicate high LR, too few images, duplicated captions, or overpowered rank.

## AIWF rules of thumb
- Diagnose by changing one variable at a time: data, objective, model size, trainable modules, LR, batch, eval.
- Never ship based only on training loss.
- Tie each failure to a next inspection step.

## Exercise / lab hook
Given six fake training logs and sample outputs, classify failure as data, objective, architecture, optimization, or evaluation.

## Source anchors
- Deep Learning book — https://www.deeplearningbook.org/
- Dive into Deep Learning — https://d2l.ai/
- CS231n notes — https://cs231n.github.io/


## RAG tags
architecture, representation_learning, deep_learning, consumer_training, vol2_theory
