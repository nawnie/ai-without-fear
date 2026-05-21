# 163 — Scaling Laws and Compute Optimality

**Snapshot:** March 2026  
**Layer:** Statistical learning / generalization / college-postgrad ML  
**Use in AIWF Vol. 2:** Chunk as theory + technique + lab doctrine.

## Core idea

Empirical scaling laws relate loss to model size, dataset size, and compute. Compute-optimal training asks how to allocate a fixed budget between parameters and tokens.

## Practitioner translation

For consumers, the lesson is not train huge models from scratch. It is that data volume, model size, and training length must be balanced. Tiny high-quality post-training can work because pretraining already bought the expensive representation.

## March 2026 caution

Scaling laws are useful but not universal. Task, data quality, architecture, modality, and evaluation target change the curve.

## Exercise

Given three training budgets, decide whether to spend on more data cleaning, longer training, larger adapter rank, or a larger base model.

## Core references

- Understanding Machine Learning: From Theory to Algorithms — Shalev-Shwartz & Ben-David: https://www.cs.huji.ac.il/~shais/UnderstandingMachineLearning/understanding-machine-learning-theory-algorithms.pdf
- An Introduction to Statistical Learning: https://www.statlearning.com/
- The Elements of Statistical Learning: https://hastie.su.domains/ElemStatLearn/
- Stanford CS229 notes: https://cs229.stanford.edu/main_notes.pdf
- Deep Learning book: https://www.deeplearningbook.org/
