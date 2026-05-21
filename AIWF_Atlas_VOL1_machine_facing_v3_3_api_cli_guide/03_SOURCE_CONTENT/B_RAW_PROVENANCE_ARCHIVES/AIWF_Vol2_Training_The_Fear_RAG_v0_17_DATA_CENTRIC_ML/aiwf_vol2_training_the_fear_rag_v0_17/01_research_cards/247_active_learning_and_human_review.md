# 247 — Active Learning and Human Review Loops

**Pass:** 17  
**Snapshot:** March 2026  
**Layer:** Data-centric ML / dataset engineering / governance  
**Status:** RAG research note

## Concept
Active learning selects the most informative examples for human review instead of labeling randomly.

## Selection strategies
- uncertainty sampling
- disagreement between models
- embedding cluster boundary points
- rare class sampling
- high-loss examples
- production failures

## AIWF rule
When human review time is scarce, spend it where it changes the model most.

## Vol. 2 lab
Train a weak classifier. Ask the model to identify its least certain samples. Label only those, retrain, and compare against random labeling.

## Sources
- Snorkel active learning docs: https://docs.snorkel.ai/docs/25.4/user-guide/intro/active-learning-weak-supervision/
