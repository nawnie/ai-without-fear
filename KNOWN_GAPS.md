# Known Gaps and Publication Checks

This file records packaging and content notes discovered while preparing the combined GitHub-ready Atlas.

## Gradio Sources File

`AIWF_Atlas_VOL1_machine_facing_v3_3_api_cli_guide/03_SOURCE_CONTENT/A_CANONICAL_SOURCE_PACKS/gradio6_rag_archive_20260521_0838/gradio6_rag_archive/AI_GUIDANCE.md` refers to a `SOURCES.md` file, but no `SOURCES.md` was present in the provided Gradio archive folder during this pass.

Recommended action before public release:

- Add the missing Gradio source list if it exists elsewhere.
- If it does not exist, treat Gradio source authority as embedded in the section files and verify live claims against official Gradio, Hugging Face, GitHub, and lakeFS sources when needed.

## Retrieval Card Schema Drift

`10_SCHEMA_AND_INDEX/retrieval_card_schema.json` expects fields such as `topic`, `question_patterns`, `canonical_summary`, `must_retrieve`, `source_priority`, `related_lanes`, and `risk_level`.

The current `RETRIEVAL_CARDS.jsonl` records use fields such as `title`, `summary`, `use_when`, `chunking_hint`, `source_folders`, and `confidence`.

This merge pass added `10_SCHEMA_AND_INDEX/retrieval_card_schema_current_actual.json` to document the current observed card shape.

Recommended action before claiming migration-target schema compliance:

- Either migrate retrieval cards to the newer schema or validate current records against `retrieval_card_schema_current_actual.json`.
- Do not run strict validation against `retrieval_card_schema.json` until this is resolved.

## Thin Retrieval Content

The current retrieval cards are useful routing anchors, but many summaries are templated rather than substantive. Several Gradio handbook files are also short scaffold sections.

Recommended action:

- Convert templated card summaries into real `canonical_summary` content with `must_retrieve` anchors.
- Expand thin Gradio sections, especially production operations, labs, and capstones.

## Repository License

A conservative All Rights Reserved research-preview license was selected for this pass. See `LICENSE.md` and `LICENSE_NOTICE.md`.

Recommended action before public release:

- Keep the conservative license until third-party source, image, model, package, and documentation rights have been reviewed.
- Consider a later, more permissive or mixed license only after rights review.

## Freshness

The Atlas contains version-sensitive claims about APIs, packages, models, hardware, benchmarks, licenses, and active repositories.

Recommended action before public release:

- Keep `NOTES_TO_AI.md` and `INGESTION_GUIDE.md` freshness rules visible.
- Verify current/volatile claims against official sources before presenting them as live guidance.
