# 200 — Reading Loss Curves Like Evidence

**Pass:** 14 — Optimization and Training Dynamics  
**Snapshot framing:** March 2026 Vol. 2 research state  
**Reader level:** college/postgrad, written in field-manual style  
**Primary role in Vol. 2:** Turns curves into diagnostics.

## Core idea
Loss curves are evidence, not verdicts. A decreasing train loss can mean useful learning or memorization. A noisy curve can be normal in small-batch training. Validation loss, task metrics, samples, and held-out tests decide whether the run is good.

## What the reader must learn
Know train loss, validation loss, moving average, scale, outliers, per-task loss, and qualitative checkpoints.

## Practical rules
Always pair loss curves with validation artifacts. For generative models, save fixed-seed eval prompts at regular checkpoint intervals.

## Failure signatures
Train loss down but quality worse; val loss up; sudden spikes; flatline; sawtooth scheduler effects; best sample appears before final checkpoint.

## AIWF application
AIWF Training Judge should require curve + samples + eval set + config manifest before calling a model improved.

## Exercise hook
Given five anonymized loss curves, classify underfit, overfit, unstable LR, noisy-but-learning, and data bug.

## Source anchors
- Hugging Face Transformers single GPU performance: https://huggingface.co/docs/transformers/perf_train_gpu_one
