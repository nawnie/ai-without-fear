# 112 — Trees, Ensembles, and Tabular ML

## Core claim

For tabular business data, tree ensembles often beat neural networks in cost, reliability, and interpretability.

## Decision trees

Trees split features into decision regions. They are easy to inspect but overfit easily.

## Random forests

Many trees trained on sampled data/features. They reduce variance.

## Gradient boosting

Builds trees sequentially to correct prior errors. Commonly strong for tabular tasks.

## Practical strengths

- works well with mixed feature types
- strong on small/medium tabular data
- less preprocessing than neural nets
- useful feature importance diagnostics

## Practical risks

- leakage through IDs and timestamps
- poor extrapolation outside training range
- misleading feature importance under correlated features
- fairness and proxy-variable risk

## AIWF rule

Do not use a neural network to impress yourself when a boosted tree solves the actual job better.

## Reader exercise

Train a gradient-boosted tree and a neural net on a tabular dataset. Compare accuracy, training time, interpretability, and deployment complexity.
