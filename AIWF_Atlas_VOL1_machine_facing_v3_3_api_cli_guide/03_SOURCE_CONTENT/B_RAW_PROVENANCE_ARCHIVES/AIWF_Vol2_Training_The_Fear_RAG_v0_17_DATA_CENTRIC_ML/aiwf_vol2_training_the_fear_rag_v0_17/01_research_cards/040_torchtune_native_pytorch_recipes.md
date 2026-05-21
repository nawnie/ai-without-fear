# torchtune — Native PyTorch Post-Training Recipes

## Scope

torchtune is a PyTorch-native library for post-training and experimenting with LLMs. It is useful for AIWF because it exposes training mechanics without hiding everything behind a web UI. It is a better teaching reference than many “just run this notebook” projects.

## What it covers

- Supervised fine-tuning recipes.
- LoRA and QLoRA-style adapter training.
- Full fine-tuning recipes.
- Evaluation and generation recipes.
- Quantization-aware workflows in the PyTorch ecosystem.
- YAML-driven recipes that are easier to audit than huge notebooks.

## Why AIWF cares

AIWF Volume 2 needs to teach what training is doing. torchtune fits the “principles transfer” goal because it keeps the stack close to PyTorch:

- model loading;
- tokenizer setup;
- dataset transforms;
- optimizer/scheduler choices;
- gradient accumulation;
- checkpointing;
- eval/generation loop.

## Consumer hardware position

Practical for:

- small LLM SFT;
- LoRA/QLoRA on 1B–8B class models depending on VRAM and sequence length;
- recipe study even when the final training is done in Unsloth, LLaMA-Factory, or Axolotl.

Risky for:

- 13B+ full fine-tuning on single consumer GPUs;
- long-context training without aggressive memory control;
- beginners who need a GUI and do not yet understand datasets.

## Inputs AIWF should document

- base model path or Hugging Face ID;
- tokenizer source;
- dataset path and format;
- sequence length;
- batch size;
- gradient accumulation steps;
- precision: fp16, bf16, fp32;
- optimizer;
- learning rate and scheduler;
- LoRA rank/alpha/dropout/target modules;
- checkpoint cadence;
- eval cadence;
- output adapter path.

## Output artifacts

- adapter checkpoint or full checkpoint;
- training logs;
- eval report;
- merged or unmerged model depending on recipe;
- config file suitable for reproduction.

## AIWF guidance

Use torchtune in the RAG as the “transparent teaching stack.” Do not make it the default one-click beginner path yet unless AIWF writes a protective launcher around it.

## Common failure signatures

- CUDA OOM at first batch: reduce sequence length first, then batch size, then rank, then enable checkpointing/offload.
- Loss drops too quickly to near zero: dataset too small, duplicated, or task too narrow.
- Fine-tuned model loses instruction following: dataset lacks chat template discipline or over-trains narrow completions.
- Checkpoint cannot load elsewhere: export/merge step was skipped or tokenizer/chat template was not saved.

## Sources

- https://github.com/meta-pytorch/torchtune
- https://meta-pytorch.org/torchtune/stable/index.html
- https://pytorch.org/blog/torchtune-fine-tune-llms/
