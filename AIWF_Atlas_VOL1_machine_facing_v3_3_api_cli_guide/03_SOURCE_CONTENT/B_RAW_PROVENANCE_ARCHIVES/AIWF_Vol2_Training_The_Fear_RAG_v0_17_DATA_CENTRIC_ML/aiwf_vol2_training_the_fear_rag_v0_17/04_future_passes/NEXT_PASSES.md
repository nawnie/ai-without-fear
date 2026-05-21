# Next Pass Queue — After v0.10 Theory Pivot

## Immediate direction

The next passes should prioritize theory, facts, rules, and techniques across ML. Tool research continues only when a new tool changes what a consumer can actually train.

## Pass 11 — Optimization Deep Dive

- SGD, minibatch noise, momentum, Adam, AdamW, Lion-family optimizers.
- Weight decay vs L2 regularization.
- Warmup, cosine schedule, constant schedule, one-cycle schedule.
- Gradient clipping, accumulation, checkpointing.
- Mixed precision, loss scaling, NaNs, divergence.
- Loss-curve signatures and repair playbook.

## Pass 12 — Statistical Learning and Generalization

- Empirical risk minimization.
- Bias/variance.
- Regularization.
- VC/PAC intuition, not proof-heavy.
- Double descent.
- Calibration and uncertainty.
- Dataset size, label noise, leakage.

## Pass 13 — Transformers and Tokenization

- Tokenization families.
- Embeddings and positional encodings.
- Attention math.
- KV cache and context cost.
- Pretraining, SFT, preference tuning.
- Failure modes: hallucination, memorization, context confusion.

## Pass 14 — Diffusion and Flow Theory

- Forward/reverse diffusion.
- Noise schedules.
- Score matching.
- Latent diffusion.
- Classifier-free guidance.
- Rectified flow / flow matching / consistency models.
- LoRA training dynamics.

## Pass 15 — Labs and Exercises

- Create runnable Python examples.
- Build plotting utilities.
- Produce lab worksheets.
- Add grading rubrics and expected outputs.

## Pass 16+ — Domain Deep Dives

- tabular ML and business analytics
- retrieval/reranking
- VLM training
- audio/voice training
- video training theory
- causal ML
- privacy-preserving ML
- MLOps/deployment
