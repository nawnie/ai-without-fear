# 156 — Bootstrap, Uncertainty, and Confidence Intervals

**Snapshot:** March 2026  
**Layer:** Statistical learning / generalization / college-postgrad ML  
**Use in AIWF Vol. 2:** Chunk as theory + technique + lab doctrine.

## Core idea

A point metric without uncertainty is an incomplete claim. Bootstrap resampling estimates variability by repeatedly sampling from observed data.

## AIWF use

Use confidence intervals around accuracy, F1, retrieval hit rate, image preference win rate, and human rating scores. A 1-point improvement may be noise.

## Technique rule

Report metric + sample size + confidence interval + eval-set source.

## Exercise

Bootstrap an evaluation set to estimate a 95% interval for accuracy or F1.

## Core references

- Understanding Machine Learning: From Theory to Algorithms — Shalev-Shwartz & Ben-David: https://www.cs.huji.ac.il/~shais/UnderstandingMachineLearning/understanding-machine-learning-theory-algorithms.pdf
- An Introduction to Statistical Learning: https://www.statlearning.com/
- The Elements of Statistical Learning: https://hastie.su.domains/ElemStatLearn/
- Stanford CS229 notes: https://cs229.stanford.edu/main_notes.pdf
- Deep Learning book: https://www.deeplearningbook.org/
