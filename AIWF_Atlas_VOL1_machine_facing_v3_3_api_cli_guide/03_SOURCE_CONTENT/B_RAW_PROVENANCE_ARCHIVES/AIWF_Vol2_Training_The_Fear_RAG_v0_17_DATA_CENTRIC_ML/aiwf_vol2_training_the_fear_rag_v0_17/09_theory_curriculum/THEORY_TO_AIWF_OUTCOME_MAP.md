# Theory to AIWF Outcome Map

This file maps abstract ML theory to the practical AIWF behaviors the reader should gain.

| Theory area | Reader should learn | Practical outcome |
|---|---|---|
| Probability | Uncertainty is measurable, not vibes | Knows why one sample cannot prove model quality |
| Linear algebra | Models transform vectors through parameterized spaces | Can reason about embeddings, LoRA rank, attention projections |
| Calculus/gradients | Training moves parameters to reduce loss | Can read optimizer settings and loss curves |
| Information theory | Cross-entropy and KL measure distribution mismatch | Understands language-model loss, distillation, preference objectives |
| Bias/variance | Models can be too simple, too memorized, or both in modern regimes | Can diagnose underfit/overfit without superstition |
| Double descent | More capacity can worsen then improve generalization | Does not apply shallow textbook rules blindly to deep models |
| Data leakage | Fake performance can look excellent | Audits train/test splits and near-duplicates |
| Optimization | LR, batch size, precision, and schedules shape convergence | Can stabilize runs instead of randomly changing knobs |
| Regularization | Constraints improve generalization | Uses weight decay, dropout, augmentation, early stopping intentionally |
| Representation learning | Useful internal coordinates can transfer | Understands embeddings, LoRA, adapters, multimodal encoders |
| Transformers | Attention routes information across sequences | Understands tokens, context, KV cache, sequence cost |
| Diffusion | Generation is learned denoising / flow through data space | Understands sampler/scheduler/training-data relationship |
| RL | Agents optimize behavior from reward signals | Understands why RLHF/RLAIF is fragile and data-sensitive |
| Evaluation | Metrics are instruments, not truth | Builds eval suites before claiming success |
| Causality/OOD | Correlation can break under shift | Avoids deploying models outside tested conditions blindly |
| Privacy/provenance | Data carries obligations | Documents licenses, consent, PII, voice/likeness risk |
| MLOps | Models change over time | Uses run packs, registries, monitoring, rollback |
