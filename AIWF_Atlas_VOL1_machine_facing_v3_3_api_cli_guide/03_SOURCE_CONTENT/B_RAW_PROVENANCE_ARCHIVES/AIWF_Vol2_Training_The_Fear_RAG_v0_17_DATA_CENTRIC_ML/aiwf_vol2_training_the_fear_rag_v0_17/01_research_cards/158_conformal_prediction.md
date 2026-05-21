# 158 — Conformal Prediction

**Snapshot:** March 2026  
**Layer:** Statistical learning / generalization / college-postgrad ML  
**Use in AIWF Vol. 2:** Chunk as theory + technique + lab doctrine.

## Core idea

Conformal prediction wraps a trained model with statistically valid prediction sets or intervals under exchangeability assumptions.

## Why it belongs here

It gives practitioners a way to express uncertainty without needing to fully trust a model’s internal probabilities.

## AIWF mapping

A local AI tool could show abstain/needs-review labels when uncertainty sets are wide, especially for OCR, classification, or triage workflows.

## Exercise

Apply split conformal prediction to a classifier and inspect which samples produce large prediction sets.

## Core references

- Understanding Machine Learning: From Theory to Algorithms — Shalev-Shwartz & Ben-David: https://www.cs.huji.ac.il/~shais/UnderstandingMachineLearning/understanding-machine-learning-theory-algorithms.pdf
- An Introduction to Statistical Learning: https://www.statlearning.com/
- The Elements of Statistical Learning: https://hastie.su.domains/ElemStatLearn/
- Stanford CS229 notes: https://cs229.stanford.edu/main_notes.pdf
- Deep Learning book: https://www.deeplearningbook.org/
