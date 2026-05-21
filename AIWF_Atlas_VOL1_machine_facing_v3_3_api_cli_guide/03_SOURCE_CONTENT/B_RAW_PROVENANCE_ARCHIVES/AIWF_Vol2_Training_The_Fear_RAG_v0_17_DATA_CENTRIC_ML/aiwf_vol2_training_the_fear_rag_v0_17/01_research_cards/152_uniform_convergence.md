# 152 — Uniform Convergence

**Snapshot:** March 2026  
**Layer:** Statistical learning / generalization / college-postgrad ML  
**Use in AIWF Vol. 2:** Chunk as theory + technique + lab doctrine.

## Core idea

Uniform convergence is the idea that empirical performance should be close to true performance for all hypotheses in a class when enough data is available.

## Practical translation

Validation only means something if the validation set is independent, representative, and hard enough. A weak validation set can converge to the wrong confidence.

## AIWF mapping

Prompt-picked cherry samples are not validation. A real eval set must be held out before tuning and must contain edge cases.

## Exercise

Create a fixed evaluation pack before training a LoRA. Do not edit it after viewing results. Document every failure.

## Core references

- Understanding Machine Learning: From Theory to Algorithms — Shalev-Shwartz & Ben-David: https://www.cs.huji.ac.il/~shais/UnderstandingMachineLearning/understanding-machine-learning-theory-algorithms.pdf
- An Introduction to Statistical Learning: https://www.statlearning.com/
- The Elements of Statistical Learning: https://hastie.su.domains/ElemStatLearn/
- Stanford CS229 notes: https://cs229.stanford.edu/main_notes.pdf
- Deep Learning book: https://www.deeplearningbook.org/
