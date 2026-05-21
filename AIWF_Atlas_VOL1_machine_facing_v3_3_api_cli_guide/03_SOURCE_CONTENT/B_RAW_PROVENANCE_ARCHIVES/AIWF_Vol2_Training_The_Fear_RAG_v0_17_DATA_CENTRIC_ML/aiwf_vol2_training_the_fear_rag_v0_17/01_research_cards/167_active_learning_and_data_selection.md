# 167 — Active Learning and Data Selection

**Snapshot:** March 2026  
**Layer:** Statistical learning / generalization / college-postgrad ML  
**Use in AIWF Vol. 2:** Chunk as theory + technique + lab doctrine.

## Core idea

Active learning selects examples that are most informative to label, often where the model is uncertain or where errors cluster.

## Consumer relevance

When labeling is expensive, smarter selection beats random expansion.

## AIWF mapping

Dataset Doctor can surface ambiguous images, hard negatives, duplicate clusters, low-confidence captions, or failed eval cases for human review.

## Exercise

Run uncertainty sampling: label the 20 examples the model is least confident about, retrain, and compare to 20 random labels.

## Core references

- Understanding Machine Learning: From Theory to Algorithms — Shalev-Shwartz & Ben-David: https://www.cs.huji.ac.il/~shais/UnderstandingMachineLearning/understanding-machine-learning-theory-algorithms.pdf
- An Introduction to Statistical Learning: https://www.statlearning.com/
- The Elements of Statistical Learning: https://hastie.su.domains/ElemStatLearn/
- Stanford CS229 notes: https://cs229.stanford.edu/main_notes.pdf
- Deep Learning book: https://www.deeplearningbook.org/
