# AIWF Dataset Doctor v0.4 — Data-Centric ML Spec

## Purpose
Make Dataset Doctor the default front door for Vol. 2 training workflows.

## Inputs
- local folders
- CSV/Parquet/JSONL
- image-caption pairs
- video-caption pairs
- audio-transcript pairs
- RAG document folders
- existing dataset manifests

## Core modules

### 1. Inventory
Hashes files/records, detects type, size, path, and possible metadata shortcuts.

### 2. Rights and consent checklist
Prompts user to classify source, license, consent scope, biometric/person content, minors, private data, and redistribution status.

### 3. Schema inference
Infers likely task type and validates required fields.

### 4. Deduplication
Exact hashes plus optional near-duplicate image/text/audio/video checks.

### 5. Split planner
Suggests random/stratified/group/time/source/topic/identity splits based on detected leakage risk.

### 6. Label and caption QA
Detects empty labels, rare labels, repeated captions, missing trigger token, contradictory labels, and suspiciously perfect class separation.

### 7. Sensitive data triage
Flags obvious PII/sensitive categories for review.

### 8. Dataset card generator
Builds a draft dataset card and a run-pack-ready manifest.

## Outputs
- `dataset_inventory.csv`
- `dataset_fingerprint.txt`
- `validation_report.md`
- `leakage_risk_report.md`
- `rights_review.md`
- `split_manifest.csv`
- `dataset_card.md`
- `trainer_export/`

## Safety behavior
Dataset Doctor should warn or block when release intent conflicts with unknown rights, private biometric data, minors, or missing consent.
