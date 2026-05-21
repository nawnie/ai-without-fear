# Coverage Dashboard v0.17

## New high-coverage area
- Data-centric ML and dataset engineering: strong
- Dataset validation and schema: strong
- Leakage and split strategy: strong
- Label quality / weak supervision / active learning: strong
- Dataset cards and governance: moderate-strong
- Drift/skew/monitoring: moderate

## Still needs later expansion
- Advanced evaluation and benchmark design
- Explainability and interpretability
- Causal inference and counterfactuals
- Bayesian/probabilistic ML
- Privacy-preserving ML and differential privacy
- Distributed systems / training infrastructure
- Security and adversarial ML

---

## Retained unique material from older internal version files

This section was added during internal version-file consolidation. The newest versioned file was kept and older version files were removed after their unique chunks were appended here.

### Unique retained material from `CONTENT/AIWF_Vol2_Training_The_Fear_RAG_v0_17_DATA_CENTRIC_ML/aiwf_vol2_training_the_fear_rag_v0_17/00_project_control/COVERAGE_DASHBOARD_v0_16.md`

# Coverage Dashboard v0.16 — Architecture and Representation Learning
## New coverage
- Deep learning architecture map: strong starter coverage.
- CNN/ResNet/U-Net: strong starter coverage.
- Transformers/ViT/position: strong starter coverage.
- Diffusion/LDM/flow matching: strong starter coverage.
- SSM/Mamba alternatives: watchlist coverage.
- Representation learning: embedding, contrastive, masked, multimodal alignment starter coverage.
- Consumer hardware impact of architecture: starter coverage.
- Architecture failure signatures: starter coverage.
## Still needed
- Backprop math derivation exercises.
- Tensor shapes and PyTorch implementation labs.
- Loss-function deep dive by task family.
- Graph neural networks.
- Probabilistic graphical models.
- Recommender systems.
- Time-series forecasting.
- Classical unsupervised learning expansion.
- MLOps/model serving architecture.
## Editorial warning
Do not let architecture sections become a model zoo. Every family must connect to: data shape, objective, inductive bias, hardware limit, failure signature, and AIWF exercise.

### Unique retained material from `CONTENT/AIWF_Vol2_Training_The_Fear_RAG_v0_17_DATA_CENTRIC_ML/aiwf_vol2_training_the_fear_rag_v0_17/00_project_control/COVERAGE_DASHBOARD_v0_15.md`

# Coverage Dashboard — v0.15 Source Register
## New coverage added
- Master source register: complete through visible chat summaries and archive source logs.
- Source categorization: topic, type, priority, volatility.
- Source governance: added explicit rules for matching source type to claim type.
- Recheck queue: added for March 2026 volatile areas.
- Unique URLs: 293
- Domains: 67
- Topic families: 13
- A-primary anchors: 53
- B-operational primary: 210
- C-secondary/context: 28
- D-volatile context: 2
## Remaining weakness
The archive has many sources, but not every one has been live-verified in this pass. Treat the master register as a source inventory, not final proof. Final book drafting should run a recheck pass on all volatile repos, laws, and model-family support claims.

### Unique retained material from `CONTENT/AIWF_Vol2_Training_The_Fear_RAG_v0_17_DATA_CENTRIC_ML/aiwf_vol2_training_the_fear_rag_v0_17/00_project_control/COVERAGE_DASHBOARD_v0_14.md`

# Coverage Dashboard — v0.14 Optimization and Training Dynamics
## Strong coverage
- Training tool landscape
- Consumer hardware matrix
- Dataset construction and QA
- LoRA/QLoRA/adapter methods
- Evaluation gates
- Law/governance baseline
- ML foundations
- Statistical learning/generalization
- Vol. 1 continuity/brand/pedagogy
- Optimization/training dynamics
## Newly improved
- Learning-rate reasoning
- Optimizer/scheduler decision rules
- Mixed precision and gradient checkpointing tradeoffs
- Training failure diagnosis
- Checkpoint selection by evidence
- Consumer GPU fit protocol
## Still needs depth
- Architecture fundamentals
- Representation learning
- Tokenization
- Diffusion math
- Video temporal modeling
- Audio/voice training science
- Causality and interventions
- Privacy/security/red-team deeper pass
- Dataset licensing by source class

### Unique retained material from `CONTENT/AIWF_Vol2_Training_The_Fear_RAG_v0_17_DATA_CENTRIC_ML/aiwf_vol2_training_the_fear_rag_v0_17/00_project_control/COVERAGE_DASHBOARD_v0_13.md`

# Coverage Dashboard v0.13 — Vol. 1 Continuity
| Area | Status |
|---|---|
| Vol. 1 philosophy | covered |
| Tone and voice | covered |
| Brand identity | covered |
| Illustration system | covered from accessible text/atlas notes |
| Pedagogy patterns | covered |
| Exercise design | covered |
| Editor prompt pack | covered |
| Vol. 1 -> Vol. 2 bridge | covered |
| Direct image-by-image audit | pending actual ZIP/image tree |
| Direct workflow discussion | intentionally not emphasized this pass |
- Tool/program research: strong baseline.
- ML theory roadmap: actively expanding.
- Statistical learning: started.
- Vol. 1 continuity: now established.
- Law/rules/consent: needs deeper future passes.
- Exercises/capstones: needs expansion after deep learning and data governance passes.

### Unique retained material from `CONTENT/AIWF_Vol2_Training_The_Fear_RAG_v0_17_DATA_CENTRIC_ML/aiwf_vol2_training_the_fear_rag_v0_17/00_project_control/COVERAGE_DASHBOARD_v0_12.md`

# Coverage Dashboard — v0.12
**Snapshot:** March 2026
## Strong coverage now
- Training tools/programs for LLMs, diffusion/image, video, voice, RAG, VLMs.
- Dataset construction and Dataset Doctor concepts.
- Image LoRA family routing.
- ML foundations and classical techniques.
- Statistical learning/generalization core.
- Evaluation gates, release memos, and responsible training workflow.
- Deep learning internals.
- Optimization math and practical scheduler behavior.
- Full transformer internals.
- Diffusion/flow/video objective theory.
- Reinforcement learning beyond high-level cards.
- Causality and experimental design at greater depth.
- Privacy/security/attacks on trained models.
- Full MLOps lifecycle.
## Current assessment
The archive has moved from a trainer directory into a serious Vol. 2 curriculum spine. It now needs deep technical chapters that connect the statistical-learning foundations to modern architectures and training objectives.

### Unique retained material from `CONTENT/AIWF_Vol2_Training_The_Fear_RAG_v0_17_DATA_CENTRIC_ML/aiwf_vol2_training_the_fear_rag_v0_17/00_project_control/COVERAGE_DASHBOARD_v0_11.md`

# Coverage Dashboard — v0.11
- Consumer training landscape: LLMs, image, video, audio, RAG, VLM.
- Trainer routing: LLaMA-Factory, Unsloth, Axolotl, PEFT, TRL, torchtune, SimpleTuner, AI Toolkit, musubi-tuner, OneTrainer, GPT-SoVITS.
- Dataset construction and Dataset Doctor concepts.
- Post-training methods and release gates.
- Image LoRA model-family split.
- ML theory roadmap.
- ML foundations, metrics, baselines, leakage, optimizer dynamics, reproducibility.
- Learning contract doctrine.
- No Free Lunch / inductive bias card.
- Split/leakage rules.
- Baseline and ablation ladder.
- Loss/metric/calibration/imbalance maps.
- Classical ML technique bridge.
- Optimization failure signatures.
- Foundation labs.
- AIWF mappings from ML foundations to LoRA, chatbot training, RAG, and release gates.
- Statistical learning/generalization deep dive.
- Autodiff/backprop implementation-level deep dive.
- Transformer theory and tokenizer/context deep dive.
- Diffusion/flow theory deep dive.
- Voice/audio legal consent deep dive.
- Real runnable notebooks and PowerShell one-click lab setup.

### Unique retained material from `CONTENT/AIWF_Vol2_Training_The_Fear_RAG_v0_17_DATA_CENTRIC_ML/aiwf_vol2_training_the_fear_rag_v0_17/00_project_control/COVERAGE_DASHBOARD_v0_10.md`

# Coverage Dashboard — v0.10
The archive now has two major pillars:
1. Tool/program landscape for consumer training.
2. Machine-learning theory curriculum for Vol. 2.
- LLM training stacks and adapter methods.
- Image/video/voice training tool ecosystem.
- Dataset construction and Dataset Doctor concept.
- Post-training, quantization, deployment packaging.
- Legal/provenance/consent baseline.
- New: general ML theory roadmap from foundations through MLOps.
## Newly added in v0.10
- math foundations
- probability/statistics/information theory
- classical ML
- objectives/losses
- optimization dynamics
- generalization and double descent
- leakage and honest splitting
- evaluation science
- unsupervised/self-supervised learning
- embeddings and metric learning
- trees/ensembles/kernels
- neural networks/backprop
- transformers
- diffusion/flow
- reinforcement learning
- causality/shift/robustness
- privacy/federated/differential privacy
- MLOps lifecycle
## Still needs deep passes
- proofs/intuitions and diagrams for each major theorem/concept.
- runnable Python notebooks/scripts for labs.
- optimizer deep dive with real loss-curve signatures.
- metrics deep dive per domain.
- full diffusion/flow-matching mathematical narrative.
- transformer internals with diagrams.
- causal inference expanded carefully.
- privacy/legal expanded with jurisdiction notes.

### Unique retained material from `CONTENT/AIWF_Vol2_Training_The_Fear_RAG_v0_17_DATA_CENTRIC_ML/aiwf_vol2_training_the_fear_rag_v0_17/00_project_control/COVERAGE_DASHBOARD_v0_9.md`

# Coverage Dashboard — v0.9
- Broad trainer landscape
- LLM/Bot trainer candidates
- Dataset construction and QA
- Adapter methods and post-training choices
- Evaluation/release gates
- Legal/consent baseline
- Image LoRA model-family map
- Image LoRA trainer-selection map
- SDXL vs FLUX vs Qwen vs Z-Image distinction
- March 2026 consumer GPU image LoRA presets
- Caption/tagging rules by family
- LoRA release-pack and model-card expectations
- AIWF Image LoRA Preset Builder spec
## Still weak / upcoming
- Full video LoRA/fine-tune deep dive
- Voice/audio training deep dive
- More exact per-backend configs tested on Windows
- True one-click install scripts
- Model-specific law/licensing matrix
## Current product direction
Build AIWF as a **trainer router + dataset doctor + preset builder + training judge** over existing trainers.

### Unique retained material from `CONTENT/AIWF_Vol2_Training_The_Fear_RAG_v0_17_DATA_CENTRIC_ML/aiwf_vol2_training_the_fear_rag_v0_17/00_project_control/COVERAGE_DASHBOARD_v0_8.md`

# Coverage Dashboard — v0.8
| Area | Status | Notes |
|---|---|---|
| LLM/bot trainers | Broad seed coverage | Needs install/run-pack examples. |
| PEFT/adapters | Strong seed coverage | Needs deeper LyCORIS/image adapter pass. |
| Dataset construction | Strong seed coverage | Dataset Doctor should become first tool. |
| RAG/retriever training | Moderate seed coverage | Needs hard-negative and evaluation examples. |
| Image LoRA training | Moderate seed coverage | Next major pass. |
| Video LoRA training | Early coverage | Needs deep pass with Wan/LTX/Hunyuan specifics. |
| Voice/audio training | Early coverage | Needs consent/law and tooling depth. |
| Multimodal/VLM | Early to moderate coverage | Needs examples and dataset formats. |
| Evaluation | Moderate coverage | Needs concrete benchmark packs and judge prompts. |
| Law/rights/consent | Moderate baseline | Needs jurisdiction/use-case expansion. |
| Deployment/export | Moderate seed coverage | Needs practical quant/export recipes. |
| AIWF product specs | Strong direction | Needs implementation-ready specs and file formats. |
The best AIWF sequence remains:
1. Dataset Doctor
2. Training Preset Builder
3. Run Pack Builder
4. Training Judge
5. RAG Retriever Trainer
6. Local launcher/wrapper around existing trainers
## What not to build yet
- A from-scratch trainer.
- A general AutoML system.
- A legal-advice bot.
- A promise that any model can be trained on any consumer GPU.
