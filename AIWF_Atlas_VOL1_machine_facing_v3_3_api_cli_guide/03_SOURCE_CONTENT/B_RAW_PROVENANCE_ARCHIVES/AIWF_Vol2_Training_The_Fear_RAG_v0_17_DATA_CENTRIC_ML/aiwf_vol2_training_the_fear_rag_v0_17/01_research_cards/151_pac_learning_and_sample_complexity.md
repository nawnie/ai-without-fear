# 151 — PAC Learning and Sample Complexity

**Snapshot:** March 2026  
**Layer:** Statistical learning / generalization / college-postgrad ML  
**Use in AIWF Vol. 2:** Chunk as theory + technique + lab doctrine.

## Core idea

PAC learning asks whether an algorithm can probably learn an approximately correct hypothesis from enough samples. The framework separates the target error tolerance, confidence, hypothesis class, and required sample size.

## Why it belongs in Vol. 2

PAC is not there to make hobbyists do theorem proofs. It gives the mental shape of learning: data requirements depend on hypothesis class, error tolerance, confidence, and distribution assumptions.

## AIWF doctrine

A dataset is never simply big or small. It is big or small relative to the task, model class, diversity, and tolerated error.

## Exercise

For three tasks, define what approximate correctness would mean and what confidence level would be acceptable.

## Core references

- Understanding Machine Learning: From Theory to Algorithms — Shalev-Shwartz & Ben-David: https://www.cs.huji.ac.il/~shais/UnderstandingMachineLearning/understanding-machine-learning-theory-algorithms.pdf
- An Introduction to Statistical Learning: https://www.statlearning.com/
- The Elements of Statistical Learning: https://hastie.su.domains/ElemStatLearn/
- Stanford CS229 notes: https://cs229.stanford.edu/main_notes.pdf
- Deep Learning book: https://www.deeplearningbook.org/
