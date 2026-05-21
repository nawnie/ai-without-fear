# AIWF Trainer Wrapper Architecture — Do Not Rebuild the Trainer

## Thesis

AIWF should not start by writing a new trainer. The winning architecture is a wrapper/orchestrator that speaks human, validates data, chooses existing tools, writes configs, launches jobs, and interprets logs.

## Layers

### 1. Intake Wizard

Asks:

- What are you training: bot, image LoRA, video LoRA, voice/TTS, ASR, embedding/reranker, classifier, VLM?
- What GPU/VRAM/RAM/disk?
- What base model?
- What dataset format?
- What license/consent status?
- What success metric?

### 2. Wheel Check

Searches known projects:

- Unsloth;
- LLaMA-Factory;
- Axolotl;
- TRL/PEFT/Transformers;
- torchtune;
- AutoTrain;
- SimpleTuner;
- AI-Toolkit;
- OneTrainer;
- musubi-tuner;
- GPT-SoVITS;
- Whisper/Wav2Vec2 scripts.

### 3. Dataset Doctor

Validates:

- file format;
- captions/transcripts/chat templates;
- duplicates;
- split leakage;
- token/resolution/frame/audio length;
- license/consent/provenance;
- PII/identity risk;
- class balance and coverage.

### 4. Preset Generator

Writes conservative configs:

- safe starter;
- low VRAM;
- quality;
- speed smoke test;
- eval-only;
- resume.

### 5. Launcher

Uses project-specific environments instead of dependency soup. Each backend can have its own venv/container while AIWF provides one front-end.

### 6. Log Interpreter

Reads logs and maps failure signatures:

- OOM;
- NaN loss;
- exploding loss;
- overfit;
- stuck loss;
- bad eval;
- missing checkpoint;
- dependency mismatch.

### 7. Artifact Registry

Stores:

- base model ID/hash;
- dataset manifest;
- config;
- adapter/checkpoint;
- eval report;
- sample grids;
- model card.

## Beginner UX

The user should pick a goal, not a trainer:

- “Train a local support bot on my SOPs.”
- “Make a LoRA of my product style.”
- “Improve transcript accuracy for my recordings.”
- “Train a small visual QA assistant on screenshots.”

AIWF maps that to tools and presets.

## One-click install direction

Use a root installer that creates:

- `aiwf_train_gui` environment;
- backend-specific venvs only when selected;
- model/data/output folders;
- update/check scripts;
- GitHub-loadable folder structure;
- day-level changelog.

## Why this fits AIWF

AIWF’s value is not raw optimizer code. It is operational translation: turn confusing training ecosystems into a sane path with guardrails.
