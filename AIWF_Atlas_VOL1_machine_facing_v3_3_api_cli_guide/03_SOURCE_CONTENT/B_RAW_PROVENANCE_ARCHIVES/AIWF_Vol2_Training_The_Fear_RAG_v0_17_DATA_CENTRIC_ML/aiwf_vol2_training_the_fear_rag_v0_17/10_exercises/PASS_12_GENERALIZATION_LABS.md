# Pass 12 Labs — Statistical Learning and Generalization

**Snapshot:** March 2026

## Lab 1 — Empirical vs population risk toy model

Train a small classifier or regressor. Record train and validation loss every epoch. Explain where training loss stops being useful as a release signal.

## Lab 2 — Bias/variance polynomial regression

Fit degree 1, 3, 10, and 30 polynomial models. Plot train/test error. Identify underfit, good fit, and overfit.

## Lab 3 — Leakage trap

Create a dataset with duplicate or grouped records. Compare random split vs grouped split. Explain the fake gain.

## Lab 4 — Regularization dial

Train the same model with no regularization, L2/weight decay, dropout, and early stopping. Compare curves and final metrics.

## Lab 5 — Confidence intervals for model metrics

Bootstrap a fixed evaluation set. Report metric, sample size, and interval. Decide whether two models are meaningfully different.

## Lab 6 — Calibration curve

Train a classifier and plot predicted probability bins against observed accuracy. Apply calibration and compare.

## Lab 7 — Conformal prediction

Wrap a classifier with split conformal prediction. Inspect examples that produce large prediction sets or abstentions.

## Lab 8 — OOD split

Evaluate the same model on in-domain and out-of-domain sets. Write a failure memo before retraining.

## Lab 9 — Label noise stress test

Inject increasing label noise. Observe when training loss keeps improving while validation quality collapses.

## Lab 10 — Statistical release memo

Pick any trained model from Vol. 2. Write a release/retrain/reject memo using evidence only.
