# 203 — Data Order, Shuffling, Curriculum, and Replay

**Pass:** 14 — Optimization and Training Dynamics  
**Snapshot framing:** March 2026 Vol. 2 research state  
**Reader level:** college/postgrad, written in field-manual style  
**Primary role in Vol. 2:** Shows that what the model sees when matters.

## Core idea
Training data order can affect optimization. Shuffling reduces order artifacts; curriculum presents easier or more general examples before harder ones; replay preserves old behavior when adding new skills.

## What the reader must learn
Know epoch order, sampling weights, curriculum, replay buffer, task mixing, and catastrophic forgetting.

## Practical rules
Shuffle by default. Use curriculum when examples have obvious difficulty structure. Use replay when fine-tuning a model to add a skill without erasing general behavior.

## Failure signatures
Model learns local sequence artifacts, forgets old skill, over-specializes to late dataset region.

## AIWF application
AIWF dataset tools should expose sample weights and task group balance instead of treating the dataset as an unordered pile.

## Exercise hook
Create a mixed dataset with two tasks; train with blocked order vs shuffled vs replay-mixed order.

## Source anchors
- PyTorch Performance Tuning Guide: https://docs.pytorch.org/tutorials/recipes/recipes/tuning_guide.html
