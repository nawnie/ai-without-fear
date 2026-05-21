# Learning Guide Structure Hardening v2.5 Report

## Purpose

This pass hardens the Gradio/lakeFS/Topics 20–25 learning-guide integration added in v2.4.

The new learning-guide documents are useful source material, but several uploaded sections contained draft packaging language such as page-count targets, final-PDF assembly notes, future-delivery notes, and broad benchmark/model claims. Those are not reliable machine-ingestion facts.

## Actions

- Cleaned active canonical learning-guide source copies while preserving technical substance.
- Preserved pre-clean copies in `06_CHANGE_HISTORY/learning_guide_cleanup_pre_v2_5/` for provenance.
- Added `00_AI_READ_FIRST/LEARNING_GUIDE_SOURCE_USE_POLICY.md`.
- Added `10_SCHEMA_AND_INDEX/learning_guide_claim_overrides_v2_5.jsonl`.
- Added `04_MANIFESTS/learning_guide_cleanup_manifest_v2_5.csv`.
- Added `04_MANIFESTS/learning_guide_web_source_pinset_v2_5.jsonl`.
- Regenerated current file manifest, checksum file, duplicate audit, and cleanliness audit.

## Cleanup count

- Canonical learning-guide files cleaned: 8
- Active slop/scaffold audit findings after cleanup: 0
- Active exact duplicate file hashes after cleanup: 0

## Source policy

The learning-guide source pack should be used for concepts, examples, labs, capstones, glossary entries, and diagram descriptions. It should not be used as proof of page count, publication status, benchmark superiority, model dominance, or universal cost percentages.
