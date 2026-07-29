# AIWF Atlas Learning-Pass Review

This review captures the current project state after merging the original three folders into one Atlas tree.

## What This Project Is

This is not a normal application repo and not yet a finished knowledge base. It is a machine-facing domain-memory layer: a RAG corpus with strong governance scaffolding around a thinner core of synthesized knowledge.

It is not the Atlas Core runtime or SDK. Those now live in the separate
[`nawnie/atlas-core`](https://github.com/nawnie/atlas-core) product repository.
The corpus can be a read-only retrieval source for Atlas Core, but it must not
be represented as the application database, execution layer, or SDK.

The original side-by-side folders have now been folded into the Atlas:

- Atlas v3.3 remains the primary tree.
- The Gradio 6 archive is now a canonical source pack under `03_SOURCE_CONTENT/A_CANONICAL_SOURCE_PACKS/`.
- The drop-in v2.3 package is now release history under `06_CHANGE_HISTORY/packaged_releases/`.

The project uses layered ingestion: control policy, schema, routing index, canonical lanes, source evidence, manifests and reports, then change history. That architecture is the right mental model for using the repo.

## Strengths

The control layer in `00_AI_READ_FIRST/` is the strongest part of the Atlas. The load order, source-priority rules, confidence gating, anti-slop policy, brand voice boundaries, and operating contract are coherent and useful for downstream assistant behavior.

Governance hygiene is also strong: audits, manifests, source roles, change history, evaluation rubrics, golden questions, and source-priority policies are all present. The repo is explicit that it is not a trained model, not a license grant, not a replacement for official docs, and not proof that every fast-moving claim is current forever.

Retrieval recipes and answer templates are concrete enough to guide useful assistant behavior. The evaluation harness has a real scoring rubric and raw-RAG-vs-Atlas comparison plan.

## Load-Bearing Weaknesses

### Retrieval Cards Are Mostly Routing Shells

Many `RETRIEVAL_CARDS.jsonl` summaries are templated rather than substantive. They are useful as routing anchors, but they do not yet carry enough answer content to ground a vector retriever by themselves.

Next pass: turn templated summaries into real canonical summaries with exact `must_retrieve` anchors.

### Retrieval Schema Drift

`10_SCHEMA_AND_INDEX/retrieval_card_schema.json` describes a newer or aspirational card shape. The actual `RETRIEVAL_CARDS.jsonl` files use a different field set.

This merge pass added `10_SCHEMA_AND_INDEX/retrieval_card_schema_current_actual.json` so tooling can validate the current records honestly. Next pass: migrate cards to the richer schema or explicitly mark the richer schema as a future target.

### Thin Gradio Sections

The Gradio archive has good chapter routing, but some files are short scaffold sections. This is most visible in production operations, labs, and capstones.

Next pass: expand thin sections or mark them as stubs so RAG systems do not over-weight them.

### Publication Gaps

The Gradio guidance references `SOURCES.md`, but that file was not present in the provided archive. A conservative All Rights Reserved research-preview license has been selected for upload; a more permissive license should wait for source and asset rights review.

Next pass: add the missing source list if available and review licensing before any broader reuse grant.

## Fixed in This Merge Pass

- Moved the Gradio archive into the Atlas source-content layer.
- Moved the old drop-in package into Atlas change history.
- Updated `00_LOAD_ORDER.md` from the old `ADAPTER_OPERATING_CONTRACT.md` path to `ATLAS_OPERATING_CONTRACT.md`.
- Updated lane-index references to current files.
- Fixed the broken PowerShell command in `17_FIELD_GUIDE_INSERTS/API_CLI_QUICK_REFERENCE.md`.
- Added `10_SCHEMA_AND_INDEX/retrieval_card_schema_current_actual.json` for the current retrieval-card record shape.
- Added a conservative All Rights Reserved research-preview license.
- Added an explicit v3.3 research-preview status line to `README.md`.
- Updated root docs and metadata to describe one combined Atlas instead of three separate corpora.

## Overall Read

The Atlas knows what it wants to be: a governed research memory layer for AIWF work. The bones are strong. The next real improvement is not more scaffolding; it is a content pass that makes retrieval cards, concept definitions, and thin Gradio sections carry more grounded substance.

## GitReverse Review — 2026-07-29

GitReverse accurately describes this repository as a structured public research
corpus for local AI, ComfyUI, Gradio, retrieval/RAG planning, and evaluation
materials. It correctly avoids presenting the corpus as a normal application
or a live Atlas Core SDK. Its recommendation to keep canonical, historical,
and review-needed material distinguishable matches the repository's intended
ingestion discipline.

Next pass: improve grounded content in retrieval cards, definitions, and thin
Gradio sections before adding further governance scaffolding. Keep the separate
Atlas Core runtime/SDK and Atlas Reader LoRA research boundaries explicit.
