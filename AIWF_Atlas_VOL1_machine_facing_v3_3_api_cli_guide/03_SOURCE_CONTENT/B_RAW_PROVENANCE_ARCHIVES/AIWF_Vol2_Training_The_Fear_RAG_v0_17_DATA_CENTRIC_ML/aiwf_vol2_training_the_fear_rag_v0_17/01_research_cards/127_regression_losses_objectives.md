# 127 — Regression Losses and Objective Design

**Snapshot:** March 2026  
**Layer:** ML foundations / facts / techniques  
**Use in AIWF Vol. 2:** This card should be chunked as theory + practical training doctrine.

## Core idea

The loss function defines what the training system treats as wrong. Choosing the wrong loss can make the model optimize the wrong behavior perfectly.

## Common losses

- Mean squared error: heavily punishes large errors; sensitive to outliers.
- Mean absolute error: more robust to outliers; less smooth at zero.
- Huber loss: combines MSE near zero with MAE-style robustness for large errors.
- Quantile loss: predicts intervals or asymmetric costs.
- Poisson/deviance losses: useful for count-like targets under distribution assumptions.

## Objective design rule

Match the loss to the cost of being wrong. If a 10-degree error is more than twice as bad as a 5-degree error, squared loss may fit. If extreme outliers are noisy measurements, robust losses may fit better.

## AIWF translation

In generative training, the visible “loss” is often a proxy. A lower diffusion training loss does not always mean better images. A lower language-model loss does not guarantee better instruction following. Loss must be paired with qualitative and task-specific evals.

## Exercise

Create a toy regression dataset with outliers. Fit one model with MSE and one with MAE/Huber. Compare which model better fits the normal cases.

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
