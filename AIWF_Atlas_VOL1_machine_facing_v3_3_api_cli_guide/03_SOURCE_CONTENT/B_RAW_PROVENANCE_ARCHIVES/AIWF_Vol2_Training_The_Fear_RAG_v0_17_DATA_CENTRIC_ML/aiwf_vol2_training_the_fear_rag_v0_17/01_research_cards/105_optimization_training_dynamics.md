# 105 — Optimization and Training Dynamics

## Core claim

Training is controlled motion through parameter space. The optimizer, learning rate, precision, batch size, and schedule define how that motion behaves.

## Concepts

- gradient descent: update parameters opposite the gradient
- SGD: noisy updates from mini-batches
- momentum: smooths updates by accumulating direction
- Adam: adaptive moment estimates for per-parameter updates
- AdamW: decoupled weight decay, common default in transformer training
- learning-rate schedule: how step size changes over time
- warmup: gradual ramp to avoid early instability
- gradient clipping: caps gradient magnitude
- gradient accumulation: simulates larger batches under VRAM limits
- mixed precision: reduces memory/compute but can cause numeric issues

## Training signatures

- smooth falling train loss, stable validation: healthy learning
- train loss falls, validation worsens: overfit or mismatch
- loss spikes or NaN: LR too high, precision instability, bad data, exploding gradients
- loss flat: LR too low, frozen weights, bad labels, broken objective, no signal
- excellent loss but bad behavior: objective/eval mismatch

## AIWF rule

Do not change ten knobs at once. Treat each run like an experiment with a hypothesis.

## Reader exercise

Train a small neural network three times: LR too low, LR reasonable, LR too high. Save loss plots and write a diagnosis note.
