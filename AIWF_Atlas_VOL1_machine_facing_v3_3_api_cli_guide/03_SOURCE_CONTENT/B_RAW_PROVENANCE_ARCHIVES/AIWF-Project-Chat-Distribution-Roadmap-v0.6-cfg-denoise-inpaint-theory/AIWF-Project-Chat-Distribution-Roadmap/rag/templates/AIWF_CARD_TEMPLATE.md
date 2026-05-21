# AIWF Card Template

Use this for retrieval-ready cards.

```yaml
id:
title:
type: concept_card | failure_pattern_card | tool_card | workflow_card | model_card | package_card | source_decision_card
topic_lane:
source_refs:
stability: stable | fast_moving | deprecated | experimental
source_quality: A | B | C | D | X
aiwf_decision: USE | WRAP | DOCUMENT | BUILD_MISSING_PIECE | WATCH | AVOID_FOR_NOW
summary:
use_when:
do_not_use_when:
beginner_safe:
advanced_notes:
windows_notes:
known_failure_modes:
needs_retesting:
```

## Retrieval Rule

Each card should be understandable when retrieved alone. Avoid references like "this tool" or "the above process" unless the subject is repeated in the card title and summary.
