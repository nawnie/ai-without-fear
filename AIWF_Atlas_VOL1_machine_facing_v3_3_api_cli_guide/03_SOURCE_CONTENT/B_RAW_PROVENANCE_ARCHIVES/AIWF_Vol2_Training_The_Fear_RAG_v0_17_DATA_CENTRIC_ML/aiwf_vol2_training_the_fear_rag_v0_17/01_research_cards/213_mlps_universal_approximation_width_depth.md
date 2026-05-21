# 213 — MLPs, Universal Approximation, and Why Width Is Not Understanding

## Why this matters for Vol. 2
Students need to know why neural nets are powerful without being told they are magic. MLPs are the cleanest entry point into parameters, activations, layers, and learned representations.

## Core facts
- A multilayer perceptron composes affine transforms with nonlinear activations.
- Universal approximation says sufficiently large networks can approximate broad function classes; it does not say they will train efficiently or generalize.
- Depth can represent some functions more efficiently than shallow width, but deeper models are harder to optimize without residuals, normalization, and good initialization.

## AIWF rules of thumb
- Treat MLPs as the “blank canvas” baseline.
- Use MLPs for tabular or low-dimensional features only after comparing simple baselines.
- Do not let universal approximation become a license to ignore data quality or evaluation.

## Exercise / lab hook
Train linear regression, logistic regression, and a two-layer MLP on the same small dataset. Compare train error, validation error, calibration, and overfit behavior.

## Source anchors
- Deep Learning book — https://www.deeplearningbook.org/
- Dive into Deep Learning — https://d2l.ai/
- CS231n notes — https://cs231n.github.io/


## RAG tags
architecture, representation_learning, deep_learning, consumer_training, vol2_theory
