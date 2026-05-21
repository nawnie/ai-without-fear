# 150 — Model Capacity and VC Dimension

**Snapshot:** March 2026  
**Layer:** Statistical learning / generalization / college-postgrad ML  
**Use in AIWF Vol. 2:** Chunk as theory + technique + lab doctrine.

## Core idea

Capacity is the ability of a model class to fit many possible patterns. VC dimension is one formal way to reason about capacity in classification.

## Practical translation

More capacity can fit harder functions, but also makes it easier to fit artifacts, leakage, and label noise.

## March 2026 relevance

Modern foundation models are so overparameterized that classical parameter-count intuition fails, but capacity still matters through effective degrees of freedom, adapter rank, context window behavior, and optimizer path.

## Exercise

Compare a decision stump, full decision tree, and random forest on noisy labels. Track train/test accuracy as label noise increases.

## Core references

- Understanding Machine Learning: From Theory to Algorithms — Shalev-Shwartz & Ben-David: https://www.cs.huji.ac.il/~shais/UnderstandingMachineLearning/understanding-machine-learning-theory-algorithms.pdf
- An Introduction to Statistical Learning: https://www.statlearning.com/
- The Elements of Statistical Learning: https://hastie.su.domains/ElemStatLearn/
- Stanford CS229 notes: https://cs229.stanford.edu/main_notes.pdf
- Deep Learning book: https://www.deeplearningbook.org/
