# 005 — Axolotl, TRL, torchtune, PEFT

## Why these belong together

These are the serious bot-training foundations. Even if AIWF gives beginners a UI, these tools explain what the UI is actually doing.

## Axolotl

Axolotl is a YAML-driven training pipeline for post-training and fine-tuning current LLMs. It supports full fine-tuning, LoRA, QLoRA, GPTQ, QAT, DPO-family preference tuning, GRPO/GDPO, reward modeling, VLMs, and audio/multimodal model support.

AIWF role: serious pipeline reference; not the first beginner UI.

## TRL

TRL is Hugging Face's post-training library for SFT, GRPO, DPO, reward modeling, PPO-style workflows, and related trainers. It sits close to the core concepts.

AIWF role: concept source and code examples.

## torchtune

torchtune is a PyTorch-native post-training library with recipes such as single-device LoRA fine-tuning and distributed full fine-tuning.

AIWF role: clean educational recipes for users who want to understand training without too much framework magic.

## PEFT

PEFT is the parameter-efficient fine-tuning backbone. It is where LoRA and other adapter methods become reusable abstractions across many projects.

AIWF role: explain the adapter concept once, then show it everywhere.

## Sources

- https://github.com/axolotl-ai-cloud/axolotl
- https://github.com/huggingface/trl
- https://github.com/meta-pytorch/torchtune
- https://github.com/huggingface/peft
