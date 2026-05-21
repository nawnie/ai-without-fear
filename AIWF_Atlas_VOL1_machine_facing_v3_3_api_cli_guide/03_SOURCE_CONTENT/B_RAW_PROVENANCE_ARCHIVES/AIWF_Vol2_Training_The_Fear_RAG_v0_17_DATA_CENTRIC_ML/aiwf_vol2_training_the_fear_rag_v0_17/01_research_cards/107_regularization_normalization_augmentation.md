# 107 — Regularization, Normalization, and Augmentation

## Core claim

Regularization is how we restrict or shape learning so the model generalizes instead of memorizing brittle details.

## Regularization methods

- weight decay: penalizes large weights
- dropout: randomly disables activations during training
- early stopping: stops before overfit becomes severe
- label smoothing: softens hard labels
- data augmentation: creates transformed examples that preserve label meaning
- mixup/cutmix: blends examples and labels
- noise injection: improves robustness when used carefully

## Normalization methods

- batch normalization
- layer normalization
- RMSNorm
- group normalization

Normalization affects training stability and signal scale. It is not only about speed.

## Augmentation by domain

- images: crop, flip, color jitter, blur, noise, perspective
- text: paraphrase, backtranslation, controlled template variation
- audio: noise, speed, pitch, room impulse response
- video: temporal crop, frame sampling, motion-preserving transforms

## AIWF caution

Augmentation must preserve the label. If an augmentation changes the answer, it creates label noise.

## Reader exercise

Train an image classifier with no augmentation, weak augmentation, and destructive augmentation. Compare validation behavior.
