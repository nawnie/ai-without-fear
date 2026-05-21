# Quality-Control Pass v3.2

## Purpose

This pass cleaned active Atlas terminology and build-session behavior after the v3.0 Atlas rebrand and v3.1 source master index.

## Main Fixes

- Removed old product-identity wording from active files where the Atlas was still described as a generic RAG/Knowledge Adapter artifact.
- Renamed active lane folders and prompt/evaluation files that still carried old RAG/adapter labels.
- Preserved technical uses of RAG where they describe the actual retrieval-augmented generation method or named tools such as RAGFlow.
- Added Torchie operator shorthand protocol files so the `A/B/I/Z/Q/S/R` build commands are now part of the Atlas personality and operating model.
- Kept raw source/provenance folders untouched unless active duplicates required pointer cleanup.

## Files Renamed

- `09_EVALUATION_HARNESS/lane_eval_sets/02_rag_architecture_chunking_embedding_eval.jsonl` → `09_EVALUATION_HARNESS/lane_eval_sets/02_atlas_architecture_chunking_embedding_eval.jsonl`
- `11_PROMPT_PACKS/default_workflow_prompts/rag_ingestion_workflow_default_prompt.md` → `11_PROMPT_PACKS/default_workflow_prompts/atlas_ingestion_workflow_default_prompt.md`
- `09_EVALUATION_HARNESS/lane_eval_sets/10_workflow_pattern_library_rag_eval.jsonl` → `09_EVALUATION_HARNESS/lane_eval_sets/10_workflow_pattern_atlas_library_eval.jsonl`
- `09_EVALUATION_HARNESS/lane_eval_sets/09_failure_signature_atlas_rag_eval.jsonl` → `09_EVALUATION_HARNESS/lane_eval_sets/09_failure_signature_atlas_eval.jsonl`
- `09_EVALUATION_HARNESS/lane_eval_sets/08_compatibility_matrix_rag_eval.jsonl` → `09_EVALUATION_HARNESS/lane_eval_sets/08_compatibility_matrix_atlas_eval.jsonl`
- `09_EVALUATION_HARNESS/raw_rag_vs_adapter_comparison_plan_current.md` → `09_EVALUATION_HARNESS/raw_files_vs_atlas_comparison_plan_current.md`
- `01_CANONICAL_RESEARCH_LANES/02_rag_architecture_chunking_embedding` → `01_CANONICAL_RESEARCH_LANES/02_atlas_architecture_chunking_embedding`
- `01_CANONICAL_RESEARCH_LANES/35_adapter_evaluation_benchmarking` → `01_CANONICAL_RESEARCH_LANES/35_atlas_evaluation_benchmarking`
- `01_CANONICAL_RESEARCH_LANES/10_workflow_pattern_library_rag` → `01_CANONICAL_RESEARCH_LANES/10_workflow_pattern_atlas_library`
- `01_CANONICAL_RESEARCH_LANES/09_failure_signature_atlas_rag` → `01_CANONICAL_RESEARCH_LANES/09_failure_signature_atlas`
- `01_CANONICAL_RESEARCH_LANES/08_compatibility_matrix_rag` → `01_CANONICAL_RESEARCH_LANES/08_compatibility_matrix_atlas`
- `08_INGESTION_PROTOCOLS/GRADIO_RAG_APP_PROFILE.md` → `08_INGESTION_PROTOCOLS/GRADIO_ATLAS_APP_PROFILE.md`
- `12_RETRIEVAL_RECIPES/rag_chunking_strategy.json` → `12_RETRIEVAL_RECIPES/atlas_chunking_strategy.json`
- `00_AI_READ_FIRST/ADAPTER_OPERATING_CONTRACT.md` → `00_AI_READ_FIRST/ATLAS_OPERATING_CONTRACT.md`
- `11_PROMPT_PACKS/rag_librarian_prompt.md` → `11_PROMPT_PACKS/atlas_librarian_prompt.md`
- `AIWF_KNOWLEDGE_ADAPTER_PROFILE.json` → `AIWF_ATLAS_PROFILE.json`

## Active Files Text-Updated

185 active text files were updated for Atlas terminology, prompt behavior, or Torchie operator protocol.

## Duplicate Policy Reminder

Intentional reusable visual assets may duplicate for convenience. Duplicate active Markdown, prompt, schema, or workflow instruction files should not remain unless there is a clear pointer/provenance reason.

## Torchie QC Note

Atlas gremlin count reduced. YAML remains suspicious but presently cooperative.
