## 2026-03 — v0.17 DATA-CENTRIC ML AND DATASET ENGINEERING

- Added cards 237–260.
- Added data-centric ML curriculum roadmap.
- Added Dataset Doctor v0.4 data-centric spec.
- Added dataset pipeline, split, leakage, versioning, label quality, validation, and modality QA tables.
- Added Pass 17 exercise pack.
- Added Pass 17 source anchors.

# Changelog

## v0.16 — Deep Learning Architecture and Representation

- Added cards 212–236 covering architecture families, representation learning, diffusion/flow, multimodal fusion, self-supervised learning, transfer learning, consumer hardware implications, and failure signatures.
- Added architecture decision matrix, representation method matrix, architecture failure-signature table, and architecture lab ladder.
- Added Pass 16 source anchors and updated source register for canonical architecture/representation sources.
- Updated roadmap, coverage dashboard, next-pass queue, and manifest.

## v0.15 — Source Register and Chat Source Capture

- Added master source register with deduped URLs from archive and visible chat summaries.
- Added source governance/fact-checking rules for Vol. 2 authors and AI editors.
- Added chat source capture note so cited pass anchors are preserved inside the project.
- Added source gaps and recheck queue for March 2026 volatile areas.
- Added source summary CSVs and research card 211.


## v0.14 — Optimization and Training Dynamics
- Added cards 182–210 covering gradients, optimizers, LR, schedulers, regularization, precision, checkpointing, initialization, normalization, LoRA dynamics, loss curves, and failure diagnosis.
- Added optimization field rules and Pass 14 labs.
- Added optimizer/scheduler/failure/memory tradeoff CSVs.
- Added source anchor file for optimization and training dynamics.

## v0.13 — Vol. 1 Continuity Extraction

- Added Vol. 1 continuity brief for Vol. 2 authors/editors.
- Added AIWF brand bible.
- Added illustration and visual system guide.
- Added Vol. 2 tone and reader-level guide.
- Added pedagogy and exercise design guide.
- Added editor prompt pack.
- Added Vol. 1 -> Vol. 2 bridge notes.
- Added research cards 172-181 for continuity, visual identity, pedagogy, QA discipline, and training-run-pack framing.
- Added CSV tables for style guardrails, visual taxonomy, pedagogy patterns, voice rules, and source review manifest.
- Noted gap: direct v0.8.9 ZIP not locally available; extraction used accessible archive-derived report and Volume I master/final materials.

## v0.12 — Statistical Learning and Generalization

- Added cards 146–171 covering ERM, population risk, bias/variance, PAC intuition, capacity, uniform convergence, regularization, validation, uncertainty, calibration, conformal prediction, double descent, scaling laws, domain shift, label noise, data selection, causality, ablation, and release memos.
- Added Pass 12 roadmap, generalization rules, labs, diagnostic matrices, validation protocol matrix, regularization matrix, uncertainty table, data-shift taxonomy, and updated source log.
- Re-centered Vol. 2 toward college/postgrad ML reasoning, not just program/tool usage.

## March 2026 — v0.11 ML Foundations and Technique Layer

- Added Pass 11 foundation cards 121–145.
- Expanded the roadmap beyond trainer programs into general ML theory, facts, rules, and techniques.
- Added practical treatment of learning contracts, inductive bias, data representation, leakage, baselines, ablations, losses, metrics, calibration, imbalance, classical ML, hyperparameter search, optimization dynamics, scaling, learning curves, reproducibility, fairness/validity, and release gates.
- Added foundation lab sequence for Vol. 2 exercises.
- Added CSV tables for labs, evaluation metrics, leakage antipatterns, baseline ladder, and optimization failure signatures.
- Added Pass 11 source log with stable textbook/course/documentation anchors.

## v0.10 — Pass 10 Theory Pivot

- Added master theory roadmap for March 2026 snapshot.
- Added college/postgraduate chapter roadmap.
- Added theory-to-AIWF outcome map.
- Added exercise ladder from concept labs to capstones.
- Added 21 broad ML theory cards, numbered 100–120.
- Added curriculum ladder CSV, fact/law/rule index CSV, and technique decision matrix CSV.
- Added source log for foundational textbooks, courses, and primary papers.
- Updated ROADMAP toward theory, facts, rules, and techniques across all ML, not only generative AI.


## March 2026 — v0.9 Image LoRA Family Deep Dive

- Added Pass 09 image LoRA family deep dive.
- Added March 2026 model-family guidance for SDXL, SD3/3.5, FLUX.1, FLUX.2/Klein, Qwen-Image, and Z-Image.
- Added trainer-selection guidance for AI Toolkit, SimpleTuner, sd-scripts/kohya, musubi-tuner, and OneTrainer.
- Added image LoRA consumer GPU preset matrix.
- Added caption/tagging policy by model family.
- Added image LoRA failure-mode card and release-pack rules.
- Added AIWF Image LoRA Preset Builder v0.1 spec.

# CHANGELOG — AIWF Vol. 2 Training RAG

## 2026-05-19 — v0.8

- Performed review and polish pass without removing research content.
- Moved older file manifests into `00_project_control/archive_manifests/`.
- Added current file manifest for v0.8.
- Added quality review notes and known-limitations section.
- Added RAG ingestion guide for chunking, load order, and retrieval priorities.
- Added coverage dashboard and coverage audit CSV.
- Added pass status matrix.
- Added editorial style guide for Vol. 2 voice, terminology, and evidence rules.
- Added draft Vol. 2 chapter outline.
- Added fact-check and source rules for future passes.
- Added starter glossary.
- Added Pass 08 polish index card.
- Updated next-pass queue so the next research pass is image/LoRA family depth.

## 2026-05-19 — v0.7

- Added Pass 07 post-training/release-decision index.
- Added RLHF/RLAIF/reward modeling consumer-hardware reality card.
- Added DPO/ORPO/KTO/GRPO method selection rules.
- Added distillation and teacher-student synthetic data card.
- Added model merging card for mergekit, task arithmetic, SLERP, TIES, DARE, passthrough, and MoE-style merges.
- Added quantization/export card covering bitsandbytes, GGUF/llama.cpp, GPTQ, AWQ, AutoAWQ, and Quanto.
- Added evaluation harness/private benchmark card.
- Added safety alignment and red-team gate card.
- Added deployment format/release package card.
- Added AIWF Training Judge research card and v0.1 spec.
- Added post-training failure mode card.
- Added Post-Training Run Pack v0.1 spec.
- Added post-training method matrix, quantization/export matrix, and eval gate matrix.
- Added source log for Pass 07.

## 2026-05-19 — v0.6

- Added Pass 06 research cards 061–072.
- Added adapter-method decision logic for LoRA, QLoRA, DoRA, rsLoRA, preference training, GRPO/RL, and full fine-tuning.
- Added LoRA hyperparameter and target-module control surface notes.
- Added QLoRA/BitsAndBytes memory recipe and smoke-test protocol.
- Added optimizer/scheduler decision notes covering AdamW, 8-bit/paged optimizers, Prodigy, Adafactor, Sophia, constant/cosine/linear schedules.
- Added curriculum, data mixing, replay, and capability preservation rules.
- Added retriever/reranker training plan for AIWF RAG improvement.
- Added adapter merging/deployment strategy and registry concept.
- Added consumer GPU preset table for 12GB, 16GB, and 24GB tiers.
- Added Training Preset Builder v0.1 and RAG Retriever Trainer v0.1 specs.

## 2026-05-19 — v0.5

- Added Pass 05 dataset construction and reproducibility layer.
- Added cards 051 through 060.
- Added LLM dataset format and chat template rules.
- Added data cleaning, deduplication, PII, and leakage triage rules.
- Added synthetic instruction data and preference dataset construction cards.
- Added image captioning/tagging, video dataset preparation, and VLM dataset construction cards.
- Added experiment tracking and AIWF run pack standards.
- Added Dataset Doctor v0.3 spec.
- Added four new CSV tables for formats, captioning, video prep, and experiment tracking.

## 2026-05-19 — v0.4

- Added Pass 04 index and practical post-training stack expansion.
- Added torchtune native PyTorch recipe card.
- Added Hugging Face PEFT adapter operations card.
- Added Hugging Face TRL SFT/preference/reward training card.
- Added Accelerate/DeepSpeed/FSDP memory backend card.
- Added AutoTrain low-code bridge card.
- Added Qwen/LLaVA VLM training bridge card.
- Added Whisper/Wav2Vec2 ASR training card.
- Added AIWF consumer GPU training runbook.
- Added failure-signature card covering OOM, overfit, collapse, temporal noise, and ASR hallucination.
- Added dataset provenance manifest schema.
- Added AIWF Trainer Wrapper Architecture spec: orchestrate existing trainers; do not rebuild the optimizer stack.
- Added Pass 04 tool matrix, consumer capability matrix, and failure-signature matrix.
- Added source log for Pass 04.

## 2026-05-19 — v0.3

- Added Pass 03 index and expanded the RAG from tool notes into the theory/rules/method backbone.
- Added consumer hardware and VRAM math card with practical local training tiers.
- Added PEFT method map covering LoRA, QLoRA, DoRA, IA3, AdaLoRA, prefix/prompt tuning, and method-selection rules.
- Added quantization map separating training-time quantization from inference/export formats: bitsandbytes, GPTQ, AWQ, GGUF.
- Added alignment/preference training card covering SFT, DPO, ORPO, KTO, GRPO, reward models, and RLHF/PPO positioning.
- Added RAG vs fine-tune vs LoRA decision tree to prevent unnecessary training.
- Added dataset design and quality laws for text, image, video, audio, embeddings, and preference data.
- Added model card, dataset card, data statement, and provenance ledger card.
- Added evaluation framework card for lm-eval-harness, OpenCompass, RAGAS, and DeepEval.
- Added image LoRA captioning pipeline and video LoRA motion dataset pipeline.
- Added synthetic media consent/disclosure/provenance rule file and U.S./EU legal baseline deep dive.
- Added Dataset Doctor v0.2 expanded spec.
- Added Pass 03 CSV matrices for methods, dataset quality, and law/governance tracking.
- Added source log for Pass 03.

## 2026-05-19 — v0.2

- Accepted long-run project mode: short chat replies, repeated research passes, archive linked at the end of each pass.
- Added Pass 02 research protocol: build as a large reference RAG, not a small blog-style summary.
- Added deep cards for Unsloth, LLaMA-Factory, Axolotl/TRL/torchtune, Sentence Transformers/FlagEmbedding, SimpleTuner, AI Toolkit, OneTrainer, musubi-tuner, LTX training, GPT-SoVITS, Dataset Doctor, legal baseline, and training theory laws.
- Added consumer-training capability matrix v0.2.
- Added legal risk matrix v0.2 covering copyright, licensing, consent, privacy, voice cloning, dataset provenance, and disclosure risk.
- Added source log for Pass 02 with official docs/repo URLs prioritized over tutorials.
- Added AIWF Dataset Doctor v0.1 product/spec note.
- Expanded future pass queue toward a long-form research campaign.

## 2026-05-19 — v0.1

- Created initial RAG library skeleton.
- Added starter cards for training landscape, LLM trainers, image trainers, video trainers, voice/audio training, and evaluation.
- Added initial CSV indexes and capability matrix.
