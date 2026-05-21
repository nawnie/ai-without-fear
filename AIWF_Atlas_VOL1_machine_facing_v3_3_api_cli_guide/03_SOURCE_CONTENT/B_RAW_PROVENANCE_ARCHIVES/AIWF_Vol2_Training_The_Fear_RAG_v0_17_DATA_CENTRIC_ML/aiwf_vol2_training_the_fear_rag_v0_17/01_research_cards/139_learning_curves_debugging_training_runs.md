# 139 — Learning Curves and Training-Run Debugging

**Snapshot:** March 2026  
**Layer:** ML foundations / facts / techniques  
**Use in AIWF Vol. 2:** This card should be chunked as theory + practical training doctrine.

## Core idea

Learning curves are diagnostic instruments. They show whether the model is learning, underfitting, overfitting, unstable, leaking, or starved for data.

## Patterns

- Training loss high, validation loss high: underfit, bad features, too little capacity, bad optimizer, wrong objective.
- Training loss low, validation loss high: overfit, leakage in tuning, distribution mismatch, too many epochs, too much capacity.
- Both improve then validation worsens: early stopping point exists.
- Loss spikes: LR too high, bad batch, unstable mixed precision, corrupted data, optimizer issue.
- Validation too good: likely leakage, duplicate data, or flawed split.
- No movement: frozen parameters, wrong labels, broken data loader, LR too low, loss disconnected.

## AIWF rule

Never judge a run by the final checkpoint alone. Keep curves, config, sample outputs, seed, dataset hash, and eval results.

## Exercise

Given six synthetic learning curves, diagnose likely causes and propose the next single change. No shotgun tuning.

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
