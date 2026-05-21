# 106 — Generalization, Bias/Variance, and Double Descent

## Core claim

The point of training is not memorizing training data. The point is useful performance on unseen data from the target distribution.

## Classical framing

- bias: error from overly simple assumptions
- variance: error from sensitivity to the training sample
- underfitting: model cannot capture the pattern
- overfitting: model captures noise or irrelevant training details

## Modern complication

Deep learning complicates the simple U-shaped bias/variance picture. In overparameterized systems, test error may rise near the interpolation threshold and then fall again as capacity increases. This is commonly called double descent.

## Practical consequence

Beginner rule “smaller model generalizes better” is not universally true. Generalization depends on data, architecture, optimizer, regularization, scale, and training regime.

## AIWF rule

Use validation behavior and targeted evals. Do not rely on slogans.

## Reader exercise

Train models of increasing capacity on the same dataset. Plot train error and validation error. Identify underfit, overfit, and any unexpected capacity effects.
