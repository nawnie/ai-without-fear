# 205 — Hyperparameter Search Without Cargo Culting

**Pass:** 14 — Optimization and Training Dynamics  
**Snapshot framing:** March 2026 Vol. 2 research state  
**Reader level:** college/postgrad, written in field-manual style  
**Primary role in Vol. 2:** Turns tuning into controlled experiments.

## Core idea
Hyperparameter search is a disciplined exploration of settings. Random changes waste compute and hide causality. Good search starts with a baseline, changes one major control at a time, and records outcomes.

## What the reader must learn
Know grid search, random search, Bayesian intuition, ablation, seed variance, budget, and stopping criteria.

## Practical rules
Tune in phases: first make it run, then make it learn, then make it generalize, then make it efficient. Do not optimize speed before correctness.

## Failure signatures
Endless tweaks, no baseline, no logs, conflicting changes, inability to tell why quality changed.

## AIWF application
AIWF should provide small, medium, and serious search templates that fit consumer GPUs.

## Exercise hook
Design a 6-run LR/rank search with a budget cap and predeclared success metric.

## Source anchors
- PyTorch Performance Tuning Guide: https://docs.pytorch.org/tutorials/recipes/recipes/tuning_guide.html
