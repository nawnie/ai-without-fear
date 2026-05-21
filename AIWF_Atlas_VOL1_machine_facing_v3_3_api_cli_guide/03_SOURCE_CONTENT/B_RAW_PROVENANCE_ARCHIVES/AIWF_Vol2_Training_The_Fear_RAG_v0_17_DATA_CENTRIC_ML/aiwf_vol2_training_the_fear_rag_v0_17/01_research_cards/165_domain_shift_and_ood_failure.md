# 165 — Domain Shift and OOD Failure

**Snapshot:** March 2026  
**Layer:** Statistical learning / generalization / college-postgrad ML  
**Use in AIWF Vol. 2:** Chunk as theory + technique + lab doctrine.

## Core idea

Models assume future data resembles training data. Domain shift breaks that assumption.

## Types

Covariate shift, label shift, concept drift, style shift, sensor/camera shift, language/register shift, and policy/user behavior shift.

## AIWF mapping

A LoRA trained on studio portraits may fail on phone photos. A chatbot trained on clean Q&A may fail in messy real support logs.

## Exercise

Evaluate the same model on in-domain and out-of-domain splits. Write a failure memo before changing training settings.

## Core references

- Understanding Machine Learning: From Theory to Algorithms — Shalev-Shwartz & Ben-David: https://www.cs.huji.ac.il/~shais/UnderstandingMachineLearning/understanding-machine-learning-theory-algorithms.pdf
- An Introduction to Statistical Learning: https://www.statlearning.com/
- The Elements of Statistical Learning: https://hastie.su.domains/ElemStatLearn/
- Stanford CS229 notes: https://cs229.stanford.edu/main_notes.pdf
- Deep Learning book: https://www.deeplearningbook.org/
