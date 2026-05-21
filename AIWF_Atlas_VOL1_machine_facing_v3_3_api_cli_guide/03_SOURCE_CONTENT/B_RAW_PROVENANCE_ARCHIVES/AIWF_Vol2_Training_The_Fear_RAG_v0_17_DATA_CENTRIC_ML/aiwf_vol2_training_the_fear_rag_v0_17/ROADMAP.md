# ROADMAP — AI Without Fear Vol. 2: Training the Fear

## Core question

What can a normal person train on consumer hardware, what should they avoid, and how do they know whether training worked?

## Working thesis

Vol. 1 teaches people how to use AI systems without fear. Vol. 2 teaches how models learn, what training changes, what training does not change, and how to build practical adapters without pretending every user owns a datacenter.

## Book-scale ambition

Vol. 2 should be larger than Vol. 1. It needs theory, rules, law, consumer hardware ladders, trainer maps, technique maps, dataset rules, failure signatures, evaluation methods, and release ethics.



## Current build status after v0.8

The archive has moved from seed notes into a usable research spine. It now has:

- broad trainer landscape coverage;
- core theory and law anchors;
- dataset construction rules;
- consumer hardware matrices;
- post-training and deployment notes;
- early AIWF product specs;
- editorial/RAG ingestion scaffolding.

Still missing:

- deep install and smoke-test notes per trainer;
- exact Windows/PowerShell one-click workflows;
- verified RTX 4070 Ti Super preset runs;
- full image LoRA family comparison;
- full video LoRA workflow comparison;
- voice/music law and consent deep dive;
- real benchmark examples;
- model card and dataset card examples;
- training workflow JSON/tooling outputs.


## Major domains

1. Training fundamentals: gradients, loss, epochs, batches, optimizers, learning rate, regularization.
2. Adapter theory: LoRA, QLoRA, DoRA, LyCORIS, textual inversion, DreamBooth, control adapters.
3. LLM/chatbot training: SFT, continued pretraining, preference tuning, RL-style post-training, tool-use training.
4. RAG training: embeddings, rerankers, hard negatives, synthetic query generation, eval sets.
5. VLM/multimodal training: image+text, video+text, document models, caption models.
6. Image training: SD 1.5, SDXL, SD3.x, Flux, Z-Image, Qwen Image, Sana-style models.
7. Video training: Wan, HunyuanVideo, LTX, FramePack, CogVideo-style models.
8. Voice/audio training: TTS, voice conversion, speaker adapters, consented voice cloning.
9. Dataset craft: collection, labeling, captioning, deduplication, balancing, licensing, privacy.
10. Evaluation: loss curves, holdout sets, sample grids, A/B preference tests, regression tests, model cards.
11. Law and rights: copyright, fair use uncertainty, licensing, privacy, publicity rights, synthetic impersonation, disclosure.
12. AIWF tooling: launcher, preset generator, dataset doctor, training judge, model-card builder.

## Training ladders

### Beginner ladder

1. Dataset cleanup only.
2. Embedding fine-tune for local RAG.
3. Tiny chatbot SFT on 0.5B–3B model.
4. SDXL LoRA.
5. 7B QLoRA bot adapter.
6. Voice model only with explicit consent and clean source audio.

### Intermediate ladder

1. LLaMA-Factory or Unsloth QLoRA on 7B–14B.
2. Sentence Transformers hard-negative embedding training.
3. Flux/Z-Image LoRA with AI Toolkit or SimpleTuner.
4. Wan/Hunyuan/LTX video LoRA test at conservative resolution/duration.
5. DPO/ORPO preference tuning on a small curated preference set.

### Advanced ladder

1. Axolotl or torchtune recipes with deeper YAML control.
2. Full fine-tuning of small models.
3. Multi-stage training: SFT → preference tuning → eval harness.
4. Multi-GPU or cloud video training.
5. Custom AIWF launcher/preset/eval integration.

## AIWF product direction

Do not create a new general trainer first. Create a training control layer:

- AIWF Training Launcher
- AIWF Dataset Doctor
- AIWF Preset Library
- AIWF Training Judge
- AIWF Model Card Builder
- AIWF Trainer RAG Tutor

## Research-pass plan

This can expand to roughly 100 passes. Early passes should map active projects and high-level theory. Middle passes should drill into specific models, settings, dataset patterns, and failure modes. Later passes should convert research into book chapters, reference tables, and runnable AIWF tooling.


## Pass 04 additions

- Added the Hugging Face/PyTorch post-training spine: PEFT, TRL, torchtune, Accelerate, DeepSpeed, and FSDP.
- Added low-code AutoTrain bridge for beginner-facing workflows.
- Added multimodal VLM training bridge for Qwen/LLaVA-style image+text assistants.
- Added ASR training bridge for Whisper/Wav2Vec2 and consented transcription improvement.
- Added AIWF wrapper architecture: intake wizard, wheel check, Dataset Doctor, preset generator, launcher, log interpreter, artifact registry.

## Next focus

Pass 05 should go deep on data: dataset formats, chat templates, preference data construction, synthetic data generation, deduplication, contamination detection, eval split design, and dataset cards.


## Pass 05 additions
- Expand dataset-first training doctrine.
- Add trainer-compatible format cheat sheets.
- Add Dataset Doctor v0.3 spec.
- Add image/video/VLM captioning and prep rules.
- Add telemetry/run evidence requirements.
- Define AIWF reproducibility run pack standard.

## Updated near-term priority
1. Continue trainer/tool cards in 10-card passes.
2. Build a deeper legal/consent tree for voice, face, likeness, and copyrighted training sets.
3. Create preset-ready dataset recipes for common consumer tasks.
4. Convert Dataset Doctor spec into a future Python project plan.


## Added in v0.6
- Training Preset Builder concept: generate validated configs for existing trainers rather than reinventing trainers.
- RAG Retriever Trainer concept: train/tune retrieval before fine-tuning chat behavior when the failure is source lookup.
- Adapter Registry concept: track base, adapter, format, trainer, trigger tokens, intended weights, and eval results.

## Next roadmap targets
- Deep cards for Unsloth Studio, LLaMA-Factory WebUI, Axolotl config grammar, torchtune recipes, and TRL v1 CLI/skills.
- Deep cards for Wan/LTX/Hunyuan video LoRA data pipelines.
- Legal deep dive by data type: text, code, image, voice, likeness, game assets, corporate docs.


## Pass 07 additions

The roadmap now includes a full post-training judgment layer: RLHF/RLAIF concepts, DPO/ORPO/KTO/GRPO selection rules, distillation, merging, quantized exports, red-team gates, and the AIWF Training Judge. This is mandatory before any public trainer GUI, because beginners need proof that a run improved something real.


## Pass 09 completed — Image LoRA family layer

The archive now separates image LoRA training by model family instead of treating all image LoRAs as SDXL-style training. This enables the future AIWF Preset Builder to route users by hardware, dataset goal, and backend.

Next research priorities:

1. Video LoRA/fine-tune deep dive: Wan 2.1/2.2, LTX, HunyuanVideo, FramePack.
2. LLM/VLM consumer post-training refresh against March 2026 tool versions.
3. Voice/audio training consent and dataset-prep deep dive.
4. Legal chapter expansion: opt-out, synthetic voice/image rights, model release policies.

## Pass 10 Update — Theory First Roadmap

The project has enough trainer/program coverage to stop acting like a tool directory. The next major phase is the ML theory spine.

### New roadmap priority order

1. Core ML foundations: data, objective, optimizer, evaluation.
2. Math prerequisites as practical language: linear algebra, calculus, probability, information theory.
3. Classical ML: regression, classification, trees, kernels, clustering, dimensionality reduction.
4. Deep learning mechanics: backprop, initialization, normalization, regularization, optimization.
5. Foundation models: transformers, diffusion/flow, audio/video/multimodal.
6. Post-training: SFT, adapters, preference optimization, distillation, quantization, merging.
7. Evaluation science: metrics, calibration, uncertainty, OOD, red-team, contamination.
8. Responsible ML: copyright, consent, privacy, provenance, model/dataset cards.
9. MLOps: reproducibility, run packs, deployment, monitoring, drift, rollback.
10. Capstones: train, audit, evaluate, release/reject with evidence.

### Pass 11-15 planned focus

- Pass 11: optimization deep dive.
- Pass 12: generalization/statistical learning deep dive.
- Pass 13: transformers/tokenization/context deep dive.
- Pass 14: diffusion/flow theory deep dive.
- Pass 15: exercise/lab expansion.

## Pass 11 completed — ML Foundations and Technique Layer

Pass 11 expands the theory roadmap into concrete ML foundations. It adds the learning problem frame, inductive bias, data representation, leakage prevention, baselines, ablations, losses, metrics, calibration, imbalance, classical ML families, hyperparameter search, optimizer dynamics, scaling judgment, learning-curve debugging, reproducibility, responsible ML validity, and mappings to LoRA/chatbot/RAG/release gates.

### Updated Pass 12-16 plan

- Pass 12: statistical learning, generalization, uncertainty, distribution shift, benchmark contamination.
- Pass 13: deep learning mechanics: tensors, autodiff, backprop, initialization, normalization, architectures.
- Pass 14: transformers, tokenization, attention, context, instruction tuning, tool traces.
- Pass 15: diffusion, flow matching, denoising, latent spaces, conditioning, image/video objectives.
- Pass 16: exercise expansion and capstone design for book-ready labs.



## Pass 12 Roadmap Addition — Generalization Before Bigger Models

The next major education target is not another trainer. It is model evidence. Vol. 2 must teach that training is an experiment under uncertainty:

1. Define the target population.
2. Build independent splits.
3. Establish baselines.
4. Train with controlled variables.
5. Report uncertainty.
6. Stress test distribution shift.
7. Ship only with a release memo.

This becomes the doctrine for later chapters on deep learning internals, LLM fine-tuning, diffusion/video LoRAs, retriever training, voice training, and MLOps.

## v0.13 Continuity Roadmap Addition

Volume II now needs two roadmaps to stay coherent:

### Research Roadmap

- ML foundations and statistical learning.
- Deep learning and optimization.
- Representation learning, transformers, diffusion, audio/video, RL, agents.
- Data construction, cleaning, labeling, and provenance.
- Consumer-hardware training recipes.
- Evaluation, safety, legal, and release discipline.

### Continuity Roadmap

- Preserve Vol. 1 field-manual tone.
- Preserve dark-tech/neon-blue clean visual system.
- Preserve first-win, decision-tree, failure-atlas, practice-ladder pedagogy.
- Upgrade exercises from operator practice to research/release evidence.
- Keep AIWF as a practical leverage brand, not a hype brand.

### Immediate next research blocks

1. Direct image/asset audit if the v0.8.9 ZIP is re-uploaded locally.
2. Deep learning math and backprop sequence.
3. Optimization and loss landscape labs.
4. Dataset governance and copyright/consent expansion.
5. Full Vol. 2 chapter skeleton using the new continuity rules.


## Added roadmap direction — v0.14
The theory spine now needs a dedicated architecture block after optimization:

1. MLPs and universal approximation intuition
2. CNNs and locality/translation equivariance
3. RNNs/LSTMs/GRUs as sequence history
4. Attention as content-addressed routing
5. Transformers as residual streams plus attention/MLP blocks
6. VAEs and latent spaces
7. U-Nets and DiTs for image/video generation
8. Representation learning and embeddings
9. Tokenization and context economics
10. Diffusion/flow math as denoising trajectory learning

## Source infrastructure layer — v0.15

Vol. 2 now has a source register and fact-check layer. Future roadmap items should distinguish:

- theory sources
- official implementation sources
- legal/governance sources
- model/dataset cards
- secondary explainers
- volatile community/watchlist sources

This keeps the project usable as an authoring RAG instead of only a research dump.

## v0.16 Architecture / Representation Roadmap Addition

Vol. 2 now includes a required architecture pass before tool-specific training. Authors should route each training method through data shape, architecture bias, objective, trainable modules, hardware bottleneck, and failure signatures. This keeps the book at college/postgrad exit level without becoming abstract math detached from practice.

## Pass 17 Added Roadmap Node — Data Is the Training Ground

Vol. 2 now explicitly includes a major data-centric ML chapter. The reader must learn that datasets have contracts, lineage, schemas, labels, splits, rights, and release documentation before they are training-ready.

### Next theory passes
- metrics and evaluation deep dive
- interpretability/explainability
- causality and counterfactual reasoning
- probabilistic modeling and Bayesian thinking
- privacy-preserving ML
- distributed training systems
