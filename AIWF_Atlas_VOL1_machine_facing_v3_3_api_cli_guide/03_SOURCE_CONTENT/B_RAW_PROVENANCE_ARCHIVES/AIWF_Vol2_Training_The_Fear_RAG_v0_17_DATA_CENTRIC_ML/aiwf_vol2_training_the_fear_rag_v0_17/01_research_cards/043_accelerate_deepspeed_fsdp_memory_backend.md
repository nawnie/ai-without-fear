# Accelerate, DeepSpeed, and FSDP — Memory Backend Map

## Scope

Accelerate, DeepSpeed, and FSDP are not model types. They are memory/distributed-training control systems. AIWF needs to explain these because many beginners misread “supports DeepSpeed/FSDP” as “will fit on my GPU.”

## Concepts

### Gradient accumulation

Simulates a larger batch by accumulating gradients across several smaller steps. It reduces per-step VRAM but increases wall-clock time.

### Gradient checkpointing

Recomputes some activations during backward pass instead of storing them all. Saves VRAM, costs speed.

### Offload

Moves optimizer states, parameters, or shards to CPU/NVMe. Can make impossible runs fit, but may be painfully slow.

### FSDP

Fully Sharded Data Parallel splits model states across devices. Strong for multi-GPU, less magical for one consumer GPU.

### DeepSpeed ZeRO

ZeRO stages partition optimizer states, gradients, and parameters. ZeRO-Offload and ZeRO-Infinity can push memory pressure to CPU/NVMe.

## Consumer interpretation

- Single 8–16GB GPU: prefer QLoRA, low sequence length, small model, gradient checkpointing.
- Single 24GB GPU: QLoRA 7B/13B class experiments are much more realistic; some larger edge cases may work with severe compromises.
- Multiple 24GB GPUs: FSDP/DeepSpeed become more important; still requires skill.
- NVMe offload is a rescue tool, not a performance feature.

## AIWF config warnings

Display warnings when:

- sequence length is high for available VRAM;
- batch size > 1 on a small GPU;
- full fine-tune selected on a large model;
- DeepSpeed/FSDP selected without multiple GPUs;
- CPU/NVMe offload selected on a weak CPU or slow disk;
- eval and checkpoint frequency are too aggressive.

## Failure signatures

- OOM after several steps: memory fragmentation, eval/checkpoint spike, dataloader issue, or variable sequence/image sizes.
- OOM only during eval: eval batch size or generation max tokens too high.
- Training crawls: CPU/NVMe offload bottleneck.
- Checkpoint folder is huge and fragmented: sharded state dict or frequent full saves.

## Sources

- https://huggingface.co/docs/accelerate/concept_guides/fsdp_and_deepspeed
- https://huggingface.co/docs/accelerate/usage_guides/deepspeed
- https://huggingface.co/docs/accelerate/usage_guides/fsdp
- https://huggingface.co/docs/accelerate/concept_guides/gradient_synchronization
- https://huggingface.co/docs/peft/accelerate/fsdp
