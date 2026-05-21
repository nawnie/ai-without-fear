# 189 — Effective Batch, Gradient Accumulation, and Noise Scale

**Pass:** 14 — Optimization and Training Dynamics  
**Snapshot framing:** March 2026 Vol. 2 research state  
**Reader level:** college/postgrad, written in field-manual style  
**Primary role in Vol. 2:** Connects consumer GPU limits to real training math.

## Core idea
Effective batch size equals microbatch times accumulation times devices. Gradient accumulation simulates a larger batch without fitting it all in VRAM, but does not perfectly reproduce every hardware/optimizer behavior.

## What the reader must learn
Understand microbatch, accumulation, global batch, token batch, image batch, and update frequency.

## Practical rules
On consumer GPUs, increase accumulation when gradients are too noisy or when trainer docs expect a larger batch. Reduce accumulation for more frequent updates on small datasets.

## Failure signatures
Too much accumulation: slow feedback and possible under-adaptation. Too little: noisy or unstable updates.

## AIWF application
AIWF run packs should log microbatch and effective batch separately. Never let a guide say “batch 8” without specifying whether it means microbatch or effective batch.

## Exercise hook
Calculate effective batch for five common LoRA configs and predict memory vs stability tradeoff.

## Source anchors
- Hugging Face Transformers single GPU performance: https://huggingface.co/docs/transformers/perf_train_gpu_one
- PyTorch Performance Tuning Guide: https://docs.pytorch.org/tutorials/recipes/recipes/tuning_guide.html
