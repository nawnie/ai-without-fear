# 238 — Dataset Lifecycle: Raw Data to Release Artifact

**Pass:** 17  
**Snapshot:** March 2026  
**Layer:** Data-centric ML / dataset engineering / governance  
**Status:** RAG research note

## Pipeline
Raw capture -> inventory -> rights check -> dedup -> normalization -> schema -> labeling -> split -> validation -> training -> eval -> failure review -> release documentation -> monitoring.

## Key distinction
A training dataset is not just a folder of files. It is a chain of decisions. Every transform can introduce bias, leakage, privacy risk, or benchmark inflation.

## Consumer-hardware note
Small local training can hide bad data because the dataset is usually small. That makes provenance and manual review even more important, not less.

## Required artifacts
- `dataset_manifest.json`
- `rights_and_consent.md`
- `schema_or_caption_rules.md`
- `split_manifest.csv`
- `known_exclusions.md`
- `eval_holdout_manifest.csv`
- `dataset_card.md`

## Sources
- Hugging Face Dataset Cards: https://huggingface.co/docs/hub/datasets-cards
- Hugging Face Datasets docs: https://huggingface.co/docs/datasets/index
