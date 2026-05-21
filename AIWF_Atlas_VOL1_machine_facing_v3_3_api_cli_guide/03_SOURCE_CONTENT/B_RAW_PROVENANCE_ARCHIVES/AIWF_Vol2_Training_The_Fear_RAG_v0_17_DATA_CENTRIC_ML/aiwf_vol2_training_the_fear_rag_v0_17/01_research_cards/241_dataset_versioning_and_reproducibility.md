# 241 — Dataset Versioning and Reproducibility

**Pass:** 17  
**Snapshot:** March 2026  
**Layer:** Data-centric ML / dataset engineering / governance  
**Status:** RAG research note

## Concept
Code versioning is not enough. Model behavior depends on data state. A run is not reproducible unless the exact dataset version, split, preprocessing, labels, and exclusions are known.

## Versioning levels
1. Folder snapshot: simple but fragile.
2. Hash manifest: practical for AIWF local packs.
3. DVC/lakeFS style versioning: stronger for larger projects.
4. Data warehouse/feature-store lineage: production grade.

## AIWF rule
Every training run gets a dataset fingerprint. If one file changes, the fingerprint changes.

## Sources
- DVC: https://dvc.org/
