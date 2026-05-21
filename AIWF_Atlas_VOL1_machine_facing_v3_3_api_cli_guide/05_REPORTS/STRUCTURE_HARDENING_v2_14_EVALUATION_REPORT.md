# Structure Hardening Report v2.14

Pass type: Z - structure/source/release hardening after Adapter Evaluation Pass v2.13.

## What changed

- Promoted evaluation harness files from versioned v2.13 filenames to current-only active filenames.
- Archived older versioned manifests, reports, schemas, and control files into `06_CHANGE_HISTORY/archived_active_controls_pre_v2_14/`.
- Added `00_AI_READ_FIRST/EVALUATION_HARNESS_USE_POLICY.md`.
- Regenerated `eval_master_index.jsonl`, lane quality audit, file manifests, checksums, duplicate audit, and cleanliness audit.
- Preserved raw sources, source packs, visual assets, and change history.

## Current counts

- Canonical lanes: 35
- Atlas cards: 404
- Files: 1969
- Exact duplicate hashes: 0
- Active non-roadmap scaffold markers: 0

## Machine ingestion guidance

Index the current evaluation harness files, not archived v2.13 names. The robot may be enthusiastic, but it should not benchmark itself against a ghost copy of last pass's clipboard.
