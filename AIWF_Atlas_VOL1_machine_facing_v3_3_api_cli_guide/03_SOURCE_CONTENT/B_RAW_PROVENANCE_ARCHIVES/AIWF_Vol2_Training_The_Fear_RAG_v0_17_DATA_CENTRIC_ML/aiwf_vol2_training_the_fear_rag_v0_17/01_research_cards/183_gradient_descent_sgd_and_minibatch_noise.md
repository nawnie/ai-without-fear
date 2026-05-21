# 183 — Gradient Descent, SGD, and Mini-Batch Noise

**Pass:** 14 — Optimization and Training Dynamics  
**Snapshot framing:** March 2026 Vol. 2 research state  
**Reader level:** college/postgrad, written in field-manual style  
**Primary role in Vol. 2:** Explains the base mechanism behind every modern optimizer.

## Core idea
Full-batch gradient descent computes a precise direction but is often too expensive. Stochastic and mini-batch methods estimate the gradient from small batches, introducing noise that can help escape narrow bad regions but can also destabilize training.

## What the reader must learn
Know the difference between update step, sample, batch, microbatch, effective batch, epoch, and token/image/frame exposure.

## Practical rules
Use smaller effective batches when data is limited and overfitting is severe; use larger effective batches when throughput and stable gradient estimates matter. With gradient accumulation, remember that optimizer updates happen after accumulated microbatches, not every forward pass.

## Failure signatures
Too-small batch: noisy loss, unstable metrics, poor throughput. Too-large batch: smooth loss but worse generalization, memory pressure, or need for LR retuning.

## AIWF application
Consumer GPUs often force microbatch 1–2. AIWF presets should separate microbatch from gradient accumulation so beginners understand the true effective batch.

## Exercise hook
Train a classifier with batch sizes 4, 32, and 256; compare loss smoothness and validation behavior.

## Source anchors
- Hugging Face Transformers single GPU performance: https://huggingface.co/docs/transformers/perf_train_gpu_one
- PyTorch Performance Tuning Guide: https://docs.pytorch.org/tutorials/recipes/recipes/tuning_guide.html
