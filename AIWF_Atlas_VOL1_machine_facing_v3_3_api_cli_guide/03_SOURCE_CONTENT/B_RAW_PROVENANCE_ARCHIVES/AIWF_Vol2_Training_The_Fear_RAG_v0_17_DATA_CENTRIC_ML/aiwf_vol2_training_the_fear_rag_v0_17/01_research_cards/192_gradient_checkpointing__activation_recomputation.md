# 192 — Gradient Checkpointing / Activation Recomputation

**Pass:** 14 — Optimization and Training Dynamics  
**Snapshot framing:** March 2026 Vol. 2 research state  
**Reader level:** college/postgrad, written in field-manual style  
**Primary role in Vol. 2:** Turns memory limits into an explicit tradeoff.

## Core idea
Gradient checkpointing saves memory by not storing every activation during the forward pass. During backward pass, parts of the forward computation are recomputed. The trade is lower VRAM for slower training.

## What the reader must learn
Understand activations, backward pass, compute-memory tradeoff, checkpoint granularity, and why long context/video frames make activations painful.

## Practical rules
Enable checkpointing when the model almost fits or when context/frame count matters more than speed. Disable it during small debugging runs if speed and clearer tracebacks matter.

## Failure signatures
Unexpected slowdown, incompatibilities with some custom ops, still-OOM because optimizer/state/data loader memory is the true bottleneck.

## AIWF application
AIWF presets should show checkpointing as “fit bigger / go slower,” not as a free optimization.

## Exercise hook
Measure VRAM and seconds/step with checkpointing off/on for the same model.

## Source anchors
- Transformers gradient checkpointing docs: https://github.com/huggingface/transformers/blob/main/docs/source/en/grad_checkpointing.md
- Hugging Face Transformers single GPU performance: https://huggingface.co/docs/transformers/perf_train_gpu_one
