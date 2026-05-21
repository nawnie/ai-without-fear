# Optimizers and Schedulers — Consumer Training Decision Notes

## Why this matters
Optimizer and scheduler choices determine whether a run learns smoothly, overfits late, burns the concept, or OOMs due to optimizer state. For AIWF, the goal is not to rank every optimizer; it is to provide sane first-pass choices and escalation paths.

## Optimizers

### AdamW
AdamW is the standard baseline for most deep learning fine-tuning. It decouples weight decay from the gradient update, which is why it is usually preferred over older Adam + L2 regularization patterns.

Use when:
- You want the most broadly supported default.
- You are comparing methods.
- The trainer docs recommend it.

### AdamW 8-bit / paged AdamW 8-bit
BitsAndBytes 8-bit optimizers reduce optimizer-state memory. Paged variants help with memory spikes and are commonly used in QLoRA recipes.

Use when:
- VRAM is tight.
- QLoRA is being used.
- A normal optimizer OOMs.

### Adafactor
Adafactor is often used where memory reduction matters, especially in transformer workflows. It can work well but is not the universal beginner default unless the trainer/model recipe expects it.

### Prodigy
Prodigy is an adaptive optimizer used in some diffusion LoRA workflows. It can reduce manual LR tuning, but it is not always ideal for low VRAM or every model family.

Use when:
- The trainer workflow has tested Prodigy presets.
- You compare against AdamW.
- You understand the trainer-specific LR convention.

### Sophia / Lion / Muon-style optimizers
These matter for research and pretraining efficiency, but they are not the first beginner recommendation for consumer post-training unless integrated cleanly into the chosen trainer.

## Schedulers

### Constant
Simple and predictable. Can work for short LoRA runs. Risk: if LR is high, it can burn late.

### Constant with warmup
Useful when early training is unstable. Risk: in some LoRA workflows, too much warmup delays learning and then hits full LR too late.

### Cosine
Common for training where a gradual decay is desirable. Often safer for longer runs because LR tapers down.

### Linear
Simple decay; useful when you want predictable end-of-run slowdown.

### Cosine with warmup
Strong default candidate for many longer runs: warm up, learn, then decay.

## AIWF starting recommendations

LLM QLoRA/SFT:
- optimizer: paged_adamw_8bit or trainer default
- scheduler: cosine or linear with warmup
- LR: start around 0.0002 for normal LoRA/QLoRA SFT; lower for DPO/GRPO-style methods

Diffusion LoRA:
- optimizer: AdamW 8-bit/AdamW or trainer default; compare Prodigy only with known good presets
- scheduler: cosine, constant, or cosine with warmup depending on model/trainer
- LR: start conservatively and compare checkpoint samples over time

Embedding/reranker:
- optimizer: AdamW
- scheduler: linear/cosine with warmup
- eval: retrieval metrics, not generated text vibes

## Field rule
Never change optimizer, scheduler, LR, rank, and dataset at once. That destroys diagnosis.

## Sources
- AdamW paper: https://arxiv.org/abs/1711.05101
- BitsAndBytes optimizer docs: https://huggingface.co/docs/bitsandbytes/en/optimizers
- Prodigy repo: https://github.com/konstmish/prodigy
- Sophia paper: https://arxiv.org/abs/2305.14342
- PyTorch AdamW docs: https://docs.pytorch.org/docs/stable/generated/torch.optim.AdamW.html
- Diffusers advanced SDXL LoRA script notes: https://huggingface.co/blog/sdxl_lora_advanced_script
