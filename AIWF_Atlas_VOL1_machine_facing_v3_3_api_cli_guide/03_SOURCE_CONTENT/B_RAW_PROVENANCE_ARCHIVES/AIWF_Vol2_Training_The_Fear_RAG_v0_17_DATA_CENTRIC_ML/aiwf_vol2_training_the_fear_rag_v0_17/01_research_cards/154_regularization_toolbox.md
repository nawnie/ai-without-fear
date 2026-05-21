# 154 — Regularization Toolbox

**Snapshot:** March 2026  
**Layer:** Statistical learning / generalization / college-postgrad ML  
**Use in AIWF Vol. 2:** Chunk as theory + technique + lab doctrine.

## Core idea

Regularization constrains learning so the model favors simpler, smoother, or more stable solutions.

## Techniques

Weight decay, L1/L2 penalties, dropout, early stopping, data augmentation, label smoothing, adapter rank limits, freezing layers, smaller learning rates, and stronger validation gates are all regularization levers.

## Rule

Regularization is not a moral good. Too little gives memorization; too much gives underfit. Use validation behavior to choose.

## Exercise

Train the same small model with no regularization, weight decay, dropout, and early stopping. Compare curves.

## Core references

- Understanding Machine Learning: From Theory to Algorithms — Shalev-Shwartz & Ben-David: https://www.cs.huji.ac.il/~shais/UnderstandingMachineLearning/understanding-machine-learning-theory-algorithms.pdf
- An Introduction to Statistical Learning: https://www.statlearning.com/
- The Elements of Statistical Learning: https://hastie.su.domains/ElemStatLearn/
- Stanford CS229 notes: https://cs229.stanford.edu/main_notes.pdf
- Deep Learning book: https://www.deeplearningbook.org/
