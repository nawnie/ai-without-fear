# 128 — Classification Losses, Metrics, and Thresholds

**Snapshot:** March 2026  
**Layer:** ML foundations / facts / techniques  
**Use in AIWF Vol. 2:** This card should be chunked as theory + practical training doctrine.

## Core idea

Classification has two separate decisions: train the model to estimate class likelihoods, then choose thresholds/decisions based on costs.

## Core losses

- Logistic/cross-entropy loss: standard for binary and multiclass classification.
- Hinge loss: margin-based loss associated with SVM-style classification.
- Focal loss: emphasizes hard examples; useful for severe imbalance when simple reweighting is not enough.

## Metrics

- Accuracy: fine only when classes and costs are balanced.
- Precision: of predicted positives, how many were correct?
- Recall: of true positives, how many were caught?
- F1: harmonic balance of precision and recall.
- Macro F1: treats each class equally; useful for imbalance.
- ROC-AUC: ranking quality across thresholds; can look good under imbalance.
- PR-AUC: often more informative when positives are rare.
- Confusion matrix: required for operational interpretation.

## AIWF rule

Never say “the model is 92% accurate” without saying class balance and failure cost.

## Exercise

Build a fraud-like dataset with 1% positives. Compare accuracy, ROC-AUC, PR-AUC, precision, recall, and F1. Explain why accuracy lies.

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
