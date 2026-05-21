# DPO, ORPO, KTO, GRPO — Method Selection Rules

## Why this matters

A beginner sees a pile of post-training acronyms and assumes they are interchangeable. They are not. Each method implies a different dataset shape, compute profile, and failure mode.

## Method map

### SFT

Use when the desired answer is known. Dataset: instruction/input/output or chat messages. Best first training method.

### DPO

Use when you have chosen/rejected answer pairs. DPO directly optimizes the model toward preferred outputs without training a separate reward model or running full online RL. It is usually the first preference method to teach.

### ORPO

Use when you want an odds-ratio style preference objective, often as a more compact alternative to SFT + preference optimization. Useful for chat alignment experiments, but evaluate carefully.

### KTO

Use when labels are binary desirable/undesirable rather than full chosen/rejected pairs. Helpful when preference data is easier to collect as thumbs-up/thumbs-down.

### GRPO

Use when the reward can be computed or verified. Common examples: math correctness, code tests, format validation, structured extraction exact match, or rule-based rubric. GRPO avoids some PPO complexity and is associated with reasoning-style post-training work.

### PPO/RLHF

Use only when you truly need online RL with reward models and can absorb instability. Not the first local-user target.

## AIWF beginner ladder

1. **SFT** for format and task behavior.
2. **DPO** for "answer A is better than answer B."
3. **KTO** for good/bad labels.
4. **GRPO** for verifiable rewards.
5. **PPO/RLHF** only after the evaluation harness is mature.

## Dataset requirements

| Method | Dataset shape | Best use | Danger |
|---|---|---|---|
| SFT | prompt -> answer | teach format/task | memorization, style overfit |
| DPO | prompt + chosen + rejected | preference alignment | bad pairs teach bad taste |
| ORPO | chosen/rejected style | compact preference tuning | less intuitive debugging |
| KTO | prompt + completion + desirable flag | weak preference labels | ambiguous labels collapse behavior |
| GRPO | prompt + reward function or verifier | math/code/structured tasks | reward hacking |
| PPO | policy rollouts + reward model | advanced RLHF | instability, high compute |

## Evaluation requirement

Never compare only training loss. Compare:

- task success,
- instruction following,
- refusal/safety behavior when relevant,
- style drift,
- hallucination rate,
- latency/VRAM after export,
- regression against old tasks.

## Sources

- TRL overview: https://huggingface.co/docs/trl/en/index
- TRL DPO Trainer: https://huggingface.co/docs/trl/en/dpo_trainer
- TRL GRPO Trainer: https://huggingface.co/docs/trl/en/grpo_trainer
- TRL GitHub examples: https://github.com/huggingface/trl
