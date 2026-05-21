# Pass 02K Index — Source Consolidation

Date: 2026-05-19  
Mode: source-register and chat-review consolidation  
Base archive: Pass 02J field report overlay

## Summary

Pass 02K reviews the chat/source trail and adds the missing source-management layer to the project archive. It does not expand node-pack coverage. It makes the existing Pass 02 archive easier to ingest into RAG by documenting where each source came from and how much authority it should have.

## New files

- `PASS_02K_SOURCE_REGISTER.csv`
- `PASS_02K_SOURCE_REGISTER.md`
- `PASS_02K_SOURCE_TO_DECISION_MAP.csv`
- `PASS_02K_CHAT_REVIEW_SUMMARY.md`
- `RAG_PROJECT_SOURCE_OVERVIEW_PASS02K.md`
- `SOURCE_ComfyUI_Custom_Nodes_2026_Modern_Tier_Field_Report.md`
- `PASS_02K_CHANGELOG.md`
- `PASS_02K_MANIFEST.json`

## Counts

- Pass 02 node rows retained: 643
- Unique repo/source values in node CSV: 91
- Source register rows: 95
- Decision map rows: 13

## Important project rules captured

1. Do not reinvent the wheel; evaluate existing GitHub/Hugging Face/Civitai projects first.
2. Light reports are now the default for broad coverage.
3. Dense reports are reserved for first-of-type capabilities, new 2026 techniques, different base-model systems, missing capability gaps, and nodes we are about to generate into workflow JSON.
4. Anything over roughly 10000 downloads is high-value for coverage priority.
5. Exact workflow JSON still requires source-confirmed `class_type` and schema.

## Current source hierarchy

1. Source code schema / official workflow JSON.
2. User-provided working workflow JSON.
3. README/docs/wiki.
4. Uploaded field reports.
5. Chat synthesis and popularity signals.

## No archive bloat

This is still Markdown/CSV/JSON-oriented node research. The full AIWF project was not re-packed.
