# Distillation, Teacher-Student Training, and Synthetic Data

## What distillation is

Distillation transfers behavior from a stronger or larger teacher model into a smaller student model. It can be done with soft logits, rationales, generated examples, answer traces, or preference labels.

## Consumer-hardware relevance

Distillation is one of the most important AIWF topics because users with 12–24GB VRAM often cannot run or train frontier-scale models, but they can:

- ask a larger teacher model to generate examples,
- train a smaller local model on those examples,
- use a teacher to create preference pairs,
- use a teacher to critique or rewrite weak data,
- distill a domain-specific assistant into a 3B–14B local model.

## Types

### Logit distillation

The student learns from the teacher probability distribution. More technical, less common in beginner local workflows.

### Response distillation

The teacher generates high-quality answers. The student trains on the answers through SFT.

### Reasoning/rationale distillation

The teacher generates reasoning traces or structured explanations. Risk: hidden chain-of-thought licensing/safety concerns and overfitting to verbose reasoning patterns. Safer beginner pattern: train on concise explanations, rubrics, and final answer formats rather than pretending the model learned true internal reasoning.

### Preference distillation

The teacher ranks or labels model outputs. The student trains with DPO/KTO/ORPO.

### Tool-use distillation

The teacher demonstrates when to call tools and how to format tool arguments. Useful for agent/workflow bots.

## Dataset quality rules

- Keep teacher identity and license metadata.
- Store generation settings.
- Keep raw prompts, outputs, filters, and human audit results.
- Deduplicate aggressively.
- Do not use the same teacher-generated set for training and final evaluation.
- Mix synthetic data with human-authored examples where possible.

## Failure modes

- Student imitates teacher mistakes.
- Dataset becomes too polished and loses real user messiness.
- Model learns verbosity instead of skill.
- Synthetic examples collapse into a narrow style.
- Distilled refusal/safety style may not match the user’s deployment policy.

## AIWF recommendation

Build a **Synthetic Data Ledger** inside Dataset Doctor:

- source prompt,
- teacher model,
- teacher license/terms note,
- generation parameters,
- filter model,
- human audit status,
- intended use,
- exclusion flags,
- train/eval split.

## Sources

- DistilBERT paper: https://arxiv.org/abs/1910.01108
- Hugging Face Optimum Intel optimization docs: https://huggingface.co/docs/optimum-intel/index
- Hugging Face TRL docs for preference/post-training: https://huggingface.co/docs/trl/en/index
