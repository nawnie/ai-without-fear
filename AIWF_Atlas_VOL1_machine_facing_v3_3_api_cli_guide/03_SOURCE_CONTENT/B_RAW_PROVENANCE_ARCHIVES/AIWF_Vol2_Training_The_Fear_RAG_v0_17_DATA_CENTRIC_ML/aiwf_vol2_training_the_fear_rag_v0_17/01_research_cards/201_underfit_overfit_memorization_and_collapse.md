# 201 — Underfit, Overfit, Memorization, and Collapse

**Pass:** 14 — Optimization and Training Dynamics  
**Snapshot framing:** March 2026 Vol. 2 research state  
**Reader level:** college/postgrad, written in field-manual style  
**Primary role in Vol. 2:** Defines the main failure states across ML.

## Core idea
Underfit means the model cannot capture the training signal. Overfit means it captures training signal but fails to generalize. Memorization is a form of overfit that can create privacy/copyright/safety risk. Collapse means behavior narrows or degrades catastrophically.

## What the reader must learn
Know train/val gap, data leakage, memorization probes, mode collapse, catastrophic forgetting, and negative transfer.

## Practical rules
Use held-out validation and adversarial prompts. For generative outputs, test both “should activate” and “should not activate” conditions.

## Failure signatures
Perfect training behavior and poor held-out behavior; repeated outputs; unwanted identity/style activation; degraded general ability after fine-tune.

## AIWF application
This is a core Vol. 2 reader outcome: the reader must stop asking “did it finish?” and start asking “did it generalize?”

## Exercise hook
Build an intentional overfit run on tiny data, then identify what changed in outputs.

## Source anchors
- AdamW / Decoupled Weight Decay: https://arxiv.org/abs/1711.05101
