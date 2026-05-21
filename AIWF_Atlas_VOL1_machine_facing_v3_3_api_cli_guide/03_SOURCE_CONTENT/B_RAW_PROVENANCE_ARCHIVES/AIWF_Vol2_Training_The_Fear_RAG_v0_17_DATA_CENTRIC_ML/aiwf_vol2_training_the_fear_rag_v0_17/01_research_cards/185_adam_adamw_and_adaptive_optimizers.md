# 185 — Adam, AdamW, and Adaptive Optimizers

**Pass:** 14 — Optimization and Training Dynamics  
**Snapshot framing:** March 2026 Vol. 2 research state  
**Reader level:** college/postgrad, written in field-manual style  
**Primary role in Vol. 2:** Covers the default optimizer family used in most LLM/diffusion training.

## Core idea
Adam keeps moving averages of gradients and squared gradients, giving each parameter an adaptive step size. AdamW decouples weight decay from the adaptive gradient update, which is why it became the default in many deep learning recipes.

## What the reader must learn
Know beta1, beta2, epsilon, LR, weight decay, bias correction, and why Adam can train fast while still needing careful regularization and scheduling.

## Practical rules
Use AdamW as the default baseline for transformer/diffusion fine-tuning unless a trainer has a well-supported alternative. Tune LR and weight decay together; do not assume weight decay is independent of LR in practical PyTorch-style workflows.

## Failure signatures
Fast early improvement then overfit; val loss worsens while train loss improves; weight norms behave oddly late in cosine decay; unstable small-data LoRA at high LR.

## AIWF application
AIWF presets should expose AdamW settings but hide them behind sane templates. Advanced notes should explain why default betas differ across LLM, vision, and diffusion recipes.

## Exercise hook
Run AdamW with weight decay 0, low, and high on the same model; inspect train/val gap and generated-output quality.

## Source anchors
- Adam paper: https://arxiv.org/abs/1412.6980
- AdamW / Decoupled Weight Decay: https://arxiv.org/abs/1711.05101
- PyTorch AdamW docs: https://docs.pytorch.org/docs/stable/generated/torch.optim.AdamW.html
