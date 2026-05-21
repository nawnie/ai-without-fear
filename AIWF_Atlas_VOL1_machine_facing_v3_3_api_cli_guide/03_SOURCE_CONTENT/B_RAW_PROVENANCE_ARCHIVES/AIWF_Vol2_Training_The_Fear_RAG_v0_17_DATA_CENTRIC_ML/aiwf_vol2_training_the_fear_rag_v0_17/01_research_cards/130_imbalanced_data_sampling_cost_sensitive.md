# 130 — Imbalanced Data, Sampling, and Cost-Sensitive Learning

**Snapshot:** March 2026  
**Layer:** ML foundations / facts / techniques  
**Use in AIWF Vol. 2:** This card should be chunked as theory + practical training doctrine.

## Core idea

When rare classes matter, the model can look successful by ignoring them. Class imbalance is not just a data issue; it is an objective and evaluation issue.

## Techniques

- Stratified splits.
- Class weights.
- Oversampling minority examples.
- Undersampling majority examples.
- Focal loss for hard examples.
- Threshold tuning based on operational costs.
- Macro-averaged metrics.
- Per-class confusion review.

## Risks

- Oversampling can memorize rare examples.
- Synthetic minority examples can create unrealistic boundaries.
- Class weights can inflate false positives.
- Threshold tuning on the test set invalidates the test.

## AIWF translation

Preference data can be imbalanced too: if all rejected answers are obviously bad, the model may not learn subtle quality differences. Image LoRA datasets can be imbalanced by pose, lighting, outfit, ethnicity, camera distance, or background.

## Exercise

Create an imbalanced classifier and compare: no weighting, class weighting, oversampling, and threshold tuning. Report PR-AUC and per-class recall.

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
