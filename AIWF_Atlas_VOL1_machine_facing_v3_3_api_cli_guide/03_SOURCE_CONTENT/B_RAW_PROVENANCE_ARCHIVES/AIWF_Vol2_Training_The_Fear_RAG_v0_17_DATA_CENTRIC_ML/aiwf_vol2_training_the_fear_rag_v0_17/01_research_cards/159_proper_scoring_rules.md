# 159 — Proper Scoring Rules and Loss Choice

**Snapshot:** March 2026  
**Layer:** Statistical learning / generalization / college-postgrad ML  
**Use in AIWF Vol. 2:** Chunk as theory + technique + lab doctrine.

## Core idea

A proper scoring rule rewards honest probability estimates. Cross-entropy/log loss is not just a training trick; it incentivizes calibrated probabilistic predictions under assumptions.

## Technique rule

Choose loss based on the prediction object: class labels, probabilities, rankings, distances, sequences, images, or preferences.

## AIWF mapping

SFT, contrastive embedding training, diffusion denoising, and DPO optimize different objects. Comparing their losses directly is meaningless.

## Exercise

Compare accuracy and log loss on two classifiers with the same accuracy but different probability confidence.

## Core references

- Understanding Machine Learning: From Theory to Algorithms — Shalev-Shwartz & Ben-David: https://www.cs.huji.ac.il/~shais/UnderstandingMachineLearning/understanding-machine-learning-theory-algorithms.pdf
- An Introduction to Statistical Learning: https://www.statlearning.com/
- The Elements of Statistical Learning: https://hastie.su.domains/ElemStatLearn/
- Stanford CS229 notes: https://cs229.stanford.edu/main_notes.pdf
- Deep Learning book: https://www.deeplearningbook.org/
