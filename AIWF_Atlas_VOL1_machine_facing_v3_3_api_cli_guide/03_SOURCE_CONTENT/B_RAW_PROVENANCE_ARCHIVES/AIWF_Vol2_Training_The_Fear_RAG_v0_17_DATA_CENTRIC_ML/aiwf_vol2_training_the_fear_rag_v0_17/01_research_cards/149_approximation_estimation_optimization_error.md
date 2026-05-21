# 149 — Approximation, Estimation, and Optimization Error

**Snapshot:** March 2026  
**Layer:** Statistical learning / generalization / college-postgrad ML  
**Use in AIWF Vol. 2:** Chunk as theory + technique + lab doctrine.

## Core idea

A bad result can come from the function class being too weak, the sample being too small/noisy, or the optimizer failing to find a good solution.

## Diagnostic pattern

If both train and validation are poor, suspect approximation or optimization. If train is strong and validation is poor, suspect estimation/generalization. If loss is unstable, suspect optimization or data corruption.

## AIWF technique

Always classify failures before changing random knobs. Dataset, model capacity, and optimizer are different levers.

## Exercise

Create a failure triage sheet for one bad LoRA run: capacity limit, data issue, optimizer issue, or evaluation issue.

## Core references

- Understanding Machine Learning: From Theory to Algorithms — Shalev-Shwartz & Ben-David: https://www.cs.huji.ac.il/~shais/UnderstandingMachineLearning/understanding-machine-learning-theory-algorithms.pdf
- An Introduction to Statistical Learning: https://www.statlearning.com/
- The Elements of Statistical Learning: https://hastie.su.domains/ElemStatLearn/
- Stanford CS229 notes: https://cs229.stanford.edu/main_notes.pdf
- Deep Learning book: https://www.deeplearningbook.org/
