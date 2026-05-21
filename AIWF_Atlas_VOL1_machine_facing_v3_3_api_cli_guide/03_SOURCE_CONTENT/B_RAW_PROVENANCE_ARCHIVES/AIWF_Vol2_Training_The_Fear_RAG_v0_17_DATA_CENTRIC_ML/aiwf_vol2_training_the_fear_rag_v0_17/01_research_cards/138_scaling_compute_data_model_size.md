# 138 — Scaling: Data, Compute, Model Size, and Diminishing Returns

**Snapshot:** March 2026  
**Layer:** ML foundations / facts / techniques  
**Use in AIWF Vol. 2:** This card should be chunked as theory + practical training doctrine.

## Core idea

Performance depends on data quality/quantity, model capacity, optimization, and compute. Scaling is not “bigger is always better.” It is resource allocation.

## Practical rules

- More parameters help only if the task/data/compute can support them.
- More epochs help only until memorization or degradation begins.
- More data helps only if it is relevant and not duplicative noise.
- More resolution helps image/video training only if the model and captions can use it.
- More context helps only if retrieval, formatting, and attention behavior remain valid.

## AIWF translation

Consumer hardware forces discipline. A 16GB GPU can do meaningful adapter work, but not every model family, resolution, batch size, or sequence length. The reader should learn to budget memory like money.

## Exercise

Run a small experiment at three dataset sizes and three model sizes. Plot validation performance vs training time. Identify where extra compute stops paying off.

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
