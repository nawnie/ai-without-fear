# Structure Hardening v1.7 Report

## Purpose

This Z pass folded the v1.5/v1.6 source verification results into the machine-facing structure. It did not delete source content. It corrected canonical lane phrasing, retrieval-card metadata, lane profiles, and answer-gating rules so AI systems do not repeat unverified or corrected claims as hard facts.

## Key Changes

- Added `00_AI_READ_FIRST/TOPICS_20_25_CANONICAL_SOURCE_CORRECTIONS_v1_7.md`.
- Added `10_SCHEMA_AND_INDEX/topics_20_25_claim_status_overrides_v1_7.jsonl`.
- Added `10_SCHEMA_AND_INDEX/answer_gating_rules_v1_7.json`.
- Updated `10_SCHEMA_AND_INDEX/canonical_answer_rules.json`.
- Updated lane profiles for Topics 20–25.
- Corrected canonical lane phrasing for volatile or corrected claims.
- Regenerated global retrieval card indexes.

## Claims Gated

1. 30–70% synthetic frontier training data: marked not verified as hard fact.
2. Fixed 30–70 real/synthetic mix: marked not verified as universal rule.
3. ACL Synthetic Data tutorial: corrected to ACL 2025.
4. Qwen3-VL report: corrected to late-2025 source label.
5. DeepSeek active parameter claims: variant-specific only.
6. TPU 8t price/performance: corrected to official about 2.7x wording.
7. Electricity 30–50% inference TCO: marked not verified as hard fact.

## Canonical Files Updated

- 01_CANONICAL_RESEARCH_LANES/20_data_engineering_for_ai/CANONICAL_OVERVIEW.md
- 01_CANONICAL_RESEARCH_LANES/20_data_engineering_for_ai/CONCEPT_MAP.md
- 01_CANONICAL_RESEARCH_LANES/22_vision_language_ocr_document_ai/CANONICAL_OVERVIEW.md
- 01_CANONICAL_RESEARCH_LANES/22_vision_language_ocr_document_ai/CONCEPT_MAP.md
- 01_CANONICAL_RESEARCH_LANES/23_synthetic_data_dataset_creation/CANONICAL_OVERVIEW.md
- 01_CANONICAL_RESEARCH_LANES/23_synthetic_data_dataset_creation/CONCEPT_MAP.md
- 01_CANONICAL_RESEARCH_LANES/25_hardware_cost_performance_planning/CANONICAL_OVERVIEW.md
- 01_CANONICAL_RESEARCH_LANES/25_hardware_cost_performance_planning/CONCEPT_MAP.md

## Preservation Rule

Raw notes and the uploaded source register were preserved as provenance. The corrected overlay governs current machine answer phrasing.

## Retrieval Index Duplicate Control

The full normalized retrieval-card index now lives at `02_RETRIEVAL_INDEX/VOL1_RETRIEVAL_CARDS_NORMALIZED_v1_7.jsonl`. `global_retrieval_cards_current.jsonl` is a pointer file, not a duplicate full copy, to reduce retrieval noise. Exact duplicate hash audit: 0 duplicate file hashes after this correction.
