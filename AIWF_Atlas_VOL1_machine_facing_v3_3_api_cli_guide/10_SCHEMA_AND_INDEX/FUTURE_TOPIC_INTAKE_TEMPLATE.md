# Future Topic Intake Template

Use this template when adding a new topic lane, including topics 20-25.

## Lane ID

`NN_short_machine_name`

## Required files

- `README_VOL1.md`
- `VOL1_SCOPE.md`
- `CANONICAL_OVERVIEW.md`
- `CONCEPT_MAP.md`
- `EMBEDDING_AND_CHUNKING_STRATEGY.md`
- `RETRIEVAL_CARDS.jsonl`
- `QA_TEST_PROMPTS.md`
- `GAP_AUDIT_AND_VOL2_QUEUE.md`
- `SOURCE_COVERAGE.md`
- `vol1_lane_manifest.json`

## Required Atlas card coverage

At minimum each lane needs cards for:

1. definition / scope
2. beginner-safe default
3. advanced path
4. failure mode
5. source/verification rule
6. integration with AIWF tools
7. what not to do
8. eval question

## Required lane metadata

- `lane_id`
- `lane_title`
- `status`
- `canonical_status`
- `machine_priority`
- `recommended_chunking`
- `related_lanes`
- `known_gaps`

## Rule

Do not add a new topic as raw notes only. Every topic must become a retrieval lane with cards, scope, and gap audit.
