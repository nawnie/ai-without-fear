# 169 — Causality vs Correlation

**Snapshot:** March 2026  
**Layer:** Statistical learning / generalization / college-postgrad ML  
**Use in AIWF Vol. 2:** Chunk as theory + technique + lab doctrine.

## Core idea

Prediction models can exploit correlations without knowing causes. Interventions require causal reasoning, not just predictive accuracy.

## Failure mode

A model may learn hospital ID, camera type, background, timestamp, or author style instead of the real causal feature.

## AIWF rule

When the decision changes the world, ask causal questions. When the model only predicts an existing label, correlation may still be useful but must be bounded.

## Exercise

Design a spurious-correlation dataset and show that random splits hide the issue while grouped splits expose it.

## Core references

- Understanding Machine Learning: From Theory to Algorithms — Shalev-Shwartz & Ben-David: https://www.cs.huji.ac.il/~shais/UnderstandingMachineLearning/understanding-machine-learning-theory-algorithms.pdf
- An Introduction to Statistical Learning: https://www.statlearning.com/
- The Elements of Statistical Learning: https://hastie.su.domains/ElemStatLearn/
- Stanford CS229 notes: https://cs229.stanford.edu/main_notes.pdf
- Deep Learning book: https://www.deeplearningbook.org/
