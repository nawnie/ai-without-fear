# 004 — Unsloth

## Identity

- Tool: Unsloth / Unsloth Studio
- Repo: https://github.com/unslothai/unsloth
- Domain: LLM fine-tuning, local bot training, RL/post-training
- AIWF priority: P0

## What it trains

Unsloth targets open LLM training and local workflows, including Qwen, Gemma, Llama, DeepSeek, Phi, Mistral-style families, and related open models.

## Training methods

- LoRA
- QLoRA
- full fine-tuning
- RL/GRPO-style workflows
- pretraining slices
- 4-bit, 16-bit, FP8 paths depending on model/hardware

## Hardware reality

Unsloth is one of the best candidates for consumer hardware training because its core pitch is speed and lower VRAM. For AIWF, it should be treated as the first practical local bot trainer to test.

## AIWF use

- Beginner UI path through Unsloth Studio when stable.
- Code path for reproducible notebooks/scripts.
- Good candidate for AIWF one-click install wrapper.
- Good candidate for a “train your first local support bot” lab.

## Failure signatures

- Wrong chat template: trained model responds with malformed turns.
- Too much training: model becomes repetitive or loses generality.
- Bad dataset: model learns formatting trash faster than useful behavior.
- Merged adapter mismatch: output works in training notebook but not in deployment target.

## Sources

- https://github.com/unslothai/unsloth
