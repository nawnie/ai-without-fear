# 104 — Loss Functions and Objective Design

## Core claim

The loss function is the contract. The model optimizes the contract, not the human intention behind it.

## Common losses

- MSE: punishes large errors heavily; sensitive to outliers
- MAE: more robust to outliers; less smooth around zero
- Huber: compromise between MSE and MAE
- binary cross-entropy: binary classification probability loss
- categorical cross-entropy: multiclass probability loss
- contrastive loss: pulls similar representations together and pushes dissimilar apart
- triplet loss: anchor, positive, negative ranking
- denoising loss: predict clean signal or noise from corrupted signal
- policy/reward objectives: optimize behavior under rewards/preferences

## Objective mismatch

A model can minimize loss and still fail the job.

Examples:

- A chatbot trained to be agreeable may become sycophantic.
- An image LoRA trained only on close-ups may fail full-body prompts.
- A classifier trained on accuracy may ignore rare but important cases.
- A summarizer trained on length-limited examples may omit critical details.

## AIWF rule

Before training, write the behavior contract in plain English. Then map it to data, objective, and eval. If those do not match, the training run is already compromised.

## Reader exercise

Use the same regression dataset with MSE and MAE. Add outliers. Observe which model changes more and explain why.
