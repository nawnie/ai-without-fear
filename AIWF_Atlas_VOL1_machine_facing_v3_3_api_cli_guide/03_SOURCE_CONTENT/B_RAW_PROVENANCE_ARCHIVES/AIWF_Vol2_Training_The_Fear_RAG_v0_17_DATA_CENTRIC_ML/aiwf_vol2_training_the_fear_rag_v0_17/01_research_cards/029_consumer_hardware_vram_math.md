# Consumer Hardware VRAM Math — What Can Actually Be Trained Locally

## Purpose

This card gives AIWF a practical mental model for consumer training capacity. It is not a fixed benchmark table because trainer versions, attention kernels, CUDA builds, quantization, optimizer choice, image resolution, batch size, and sequence length change the answer. It is a planning model.

## Core rule

Consumer training is usually not limited by raw compute first. It is limited by **VRAM residency**:

- model weights
- gradients or adapter gradients
- optimizer states
- activations
- attention cache/intermediate tensors
- dataloader/image/video buffers
- safety overhead and fragmentation

The same 16GB GPU can feel huge for SD1.5 LoRA and tiny for modern video LoRA.

## Rough memory components

### Full fine-tuning

Full fine-tuning stores or computes:

- base model weights
- gradients for most/all parameters
- optimizer states, commonly much larger than the raw weights under Adam-like optimizers
- activations for backpropagation

This is why full fine-tuning modern LLMs is usually not a consumer path.

### LoRA / adapter training

Adapter training freezes most base weights and trains small injected matrices or modules. Memory use drops because optimizer states and gradients are mostly for the adapter, not the whole model.

### QLoRA

QLoRA quantizes the frozen base model to 4-bit while training LoRA adapters through it. The QLoRA paper introduced the practical combination of 4-bit NormalFloat, double quantization, and paged optimizers to reduce memory spikes.

### Diffusion LoRA

Diffusion LoRA training depends heavily on:

- base architecture: SD1.5, SDXL, SD3/3.5, Flux, Wan, LTX, Hunyuan
- target modules: UNet/DiT, text encoder, both, selected blocks
- resolution and bucketing
- batch size and gradient accumulation
- optimizer: AdamW, Adafactor, Prodigy, 8-bit AdamW, etc.
- precision: fp16, bf16, fp8/quantized experiments

### Video LoRA

Video adds the time dimension. Frame count, latent resolution, temporal modules, cache strategy, and clip sampling can dominate the memory picture. A video LoRA may train on stills plus short clips, not cinematic sequences, on consumer cards.

## Practical local capability tiers

### 8GB VRAM

Likely viable:

- SD1.5 LoRA/Textual Inversion.
- Small LLM LoRA/QLoRA experiments with short context and aggressive quantization.
- Small embedding/reranker fine-tuning.
- Dataset prep, captioning, evaluation, metadata tooling.

Usually painful:

- SDXL LoRA unless carefully optimized.
- Modern video LoRA.
- 7B+ LLM QLoRA with comfortable context.

### 12GB VRAM

Likely viable:

- SD1.5 and many SDXL LoRAs.
- 7B-class LLM QLoRA with constrained sequence length.
- small VLM/embedding/reranker fine-tunes.
- some Flux/SD3 experiments with trainer-specific optimization.

Usually constrained:

- 13B-class LLM QLoRA.
- high-resolution diffusion LoRAs.
- video LoRA except narrow/optimized cases.

### 16GB VRAM

Likely viable:

- SDXL LoRA, Flux LoRA with tuned settings, SD3-family LoRA depending on trainer.
- 7B QLoRA comfortably; some 13B QLoRA with sequence-length compromise.
- image captioning/tagging pipelines locally.
- lightweight video LoRA attempts for Wan/LTX/Hunyuan if the trainer supports caching/low-memory strategies.

This is the RTX 4070 Ti Super class: good enough to teach serious training, not enough to pretend every modern model is local-friendly.

### 24GB VRAM

Likely viable:

- more comfortable Flux/SDXL/SD3 LoRAs.
- many 13B LLM QLoRA runs.
- some larger video LoRA experiments with short clips.
- stronger local evaluation loops.

Still not realistic:

- large full fine-tunes.
- foundation model pretraining.
- high-frame, high-resolution video training without major tradeoffs.

### 48GB+ VRAM

Begins to open:

- 33B/65B-class QLoRA experiments in research settings.
- more comfortable video training.
- multi-modal fine-tuning at useful batch sizes.

But this is no longer typical consumer hardware.

## AIWF teaching rule

Never teach “can train” as a binary. Teach:

- Can train comfortably.
- Can train with compromises.
- Can technically launch but not useful.
- Should use cloud or smaller target.
- Should use RAG or prompting instead of training.

## Hardware variables to log in every card

Every training card should record:

- GPU model and VRAM.
- Driver/CUDA/PyTorch versions.
- OS.
- Trainer commit/release.
- Base model exact ID and precision.
- Batch size, grad accumulation, resolution or sequence length.
- Optimizer and precision.
- Gradient checkpointing/xformers/flash-attn flags.
- Peak VRAM.
- Step time.
- Result quality notes.

## Failure signatures

- Immediate OOM: model/activation residency too high.
- OOM after several steps: optimizer state, caching, fragmentation, leak, dynamic shapes, video buffers.
- Loss goes down but outputs worsen: dataset overfit, bad captions, too high LR, repeated examples.
- Training runs but no effect: adapter not loaded, wrong target modules, LR too low, rank too low, captions too weak.
- Good training previews but bad inference: inference pipeline mismatch, wrong trigger, bad sampler assumptions, model family mismatch.

## Sources

- QLoRA paper: https://arxiv.org/abs/2305.14314
- LoRA paper: https://arxiv.org/abs/2106.09685
- bitsandbytes: https://github.com/bitsandbytes-foundation/bitsandbytes
- Hugging Face PEFT docs: https://huggingface.co/docs/peft/en/index
- SimpleTuner: https://github.com/bghira/SimpleTuner
- musubi-tuner: https://github.com/kohya-ss/musubi-tuner
