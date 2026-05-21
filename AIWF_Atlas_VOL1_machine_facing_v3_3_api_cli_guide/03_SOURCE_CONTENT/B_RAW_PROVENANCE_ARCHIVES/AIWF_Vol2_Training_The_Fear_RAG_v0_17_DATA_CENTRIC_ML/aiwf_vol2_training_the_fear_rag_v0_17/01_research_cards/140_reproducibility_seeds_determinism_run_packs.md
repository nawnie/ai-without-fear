# 140 — Reproducibility: Seeds, Determinism, and Run Packs

**Snapshot:** March 2026  
**Layer:** ML foundations / facts / techniques  
**Use in AIWF Vol. 2:** This card should be chunked as theory + practical training doctrine.

## Core idea

A training result is not useful if nobody can understand what produced it. Reproducibility does not require perfect determinism, but it does require enough evidence to rerun, audit, and compare.

## Minimum run pack

- Base model and exact revision/hash.
- Dataset manifest and hashes.
- Train/val/test split recipe.
- Config file.
- Environment file or package lock.
- Hardware info.
- Seed(s).
- Logs and curves.
- Checkpoints/adapters.
- Eval report.
- Model card/dataset card.
- Known failures and rejected settings.

## Determinism cautions

GPU kernels, mixed precision, data loader order, distributed training, and nondeterministic ops can produce slight variation. The goal is not mystical sameness; the goal is evidence-grade reproducibility.

## AIWF exercise

Take any training run and create an AIWF Run Pack. Another person should be able to answer: what was trained, on what, with what settings, for what purpose, and how did we decide it worked?

## Core references

- Stanford CS229 lecture notes — supervised learning, GLMs, SVMs, learning theory, ML diagnostics: https://cs229.stanford.edu/main_notes.pdf
- scikit-learn User Guide — cross-validation, model selection, scoring metrics, calibration, preprocessing, pipeline hygiene: https://scikit-learn.org/stable/user_guide.html
- scikit-learn model evaluation guide: https://scikit-learn.org/stable/modules/model_evaluation.html
- scikit-learn cross-validation guide: https://scikit-learn.org/stable/modules/cross_validation.html
- Google Machine Learning Crash Course — dataset splitting, overfitting, production framing: https://developers.google.com/machine-learning/crash-course
- Dive into Deep Learning — code/math/context bridge for deep learning: https://d2l.ai/
- Deep Learning, Goodfellow/Bengio/Courville — free online book: https://www.deeplearningbook.org/
- An Introduction to Statistical Learning — broad statistical learning bridge: https://www.statlearning.com/
- The Elements of Statistical Learning — conceptual/statistical learning reference: https://hastie.su.domains/ElemStatLearn/
- Distill, Why Momentum Really Works — optimization intuition: https://distill.pub/2017/momentum/
