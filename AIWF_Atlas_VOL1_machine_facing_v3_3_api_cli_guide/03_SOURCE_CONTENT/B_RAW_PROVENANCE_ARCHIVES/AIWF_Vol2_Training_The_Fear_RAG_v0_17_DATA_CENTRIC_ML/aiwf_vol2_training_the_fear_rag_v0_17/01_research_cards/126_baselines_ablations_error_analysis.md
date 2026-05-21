# 126 — Baselines, Ablations, and Error Analysis

**Snapshot:** March 2026  
**Layer:** ML foundations / facts / techniques  
**Use in AIWF Vol. 2:** This card should be chunked as theory + practical training doctrine.

## Core idea

A training run only means something if it beats a serious baseline and survives ablation.

## Baseline ladder

1. Majority-class or random baseline.
2. Simple rules or keyword baseline.
3. Classical ML baseline.
4. Embedding + linear classifier baseline.
5. Off-the-shelf foundation model baseline.
6. RAG baseline.
7. Fine-tuned/adapted model.

## Ablation questions

- Does more data help?
- Does cleaner data help?
- Does the prompt/template matter more than training?
- Does the adapter help without harming old tasks?
- Does the metric improve because of real capability or answer-style bias?

## Error analysis method

Read failures manually. Cluster them by cause. Count categories. Fix the biggest cause first. Do not blindly increase epochs.

## AIWF exercise

Train nothing. Build three baselines for a simple support classifier: keyword rules, TF-IDF logistic regression, and embedding nearest neighbor. Only after that decide if transformer fine-tuning is justified.

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
