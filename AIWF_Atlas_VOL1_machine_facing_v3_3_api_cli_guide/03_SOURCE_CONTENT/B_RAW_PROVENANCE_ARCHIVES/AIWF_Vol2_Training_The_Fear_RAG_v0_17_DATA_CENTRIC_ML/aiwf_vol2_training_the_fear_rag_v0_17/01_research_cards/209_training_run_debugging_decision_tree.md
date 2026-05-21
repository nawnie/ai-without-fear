# 209 — Training Run Debugging Decision Tree

**Pass:** 14 — Optimization and Training Dynamics  
**Snapshot framing:** March 2026 Vol. 2 research state  
**Reader level:** college/postgrad, written in field-manual style  
**Primary role in Vol. 2:** Operationalizes the theory into a field manual diagnostic.

## Core idea
A training failure should be diagnosed by phase: load, forward, backward, optimizer step, validation, export, inference. Each phase has different likely causes and different evidence to collect.

## What the reader must learn
Know phase isolation, minimal reproduction, config diffing, log triage, seed control, and rollback.

## Practical rules
Ask first: Did it load? Did forward pass work? Did backward pass work? Did loss move? Did validation improve? Did outputs improve? Did export preserve behavior?

## Failure signatures
Red nodes in workflow, import errors, OOM, NaNs, flat loss, overfit, bad samples, broken merge, bad quantized output.

## AIWF application
This should feed AIWF Training Judge and EnvPack: users paste logs and get a phase-specific checklist instead of generic “lower batch size.”

## Exercise hook
Convert three real error logs into phase labels and next diagnostic actions.

## Source anchors
- PyTorch Performance Tuning Guide: https://docs.pytorch.org/tutorials/recipes/recipes/tuning_guide.html
- Hugging Face Transformers single GPU performance: https://huggingface.co/docs/transformers/perf_train_gpu_one
