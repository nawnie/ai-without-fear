# 118 — Causality, Distribution Shift, and Robustness

## Core claim

A model trained on correlations can fail when the world changes. Robust ML asks whether the learned pattern survives outside the training distribution.

## Key distinctions

- correlation: variables move together
- causation: changing one variable changes another through a mechanism
- confounder: hidden/shared cause
- spurious feature: predictive in training, unreliable in deployment

## Distribution shift types

- covariate shift: input distribution changes
- label shift: class proportions change
- concept drift: relationship between input and target changes
- domain shift: new environment/site/user population

## Robustness tools

- grouped validation
- out-of-domain test sets
- stress tests
- adversarial examples
- data augmentation
- invariant feature checks
- monitoring after deployment

## AIWF rule

Ask: “What changes in the real world would make this model stupid?” Then test that.

## Reader exercise

Train a classifier where background correlates with class. Test on changed backgrounds and document the failure.
