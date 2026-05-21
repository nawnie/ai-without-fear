# 135 — Kernels, SVMs, and Similarity as Implicit Features

**Snapshot:** March 2026  
**Layer:** ML foundations / facts / techniques  
**Use in AIWF Vol. 2:** This card should be chunked as theory + practical training doctrine.

## Core idea

Kernel methods teach a powerful idea: sometimes a simple model becomes nonlinear by changing how similarity is computed. The kernel trick lets algorithms operate as if data were projected into a richer feature space without explicitly building that space.

## Why it matters for modern AI

Embeddings are learned feature spaces. Attention computes interactions. Retrieval uses similarity. Kernel thinking helps readers understand why representation quality can matter more than the classifier on top.

## SVM intuition

Support vector machines seek a boundary with a large margin. The support vectors are the examples that define the boundary. This is a useful mental model for hard examples and boundary cases.

## AIWF exercise

Train linear SVM and RBF-kernel SVM on a toy nonlinear dataset. Then map the intuition to embeddings: ask what feature space would make the boundary easy?

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
