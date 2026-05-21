# 103 — Classical Supervised Learning

## Core claim

Classical ML is still the best teacher for deep learning because the concepts are visible.

## Main families

### Regression

Predicts continuous values.

Examples: price, temperature, run time, demand.

Common losses: MSE, MAE, Huber.

### Classification

Predicts categories.

Examples: spam/not spam, defect type, intent class.

Common losses: binary cross-entropy, categorical cross-entropy.

### Probabilistic classifiers

Output probabilities, not just labels. Useful when thresholds and costs matter.

### Baselines

A baseline is the simplest defensible model. It is not a waste of time. It tells whether the fancy model earned its complexity.

## Technique rules

- Always compare against a dumb baseline.
- Always separate train/validation/test.
- Always inspect class balance.
- Always check leakage before celebrating accuracy.
- Prefer interpretable models when they solve the task well.

## Common failure modes

- high train performance, low validation performance: overfit or leakage in train only
- poor train and validation performance: underfit, bad features, weak model, or wrong objective
- high offline metric, poor real behavior: dataset mismatch or wrong metric

## Reader exercise

Train logistic regression, random forest, gradient boosting, and a small neural network on the same tabular dataset. Compare performance and explain which one you would deploy.
