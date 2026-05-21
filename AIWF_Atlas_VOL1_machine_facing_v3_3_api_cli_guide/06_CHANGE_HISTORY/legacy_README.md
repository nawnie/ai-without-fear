# AIWF CS Knowledge Data Archive — Vol. 1 Project-Balanced Correction

This archive preserves the deduped/consolidated source data and adds a corrected **Vol. 1 research-project balance layer**.

The prior v1 packaging idea was not the requested goal. This corrected archive treats **each research project/lane** as the unit that needed to be brought to Vol. 1 readiness.

## What Vol. 1 means here

A research lane is Vol. 1-ready when it has:

- scope and non-scope;
- canonical overview;
- concept map;
- embedding/chunking strategy;
- retrieval cards;
- QA prompts;
- gap audit / Vol. 2 queue;
- source coverage notes.

## Main folders

- `CONTENT/` — preserved source payloads from the uploaded packs after exact and near-duplicate consolidation.
- `01_RESEARCH_PROJECTS_VOL1/` — corrected Vol. 1 balanced research lane layer.
- `REPORTS/VOL1_RESEARCH_PROJECT_BALANCE_REPORT.md` — what changed in this correction.
- `MANIFESTS/` — original dedupe/consolidation manifests.

## How to load for RAG

1. Load `01_RESEARCH_PROJECTS_VOL1/VOL1_BALANCED_INDEX.md` first.
2. Load each lane's `CANONICAL_OVERVIEW.md`, `EMBEDDING_AND_CHUNKING_STRATEGY.md`, and `RETRIEVAL_CARDS.jsonl`.
3. Then load original `CONTENT/` files for depth and provenance.
4. Treat manifests and duplicate maps as audit/provenance data unless the user is asking about archive construction.

## Correction principle

Do not erase old source version names; they are evidence trail. Do not confuse source provenance with research-lane maturity.
- Added `01_RESEARCH_PROJECTS_VOL1/11_gradio_ui_research/` as a Vol. 1 common UI research lane for Gradio apps, local AI wrappers, and beginner-facing tool shells.
