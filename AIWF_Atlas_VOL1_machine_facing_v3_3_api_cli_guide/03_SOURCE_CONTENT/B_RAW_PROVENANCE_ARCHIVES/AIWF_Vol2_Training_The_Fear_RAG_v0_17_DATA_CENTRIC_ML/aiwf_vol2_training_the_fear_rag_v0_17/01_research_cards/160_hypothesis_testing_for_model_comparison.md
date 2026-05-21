# 160 — Hypothesis Testing for Model Comparison

**Snapshot:** March 2026  
**Layer:** Statistical learning / generalization / college-postgrad ML  
**Use in AIWF Vol. 2:** Chunk as theory + technique + lab doctrine.

## Core idea

Model comparisons should account for sample variability. One run beating another once is weak evidence.

## Practical methods

Use paired tests when predictions are on the same examples, bootstrap intervals, McNemar tests for paired classification differences, or repeated CV tests when appropriate.

## AIWF rule

Do not declare a method better unless the evaluation design can support that claim.

## Exercise

Compare two classifiers on the same test set and run a paired bootstrap on the difference in accuracy.

## Core references

- Understanding Machine Learning: From Theory to Algorithms — Shalev-Shwartz & Ben-David: https://www.cs.huji.ac.il/~shais/UnderstandingMachineLearning/understanding-machine-learning-theory-algorithms.pdf
- An Introduction to Statistical Learning: https://www.statlearning.com/
- The Elements of Statistical Learning: https://hastie.su.domains/ElemStatLearn/
- Stanford CS229 notes: https://cs229.stanford.edu/main_notes.pdf
- Deep Learning book: https://www.deeplearningbook.org/
