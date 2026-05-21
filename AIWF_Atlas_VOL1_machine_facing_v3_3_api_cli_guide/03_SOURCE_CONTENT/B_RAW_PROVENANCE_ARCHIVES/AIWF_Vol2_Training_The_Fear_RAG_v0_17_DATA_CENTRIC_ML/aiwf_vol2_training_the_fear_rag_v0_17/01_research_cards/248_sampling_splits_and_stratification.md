# 248 — Sampling, Splits, and Stratification

**Pass:** 17  
**Snapshot:** March 2026  
**Layer:** Data-centric ML / dataset engineering / governance  
**Status:** RAG research note

## Split quality determines evaluation quality
A random split is not always valid. Some tasks need group splits, time splits, user splits, document splits, identity splits, or source-domain splits.

## Examples
- Medical/personal data: split by patient/person, not image.
- Chat logs: split by conversation, not message.
- Video: split by scene/source, not frame.
- RAG: split by document or topic; avoid same chunk family across train/eval.
- Business data: time-aware split for future prediction.

## AIWF rule
Split by the unit that could leak.

## Sources
- scikit-learn common pitfalls: https://scikit-learn.org/stable/common_pitfalls.html
