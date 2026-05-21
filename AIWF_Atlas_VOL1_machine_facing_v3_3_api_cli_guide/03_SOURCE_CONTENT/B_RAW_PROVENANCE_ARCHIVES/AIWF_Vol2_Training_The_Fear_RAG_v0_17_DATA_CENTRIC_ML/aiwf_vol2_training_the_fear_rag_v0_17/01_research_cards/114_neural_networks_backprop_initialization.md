# 114 — Neural Networks, Backpropagation, and Initialization

## Core claim

A neural network is a chain of differentiable transformations. Backpropagation calculates how each parameter contributed to the loss.

## Components

- input layer
- hidden layers
- output layer
- weights and biases
- activations
- loss
- optimizer

## Activation functions

- sigmoid: historically important, saturation issues
- tanh: centered but still saturates
- ReLU: simple and effective, dead-unit risk
- GELU/SiLU: common in modern transformers/diffusion models

## Initialization

Bad initialization can kill training before it begins.

Concepts:

- symmetry breaking
- variance preservation
- Xavier/Glorot initialization
- He initialization

## Backprop intuition

Forward pass: make prediction.

Loss: measure mistake.

Backward pass: assign credit/blame.

Optimizer step: update parameters.

## Reader exercise

Implement a two-layer MLP and manually inspect gradient magnitudes across layers.
