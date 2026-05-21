# Adapter Method Decision Tree — LoRA, QLoRA, DoRA, rsLoRA, IA3, Prefix, Full Fine-Tune

## What problem this card solves
A RAG assistant must decide whether to recommend LoRA, QLoRA, DoRA, rsLoRA, full fine-tuning, or no fine-tuning. This decision should be driven by the user's hardware, dataset size, task type, deployment target, and tolerance for instability.

## Baseline definitions

### LoRA
Low-Rank Adaptation freezes the base model and trains small low-rank update matrices. The original paper reports major reductions in trainable parameters and GPU memory compared with full fine-tuning while avoiding extra inference latency once merged.

### QLoRA
QLoRA keeps the pretrained model quantized in 4-bit while training LoRA adapters through it. Its core ingredients are 4-bit NormalFloat (NF4), double quantization, and paged optimizers. It was shown to make very large model fine-tuning feasible on far less memory than full precision training.

### DoRA
Weight-Decomposed LoRA separates magnitude and direction updates. In practical terms: it aims to improve LoRA learning capacity and stability while keeping the adapter concept intact.

### rsLoRA
Rank-Stabilized LoRA changes adapter scaling from alpha/r to alpha/sqrt(r), which makes higher ranks more usable.

### IA3 / Prefix / Prompt tuning
These are smaller PEFT methods. They are useful for some research and constrained deployments, but LoRA-family methods dominate practical consumer training workflows because the tooling is broader and results are easier to inspect.

### Full fine-tuning
Full fine-tuning updates the whole model. It is usually not a consumer-GPU default for LLMs. It can still be relevant for small models, classifier heads, embeddings, audio modules, or when using cloud/multi-GPU hardware.

## Decision tree

### Use RAG instead of fine-tuning when
- The model needs facts that change.
- The user wants source-grounded answers.
- The dataset is mostly documents/manuals/SOPs.
- The failure is lack of knowledge, not lack of behavior.
- The user cannot define a stable eval set.

### Use SFT LoRA when
- The model knows the facts but answers in the wrong format, voice, structure, or workflow.
- The goal is style/behavior/tool-call formatting/domain procedure.
- The dataset is high-quality instruction/response pairs.
- The base model already has the needed general capability.

### Use QLoRA when
- VRAM is the bottleneck.
- The target model is too large for normal 16-bit LoRA.
- Slight extra setup complexity is acceptable.
- Inference will remain adapter-based or later merged into a higher precision base.

### Use DoRA when
- LoRA underfits or loses nuance at reasonable rank.
- The trainer stack supports it cleanly.
- The user can afford slightly more experimentation.
- The project needs better fidelity but still cannot afford full fine-tune.

### Use rsLoRA when
- Rank is increased above typical small values.
- The model needs more capacity, but high-rank LoRA becomes unstable or underlearns.
- The trainer supports use_rslora or equivalent.

### Use preference optimization after SFT when
- The base behavior exists but ranking of good vs bad outputs is wrong.
- There are chosen/rejected pairs.
- The project has a clear rubric.
- The user can evaluate reward hacking risk.

### Use GRPO/RL-style methods only when
- There is a verifiable reward function or tight automatic grader.
- The task is math/code/game/search/action-like and can be scored.
- The user accepts complexity and instability.

## Consumer hardware rule
For 12–16GB GPUs, default to QLoRA/LoRA on 3B–14B LLMs, image LoRAs, embeddings, rerankers, and small VLM adapters. Avoid full fine-tuning large LLMs. For 24GB GPUs, more 14B training options open, but clean data still matters more than parameter count.

## AIWF recommendation logic
1. Ask: is the problem knowledge, behavior, identity/style, retrieval, or generation quality?
2. Ask: can we evaluate it?
3. Ask: can data be legally/ethically used?
4. Ask: is the base model already close?
5. Pick the smallest intervention that can solve the failure.

## Sources
- LoRA paper: https://arxiv.org/abs/2106.09685
- QLoRA paper: https://arxiv.org/abs/2305.14314
- DoRA paper: https://arxiv.org/abs/2402.09353
- rsLoRA paper: https://arxiv.org/abs/2312.03732
- Hugging Face PEFT LoRA docs: https://huggingface.co/docs/peft/package_reference/lora
- Hugging Face TRL docs: https://huggingface.co/docs/trl/en/index
