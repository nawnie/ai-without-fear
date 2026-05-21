# 246 — Weak Supervision and Programmatic Labeling

**Pass:** 17  
**Snapshot:** March 2026  
**Layer:** Data-centric ML / dataset engineering / governance  
**Status:** RAG research note

## Concept
Weak supervision uses rules, heuristics, models, metadata, patterns, or external knowledge to create noisy labels at scale.

## When useful
- lots of unlabeled data
- labels are expensive
- domain rules are clear
- perfect labels are not required for first-pass training

## Risk
Weak labels can encode rule bias. The labeling rules need their own validation set.

## AIWF use
A local Dataset Doctor can offer “labeling functions” for folders: file path keywords, metadata, VQA captions, OCR terms, face/person clustering, NSFW filters, or known source tags.

## Sources
- Snorkel weak supervision paper: https://pmc.ncbi.nlm.nih.gov/articles/PMC5951191/
- Snorkel active learning/weak supervision docs: https://docs.snorkel.ai/docs/25.4/user-guide/intro/active-learning-weak-supervision/
