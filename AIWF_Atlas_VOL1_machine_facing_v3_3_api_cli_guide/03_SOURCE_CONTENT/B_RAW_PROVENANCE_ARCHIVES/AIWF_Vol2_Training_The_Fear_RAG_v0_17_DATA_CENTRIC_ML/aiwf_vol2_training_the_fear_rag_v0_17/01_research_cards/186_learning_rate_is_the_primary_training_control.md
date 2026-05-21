# 186 — Learning Rate Is the Primary Training Control

**Pass:** 14 — Optimization and Training Dynamics  
**Snapshot framing:** March 2026 Vol. 2 research state  
**Reader level:** college/postgrad, written in field-manual style  
**Primary role in Vol. 2:** Makes LR the central diagnostic variable.

## Core idea
Learning rate controls step size. Too low looks safe but wastes compute or traps training in underfit; too high can destroy learned structure, produce NaNs, or make a LoRA overwrite the base model’s behavior.

## What the reader must learn
Understand LR range tests, warmup, cosine decay, constant LR, LR scaling with batch, and why adapter LR differs from full fine-tune LR.

## Practical rules
Change LR before changing architecture. For LoRA, reduce LR when identity/style overbakes or the model forgets prompt flexibility. For diffusion, LR interacts with rank, repeats, caption quality, and model family.

## Failure signatures
High LR: spikes, NaNs, mushy outputs, catastrophic forgetting. Low LR: no learning, weak style capture, wasted steps.

## AIWF application
AIWF should teach LR as a knob tied to evidence: inspect loss, sample outputs, validation prompts, and forgetting tests.

## Exercise hook
Use a small LR sweep and pick the largest LR that learns without destabilizing validation samples.

## Source anchors
- Warmup analysis: https://arxiv.org/abs/2410.23922
- Hugging Face Transformers single GPU performance: https://huggingface.co/docs/transformers/perf_train_gpu_one
