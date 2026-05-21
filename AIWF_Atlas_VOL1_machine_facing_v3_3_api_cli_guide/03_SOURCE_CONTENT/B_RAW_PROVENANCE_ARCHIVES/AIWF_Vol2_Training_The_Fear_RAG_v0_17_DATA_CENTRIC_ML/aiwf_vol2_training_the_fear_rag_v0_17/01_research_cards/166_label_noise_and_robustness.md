# 166 — Label Noise and Robustness

**Snapshot:** March 2026  
**Layer:** Statistical learning / generalization / college-postgrad ML  
**Use in AIWF Vol. 2:** Chunk as theory + technique + lab doctrine.

## Core idea

Bad labels impose wrong gradients. Deep models can eventually memorize label noise if trained long enough.

## Techniques

Label audits, robust losses, early stopping, data pruning, confidence-based review, disagreement analysis, and human-in-the-loop relabeling.

## AIWF mapping

Caption noise in image training is label noise. Bad preference pairs in DPO are label noise. Wrong tool-call examples are label noise.

## Exercise

Inject 10%, 25%, and 40% label noise into a dataset. Compare train/test curves and early stopping behavior.

## Core references

- Understanding Machine Learning: From Theory to Algorithms — Shalev-Shwartz & Ben-David: https://www.cs.huji.ac.il/~shais/UnderstandingMachineLearning/understanding-machine-learning-theory-algorithms.pdf
- An Introduction to Statistical Learning: https://www.statlearning.com/
- The Elements of Statistical Learning: https://hastie.su.domains/ElemStatLearn/
- Stanford CS229 notes: https://cs229.stanford.edu/main_notes.pdf
- Deep Learning book: https://www.deeplearningbook.org/
