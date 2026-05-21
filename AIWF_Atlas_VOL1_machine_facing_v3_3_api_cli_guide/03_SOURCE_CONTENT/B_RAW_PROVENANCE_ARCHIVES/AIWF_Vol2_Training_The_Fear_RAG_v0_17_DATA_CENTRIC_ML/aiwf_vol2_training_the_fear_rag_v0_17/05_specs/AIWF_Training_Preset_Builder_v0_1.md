# AIWF Training Preset Builder v0.1

## Purpose
Generate safe starter configs for existing trainers. This is not a trainer. It is a decision engine and run-pack generator.

## Inputs
- task_type: LLM SFT, LLM preference, embedding, reranker, image LoRA, video LoRA, voice/audio, VLM
- hardware: GPU model, VRAM, RAM, OS, CUDA/PyTorch state
- base_model: model ID/path, size, family, license
- dataset_manifest: path, format, size, split, source status
- target_runtime: ComfyUI, Ollama/llama.cpp, Transformers, vLLM, Diffusers, trainer preview, other
- risk_level: private experiment, shared model, commercial use

## Outputs
- trainer recommendation
- config file
- PowerShell launch command
- memory risk notes
- smoke test plan
- eval checklist
- release pack template

## Preset strategy
The builder should start conservative, then escalate:
1. RAG before fine-tune when knowledge is the issue.
2. LoRA/QLoRA before full fine-tune.
3. Small model before large model.
4. Clean data before advanced adapter variants.
5. Smoke test before full run.

## Trainer bridge candidates
- LLM: Unsloth, LLaMA-Factory, Axolotl, TRL, torchtune
- Embedding/RAG: Sentence Transformers, FlagEmbedding
- Image/video: SimpleTuner, AI Toolkit, OneTrainer, musubi-tuner, Diffusers scripts
- Voice/audio: GPT-SoVITS, Whisper fine-tune stack, RVC-style tools when consented

## Config fields to normalize
- learning_rate
- optimizer
- scheduler
- warmup
- rank
- alpha
- dropout
- batch size
- gradient accumulation
- max sequence length / resolution / frames
- precision / quantization
- checkpoint cadence
- eval cadence
- output format

## Safety rule
If source_status contains unknown, restricted, personal-sensitive, voice/face without consent, or license conflict, builder must stop or mark run as private research only with warnings.
