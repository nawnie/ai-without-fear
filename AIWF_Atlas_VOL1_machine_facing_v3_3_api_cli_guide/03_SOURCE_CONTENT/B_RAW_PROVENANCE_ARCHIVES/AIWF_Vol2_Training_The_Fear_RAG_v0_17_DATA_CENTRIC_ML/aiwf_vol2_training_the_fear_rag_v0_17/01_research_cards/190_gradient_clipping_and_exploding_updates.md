# 190 — Gradient Clipping and Exploding Updates

**Pass:** 14 — Optimization and Training Dynamics  
**Snapshot framing:** March 2026 Vol. 2 research state  
**Reader level:** college/postgrad, written in field-manual style  
**Primary role in Vol. 2:** Teaches a critical safety brake.

## Core idea
Gradient clipping limits update magnitude when gradients become too large. It is not a cure for bad data or bad LR, but it can prevent a transient batch from destroying a run.

## What the reader must learn
Know norm clipping, value clipping, max_grad_norm, exploding gradients, and why recurrent/transformer training often includes clipping.

## Practical rules
Use clipping when logs show spikes or when a known recipe uses it. If clipping activates constantly, the LR or data may be wrong.

## Failure signatures
NaNs after spikes, repeated clipped gradients, loss fails to recover after a bad batch.

## AIWF application
AIWF diagnostics should log whether clipping is active and teach users not to treat it as invisible magic.

## Exercise hook
Inject outlier samples into a dataset and compare training with and without clipping.

## Source anchors
- Hugging Face Transformers single GPU performance: https://huggingface.co/docs/transformers/perf_train_gpu_one
