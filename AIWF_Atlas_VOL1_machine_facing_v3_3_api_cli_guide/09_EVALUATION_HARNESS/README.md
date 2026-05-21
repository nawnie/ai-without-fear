# AIWF Adapter Evaluation Harness

This folder contains the current evaluation tools for testing whether the AIWF Atlas improves assistant behavior compared with raw-file retrieval or no RAG.

## Current Load Order

1. `EVALUATION_RUBRIC.md`
2. `adapter_benchmark_protocol_current.md`
3. `raw_files_vs_atlas_comparison_plan_current.md`
4. `golden_question_sets/adapter_core_golden_questions_current.jsonl`
5. `expected_source_maps/adapter_core_expected_sources_current.jsonl`
6. `lane_eval_sets/` for per-lane checks
7. `lane_quality_audit_current.csv` for lane-kit completeness

## Evaluation Modes

- no RAG
- raw-file retrieval
- AIWF Atlas retrieval
- larger model without adapter

The goal is not to make the robot feel clever. The goal is to catch when it is confidently wrong before it wanders into the workflow shed holding a lit match.
