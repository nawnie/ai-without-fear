# 120 — MLOps, Reproducibility, Deployment, and Monitoring

## Core claim

A model is not finished when training ends. Deployment creates a lifecycle.

## Reproducibility artifacts

- source data version
- preprocessing script/version
- model base checkpoint
- trainer version
- config file
- seed
- hardware notes
- logs
- metrics
- sample outputs
- model card
- dataset card
- release decision

## Deployment concepts

- model registry
- artifact storage
- quantization/export
- inference server
- rollback
- canary deployment
- monitoring
- drift detection
- incident response

## Drift types

- input drift
- output drift
- label drift
- behavior drift after model updates
- user behavior drift

## AIWF run-pack rule

Every serious training run should be reproducible enough that another person can understand what was trained, on what data, using what settings, with what result, and why it was released or rejected.

## Reader exercise

Package a tiny model run with config, logs, metric table, dataset note, and release/reject memo.
