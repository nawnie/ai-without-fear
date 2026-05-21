# Lane Evaluation Sets

Each canonical lane has a seed eval file with 20 evaluation prompts:
- 5 factual recall
- 5 applied decision
- 5 troubleshooting
- 3 conflict/adversarial
- 2 confidence-gating

These are scaffolds for regression testing small-model + adapter behavior. They should be replaced or expanded with concrete examples as real usage failures are collected.
