# 251 — Synthetic Data and Distillation Risks

**Pass:** 17  
**Snapshot:** March 2026  
**Layer:** Data-centric ML / dataset engineering / governance  
**Status:** RAG research note

## Value
Synthetic data can fill sparse behaviors, create instruction examples, generate counterexamples, and cheaply bootstrap small models.

## Risks
- teacher model bias
- hallucinated facts
- style collapse
- loss of diversity
- over-clean data that fails real messiness
- legal or license ambiguity

## AIWF rule
Synthetic data is a draft, not ground truth. Mark it, score it, sample-audit it, and keep it separate in manifests.

## Vol. 2 exercise
Build a mixed dataset with human, synthetic, and corrected synthetic rows. Train three variants and compare behavior.
