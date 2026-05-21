# 113 — Kernels, Similarity, and Support Vector Machines

## Core claim

Kernel methods teach a core modern lesson: sometimes the right similarity function matters more than the raw feature space.

## SVM intuition

A support vector machine finds a decision boundary with maximum margin. The support vectors are the examples that define the boundary.

## Kernel trick

A kernel computes similarity as if data were mapped to a higher-dimensional space, without explicitly constructing that space.

Common kernels:

- linear
- polynomial
- radial basis function

## Modern connection

Embeddings and attention systems are not the same as SVM kernels, but they share the broader theme: represent data so relationships become easier to use.

## Practical use

SVMs still matter for:

- small/medium datasets
- high-dimensional features
- strong baselines
- teaching margin and similarity

## Reader exercise

Train a linear SVM and RBF-kernel SVM on a nonlinear toy dataset. Plot the decision boundaries.
