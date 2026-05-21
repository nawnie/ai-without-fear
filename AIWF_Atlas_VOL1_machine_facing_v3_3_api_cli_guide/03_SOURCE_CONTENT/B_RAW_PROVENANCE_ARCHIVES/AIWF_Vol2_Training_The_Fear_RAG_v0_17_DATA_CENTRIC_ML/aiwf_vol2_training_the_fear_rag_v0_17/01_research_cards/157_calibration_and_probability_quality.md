# 157 — Calibration and Probability Quality

**Snapshot:** March 2026  
**Layer:** Statistical learning / generalization / college-postgrad ML  
**Use in AIWF Vol. 2:** Chunk as theory + technique + lab doctrine.

## Core idea

Accuracy asks whether the answer is right. Calibration asks whether predicted probabilities match observed frequencies.

## Why it matters

A model that says 90% confidence should be right about 90% of the time on similarly distributed data. Miscalibration is dangerous in automation and triage.

## AIWF mapping

For AI assistants, confidence displays should be treated carefully. If the model is not calibrated, confidence is performance theater.

## Exercise

Build a reliability diagram for a classifier and compare raw probabilities with calibrated probabilities.

## Core references

- Understanding Machine Learning: From Theory to Algorithms — Shalev-Shwartz & Ben-David: https://www.cs.huji.ac.il/~shais/UnderstandingMachineLearning/understanding-machine-learning-theory-algorithms.pdf
- An Introduction to Statistical Learning: https://www.statlearning.com/
- The Elements of Statistical Learning: https://hastie.su.domains/ElemStatLearn/
- Stanford CS229 notes: https://cs229.stanford.edu/main_notes.pdf
- Deep Learning book: https://www.deeplearningbook.org/
