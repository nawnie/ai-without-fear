# 133 — Trees, Random Forests, and Gradient Boosting

**Snapshot:** March 2026  
**Layer:** ML foundations / facts / techniques  
**Use in AIWF Vol. 2:** This card should be chunked as theory + practical training doctrine.

## Core idea

Tree methods are often the best practical choice for tabular data. They handle nonlinear interactions, mixed feature types, and messy data better than many neural nets on small/medium structured datasets.

## Main families

- Decision trees: interpretable but high variance.
- Random forests: bagged trees reduce variance.
- Gradient boosting: sequential trees correct prior errors; strong for tabular prediction.
- Histogram-based boosting: efficient for large structured datasets.

## Strengths

- Minimal feature scaling requirements.
- Captures interactions.
- Strong baselines for business data.
- Useful feature importance diagnostics.

## Risks

- Leakage can make tree models look magical.
- Feature importance can be misleading under correlated features.
- Overfitting still occurs with deep trees and too many boosting rounds.

## AIWF exercise

Take a hotel/casino-style tabular task: predict late check-out risk, maintenance priority, or guest contact category. Compare logistic regression, random forest, and gradient boosting before considering neural nets.

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
