# Pass 14 — Optimization and Training Dynamics Roadmap

## Purpose
This pass gives Volume 2 the missing operational theory layer between statistical learning and modern AI trainer usage. The reader should finish this section able to look at a training run and reason about **why** it is succeeding, failing, overfitting, underfitting, running out of memory, or producing unstable artifacts.

## March 2026 framing
By March 2026, most practical consumer training is not from-scratch foundation training. It is adapter training, partial fine-tuning, retriever training, small model training, diffusion/video LoRA work, and model-specific post-training. That makes optimization literacy more important, not less: users are changing a small number of trainable parameters attached to huge pretrained systems, so bad LR/data/scheduler choices can destroy output quality without obvious code errors.

## Chapter placement
Recommended placement after Statistical Learning and before Modern AI Training Systems:

1. Loss surfaces and gradients
2. SGD, mini-batches, momentum
3. Adam/AdamW and adaptive optimizers
4. Learning-rate control and schedules
5. Regularization and weight decay
6. Initialization, activations, normalization, residuals
7. Precision, checkpointing, and consumer GPU constraints
8. Reading curves and validation artifacts
9. Debugging training failures
10. Lab: evidence-based checkpoint selection

## Required reader outcomes
The reader should be able to:

- explain why a lower loss is not automatically a better model
- separate microbatch, accumulation, and effective batch
- choose a starting LR/scheduler/optimizer from task family
- explain why BF16/FP16/checkpointing affect VRAM and stability
- diagnose flat loss, spikes, NaNs, OOM, overfit, and collapse
- select checkpoints by validation evidence
- write a run card that another person can reproduce

## AIWF teaching principle
Do not present training recipes as spells. Every setting must answer: **what problem does this setting solve, what does it cost, and what failure does it create when pushed too far?**

## Exercise progression

- **Lab 1:** LR sweep on a tiny model
- **Lab 2:** AdamW vs SGD/momentum comparison
- **Lab 3:** microbatch vs accumulation calculation
- **Lab 4:** mixed precision memory/speed comparison
- **Lab 5:** checkpointing fit/speed tradeoff
- **Lab 6:** LoRA overfit checkpoint selection
- **Lab 7:** failure-log decision tree
- **Capstone:** training run memo with evidence, selected checkpoint, and release decision
