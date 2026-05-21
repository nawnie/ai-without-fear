# 187 — Warmup, Cosine, Constant, and Scheduler Choice

**Pass:** 14 — Optimization and Training Dynamics  
**Snapshot framing:** March 2026 Vol. 2 research state  
**Reader level:** college/postgrad, written in field-manual style  
**Primary role in Vol. 2:** Explains why LR changes over a run.

## Core idea
Schedulers change learning rate over time. Warmup reduces early update shock; cosine decay gradually lowers LR; constant schedules can work well for short adapter runs when chosen carefully.

## What the reader must learn
Know warmup ratio/steps, decay shape, restarts, minimum LR, and why short LoRA runs can be harmed by overcomplicated schedules.

## Practical rules
Use warmup for large models, high LR, large effective batch, or unstable starts. For short LoRA experiments, compare constant-with-warmup and cosine before assuming one is universally better.

## Failure signatures
No warmup: early loss spike or NaNs. Too much warmup: run spends too long barely learning. Bad decay: late undertraining or premature stagnation.

## AIWF application
Preset Builder should describe scheduler purpose: stabilize start, preserve base behavior, compress search time, or maximize final fit.

## Exercise hook
Train the same LoRA with constant, linear decay, and cosine; compare early samples and final validation.

## Source anchors
- Warmup analysis: https://arxiv.org/abs/2410.23922
- AdamW / Decoupled Weight Decay: https://arxiv.org/abs/1711.05101
