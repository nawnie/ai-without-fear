# 016 — LLaMA-Factory Deep Dive

## Identity

- Tool: LLaMA-Factory
- Repo: https://github.com/hiyouga/LLaMA-Factory
- Domain: unified LLM/VLM fine-tuning and post-training
- AIWF priority: P0

## What it is

LLaMA-Factory is one of the best high-level training control panels for Vol. 2 because it exposes many modern training methods in a single framework. It can be treated as the "training method museum" for beginners: one project where SFT, LoRA, QLoRA, reward modeling, DPO, PPO, KTO, ORPO, and related workflows can be compared.

## What it trains

The official repo lists broad model-family support, including LLaMA, LLaVA, Mistral, Mixtral-MoE, Qwen, Qwen-VL, DeepSeek, Gemma, GLM, Phi, and others. Treat the exact list as moving fast and always verify against the current repo.

## Training methods

Core method families:

- continued pretraining
- supervised fine-tuning
- multimodal supervised fine-tuning
- reward modeling
- PPO
- DPO
- KTO
- ORPO
- SimPO-style direct preference methods in current ecosystem context
- freeze tuning
- full tuning
- LoRA
- QLoRA
- quantized low-bit training paths

## Consumer hardware angle

The repo publishes hardware estimates. AIWF should use those as rough baselines, never promises.

Practical teaching estimates:

- 7B QLoRA: can be reachable on low-to-mid consumer VRAM.
- 14B QLoRA: often becomes a 12GB–24GB discussion depending on context length and settings.
- 30B QLoRA: 24GB-class or cloud.
- 70B QLoRA: normally beyond single consumer cards unless heavily compromised or split/offloaded.

Important: sequence length, VLM inputs, optimizer choice, gradient checkpointing, packing, batch size, Windows overhead, and fragmented VRAM can change the result.

## Why it matters to AIWF

LLaMA-Factory is a teaching bridge for method selection:

- "I want a bot to answer in my style" → SFT LoRA/QLoRA.
- "I want it to prefer one answer style over another" → DPO/ORPO/KTO.
- "I want domain vocabulary and facts" → usually RAG first, maybe continued pretraining later.
- "I want a VLM to understand my image/task format" → multimodal fine-tuning if data and hardware allow.

## Beginner-safe training ladder

1. Format a tiny SFT dataset.
2. Train a small model with LoRA/QLoRA.
3. Run fixed before/after eval prompts.
4. Add validation split.
5. Add domain examples gradually.
6. Only then try 7B/14B.
7. Preference tuning only after SFT behavior is stable.

## Dataset formats to document

LLaMA-Factory supports multiple dataset formats and requires dataset registration. AIWF should create:

- dataset schema examples
- validator for missing fields
- chat-template checker
- duplicate conversation detector
- train/validation split helper
- preference pair checker for DPO-like data

## Failure signatures

- Incorrect chat template: training runs but inference behavior is incoherent.
- Bad dataset registration: loader errors or silent wrong fields.
- Too much system-prompt text: adapter learns wrapper boilerplate instead of useful behavior.
- Preference data without clear winner/loser: DPO/ORPO learns noise.
- Domain facts trained into a bot: brittle memorization; RAG may be better.

## AIWF integration recommendation

Wrap, do not replace:

- YAML preset generator.
- Dataset registry helper.
- VRAM estimator.
- Training method decision wizard.
- Post-train adapter test harness.

## Sources

- https://github.com/hiyouga/LLaMA-Factory
