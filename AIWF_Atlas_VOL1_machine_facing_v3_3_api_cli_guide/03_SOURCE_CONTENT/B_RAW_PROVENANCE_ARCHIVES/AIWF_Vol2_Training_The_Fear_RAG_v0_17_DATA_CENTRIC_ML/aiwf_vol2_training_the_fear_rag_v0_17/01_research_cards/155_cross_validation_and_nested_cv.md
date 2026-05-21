# 155 — Cross-Validation and Nested CV

**Snapshot:** March 2026  
**Layer:** Statistical learning / generalization / college-postgrad ML  
**Use in AIWF Vol. 2:** Chunk as theory + technique + lab doctrine.

## Core idea

Cross-validation estimates generalization by repeatedly training/evaluating across splits. Nested CV separates model selection from performance estimation.

## When to use

Use cross-validation for small tabular datasets and algorithm comparisons. For deep learning and large model fine-tuning, use fixed validation/test packs because full retraining is expensive.

## Leakage warning

Preprocessing must be fit inside each training fold, not before splitting.

## Exercise

Run k-fold CV twice: once with preprocessing before splitting and once inside a pipeline. Compare leakage effects.

## Core references

- Understanding Machine Learning: From Theory to Algorithms — Shalev-Shwartz & Ben-David: https://www.cs.huji.ac.il/~shais/UnderstandingMachineLearning/understanding-machine-learning-theory-algorithms.pdf
- An Introduction to Statistical Learning: https://www.statlearning.com/
- The Elements of Statistical Learning: https://hastie.su.domains/ElemStatLearn/
- Stanford CS229 notes: https://cs229.stanford.edu/main_notes.pdf
- Deep Learning book: https://www.deeplearningbook.org/
