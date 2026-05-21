# Pass 11 Foundation Labs

These labs are designed for Vol. 2 readers who know how to use AI tools but need college/postgraduate-grade ML judgment.

## Lab 1 — The Learning Contract

Write a one-page training contract before running anything.

Required fields:

- task;
- input;
- output;
- model family;
- baseline;
- metric;
- split method;
- release rule;
- known failure that would invalidate the run.

Pass condition: another reader can tell exactly what success and failure mean.

## Lab 2 — Leakage Hunt

Given a dataset folder or CSV, find at least five leakage risks.

Checks:

- exact duplicates;
- near duplicates;
- group identity overlap;
- target in filenames/metadata;
- time leakage;
- preprocessing fit before split;
- synthetic train/eval contamination.

Pass condition: produce a split plan that prevents obvious leakage.

## Lab 3 — Baseline Ladder

Build three baselines before training a large model.

Required ladder:

1. simple rule/majority baseline;
2. classical ML baseline;
3. embedding or off-the-shelf foundation model baseline.

Pass condition: explain whether training is justified.

## Lab 4 — Metric Trap

Use an imbalanced dataset and show why accuracy can lie.

Required output:

- confusion matrix;
- accuracy;
- precision;
- recall;
- F1/macro F1;
- ROC-AUC if applicable;
- PR-AUC if applicable.

Pass condition: choose the metric that matches failure cost.

## Lab 5 — Calibration Check

Train a probability-output classifier and check whether probabilities are calibrated.

Required output:

- reliability-bin table;
- Brier score or similar calibration score;
- post-calibration comparison if possible.

Pass condition: explain why confidence is not the same as correctness.

## Lab 6 — Optimizer Sandbox

Train a tiny neural net under four optimizer/LR settings.

Required runs:

- SGD low LR;
- SGD + momentum;
- AdamW sane LR;
- too-high LR.

Pass condition: identify slow learning, stable learning, oscillation, divergence, and overfit from curves.

## Lab 7 — Learning Curve Diagnosis

Given a collection of run curves, diagnose likely causes and propose the next single change.

Pass condition: no shotgun tuning. One hypothesis, one change, one expected signal.

## Lab 8 — AIWF Run Pack

Package a tiny run as if it were being released.

Required files:

- config;
- dataset manifest;
- split report;
- environment notes;
- seed;
- logs/curves;
- eval report;
- model card draft;
- known failures;
- release decision.

Pass condition: another person can reproduce or reject the result without asking what happened.
