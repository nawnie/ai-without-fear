# 131 — Regularized Linear and Logistic Models

**Snapshot:** March 2026  
**Layer:** ML foundations / facts / techniques  
**Use in AIWF Vol. 2:** This card should be chunked as theory + practical training doctrine.

## Core idea

Linear/logistic models are not obsolete. They are the cleanest lab for understanding objectives, gradients, regularization, features, and evaluation.

## Why they matter

- They train fast.
- They expose the effect of features clearly.
- They are strong baselines.
- They are interpretable enough for diagnostics.
- They teach the same loss/regularization logic used in larger systems.

## Regularization

- L2/Ridge shrinks weights smoothly and helps with correlated noisy features.
- L1/Lasso pushes some weights to zero and can act like feature selection.
- Elastic Net blends L1 and L2.

## AIWF rule

If a logistic regression baseline solves the task, do not fine-tune a 7B model for ego.

## Exercise

Use TF-IDF + logistic regression on a small text classification dataset. Compare no regularization, L2, L1, and different C values. Plot train vs validation performance.

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
