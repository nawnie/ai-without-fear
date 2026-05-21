# 162 — Double Descent and Interpolation

**Snapshot:** March 2026  
**Layer:** Statistical learning / generalization / college-postgrad ML  
**Use in AIWF Vol. 2:** Chunk as theory + technique + lab doctrine.

## Core idea

Classical intuition says test error decreases then increases as complexity grows. Modern overparameterized models can show double descent: performance worsens near an interpolation threshold, then improves again with more capacity/data/training under some conditions.

## Practical caution

Double descent does not mean overfitting disappeared. It means capacity/generalization behavior is more nuanced in modern regimes.

## AIWF mapping

Large pretrained models can generalize well despite massive capacity because pretraining, optimization, architecture, regularization, and data distribution all matter.

## Exercise

Create a toy double-descent demonstration with polynomial features or random features. Mark the interpolation threshold.

## Core references

- Understanding Machine Learning: From Theory to Algorithms — Shalev-Shwartz & Ben-David: https://www.cs.huji.ac.il/~shais/UnderstandingMachineLearning/understanding-machine-learning-theory-algorithms.pdf
- An Introduction to Statistical Learning: https://www.statlearning.com/
- The Elements of Statistical Learning: https://hastie.su.domains/ElemStatLearn/
- Stanford CS229 notes: https://cs229.stanford.edu/main_notes.pdf
- Deep Learning book: https://www.deeplearningbook.org/
