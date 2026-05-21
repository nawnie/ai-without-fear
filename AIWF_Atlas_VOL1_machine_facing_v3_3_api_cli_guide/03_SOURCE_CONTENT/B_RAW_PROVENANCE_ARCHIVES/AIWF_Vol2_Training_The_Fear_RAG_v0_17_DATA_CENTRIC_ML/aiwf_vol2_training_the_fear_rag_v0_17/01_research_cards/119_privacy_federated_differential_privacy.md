# 119 — Privacy, Federated Learning, and Differential Privacy

## Core claim

Training can leak information. Privacy is not guaranteed by calling the output “weights.”

## Privacy risks

- direct PII in training data
- memorization of rare sequences
- membership inference
- model inversion
- reconstruction from gradients
- voice/face/likeness misuse
- retained sensitive metadata

## Differential privacy intuition

Differential privacy limits how much any one example can affect the released result. In ML, DP-SGD clips and noises gradients to reduce memorization risk, usually at some utility cost.

## Federated learning intuition

Federated learning trains across devices or silos without centralizing raw data. It can reduce some data-movement risks but does not automatically solve privacy, poisoning, or governance.

## Practical AIWF requirements

- run PII scan before training
- document consent and provenance
- avoid training on private chats/voice/faces without explicit rights
- test memorization for sensitive datasets
- keep deletion/rollback procedures

## Reader exercise

Create a toy text dataset with fake PII. Build a scanner that flags likely emails, phone numbers, addresses, and rare secret strings before training.
