# 027 — Training Theory: Core Laws and Failure Rules

## Purpose

These are AIWF teaching laws: practical rules that explain why training succeeds or fails across LLMs, images, video, embeddings, and voice.

## Law 1 — Dataset is the teacher

The model learns the statistical pattern of the examples it sees. If the dataset is noisy, narrow, mislabeled, duplicated, or legally unsafe, training will amplify those problems.

## Law 2 — Training changes behavior, not truth

SFT can teach response patterns. It is not a reliable database update. If the goal is facts, use RAG first. Fine-tuning facts into a model is brittle unless the domain is stable, narrow, and repeatedly evaluated.

## Law 3 — Overfit is memorization wearing a mask

A model that perfectly reproduces training examples may look good in demos and fail in real use. Always hold out examples and test prompts/images/clips it never saw.

## Law 4 — Underfit is not enough signal

If the output does not change, the concept may be too weak, too rare, poorly captioned, trained on the wrong modules, or drowned by regularization/offload/settings.

## Law 5 — More data is not automatically better

More bad data is worse than less clean data. Diversity matters only when it supports the concept instead of adding contradictions.

## Law 6 — More steps are not automatically better

Steps are exposure. Past the useful learning point, more steps can harden artifacts, reduce flexibility, and destroy general behavior.

## Law 7 — Learning rate is force

Too little force: no learning. Too much force: instability, collapse, artifacts, or catastrophic style drift. The right value depends on model family, optimizer, adapter rank, dataset size, and target modules.

## Law 8 — Rank is capacity

LoRA rank controls how much change the adapter can express. Higher rank can learn more detail but can also memorize and cost more VRAM/storage. Low rank may be enough for style; identity/object/motion may need more capacity.

## Law 9 — Captioning defines what is separable

If captions never name the difference between subject, clothing, background, style, and action, the model may bind them together.

## Law 10 — Validation must be fixed before training

A user cannot honestly judge improvement if the tests change after seeing results. Use fixed prompts, fixed seeds, fixed holdout examples, and written success criteria.

## Law 11 — Loss is a signal, not a verdict

Loss curves show optimization behavior. They do not prove the model is useful, safe, or better. Always pair loss with behavioral evaluation.

## Law 12 — Hardware limits shape method choice

Consumer GPUs can do useful adapter training. They are not datacenters. Sequence length, resolution, frames, batch size, optimizer state, and activation memory are the true cost drivers.

## Law 13 — Adapter training is usually the right first answer

For consumers, LoRA/QLoRA/adapter methods usually beat full fine-tuning on cost, safety, reversibility, and shareability.

## Law 14 — Video adds time as a dimension of failure

Image LoRA learns appearance. Video LoRA also has to learn persistence, motion, transitions, camera behavior, and temporal consistency.

## Law 15 — Voice adds identity and fraud risk

Voice models are not just audio tools. They can impersonate people. Consent, disclosure, and intended-use limits are core training requirements.

## Law 16 — Evaluation must match deployment

A chatbot trained on support tickets should be evaluated on realistic support prompts. A LoRA trained for product photos should be tested on product-photo prompts, not only beauty shots.

## Law 17 — Reproducibility beats vibes

Record base model, commit/version, dataset, seed, settings, trainer, environment, and eval prompts. If a result cannot be repeated, it cannot be taught.

## Law 18 — The cheapest fix is before training starts

Most failures are cheaper to fix in the dataset than after a 12-hour run.

## AIWF conversion

These laws should become sidebars, checklists, warning callouts, and Dataset Doctor rules throughout Vol. 2.
