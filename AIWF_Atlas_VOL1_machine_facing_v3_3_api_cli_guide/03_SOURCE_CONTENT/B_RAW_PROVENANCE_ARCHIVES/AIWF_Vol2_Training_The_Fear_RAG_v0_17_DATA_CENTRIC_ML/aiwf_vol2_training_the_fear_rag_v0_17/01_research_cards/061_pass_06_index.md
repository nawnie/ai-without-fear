# Pass 06 Index — Training Method Mechanics, Presets, and Deployment Bridges

## Scope
Pass 06 shifts from tool inventory and dataset construction into the mechanics an AI assistant needs to reason about training choices:

- LoRA/QLoRA/DoRA/rsLoRA adapter decision logic.
- Optimizer and scheduler selection for consumer GPUs.
- Data curriculum, data mixing, replay, and staged training.
- Adapter merging, multi-adapter inference, and deployment tradeoffs.
- Retriever/embedding/reranker training for RAG.
- Concrete 12GB, 16GB, and 24GB preset families.
- Diffusion/image/video LoRA setting heuristics.
- Training evaluation gates before publishing an adapter or model.

## Why this matters for AIWF Vol. 2
Most beginner training guides teach a command. This pass teaches the *control surface*: what the knobs mean, when they matter, and which ones are safe defaults.

## Files added
- 062 Adapter Method Decision Tree
- 063 LoRA Hyperparameters and Target Modules
- 064 QLoRA Memory Recipe and BitsAndBytes
- 065 DoRA and rsLoRA Practical Notes
- 066 Optimizers and Schedulers
- 067 Curriculum, Data Mixing, and Replay
- 068 Retriever Training and RAG Fine-Tuning
- 069 Adapter Merging and Deployment
- 070 Consumer GPU Training Presets
- 071 Diffusion LoRA Presets
- 072 Evaluation Gates and Release Checklist

## AIWF conclusion
The AIWF trainer should generate **validated preset packs** rather than hide the details. A user should be able to pick a goal, GPU tier, and model family, then receive:

1. dataset checks,
2. trainer recommendation,
3. training config,
4. expected VRAM/risk notes,
5. eval checklist,
6. model-card/provenance output.
