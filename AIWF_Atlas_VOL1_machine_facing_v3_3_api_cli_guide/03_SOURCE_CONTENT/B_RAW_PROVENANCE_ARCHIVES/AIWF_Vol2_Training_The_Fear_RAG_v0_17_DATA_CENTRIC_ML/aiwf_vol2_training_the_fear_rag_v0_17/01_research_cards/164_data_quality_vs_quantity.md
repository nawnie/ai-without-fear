# 164 — Data Quality vs Quantity

**Snapshot:** March 2026  
**Layer:** Statistical learning / generalization / college-postgrad ML  
**Use in AIWF Vol. 2:** Chunk as theory + technique + lab doctrine.

## Core idea

More data helps only when it adds useful signal. Duplicates, leakage, mislabeled examples, low-quality captions, and distribution mismatch can make more data harmful.

## AIWF doctrine

Quality is not aesthetic. Quality means relevant, diverse, correctly labeled, consented, representative, and eval-aligned.

## Technique

Use deduplication, label audits, stratified sampling, source tagging, edge-case packs, and holdout contamination checks before training.

## Exercise

Create three versions of a dataset: raw, deduped, and curated. Train/evaluate small models and compare.

## Core references

- Understanding Machine Learning: From Theory to Algorithms — Shalev-Shwartz & Ben-David: https://www.cs.huji.ac.il/~shais/UnderstandingMachineLearning/understanding-machine-learning-theory-algorithms.pdf
- An Introduction to Statistical Learning: https://www.statlearning.com/
- The Elements of Statistical Learning: https://hastie.su.domains/ElemStatLearn/
- Stanford CS229 notes: https://cs229.stanford.edu/main_notes.pdf
- Deep Learning book: https://www.deeplearningbook.org/
