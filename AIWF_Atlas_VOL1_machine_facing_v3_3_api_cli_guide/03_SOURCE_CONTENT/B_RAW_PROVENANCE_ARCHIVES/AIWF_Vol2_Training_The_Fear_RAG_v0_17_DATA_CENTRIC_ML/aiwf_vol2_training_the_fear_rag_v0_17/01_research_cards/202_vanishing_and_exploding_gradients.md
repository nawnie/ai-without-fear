# 202 — Vanishing and Exploding Gradients

**Pass:** 14 — Optimization and Training Dynamics  
**Snapshot framing:** March 2026 Vol. 2 research state  
**Reader level:** college/postgrad, written in field-manual style  
**Primary role in Vol. 2:** Teaches foundational deep-network pathology.

## Core idea
Gradients can shrink to near zero across layers, preventing learning, or grow too large, causing unstable updates. Initialization, activation choice, normalization, residual connections, clipping, and LR all interact with this.

## What the reader must learn
Know gradient norm, layerwise norm, saturation, residual path, and clipping.

## Practical rules
Check gradient norms when loss is flat or NaNs appear. Lower LR, improve initialization, add/inspect normalization, or use clipping depending on symptom.

## Failure signatures
Flat loss with no movement; NaNs/INFs; sudden divergence; layerwise gradients zero or huge.

## AIWF application
AIWF diagnostics should include a “gradient health” concept even if beginner tools do not expose full gradient logs.

## Exercise hook
Instrument a toy net to print gradient norms per layer and intentionally break it with bad initialization.

## Source anchors
- Xavier initialization / deep feedforward difficulty: https://proceedings.mlr.press/v9/glorot10a.html
- Batch Normalization: https://arxiv.org/abs/1502.03167
