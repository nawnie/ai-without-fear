# 136 — Hyperparameter Search, Validation Discipline, and Early Stopping

**Snapshot:** March 2026  
**Layer:** ML foundations / facts / techniques  
**Use in AIWF Vol. 2:** This card should be chunked as theory + practical training doctrine.

## Core idea

Hyperparameters are choices outside the learned parameters: learning rate, regularization strength, tree depth, LoRA rank, batch size, optimizer, epochs, scheduler, threshold, and more. Hyperparameter search can overfit validation data if abused.

## Search methods

- Manual search: useful only with strong intuition and logging.
- Grid search: expensive but simple.
- Random search: often better than grid when only some dimensions matter.
- Bayesian optimization: useful when runs are expensive and metrics are stable.
- Successive halving / early stopping: allocate more compute to promising runs.

## Early stopping

Stop when validation performance stops improving. Do not pick the checkpoint with the prettiest training loss.

## AIWF rule

Every tuning loop needs a budget and a stop rule. Otherwise “research” becomes gambling with GPU hours.

## Exercise

Run a small classifier with random search over learning rate, regularization, and feature settings. Keep a table of every run, not only the winner.

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
