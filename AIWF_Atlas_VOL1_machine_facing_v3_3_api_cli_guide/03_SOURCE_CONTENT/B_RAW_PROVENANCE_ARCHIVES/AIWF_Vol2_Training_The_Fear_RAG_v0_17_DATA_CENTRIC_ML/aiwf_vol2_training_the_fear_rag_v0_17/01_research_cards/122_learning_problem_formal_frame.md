# 122 — The Learning Problem — Data, Hypothesis, Objective, Evidence

**Snapshot:** March 2026  
**Layer:** ML foundations / facts / techniques  
**Use in AIWF Vol. 2:** This card should be chunked as theory + practical training doctrine.

## Core idea

Every ML system starts with four moving parts:

1. **Data:** examples sampled from some real or synthetic process.
2. **Hypothesis/model family:** the class of functions the learner can represent.
3. **Objective/loss:** the signal used to prefer one set of parameters over another.
4. **Evidence protocol:** the split, metric, and audit plan used to decide whether the system actually improved.

For AIWF, this should become a repeated mantra: before training, name the task, name the target behavior, name the metric, name the holdout set, and name the failure that would make the run invalid.

## Practical rule

If a user cannot answer “what exact behavior should improve and how will we measure it?”, they are not ready to train. They are ready to clean data, write evals, or build a RAG set.

## Technique notes

- Supervised learning maps inputs to labels or targets.
- Unsupervised learning finds structure without explicit labels.
- Self-supervised learning creates labels from the data itself.
- Reinforcement learning optimizes behavior through reward signals, but reward design is itself a learned-risk problem.
- Generative AI training often mixes these: pretraining is self-supervised; SFT is supervised; preference tuning uses comparisons; RL-style post-training optimizes rewards.

## AIWF exercise

Write a one-page training contract for a tiny model task:

- Task: classify support messages as billing, bug, feature request, or other.
- Model family: logistic regression, small transformer, or embedding classifier.
- Metric: macro F1, not accuracy, if classes are imbalanced.
- Holdout: messages never used in training or prompt tuning.
- Release rule: reject if billing recall drops below a set threshold.

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
