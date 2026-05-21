# Alignment and Preference Training — SFT, DPO, ORPO, KTO, GRPO, RLHF

## Purpose

This card separates “make the model imitate examples” from “make the model prefer better answers.” Most consumer chatbot training should start with SFT and only move into preference optimization after the dataset and evaluation pipeline are real.

## SFT — supervised fine-tuning

SFT trains on instruction/response examples. It is the normal starting point for:

- role behavior
- domain answer style
- task format
- tool-call formatting
- customer-support style responses
- refusal/safety style when examples are clear

### Strength

Simple, accessible, stable.

### Weakness

The model learns what the dataset says, including bad style, bad reasoning, verbosity, contradictions, hallucinations, and hidden biases.

## Reward modeling / RLHF / PPO

Classic RLHF often involves:

1. SFT model.
2. preference data.
3. reward model.
4. reinforcement learning policy optimization, often PPO-style.

### Consumer caution

Classic RLHF is complex and fragile. It is not the first recommendation for local hobby training unless the user is explicitly studying alignment research.

## DPO — Direct Preference Optimization

DPO optimizes directly from preference pairs without training an explicit reward model or running a complex RL loop. The paper frames DPO as a simpler route that can match or improve RLHF-like preference control in tested settings.

### Dataset shape

Usually prompt + chosen answer + rejected answer.

### Use when

- you have reliable chosen/rejected pairs.
- SFT model is already competent.
- you want preference shaping, not basic knowledge injection.

### Failure mode

Bad preference pairs teach bad taste. DPO amplifies labeler preference quality.

## ORPO — Odds Ratio Preference Optimization

ORPO is reference-model-free and monolithic: it combines style/preference contrast with supervised learning instead of requiring a separate reference model preference phase.

### Use when

- trainer supports it.
- you want simpler preference optimization.
- you have chosen/rejected pairs.

### AIWF caution

Reference-free does not mean risk-free. It can still over-optimize style or suppress useful diversity.

## KTO — Kahneman-Tversky Optimization

KTO uses desirable/undesirable signal and prospect-theory-inspired utility rather than always requiring paired preference data.

### Dataset shape

Can work with binary desirable/undesirable examples rather than strict chosen/rejected pairs.

### Use when

- you have good/bad labels but not perfect pairs.
- you want practical alignment with less pair curation.

### Risk

Label noise is still poison.

## GRPO — Group Relative Policy Optimization

GRPO is a newer RL-style preference/reasoning optimization path popularized in recent reasoning-model training discussions and supported in TRL. It can be more memory-efficient than PPO in some setups.

### Use when

- training reasoning behaviors.
- rewards can be computed or judged.
- advanced workflow is acceptable.

### Avoid for beginners

It adds sampling, reward design, variance, and evaluation complexity. Use only after SFT/DPO basics are understood.

## AIWF method ladder

1. **Prompt/RAG first** if the model only needs more context.
2. **SFT** if it needs repeatable behavior/style/task format.
3. **DPO/ORPO/KTO** if it needs taste/preference correction after SFT.
4. **GRPO/RLHF/PPO** only for advanced reward-driven work.
5. **Full fine-tune/pretraining** only when adapter methods fail and compute/data/eval are real.

## Preference-data quality rules

- chosen must be clearly better than rejected.
- preference criterion must be written down.
- avoid mixing unrelated criteria in one pair.
- keep “style preference” separate from “factual correctness.”
- never use model-generated preference labels without auditing.
- include refusal/safety examples only if the target behavior is explicit.
- maintain a held-out evaluation set.

## AIWF beginner example

Bad objective: “Make Qwen better.”

Better objective: “Make Qwen 7B answer ComfyUI troubleshooting questions in concise step-by-step Windows PowerShell style, with no fake package names, and with explicit uncertainty when logs are missing.”

Training plan:

1. Build 200-1000 high-quality SFT examples.
2. Build 100 held-out eval prompts.
3. Train QLoRA SFT.
4. Compare base vs adapter on evals.
5. Add preference pairs only for recurring style or safety failures.

## Sources

- DPO paper: https://arxiv.org/abs/2305.18290
- ORPO paper: https://arxiv.org/abs/2403.07691
- KTO paper: https://arxiv.org/abs/2402.01306
- TRL docs: https://huggingface.co/docs/trl/en/index
- TRL DPOTrainer: https://huggingface.co/docs/trl/en/dpo_trainer
- TRL GRPOTrainer: https://huggingface.co/docs/trl/en/grpo_trainer
