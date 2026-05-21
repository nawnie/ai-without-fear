# 257 — AIWF Dataset Doctor v0.4 — Data-Centric Spec

**Pass:** 17  
**Snapshot:** March 2026  
**Layer:** Data-centric ML / dataset engineering / governance  
**Status:** RAG research note

## Purpose
Upgrade Dataset Doctor from file checker to data-centric ML assistant.

## New modules
1. Inventory and hashing
2. Rights/consent questionnaire
3. Schema inference and validation
4. Duplicate and near-duplicate scan
5. Split planner
6. Label/caption QA
7. PII/sensitive content triage
8. Drift comparison against previous dataset version
9. Dataset card generator
10. Training run pack exporter

## Output folders
- `dataset_manifest/`
- `validation_reports/`
- `split_manifests/`
- `source_review/`
- `dataset_card/`
- `trainer_exports/`

## AIWF rule
The tool should block unsafe presets, not silently generate them.
