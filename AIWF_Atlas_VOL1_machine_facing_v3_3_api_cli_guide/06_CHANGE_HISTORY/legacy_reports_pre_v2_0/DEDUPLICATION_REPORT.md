# Deduplication Report

## Policy

Exact SHA256 byte-level file deduplication only. No semantic compression, paragraph pruning, near-duplicate removal, or version pruning was performed.

## Summary

- Source files received: **9**
- Files scanned inside sources: **1597**
- Unique files kept: **1248**
- Exact duplicate files skipped: **349**
- Path collisions renamed: **0**

## Source inventory

| Source | Files seen | Unique kept | Exact duplicates skipped |
|---|---:|---:|---:|
| `AIWF_Vol2_Training_The_Fear_RAG_v0_17_DATA_CENTRIC_ML.zip` | 453 | 450 | 3 |
| `AIWF_RAG_Concept_Additions_v0_1.zip` | 8 | 8 | 0 |
| `AIWF_Pip_Package_RAG_Starter_v1_9.zip` | 438 | 438 | 0 |
| `AIWF_Pip_Package_RAG_Starter_v1_5.zip` | 326 | 18 | 308 |
| `aiwf_node_research_pass02N_flux_model_control_sampler_mds_v1_4.zip` | 246 | 246 | 0 |
| `AIWF-Project-Chat-Distribution-Roadmap-v0.6-cfg-denoise-inpaint-theory.zip` | 62 | 57 | 5 |
| `AIWF-Project-Chat-Distribution-Roadmap-v0.5-comfyui-core-api-subgraph.zip` | 33 | 17 | 16 |
| `AIWF-Project-Chat-Distribution-Roadmap-v0.3-rag-source-ledger.zip` | 30 | 14 | 16 |
| `ComfyUI Custom Nodes_ 2026 Modern Tier Field Report.md` | 1 | 0 | 1 |

## Unique file extensions

| Extension | Count |
|---|---:|
| `.md` | 936 |
| `.csv` | 213 |
| `.ps1` | 37 |
| `.json` | 26 |
| `.txt` | 17 |
| `.py` | 7 |
| `.toml` | 3 |
| `.pbtxt` | 3 |
| `.jsonl` | 3 |
| `.yml` | 1 |
| `.example` | 1 |
| `.yaml` | 1 |

## Duplicate handling

Skipped duplicates are listed in `MANIFESTS/duplicate_exact_content_map.csv` and `.json`.

Each row records the duplicate source path and the canonical kept path.

## Path collision handling

Path collisions are listed in `MANIFESTS/path_collision_map.csv`. A collision only occurs when two different files would have landed at the same archive path; the later file is preserved with a `__collision_N` suffix.