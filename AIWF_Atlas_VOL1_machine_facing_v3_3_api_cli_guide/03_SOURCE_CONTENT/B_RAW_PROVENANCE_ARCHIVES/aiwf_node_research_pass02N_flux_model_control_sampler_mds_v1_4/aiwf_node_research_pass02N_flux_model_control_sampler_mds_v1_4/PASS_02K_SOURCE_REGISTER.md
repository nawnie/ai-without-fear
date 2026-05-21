# Pass 02K Source Register — AIWF Modern Node Research

Date: 2026-05-19  
Archive policy: Markdown/CSV/JSON source consolidation only; no full AIWF project re-archive.

## Purpose

This pass adds a formal source layer to the Pass 02 node research archive. It does not add new node packs. It makes the archive easier for RAG ingestion by separating:

1. **schema/source-code evidence** — GitHub repositories and official workflow templates used for class types and socket behavior.
2. **decision-layer evidence** — the uploaded 2026 Modern Tier Field Report and chat decisions used to choose defaults, legacy fallbacks, and warning-only tools.
3. **project operating rules** — light-report default, dense-review exceptions, retry-first repair behavior, and popularity threshold guidance.

## Files added in Pass 02K

- `PASS_02K_SOURCE_REGISTER.csv` — machine-readable source register from all current Pass 02 repos plus uploaded/source-overlay items.
- `PASS_02K_SOURCE_REGISTER.md` — human-readable explanation of how sources should be trusted.
- `PASS_02K_SOURCE_TO_DECISION_MAP.csv` — maps workflow/default decisions to their source basis.
- `PASS_02K_CHAT_REVIEW_SUMMARY.md` — compact review of decisions made in this chat.
- `RAG_PROJECT_SOURCE_OVERVIEW_PASS02K.md` — RAG-facing source policy and ingest notes.
- `PASS_02K_INDEX.md`, `PASS_02K_CHANGELOG.md`, `PASS_02K_MANIFEST.json` — pass bookkeeping.
- `SOURCE_ComfyUI_Custom_Nodes_2026_Modern_Tier_Field_Report.md` — local copy of the uploaded field report source.

## Source hierarchy for future AI editors

**Highest authority for generated workflow JSON**

1. Exact source-code schema from a repo file defining `INPUT_TYPES`, `define_schema`, `RETURN_TYPES`, or V3 `io.Schema`.
2. Official ComfyUI workflow template JSON from `Comfy-Org/workflow_templates`.
3. User-provided working workflow JSON from local ComfyUI.

**Useful but not enough by itself for generated workflow JSON**

4. README / docs / wiki / RunComfy style documentation.
5. Uploaded field reports and chat synthesis.
6. Popularity/download/star signals.

## Important guardrail

The uploaded field report is now part of the project source base, but it is a **decision overlay**, not schema authority. Use it to decide *what to build first* and *how to teach it*. Use source-code or official workflow templates to decide exact `class_type`, sockets, and wiring.

## Current project source stats

- Pass 02 node rows: 643
- Unique repo/source values in node CSV: 91
- Source register rows including uploaded report and official templates: 95
- Modern-tier decision rows carried forward: 10

