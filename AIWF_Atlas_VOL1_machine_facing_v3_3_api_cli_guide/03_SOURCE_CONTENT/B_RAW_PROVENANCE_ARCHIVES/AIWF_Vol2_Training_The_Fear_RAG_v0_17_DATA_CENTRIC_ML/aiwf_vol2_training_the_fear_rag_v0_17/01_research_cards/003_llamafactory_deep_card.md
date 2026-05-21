# 003 — LLaMA-Factory

## Identity

- Tool: LLaMA-Factory
- Repo: https://github.com/hiyouga/LLaMA-Factory
- Domain: LLM/VLM fine-tuning and post-training
- AIWF priority: P0

## What it trains

LLaMA-Factory supports a very wide list of model families, including Llama, Qwen, DeepSeek, Gemma, GLM, Phi, Mistral, InternVL, LLaVA-family models, Qwen-VL/Omni-style models, and more.

## Training methods

Supported approaches include:

- pretraining/continued pretraining,
- supervised fine-tuning,
- reward modeling,
- PPO,
- DPO,
- KTO,
- ORPO,
- SimPO,
- full tuning,
- freeze tuning,
- LoRA,
- QLoRA,
- OFT/QOFT.

## Hardware reality

The repo publishes an estimated hardware table. For 4-bit QLoRA/QOFT, its table lists approximately:

- 7B: 6GB
- 14B: 12GB
- 30B: 24GB
- 70B: 48GB

Treat those as base estimates, not a guarantee. Context length, batch size, optimizer, packing, gradients, VLM inputs, and Windows overhead can raise requirements.

## Why it matters to AIWF

This is a perfect map for teaching the difference between training methods. It also gives a GUI/YAML path for users who do not want to write a full TRL script.

## Beginner-safe use

- Start with a 0.5B–3B model to verify dataset formatting.
- Move to 7B QLoRA after the pipeline works.
- Keep context length modest.
- Use a tiny validation set and fixed test prompts.
- Export adapter and test in a separate inference environment.

## Sources

- https://github.com/hiyouga/LLaMA-Factory
