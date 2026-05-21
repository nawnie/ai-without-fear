# 145 — Mapping ML Foundations to Release Gates

**Snapshot:** March 2026  
**Layer:** ML foundations / facts / techniques  
**Use in AIWF Vol. 2:** This card should be chunked as theory + practical training doctrine.

## Core idea

Training is not complete when the run finishes. It is complete when the artifact passes release gates or is rejected with evidence.

## Release gates

1. Dataset provenance gate.
2. Split/leakage gate.
3. Baseline comparison gate.
4. Metric gate.
5. Qualitative review gate.
6. Regression gate.
7. Safety/consent/legal gate.
8. Reproducibility/run-pack gate.
9. Deployment-format gate.
10. Rollback/monitoring gate.

## AIWF doctrine

A model that cannot be evaluated cannot be responsibly released. A model that cannot be reproduced cannot be trusted. A model that cannot be rolled back should not be deployed.

## Exercise

Take one trained adapter and write a release decision memo: ship, hold, retrain, or reject. Evidence only; no vibes.

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
