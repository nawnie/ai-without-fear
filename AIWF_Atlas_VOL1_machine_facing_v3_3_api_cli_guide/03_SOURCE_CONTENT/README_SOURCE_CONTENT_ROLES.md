# Source Content Roles

This folder preserves source material but separates it by machine-ingestion role.

## A_CANONICAL_SOURCE_PACKS
Preferred source payloads when the AI needs deeper evidence beyond canonical lane summaries.

## B_RAW_PROVENANCE_ARCHIVES
Original project/source archives preserved for verification, lineage, and recovery. Index selectively.

## C_USER_EXPANDED_TOPIC_NOTES
User-provided expanded topic notes. These are high-value research inputs, especially for lanes 20-25, but should be treated as research notes unless independently sourced.

## D_LEGACY_SUPERSEDED_MATERIAL
Older but non-identical material retained for provenance. Do not index by default unless the query asks for project history, version comparison, or older source trails.

Default retrieval order:
1. `00_AI_READ_FIRST/`
2. `01_CANONICAL_RESEARCH_LANES/`
3. `02_RETRIEVAL_INDEX/`
4. `03_SOURCE_CONTENT/C_USER_EXPANDED_TOPIC_NOTES/`
5. `03_SOURCE_CONTENT/A_CANONICAL_SOURCE_PACKS/`
6. `03_SOURCE_CONTENT/B_RAW_PROVENANCE_ARCHIVES/`
7. `03_SOURCE_CONTENT/D_LEGACY_SUPERSEDED_MATERIAL/`
