# 243 — Data Quality Dimensions

**Pass:** 17  
**Snapshot:** March 2026  
**Layer:** Data-centric ML / dataset engineering / governance  
**Status:** RAG research note

## Dimensions
Accuracy, completeness, consistency, validity, uniqueness, timeliness, representativeness, label reliability, class balance, coverage of edge cases, and legal/consent suitability.

## Important rule
“More data” can make a model worse if it adds systematic noise, leakage, bias, or conflicting labels.

## AIWF teaching note
Students should learn to score a dataset before training. The score is not cosmetic; it predicts training outcome risk.

## Exercise
Given 1000 files, compute duplicate rate, missing label rate, class imbalance, outlier count, invalid records, PII flags, and holdout contamination risk.
