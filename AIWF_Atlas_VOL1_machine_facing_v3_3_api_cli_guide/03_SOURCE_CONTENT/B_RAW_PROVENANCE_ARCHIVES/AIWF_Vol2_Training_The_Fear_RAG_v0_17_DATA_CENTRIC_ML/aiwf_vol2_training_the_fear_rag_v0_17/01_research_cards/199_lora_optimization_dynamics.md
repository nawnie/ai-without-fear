# 199 — LoRA Optimization Dynamics

**Pass:** 14 — Optimization and Training Dynamics  
**Snapshot framing:** March 2026 Vol. 2 research state  
**Reader level:** college/postgrad, written in field-manual style  
**Primary role in Vol. 2:** Explains why adapter training behaves differently from full fine-tuning.

## Core idea
LoRA restricts learning to low-rank update matrices. This lowers memory and makes consumer fine-tuning practical, but it also changes the geometry of what the model can learn and how quickly it overfits.

## What the reader must learn
Know rank, alpha, target modules, dropout, adapter LR, merge behavior, and base-model dependency.

## Practical rules
Raise rank for capacity only when data supports it. Lower LR or steps when style/identity overpowers prompt control. Use validation prompts that require the LoRA not to appear.

## Failure signatures
Trigger word overbinding, prompt leakage, base model forgetting, adapter too weak, adapter too strong, brittle merges.

## AIWF application
AIWF’s LoRA chapter should explain capacity as a hose diameter: rank controls how much change can flow, but data quality decides what flows through it.

## Exercise hook
Train two ranks on the same dataset; test with prompt-required and prompt-forbidden validation prompts.

## Source anchors
- AdamW / Decoupled Weight Decay: https://arxiv.org/abs/1711.05101
