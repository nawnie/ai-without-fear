# 161 — Class Imbalance and Decision Thresholds

**Snapshot:** March 2026  
**Layer:** Statistical learning / generalization / college-postgrad ML  
**Use in AIWF Vol. 2:** Chunk as theory + technique + lab doctrine.

## Core idea

Accuracy can lie when classes are imbalanced. Thresholds convert scores into actions, and thresholds should be chosen from costs, not vibes.

## Techniques

Precision, recall, F1, PR-AUC, ROC-AUC, balanced accuracy, class weighting, resampling, focal loss, threshold tuning, and cost curves.

## AIWF mapping

Safety filters, moderation tools, bad-caption detectors, duplicate detectors, and dataset QA classifiers are usually imbalanced problems.

## Exercise

Tune a threshold for a rare-positive classifier under two cost assumptions: false positives are expensive vs false negatives are expensive.

## Core references

- Understanding Machine Learning: From Theory to Algorithms — Shalev-Shwartz & Ben-David: https://www.cs.huji.ac.il/~shais/UnderstandingMachineLearning/understanding-machine-learning-theory-algorithms.pdf
- An Introduction to Statistical Learning: https://www.statlearning.com/
- The Elements of Statistical Learning: https://hastie.su.domains/ElemStatLearn/
- Stanford CS229 notes: https://cs229.stanford.edu/main_notes.pdf
- Deep Learning book: https://www.deeplearningbook.org/
