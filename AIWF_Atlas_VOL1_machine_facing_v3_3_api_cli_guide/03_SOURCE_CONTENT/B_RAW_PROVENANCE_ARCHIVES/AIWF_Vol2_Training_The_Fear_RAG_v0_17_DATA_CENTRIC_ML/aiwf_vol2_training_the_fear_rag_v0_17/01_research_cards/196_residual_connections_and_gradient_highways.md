# 196 — Residual Connections and Gradient Highways

**Pass:** 14 — Optimization and Training Dynamics  
**Snapshot framing:** March 2026 Vol. 2 research state  
**Reader level:** college/postgrad, written in field-manual style  
**Primary role in Vol. 2:** Explains how deep networks stay trainable.

## Core idea
Residual connections let layers learn changes on top of existing representations instead of rebuilding everything. They improve gradient flow and make very deep networks easier to optimize.

## What the reader must learn
Know identity path, residual branch, skip connection, pre-activation, transformer residual stream, and how adapters inject into existing computation.

## Practical rules
In fine-tuning, remember that adapters and LoRAs perturb residual flows. Small adapters can have large effects if placed in high-leverage modules.

## Failure signatures
Too-strong adapter changes, layer collapse, instability in deep stacks without proper normalization and residual scaling.

## AIWF application
AIWF can use the metaphor of a highway with side roads: the base model carries traffic; LoRA changes specific ramps and lanes.

## Exercise hook
Diagram a transformer block and trace the residual stream through attention, MLP, normalization, and LoRA injection.

## Source anchors
- Layer Normalization: https://arxiv.org/abs/1607.06450
