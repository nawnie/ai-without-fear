# 146 — Empirical Risk Minimization

**Snapshot:** March 2026  
**Layer:** Statistical learning / generalization / college-postgrad ML  
**Use in AIWF Vol. 2:** Chunk as theory + technique + lab doctrine.

## Core idea

Training is usually framed as minimizing empirical risk: choose parameters that reduce average loss on the observed training sample. The danger is that empirical risk is only a proxy for population risk, the expected loss on future data.

## Why it matters for AIWF

Every trainer UI hides ERM under buttons like train, fit, fine-tune, or optimize. Vol. 2 should teach that the loss curve is not truth; it is an estimate from a sample.

## Technique rules

Define the loss. Define the training distribution. Define the target deployment distribution. Do not compare models trained on different samples unless the evaluation protocol is fixed.

## Exercise

Train a small classifier on a toy dataset. Record train loss and test loss every epoch. Identify where empirical risk keeps improving while population proxy risk stops improving.

## Core references

- Understanding Machine Learning: From Theory to Algorithms — Shalev-Shwartz & Ben-David: https://www.cs.huji.ac.il/~shais/UnderstandingMachineLearning/understanding-machine-learning-theory-algorithms.pdf
- An Introduction to Statistical Learning: https://www.statlearning.com/
- The Elements of Statistical Learning: https://hastie.su.domains/ElemStatLearn/
- Stanford CS229 notes: https://cs229.stanford.edu/main_notes.pdf
- Deep Learning book: https://www.deeplearningbook.org/
