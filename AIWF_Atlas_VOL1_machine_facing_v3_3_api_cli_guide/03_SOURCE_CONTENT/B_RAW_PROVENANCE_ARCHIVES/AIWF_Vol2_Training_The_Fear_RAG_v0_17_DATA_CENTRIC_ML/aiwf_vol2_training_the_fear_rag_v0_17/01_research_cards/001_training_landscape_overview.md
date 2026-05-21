# 001 — Training Landscape Overview

## Short version

The modern training ecosystem is no longer just kohya_ss, EveryDream2, and DreamBooth. Those still matter historically, but the active landscape splits into several lanes:

1. **Bot/LLM training** — Unsloth, LLaMA-Factory, Axolotl, TRL, torchtune, PEFT.
2. **RAG training** — embedding and reranker fine-tuning using Sentence Transformers, FlagEmbedding/BGE-style tooling, and dataset curation.
3. **Image LoRA training** — SimpleTuner, AI-Toolkit, OneTrainer, kohya_ss/sd-scripts, FluxGym, Diffusers scripts.
4. **Video LoRA training** — musubi-tuner, SimpleTuner, AI-Toolkit, DiffSynth-Studio, LTX-Video-Trainer.
5. **Voice/audio training** — GPT-SoVITS, RVC, F5-TTS, XTTS-family workflows, so-vits-svc history/forks.
6. **Evaluation and release tooling** — TensorBoard, W&B, fixed-prompt sample grids, holdout datasets, model cards, metadata, and adapter deployment.

## AIWF principle

Do not ask beginners to train the world. Teach them how to adapt the part that matters.

For consumer hardware, the main story is **parameter-efficient training**:

- LoRA / LyCORIS / LoHa / LoKr for image and video.
- LoRA / QLoRA / DoRA / OFT-style adapters for LLMs.
- Embedding/reranker fine-tuning for RAG.
- Dataset correction and eval loops for everything.

## Vol. 2 teaching ladder

1. Clean a dataset.
2. Train a small classifier/embedding/reranker.
3. Fine-tune a tiny chatbot.
4. Train a 7B QLoRA assistant adapter.
5. Train an SDXL LoRA.
6. Train a Flux/Z-Image-style adapter with strict limits.
7. Train a consented voice model.
8. Run a small video LoRA experiment.
9. Evaluate results honestly.
10. Package the adapter with a model card.

## What AIWF should build

AIWF should not start by writing a new trainer. The stronger move is to build:

- a trainer selector,
- sane preset packs,
- dataset doctors,
- training result evaluators,
- install scripts,
- and RAG explanations that sit over existing tools.

## Sources

- https://github.com/unslothai/unsloth
- https://github.com/hiyouga/LLaMA-Factory
- https://github.com/axolotl-ai-cloud/axolotl
- https://github.com/huggingface/trl
- https://github.com/bghira/SimpleTuner
- https://github.com/ostris/ai-toolkit
- https://github.com/kohya-ss/musubi-tuner
