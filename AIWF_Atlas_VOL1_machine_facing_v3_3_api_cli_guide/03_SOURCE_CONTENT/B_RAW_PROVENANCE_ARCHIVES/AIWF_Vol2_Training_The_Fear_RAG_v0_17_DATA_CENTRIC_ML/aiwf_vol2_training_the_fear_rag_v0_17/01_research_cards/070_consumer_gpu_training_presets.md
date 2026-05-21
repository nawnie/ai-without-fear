# Consumer GPU Training Presets — 12GB, 16GB, 24GB Field Defaults

## Purpose
These are not guaranteed universal settings. They are starting presets for AIWF's Training Preset Builder. Each preset must be smoke-tested on the user's actual install.

## 12GB VRAM

### LLM behavior adapter
- target model: 1B–8B preferred
- method: QLoRA
- rank: 8–16
- sequence length: 1024–2048 first
- batch: 1
- grad accumulation: 4–16
- optimizer: paged AdamW 8-bit / trainer default
- use case: style, format, small domain behavior

### Embedding/reranker
- method: fine-tune small/medium embedding model or cross-encoder
- batch: tune to memory
- use case: RAG improvement, document search, AIWF manual retrieval

### Image LoRA
- target: SD1.5/SDXL/selected modern image models depending on trainer
- resolution: conservative first
- rank: 8–32
- use case: style, character, object

### Avoid first
- full LLM fine-tune
- high-context 14B QLoRA
- video LoRA unless very constrained/trainer-specific

## 16GB VRAM

### LLM behavior adapter
- target model: 3B–14B depending on trainer/model/context
- method: QLoRA
- rank: 16–32
- sequence length: 2048 first, increase after smoke test
- use case: practical local assistant behavior training

### Image LoRA
- target: SDXL, Flux-lite/dev variants if trainer supports consumer settings
- rank: 16–64 depending on goal
- use case: higher quality identity/style

### Video LoRA
- possible but constrained
- use shorter clips, smaller frame counts, lower resolution, and trainer-specific presets

## 24GB VRAM

### LLM behavior adapter
- target model: 7B–14B comfortable; larger may be possible with compromises
- method: LoRA/QLoRA
- rank: 16–64
- sequence length: 2048–4096+ depending on model and trainer

### Image/video
- broader Flux/SDXL/Wan/LTX experimentation possible
- still treat video LoRA as expensive and fragile

## Universal smoke test
- 20–50 steps
- save checkpoint
- load checkpoint
- run fixed prompts
- check VRAM peak
- check loss finite
- check logs for silent fallback or missing trainable params

## AIWF preset metadata
Every preset should declare:
- minimum VRAM
- tested OS/backend
- trainer/version
- model family
- method
- known risks
- expected time class
- eval checklist
- rollback path

## Sources
- QLoRA paper: https://arxiv.org/abs/2305.14314
- LLaMA-Factory docs: https://github.com/hiyouga/LLaMA-Factory
- Unsloth docs: https://unsloth.ai/docs/get-started/fine-tuning-llms-guide
- Axolotl repo: https://github.com/axolotl-ai-cloud/axolotl
- SimpleTuner repo/docs: https://github.com/bghira/SimpleTuner
- AI Toolkit repo: https://github.com/ostris/ai-toolkit
- musubi-tuner repo: https://github.com/kohya-ss/musubi-tuner
