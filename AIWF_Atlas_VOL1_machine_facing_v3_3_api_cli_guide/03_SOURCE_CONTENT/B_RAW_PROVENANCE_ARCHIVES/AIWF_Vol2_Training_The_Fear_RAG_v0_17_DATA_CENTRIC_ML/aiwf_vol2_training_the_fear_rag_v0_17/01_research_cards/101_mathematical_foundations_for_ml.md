# 101 — Mathematical Foundations for Machine Learning

## Core claim

Machine learning is applied math with feedback loops. The math does not exist to intimidate the reader; it exists to name what the system is doing.

## Required concepts

### Linear algebra

- scalar: one number
- vector: ordered list of numbers
- matrix: table of numbers that transforms vectors
- tensor: higher-dimensional numeric container
- dot product: alignment/similarity between vectors
- norm: vector length or magnitude
- eigenvectors/eigenvalues: directions a transformation preserves, with scaling
- rank: number of independent dimensions a matrix can represent

### Calculus

- derivative: rate of change
- gradient: direction of steepest increase in many dimensions
- chain rule: how backpropagation propagates credit/blame through layers
- Jacobian/Hessian intuition: first- and second-order sensitivity

### Probability

- random variable
- distribution
- expectation
- variance
- conditional probability
- Bayes rule
- likelihood

### Information theory

- entropy: uncertainty in a distribution
- cross-entropy: mismatch between predicted and target distributions
- KL divergence: directional distribution difference
- mutual information: shared information between variables

## Why this matters for AIWF

- LoRA rank is a linear algebra concept.
- Embeddings are vectors.
- Attention uses matrix products.
- Loss curves are optimization signals.
- Cross-entropy is the default language-model loss.
- Diffusion training depends on noise distributions and denoising objectives.

## Reader exercise

Take a 3D vector representing a fake embedding. Compute dot product, cosine similarity, and Euclidean distance with two other vectors. Explain why nearest neighbor search can disagree depending on the metric.
