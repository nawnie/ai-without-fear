# 148 — Bias-Variance Decomposition

**Snapshot:** March 2026  
**Layer:** Statistical learning / generalization / college-postgrad ML  
**Use in AIWF Vol. 2:** Chunk as theory + technique + lab doctrine.

## Core idea

Expected prediction error can be understood as reducible error from bias and variance plus irreducible noise. Bias is systematic misspecification; variance is sensitivity to the sample.

## Translation for practitioners

Underfit models are too stiff. Overfit models are too reactive. Good models capture stable structure and ignore noise.

## AIWF mapping

Low-rank adapters can underfit if rank/target modules are too limited. They can overfit if the dataset is tiny, repetitive, or leakage-heavy.

## Exercise

Fit polynomial regressions of degrees 1, 3, 10, and 30. Plot training error, validation error, and qualitative curve shape.

## Core references

- Understanding Machine Learning: From Theory to Algorithms — Shalev-Shwartz & Ben-David: https://www.cs.huji.ac.il/~shais/UnderstandingMachineLearning/understanding-machine-learning-theory-algorithms.pdf
- An Introduction to Statistical Learning: https://www.statlearning.com/
- The Elements of Statistical Learning: https://hastie.su.domains/ElemStatLearn/
- Stanford CS229 notes: https://cs229.stanford.edu/main_notes.pdf
- Deep Learning book: https://www.deeplearningbook.org/
