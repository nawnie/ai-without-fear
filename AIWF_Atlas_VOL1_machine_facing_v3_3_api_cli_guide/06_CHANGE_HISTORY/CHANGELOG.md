# Change Log

## v1.0 Structure Hardened

- Removed stale `07_PLACEHOLDERS_FOR_NEXT_TOPICS/` after Topics 20-25 were promoted to canonical lanes.
- Added `07_EXPANSION_QUEUE/` for future lanes 12-19.
- Added canonical AI load order.
- Reorganized source payloads into role buckets under `03_SOURCE_CONTENT/`.
- Added do-not-index policy for manifests, reports, checksums, duplicate maps, placeholders, and legacy material.
- Added canonical answer rules, freshness taxonomy, claim confidence taxonomy, and stricter retrieval-card schema.
- Added lightweight knowledge graph edges for GraphRAG/query expansion.
- Added per-lane evaluation scaffolds.
- Regenerated lane index, retrieval-card index, manifests, checksums, and profile.

# Changelog

## 2026-05-19 — v0.8
- Promoted Topics 20–25 expanded notes into canonical machine-facing lanes.
- Added raw source copies, retrieval cards, manifests, topic-map updates, and integration report.
- Kept placeholder folders as pointers only.
## v0.9 — Editorial consistency and duplicate-reduction pass

- Normalized machine-facing terminology and markdown formatting across canonical lanes and instruction files.
- Removed superseded intermediate machine manifests from earlier v0.5-v0.8 passes.
- Removed duplicate global index copies from the canonical lane root; retained canonical copies in `02_RETRIEVAL_INDEX/`.
- Added `MACHINE_USE_MASTER_INDEX.md` and `EDITORIAL_CONSISTENCY_GUIDE.md`.
- Regenerated the consolidated retrieval-card index from lane-level retrieval cards.
- Preserved raw source payloads for provenance.

## v1.1
- Added research lanes 12–19.
- Added 96 retrieval cards.
- Updated global retrieval index, topic graph, lane manifests, adapter profile, and checksums.

## v1.2 — Structure hardening after research expansion

- Added lane profiles for all 25 canonical lanes.
- Added normalized v1.2 retrieval-card index with freshness and card-hash fields.
- Preserved legacy manifests under change history and kept active manifests current-only.
- Added recommended ingestion bundle, do-not-index policy refresh, lane profile schema, and retrieval-card schema.
- Added eval master index and lane quality audit.
- Normalized knowledge graph edges and fixed stale related-lane references from v1.1.
- Preserved source-backed content; no topical knowledge was intentionally cut.

## 2026-05-20 — v2.0 current-only structure cleanup

- Regenerated current-only retrieval index, lane index, file manifest, and topic map.
- Moved old pass-specific retrieval indexes, manifests, reports, and versioned schemas into change history.
- Consolidated active source-verification controls into current files.
- Removed active future-work language from all non-roadmap layers.
- Preserved source payloads and source verification artifacts as provenance.


## 2026-05-20 — v2.3

- Added lane 33: ComfyUI Advanced Workflow Design Patterns.
- Added 12 retrieval cards for subgraphs, switches, lazy routing, workflow-as-app contracts, templates, and migration patterns.
- Added official ComfyUI source anchors for subgraphs, subgraph blueprints, workflow JSON, Switch, Soft Switch, Lazy Evaluation, Node Expansion, Node Replacement, and Workflow Templates.
- Regenerated current indexes, manifests, checksums, duplicate audit, and cleanliness audit.

## 2026-05-20

- B pass: added AIWF brand voice and humor hardening for v2.7.
- Added force-multiplier positioning: AI as leverage, not replacement.
- Added controlled humor rules for dry field-manual wit, Torchie-style callouts, and beginner reassurance.
- Added explicit guardrails preventing humor from weakening source, safety, licensing, consent, privacy, or destructive-command warnings.
- Preserved source payloads; no research claims were changed.

