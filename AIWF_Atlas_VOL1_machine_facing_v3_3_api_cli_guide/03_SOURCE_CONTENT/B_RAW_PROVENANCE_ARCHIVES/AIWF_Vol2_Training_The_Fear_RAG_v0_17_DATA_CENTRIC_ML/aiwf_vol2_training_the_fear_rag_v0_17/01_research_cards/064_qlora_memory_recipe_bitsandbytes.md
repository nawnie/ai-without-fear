# QLoRA Memory Recipe and BitsAndBytes — Consumer GPU Survival Notes

## What QLoRA changes
QLoRA backpropagates through a frozen 4-bit quantized base model into trainable LoRA adapters. This is not the same as training a 4-bit model from scratch. The base model is compressed for memory, while adapter weights carry the update.

## Core QLoRA ingredients
- 4-bit NormalFloat (NF4)
- double quantization
- paged optimizers
- LoRA adapters
- often gradient checkpointing
- often bfloat16/float16 compute depending on GPU support and trainer

## Why it fits consumer GPUs
The main memory hogs in training are model weights, gradients, optimizer states, activations, and temporary buffers. QLoRA reduces base weight memory and avoids optimizer states for the frozen model. Paged optimizers help handle memory spikes.

## Practical knobs that affect memory most
1. Model size.
2. Sequence length.
3. Batch size.
4. Gradient checkpointing.
5. Optimizer state precision.
6. LoRA rank and target modules.
7. Activation checkpoint/offload settings.

## BitsAndBytes notes
BitsAndBytes provides 8-bit optimizers and quantization utilities used heavily in QLoRA workflows. Official docs say 8-bit optimizer states can reduce GPU memory substantially compared with 32-bit optimizer states.

## Good default pattern for LLM consumer QLoRA
- Start with a 3B–8B model on 12GB.
- Start with a 7B–14B model on 16GB depending on context length and trainer.
- Use load_in_4bit / QLoRA path.
- Use paged_adamw_8bit or trainer-recommended equivalent.
- Use gradient checkpointing.
- Keep sequence length conservative first.
- Use rank 16 or 32 before trying higher.
- Run a small smoke test before a full run.

## Smoke test protocol
Before full training:
1. Train for 20–50 steps.
2. Confirm no OOM.
3. Confirm loss is finite.
4. Confirm checkpoint saves.
5. Confirm adapter loads for inference.
6. Run 5 fixed eval prompts.

## Common failure signatures

### OOM immediately
Likely model too large, sequence too long, batch too high, or not actually quantized.

### OOM after several steps
Likely memory fragmentation, dataloader variation, long sample, checkpoint save spike, or eval running with too much context.

### Loss NaN
Possible LR too high, precision issue, bad sample, tokenizer/chat template mismatch, or optimizer instability.

### Adapter loads but changes nothing
Wrong target modules, no trainable params, dataset labels masked incorrectly, training too short, or inference did not load adapter.

## AIWF preset-builder rule
Every QLoRA preset should include an explicit "memory levers in order" list: reduce sequence length, reduce batch, enable checkpointing, reduce rank, reduce target modules, reduce model size.

## Sources
- QLoRA paper: https://arxiv.org/abs/2305.14314
- BitsAndBytes 8-bit optimizers: https://huggingface.co/docs/bitsandbytes/en/optimizers
- PEFT LoRA docs: https://huggingface.co/docs/peft/package_reference/lora
- TRL PEFT integration: https://huggingface.co/docs/trl/en/peft_integration
