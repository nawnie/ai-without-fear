# AIWF Knowledge Adapter v1.2 Structure Hardening Report

## Purpose

This was a **Z / structure** pass after the v1.1 research expansion added lanes 12-19. The goal was to keep the adapter ideal for AI ingestion rather than casual human browsing.

## Summary

- Canonical lanes: 25
- Normalized retrieval cards: 294
- Knowledge graph edges: 44
- Legacy manifest/control files moved out of active manifest folder: 25
- Files modified for stale lane-reference correction: 16
- Invalid related-lane references remaining in cards: 0
- Exact duplicate hash groups after pass: 1

## Structural changes

1. Added `lane_profile.json` to every canonical research lane.
2. Created normalized retrieval-card index with freshness classes and card hashes.
3. Kept `04_MANIFESTS/` current-only by relocating older manifests and maps into change history.
4. Added `recommended_ingestion_bundle_v1_2.json` for loaders and RAG apps.
5. Refreshed `do_not_index_by_default.json` to reduce retrieval noise.
6. Added lane profile and retrieval card v1.2 schemas.
7. Normalized knowledge graph edges for GraphRAG-style future use.
8. Added master eval index and lane quality audit.

## Source preservation

No source-backed topical material was intentionally cut. The main content layers remain intact:

- canonical research lanes
- source content packs
- user expanded notes
- raw provenance archives
- legacy/superseded source material

The hardening pass moved control history, not research evidence.

## Recommended next step

After this structure pass, use **A** to expand any lane that needs deeper research, or use **Z** again if a new content expansion introduces structural drift.
