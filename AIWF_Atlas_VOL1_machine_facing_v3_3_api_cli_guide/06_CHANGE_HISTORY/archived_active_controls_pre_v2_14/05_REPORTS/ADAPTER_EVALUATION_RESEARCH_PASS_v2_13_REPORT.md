# Adapter Evaluation Research Pass v2.13 Report

## Summary

Added a dedicated evaluation and proof-testing lane for the AIWF Knowledge Adapter.

## Added

- `01_CANONICAL_RESEARCH_LANES/35_adapter_evaluation_benchmarking/`
- `03_SOURCE_CONTENT/A_CANONICAL_SOURCE_PACKS/adapter_evaluation_benchmarking_v2_13/`
- `09_EVALUATION_HARNESS/adapter_benchmark_protocol_v2_13.md`
- `09_EVALUATION_HARNESS/raw_rag_vs_adapter_comparison_plan_v2_13.md`
- `09_EVALUATION_HARNESS/golden_question_sets/adapter_core_golden_questions_v2_13.jsonl`
- `09_EVALUATION_HARNESS/expected_source_maps/adapter_core_expected_sources_v2_13.jsonl`
- `10_SCHEMA_AND_INDEX/adapter_evaluation_result_schema_v2_13.json`

## Source anchors

- Ragas metrics documentation
- MLflow LLM and agent evaluation
- DeepEval LLM evaluation framework
- LangSmith evaluation workflow

## Policy

Do not claim the adapter outperforms another system until a benchmark run is logged. The lane defines how to test the claim; it does not pretend the test has already been won.
