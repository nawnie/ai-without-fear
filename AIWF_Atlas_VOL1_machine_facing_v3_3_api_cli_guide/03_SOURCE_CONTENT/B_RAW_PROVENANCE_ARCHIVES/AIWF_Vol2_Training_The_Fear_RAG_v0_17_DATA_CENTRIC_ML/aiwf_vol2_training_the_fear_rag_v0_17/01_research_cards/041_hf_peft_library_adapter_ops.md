# Hugging Face PEFT — Adapter Operations Layer

## Scope

PEFT is the adapter layer for efficient fine-tuning in the Hugging Face ecosystem. It is not “a trainer” by itself. It is the library that lets other trainers fine-tune a small number of additional parameters instead of updating the whole model.

## Methods to track

- LoRA: low-rank adapters, the main consumer training workhorse.
- QLoRA: quantized base model plus trainable adapters; central for single-GPU LLM training.
- DoRA: decomposes magnitude and direction for improved adapter behavior in some settings.
- AdaLoRA: redistributes rank budget by importance instead of fixed rank everywhere.
- IA3: lightweight learned scaling vectors.
- Prefix/prompt tuning: learns prompt-like continuous vectors rather than broader module adapters.

## Core settings

- `r`: LoRA rank. Higher rank increases capacity and VRAM.
- `lora_alpha`: adapter scale. Often paired with rank.
- `lora_dropout`: regularization; useful for small/noisy datasets.
- `target_modules`: which layers receive adapters.
- `bias`: whether bias terms are trained.
- `task_type`: causal LM, seq2seq, etc.
- quantization config when using QLoRA.

## Consumer hardware rules

- For most hobbyist LLM training, start with QLoRA or LoRA before any full fine-tune.
- Increase quality first through dataset cleanup, not rank inflation.
- Rank is not magic. If the dataset is bad, higher rank overfits faster.
- QLoRA reduces base-weight memory but activations, sequence length, optimizer state, and dataloader behavior still matter.

## Image/video relation

Diffusion LoRA training uses the same broad concept—small low-rank updates—though the implementation stack differs from PEFT-style LLM training. AIWF should explicitly teach the shared principle and the different file ecosystems:

- LLM LoRA adapters: often PEFT/HF folders or merged models.
- Stable Diffusion/Flux LoRAs: usually `.safetensors` adapter files used in ComfyUI/A1111/Forge.
- Video LoRAs: model-family-specific and sensitive to resolution, frame count, and motion captions.

## AIWF wrapper opportunity

Build an Adapter Doctor that reads an adapter folder/file and records:

- base model compatibility;
- adapter type;
- rank/alpha;
- target modules;
- training dataset summary;
- license and consent status;
- eval result;
- recommended inference loader.

## Common failure signatures

- Adapter loads but does nothing: wrong base model, wrong target modules, or missing merge/load step.
- Adapter makes model worse globally: over-trained, too high learning rate, bad chat template, or dataset style contamination.
- Adapter works in trainer but not inference UI: tokenizer/template/export mismatch.
- QLoRA run OOM despite quantization: sequence length and activation memory dominate.

## Sources

- https://huggingface.co/docs/peft/index
- https://huggingface.co/docs/peft/developer_guides/lora
- https://huggingface.co/docs/peft/developer_guides/quantization
- https://huggingface.co/docs/peft/package_reference/adalora
