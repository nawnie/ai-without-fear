# Hugging Face TRL — SFT, Preference, and Reward Training

## Scope

TRL is the Hugging Face post-training library for transformer language models. It provides trainers for supervised fine-tuning and preference/reward-style methods.

## Methods AIWF must cover

### SFT

Supervised Fine-Tuning teaches the model to imitate desired outputs. It is the first useful method for most bot/persona/domain projects.

Use for:

- style adaptation;
- domain answer format;
- internal procedure following;
- tool-call examples;
- customer-support reply style;
- small specialist bots.

### DPO

Direct Preference Optimization trains from chosen/rejected pairs. It is useful after a model can already answer but needs better preference behavior.

Use for:

- “this answer is better than that one” tuning;
- reducing annoying style traits;
- improving refusal/format preferences;
- aligning local assistant behavior to a specific rubric.

### ORPO/KTO/GRPO/PPO/reward models

These are more advanced. AIWF should document them but not make them the first beginner workflow.

- ORPO: combines supervised and preference-style signals more directly.
- KTO: preference-style training using desirable/undesirable examples rather than strict pairs.
- GRPO: group-relative policy optimization; relevant to reasoning-style work and DeepSeek-style training discussions.
- PPO/RLHF: powerful but more complex, unstable, and rarely the right first consumer path.
- Reward modeling: useful when a separate judge/reward signal is needed.

## Dataset formats

AIWF should support:

- instruction/input/output JSONL;
- chat messages format;
- prompt/completion pairs;
- chosen/rejected preference pairs;
- rating/score formats that can be converted to preference pairs.

## Consumer hardware position

Practical:

- SFT LoRA/QLoRA on 0.5B–8B models;
- DPO on small models and small datasets;
- preference experiments on narrow domains.

Usually not practical locally:

- full RLHF for large models;
- long-context DPO on 7B+ without careful memory control;
- multi-stage policy/reward/policy loops for large models.

## AIWF rule

Do not jump to DPO because it sounds advanced. Most user projects fail earlier: weak dataset, bad chat template, no eval set, no baseline comparison.

## Failure signatures

- DPO makes outputs shorter/weirder: beta/loss balance issue or bad preference pairs.
- Preference model learns superficial style: chosen/rejected examples differ in length/tone more than correctness.
- SFT makes model obedient but dumb: dataset too narrow or base model too small.
- Model forgets safety/format: no negative examples or eval gate.

## Sources

- https://huggingface.co/docs/trl/index
- https://huggingface.co/docs/trl/sft_trainer
- https://huggingface.co/docs/trl/dpo_trainer
- https://huggingface.co/docs/trl/grpo_trainer
- https://huggingface.co/docs/trl/example_overview
