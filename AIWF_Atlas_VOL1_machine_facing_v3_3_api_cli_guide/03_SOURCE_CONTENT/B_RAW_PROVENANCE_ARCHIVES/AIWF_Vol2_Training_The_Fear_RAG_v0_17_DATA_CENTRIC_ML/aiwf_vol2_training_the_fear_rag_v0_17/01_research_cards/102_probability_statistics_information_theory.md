# 102 — Probability, Statistics, and Information Theory

## Core claim

ML is not just curve fitting; it is decision-making under uncertainty.

## Probability vs statistics

Probability starts with a distribution and asks what data might appear.

Statistics starts with data and asks what distribution or process may have produced it.

Training sits between them: it guesses parameters that make observed data likely under a model.

## Terms the reader must own

- sample: one observed item
- population: the broader world the sample represents
- estimator: rule for guessing an unknown quantity
- bias: systematic error
- variance: sensitivity to sample noise
- confidence interval: range of plausible values under assumptions
- p-value: compatibility measure under a null model, not proof of truth
- likelihood: how compatible parameters are with observed data
- posterior: updated belief after evidence, in Bayesian framing

## Information theory links

Language models minimize cross-entropy between predicted next-token distributions and actual next tokens. Lower loss means the model assigns higher probability to the observed text, but that does not automatically prove truthfulness, safety, or usefulness.

KL divergence appears in distillation, reinforcement learning constraints, variational methods, and distribution alignment.

## AIWF rule

A model can be confident and wrong. Calibration matters because deployment cares about the relationship between predicted confidence and actual correctness.

## Reader exercise

Build a binary classifier and compare raw accuracy to calibration. Find a threshold where accuracy looks acceptable but precision or recall fails the real use case.
