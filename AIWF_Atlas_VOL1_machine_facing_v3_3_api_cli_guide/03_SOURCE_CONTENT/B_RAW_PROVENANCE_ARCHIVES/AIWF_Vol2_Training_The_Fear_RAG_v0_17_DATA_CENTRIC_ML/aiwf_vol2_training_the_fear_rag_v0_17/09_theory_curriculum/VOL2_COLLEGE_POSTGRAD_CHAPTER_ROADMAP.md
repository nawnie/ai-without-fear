# Vol. 2 Chapter Roadmap — College to Postgraduate Track

This roadmap is written for a book that remains approachable but does not stop at beginner comfort. Each chapter should include: intuition, formal concept, practical failure, lab, and RAG-ready summary.

## Part I — Foundations of Learning

### Chapter 1 — What Training Actually Is

- Learning as parameter adjustment under an objective.
- The four pillars: data, objective, optimizer, evaluation.
- What training is not: prompting, sampling, inference, model loading, GUI presets.
- Lab: train a tiny classifier and compare train vs validation loss.

### Chapter 2 — Data Is the Actual Program

- Dataset as behavior specification.
- Labels, targets, distributions, sampling, and leakage.
- Dataset quality, deduplication, class balance, metadata, provenance.
- Lab: intentionally leak data; observe fake performance.

### Chapter 3 — Loss Functions and Objectives

- MSE, MAE, cross-entropy, contrastive loss, triplet loss, denoising loss, policy/reward objectives.
- Objective mismatch: when the model optimizes what you asked, not what you meant.
- Lab: compare two objectives on the same task.

### Chapter 4 — Generalization

- Bias/variance, overfitting, underfitting, regularization.
- Double descent and why modern models broke simple textbook intuition.
- Calibration and uncertainty.
- Lab: show overfitting, regularization, and validation repair.

## Part II — Core Machine Learning Methods

### Chapter 5 — Linear Models and Probabilistic Thinking

- Linear regression, logistic regression, softmax, likelihood, priors.
- Why these still matter inside neural networks.
- Lab: fit logistic regression and inspect coefficients.

### Chapter 6 — Trees, Ensembles, and Tabular ML

- Decision trees, random forests, gradient boosting.
- Feature importance, leakage traps, categorical handling.
- Why tabular ML is often not a deep-learning problem.
- Lab: train baseline tree and compare to neural baseline.

### Chapter 7 — Kernels, Similarity, and Embeddings

- SVMs, kernels, nearest neighbors, metric learning.
- The bridge to embedding search and RAG.
- Lab: train/evaluate embeddings on retrieval pairs.

### Chapter 8 — Clustering and Representation Discovery

- k-means, hierarchical clustering, PCA, UMAP/t-SNE cautions.
- Unsupervised structure vs invented pattern.
- Lab: cluster embeddings and audit false groups.

## Part III — Deep Learning Mechanics

### Chapter 9 — Neural Networks from First Principles

- Layers, activations, gradients, backpropagation.
- Initialization, vanishing/exploding gradients.
- Lab: build a small MLP from scratch.

### Chapter 10 — Optimization in Practice

- SGD, momentum, Adam, AdamW, Lion-family optimizers, weight decay.
- Learning-rate schedules, warmup, clipping, gradient accumulation.
- Mixed precision and numerical instability.
- Lab: break training with bad LR; recover it.

### Chapter 11 — Regularization and Data Augmentation

- Dropout, weight decay, label smoothing, augmentation, early stopping.
- Image/video/text/audio augmentation differences.
- Lab: compare augmentation against overfitting.

### Chapter 12 — Representation Learning and Transfer

- Pretraining, finetuning, freezing, adapters, LoRA, QLoRA.
- Catastrophic forgetting and replay.
- Lab: freeze vs finetune vs adapter on a small task.

## Part IV — Foundation Models

### Chapter 13 — Tokenization and Language Models

- Tokens, context windows, embeddings, next-token prediction.
- Pretraining vs SFT vs preference optimization.
- Lab: inspect tokenizer behavior and prompt fragmentation.

### Chapter 14 — Transformers and Attention

- Query/key/value, attention, positional encoding, residuals, layer norm.
- Why KV cache matters at inference.
- Lab: visualize attention and sequence length cost.

### Chapter 15 — RAG and Retriever Training

- Retrieval vs memory vs finetuning.
- Chunking, embeddings, rerankers, hard negatives, eval sets.
- Lab: build a small retrieval benchmark.

### Chapter 16 — Diffusion, Flow, and Image Generation

- Denoising score matching, latent diffusion, schedulers, guidance.
- LoRA training for style, object, identity, and concept.
- Lab: compare captions, ranks, and overtraining in LoRA.

### Chapter 17 — Video, Audio, and Multimodal Models

- Temporal coherence, frame conditioning, motion priors.
- Speech representation, ASR, TTS, speaker adaptation.
- VLM and multimodal alignment.
- Lab: build a tiny multimodal eval sheet.

## Part V — Post-Training and Alignment

### Chapter 18 — Instruction Tuning and Preference Training

- SFT, DPO, ORPO, KTO, GRPO, reward modeling.
- Preference data quality and judge-model risk.
- Lab: compare SFT-only vs preference-tuned behavior.

### Chapter 19 — Distillation, Quantization, and Deployment

- Teacher/student models, pruning, quantization, GGUF, AWQ/GPTQ/EXL2.
- Accuracy vs latency vs memory.
- Lab: quantize and evaluate behavior drift.

### Chapter 20 — Model Merging and Adapter Composition

- LoRA merges, weighted adapter composition, mergekit-style model soups.
- Interference and regression testing.
- Lab: merge two adapters and run a regression suite.

## Part VI — Evaluation, Law, and Operations

### Chapter 21 — Evaluation Science

- Metrics, benchmarks, eval contamination, human evals, red teams.
- Calibration, robustness, OOD tests.
- Lab: design an eval that catches a known failure.

### Chapter 22 — Privacy, Safety, and Dataset Rights

- PII, memorization, copyright, consent, voice/likeness, data licenses.
- Dataset cards and model cards.
- Lab: write a release risk note for a model.

### Chapter 23 — MLOps and Model Lifecycle

- Reproducibility, experiment tracking, model registry, drift, rollback.
- Monitoring and incident response.
- Lab: create a run pack and changelog.

### Chapter 24 — Capstone: Train, Audit, Release

- Build a small dataset.
- Train or adapt a model.
- Evaluate it.
- Document it.
- Release or reject it with evidence.
