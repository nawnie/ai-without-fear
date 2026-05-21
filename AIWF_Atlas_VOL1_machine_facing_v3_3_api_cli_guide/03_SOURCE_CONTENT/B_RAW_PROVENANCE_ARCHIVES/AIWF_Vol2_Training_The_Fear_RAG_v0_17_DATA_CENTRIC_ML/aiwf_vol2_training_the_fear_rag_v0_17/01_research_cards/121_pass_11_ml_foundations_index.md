# 121 — Pass 11 Index — ML Foundations, Facts, and Techniques

**Snapshot:** March 2026  
**Layer:** ML foundations / facts / techniques  
**Use in AIWF Vol. 2:** This card should be chunked as theory + practical training doctrine.

## What this pass adds

Pass 11 turns the theory pivot into a concrete machine-learning foundations block. It is intentionally broader than generative AI. The goal is for a reader to understand what training is doing before they touch LoRA, QLoRA, DreamBooth, video adapters, RAG retrievers, or preference optimization.

## Reading order

1. Start with 121–125 to understand the learning problem, assumptions, data representation, splits, baselines, and ablations.
2. Read 126–130 for losses, objectives, calibration, imbalance, and regularized linear/logistic models.
3. Read 131–134 for classical ML families: kNN, trees, boosting, clustering, PCA, kernels, and SVMs.
4. Read 135–140 for hyperparameter search, optimization, scaling, learning-curve debugging, reproducibility, and fairness/validity.
5. Read 141–145 for AIWF-specific translation: how these foundations map into LoRA, chatbot training, RAG, diffusion/video, and release gates.

## Why this matters for AIWF

A beginner can memorize settings and still fail. A competent trainer understands the objective, the split, the baseline, the metric, the leakage risk, the optimization dynamics, and the release threshold. Vol. 2 should train that judgment.

## One-line doctrine

Training is not magic weight change. Training is controlled error reduction under assumptions, measured on evidence the model did not get to memorize.

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
