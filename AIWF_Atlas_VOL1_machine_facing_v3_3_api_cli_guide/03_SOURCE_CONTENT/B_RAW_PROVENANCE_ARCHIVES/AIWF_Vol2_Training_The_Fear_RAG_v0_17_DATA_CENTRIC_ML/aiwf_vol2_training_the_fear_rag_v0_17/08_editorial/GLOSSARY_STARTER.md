# Glossary Starter — Training the Fear

## Adapter

A small trained component attached to a base model, usually far cheaper to train than the full model.

## LoRA

Low-Rank Adaptation. A PEFT method that trains small low-rank matrices instead of updating all model weights.

## QLoRA

Quantized LoRA. The base model is loaded in a low-bit format while LoRA adapters are trained, reducing VRAM requirements.

## DoRA

Weight-Decomposed Low-Rank Adaptation. A LoRA-family method that separates magnitude and direction components.

## SFT

Supervised Fine-Tuning. Training on input-output examples, often instruction/response conversations for chat models.

## Preference tuning

Training from comparisons or preferences, often to make outputs better aligned with desired behavior.

## DPO

Direct Preference Optimization. A preference-training method that avoids a separate explicit reward-model training step.

## GRPO

Group Relative Policy Optimization. A reward/RL-style post-training method popularized in recent reasoning-model workflows.

## RAG

Retrieval-Augmented Generation. The model retrieves external information at inference time instead of learning it into weights.

## Overfitting

When training fits the dataset too closely and loses generalization.

## Catastrophic forgetting

When a model loses previous capabilities after being fine-tuned too narrowly or too aggressively.

## Release gate

A checklist that must pass before a model, adapter, dataset, or workflow is shared.
