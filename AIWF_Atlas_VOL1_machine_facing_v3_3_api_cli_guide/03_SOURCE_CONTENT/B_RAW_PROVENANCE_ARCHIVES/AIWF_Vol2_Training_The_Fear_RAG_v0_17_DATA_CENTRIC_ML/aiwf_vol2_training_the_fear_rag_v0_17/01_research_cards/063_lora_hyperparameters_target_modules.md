# LoRA Hyperparameters and Target Modules — Practical Control Surface

## Why this matters
Bad LoRA settings can look like bad data, bad base model choice, or bad prompting. AIWF needs a field guide that separates those failure modes.

## Core knobs

### Rank / r
Rank controls adapter capacity. Higher rank means more trainable parameters and a larger adapter. Too low can underfit. Too high can overfit, become unstable, or waste memory.

General LLM starting ranges:
- tiny task/style tweak: r = 8 or 16
- normal SFT: r = 16 or 32
- harder domain behavior: r = 32 or 64
- high-rank experiments: use rsLoRA and evaluate carefully

Image LoRA starting ranges:
- simple style: rank 8–16
- character/object: rank 16–32
- complex identity/style mix: rank 32–64, sometimes higher if trainer/model supports it

### Alpha
Alpha scales the adapter update. A common baseline is alpha = 2 × rank for normal LoRA. For some diffusion trainers, alpha equal to rank is also common. The key is not the raw number; it is the ratio and the trainer's implementation.

### Dropout
LoRA dropout can regularize small/dirty datasets, but too much dropout can weaken fidelity. Common LLM starting values are 0.0–0.05. For image identity LoRAs, dropout is often low or disabled unless overfitting is obvious.

### Target modules
Target modules decide which layers receive LoRA adapters. Wrong target modules are a common hard failure.

LLM module examples by architecture:
- Llama/Mistral/Qwen-like: q_proj, k_proj, v_proj, o_proj, gate_proj, up_proj, down_proj
- older GPT/NeoX variants: query_key_value or fused attention names may appear
- some models require architecture-specific target inspection

Beginner-safe policy:
- Start with trainer defaults for the model family.
- Use all-linear targeting only if memory allows and the trainer documentation supports it.
- If the trainer says no modules were targeted, inspect model.named_modules() or use known architecture presets.

### Learning rate
For LLM LoRA/QLoRA SFT, a common starting point is around 0.0002, with lower rates for alignment/RL-style passes such as DPO/GRPO. For diffusion LoRA, common rates vary by trainer/model family; 0.0001 is a frequent safe region for many image LoRA workflows, but Flux/video models may require more conservative choices.

### Batch size and gradient accumulation
Effective batch size = per-device batch × gradient accumulation × number of GPUs. On consumer GPUs, per-device batch is often 1–4. Gradient accumulation simulates a larger batch but does not fully remove memory/time tradeoffs.

### Max sequence length
For LLMs, max sequence length heavily affects memory. If OOM appears, reducing sequence length is often more effective than changing rank.

## Failure signatures

### Underfit
- Model ignores new format/style.
- Loss decreases but outputs remain generic.
- Eval examples show weak adaptation.

Fixes: more/better examples, higher rank, more steps, better base model, target more modules.

### Overfit
- Model memorizes training wording.
- Outputs trigger phrase too often.
- Image LoRA bakes exact background/clothing/pose.

Fixes: lower steps, lower LR, more diverse data, better captions, regularization/repeats adjustment.

### Adapter conflict
- Multiple LoRAs work individually but fail together.
- Style overrides identity or vice versa.

Fixes: lower LoRA weights, merge/stack carefully, test matrix, use separate adapters at inference rather than merging too early.

## AIWF assistant rule
Do not give a LoRA recipe without recording: base model, target modules, rank, alpha, dropout, LR, scheduler, optimizer, steps, batch/grad accumulation, sequence/resolution, dataset count, caption/data format, and eval plan.

## Sources
- Hugging Face PEFT LoRA reference: https://huggingface.co/docs/peft/package_reference/lora
- Hugging Face PEFT LoRA developer guide: https://huggingface.co/docs/peft/en/developer_guides/lora
- Hugging Face TRL PEFT integration: https://huggingface.co/docs/trl/en/peft_integration
- Unsloth LoRA hyperparameter guide: https://unsloth.ai/docs/get-started/fine-tuning-llms-guide/lora-hyperparameters-guide
- Diffusers LoRA training docs: https://huggingface.co/docs/diffusers/en/training/lora
