# Current-Only Structure Cleanup Report

Version: v2.0-current

## Purpose

This Z pass made the adapter current-only in active ingestion areas and removed future-work markers from non-roadmap layers.

## Actions completed

- Regenerated the canonical retrieval-card index as `02_RETRIEVAL_INDEX/CANONICAL_RETRIEVAL_CARDS_CURRENT.jsonl`.
- Regenerated current lane indexes and current file manifests.
- Moved older pass-specific retrieval indexes, manifests, reports, and schema versions into `06_CHANGE_HISTORY/`.
- Consolidated active source-verification notes into current unversioned controls.
- Renamed active ComfyUI/source policy files to current unversioned names.
- Replaced active future-work/expansion-slot residue outside roadmaps.
- Kept roadmap/future-work language only in `07_EXPANSION_QUEUE/`.
- Preserved source payloads and historical provenance.

## Current counts

- Canonical lanes: 30
- Retrieval cards: 344
- Files in current archive: 1757
- Exact duplicate hash groups: 0
- Active non-roadmap cleanup issues after pass: 0

## Notes

`06_CHANGE_HISTORY/` may still contain historical terms from earlier passes. That is intentional provenance and should not be indexed by default.
`07_EXPANSION_QUEUE/` is the only active folder where future-work and roadmap language is allowed.
