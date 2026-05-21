# 240 — Data Inventory, Lineage, and Provenance

**Pass:** 17  
**Snapshot:** March 2026  
**Layer:** Data-centric ML / dataset engineering / governance  
**Status:** RAG research note

## Purpose
Lineage answers: where did this record come from, what happened to it, and why is it allowed in this dataset?

## Minimum lineage fields
- source path or URL
- acquisition method
- owner/creator/license/consent status
- date range or version label
- transform history
- dedup hash
- label source
- split assignment
- exclusion flags

## Training risk
If lineage is missing, the dataset cannot be responsibly debugged, reproduced, audited, or shared.

## AIWF tool idea
Dataset Doctor should produce a lineage table automatically for local folders, including hashes, file metadata, captions, label files, and split membership.

## Sources
- BigCode Governance Card example: https://huggingface.co/datasets/bigcode/governance-card
- Hugging Face Dataset Cards: https://huggingface.co/docs/hub/datasets-cards
