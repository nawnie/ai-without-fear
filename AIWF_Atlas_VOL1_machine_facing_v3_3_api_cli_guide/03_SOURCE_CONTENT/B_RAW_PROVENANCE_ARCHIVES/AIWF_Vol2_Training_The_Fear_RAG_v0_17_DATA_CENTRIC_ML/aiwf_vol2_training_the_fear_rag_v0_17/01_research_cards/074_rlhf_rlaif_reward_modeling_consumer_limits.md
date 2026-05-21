# RLHF, RLAIF, Reward Modeling — Consumer-Hardware Reality Card

## What this is

RLHF means reinforcement learning from human feedback. In the classic pipeline, humans rank outputs, a reward model learns those preferences, and the policy model is optimized against that reward signal. RLAIF swaps or supplements human labels with AI-generated feedback. In modern local training language, the umbrella is **post-training**: SFT first, then preference/reward/RL-style tuning if needed.

## What can run on consumer hardware

### Practical on 12–24GB VRAM

- SFT LoRA/QLoRA on 1B–14B models depending on sequence length.
- DPO/ORPO/KTO-style LoRA runs on small-to-mid models with careful batch/sequence control.
- Reward-model experiments on small models or classifier heads.
- Rule-based or verifiable reward experiments on small reasoning/math/code tasks.

### Difficult or usually impractical locally

- Full PPO-style RLHF on large models.
- Reward model + policy + reference model loaded together at large size.
- Multi-turn RL with long context and high rollout counts.
- Production-grade human preference pipelines unless the user has labeling staff or a carefully scoped dataset.

## The core trap

RLHF is not a magic capability booster. It reshapes behavior around a reward signal. If the reward signal is bad, the model learns to game it. If the base model is weak, alignment cannot invent deep knowledge. If the preference data is inconsistent, the model becomes inconsistent.

## AIWF rule

Do not recommend RLHF to beginners as a first training method. Recommend this ladder:

1. RAG first if the issue is knowledge freshness or document access.
2. SFT/LoRA if the issue is style, format, domain procedure, or task pattern.
3. DPO/ORPO/KTO if the issue is choosing better answers over worse answers.
4. GRPO/RLVR-style training only if the reward can be checked automatically.
5. PPO/RLHF only for advanced users with clear reward-model/evaluation infrastructure.

## RLAIF use cases

RLAIF is useful when:

- the domain has clear rubrics,
- humans can audit samples,
- the judge model is strong enough for the task,
- the goal is preference bootstrapping, not final truth.

It is risky when:

- the judge model shares the same blind spots as the target model,
- the rubric is vague,
- the dataset contains legal/medical/financial stakes,
- synthetic preference labels are never manually audited.

## Consumer run pattern

For a local user:

1. Generate 2–4 candidate answers per prompt.
2. Rank or label them with a simple rubric.
3. Keep the raw prompt, chosen answer, rejected answer, labeler, rationale, and date.
4. Run DPO/ORPO first, not full PPO.
5. Evaluate against a frozen private benchmark before and after.

## Sources

- Hugging Face TRL docs: https://huggingface.co/docs/trl/en/index
- TRL GitHub: https://github.com/huggingface/trl
- TRL DPO Trainer docs: https://huggingface.co/docs/trl/en/dpo_trainer
- TRL GRPO Trainer docs: https://huggingface.co/docs/trl/en/grpo_trainer
- OpenAI rule-based reward safety paper: https://cdn.openai.com/rule-based-rewards-for-language-model-safety.pdf
