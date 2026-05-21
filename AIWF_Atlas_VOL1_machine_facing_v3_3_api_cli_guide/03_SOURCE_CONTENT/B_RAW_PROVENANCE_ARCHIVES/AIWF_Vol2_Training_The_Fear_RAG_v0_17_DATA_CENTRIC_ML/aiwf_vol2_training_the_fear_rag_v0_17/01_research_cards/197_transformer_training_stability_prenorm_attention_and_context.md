# 197 — Transformer Training Stability: Pre-Norm, Attention, and Context

**Pass:** 14 — Optimization and Training Dynamics  
**Snapshot framing:** March 2026 Vol. 2 research state  
**Reader level:** college/postgrad, written in field-manual style  
**Primary role in Vol. 2:** Bridges general dynamics to LLM/VLM training.

## Core idea
Transformer stability depends on residual streams, normalization placement, attention score scale, optimizer settings, data order, and context length. Longer context increases activation memory and can amplify training instability if LR and batch are not adjusted.

## What the reader must learn
Know attention scale, softmax saturation, pre-norm/post-norm, sequence length cost, KV/cache distinction, and why fine-tuning context length is not free.

## Practical rules
Do not raise context length just because the model supports it. For consumer hardware, start short, validate behavior, then scale context if the task needs it.

## Failure signatures
OOM, slow steps, attention instability, repetition, degraded instruction following after long-context fine-tune.

## AIWF application
AIWF LLM training presets should include context length as a first-class cost and quality variable.

## Exercise hook
Fine-tune or simulate a small transformer with short vs longer sequences and compare memory/time plus held-out behavior.

## Source anchors
- Hugging Face Transformers single GPU performance: https://huggingface.co/docs/transformers/perf_train_gpu_one
- Transformers gradient checkpointing docs: https://github.com/huggingface/transformers/blob/main/docs/source/en/grad_checkpointing.md
