# 109 — Evaluation, Metrics, Calibration, and Experimental Design

## Core claim

Evaluation is a measurement system. If the instrument is bad, the result is bad.

## Common metrics

Classification:

- accuracy
- precision
- recall
- F1
- AUROC
- PR-AUC
- confusion matrix

Regression:

- MAE
- MSE/RMSE
- R²
- residual analysis

Retrieval:

- recall@k
- precision@k
- MRR
- nDCG

Generation:

- task-specific rubrics
- pairwise preference tests
- human evaluation
- safety and factuality checks
- regression prompts

## Calibration

A calibrated classifier that says 80% confidence should be correct about 80% of the time on similar data. Calibration matters when confidence drives decisions.

## Experimental design

- define hypothesis before running
- change one factor when possible
- record config and seed
- keep test set untouched
- use ablations to isolate cause
- rerun suspicious improvements

## AIWF rule

Pretty samples are screenshots, not evaluation.

## Reader exercise

Build an eval sheet with at least one metric, one qualitative rubric, one failure category, and one release threshold.
