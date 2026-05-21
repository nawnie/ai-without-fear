# RAG Ingestion Guide — v0.8

## Goal

Make this archive easy to load into a local RAG system without flattening context or mixing validated facts with planning notes.

## Recommended load order

1. `README.md` and `ROADMAP.md`
2. `00_project_control/RESEARCH_PROTOCOL.md`
3. `00_project_control/COVERAGE_DASHBOARD_v0_8.md`
4. `01_research_cards/*.md`
5. `02_tables/*.csv`
6. `05_specs/*.md`
7. `07_theory_law_rules/*.md`
8. `06_sources/*.md`
9. `08_editorial/*.md`

## Chunking rules

- Prefer heading-based chunks.
- Keep individual cards intact when they are under the system chunk limit.
- For long cards, split by `##` headings.
- Keep source logs as source chunks, not teaching chunks.
- Keep CSVs as table chunks with filename metadata.

## Metadata tags to attach

Suggested tags:

- `domain`: llm, rag, image, video, voice, vlm, evaluation, law, deployment, dataset, hardware
- `artifact_type`: research_card, table, spec, source_log, rule, editorial, manifest
- `priority`: P0, P1, P2, historical, caution
- `status`: seed, partial, usable, needs_validation, future
- `consumer_gpu`: 8gb, 12gb, 16gb, 24gb, multi_gpu, cpu_only

## Retrieval priorities

For practical user questions, prefer this order:

1. Specs and tables for direct decisions.
2. Research cards for explanation.
3. Theory/law rules for constraints.
4. Source logs for verification.
5. Editorial docs for book/guide language.

## Important separation

Do not let the RAG answer legal questions as if the archive is legal advice. It should say the material is a research baseline and recommend professional legal review for high-stakes releases.

Do not let the RAG imply that a hardware estimate guarantees a successful run. Consumer training depends on model version, trainer version, precision, optimizer, rank, resolution, sequence length, batch size, offload, and fragmentation.
