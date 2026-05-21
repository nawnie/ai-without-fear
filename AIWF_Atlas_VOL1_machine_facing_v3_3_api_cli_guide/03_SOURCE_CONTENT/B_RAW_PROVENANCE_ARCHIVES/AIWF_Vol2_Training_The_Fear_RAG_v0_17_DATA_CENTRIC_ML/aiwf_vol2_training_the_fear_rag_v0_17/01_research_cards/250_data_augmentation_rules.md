# 250 — Data Augmentation Rules Across Modalities

**Pass:** 17  
**Snapshot:** March 2026  
**Layer:** Data-centric ML / dataset engineering / governance  
**Status:** RAG research note

## Purpose
Augmentation teaches invariances. Bad augmentation teaches wrong invariances.

## Modality rules
- Tabular: be conservative; synthetic rows can break correlations.
- Images: crop/color/flip only if the label survives.
- Faces/characters: aggressive crop or color shift may damage identity learning.
- Audio: noise/time shift/pitch changes must preserve speaker/label intent.
- Text: paraphrase only if semantics, tone, and policy constraints survive.
- Video: temporal augmentation must preserve motion label.

## AIWF rule
Do not augment what the model is supposed to learn.
