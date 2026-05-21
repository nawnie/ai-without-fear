# Evaluation Gates and Release Checklist — No Adapter Leaves Without Receipts

## Why this matters
Training without evaluation is gambling. AIWF Vol. 2 should make evaluation part of the workflow, not an optional expert step.

## Gate 0 — Legality and permission
Before training:
- data source known
- license/permission status recorded
- sensitive data reviewed
- voice/face/person consent recorded where relevant
- excluded data actually excluded

## Gate 1 — Dataset quality
Before training:
- duplicates checked
- holdout split created
- captions/templates validated
- PII/sensitive scan done for text/audio where relevant
- dataset manifest created

## Gate 2 — Smoke test
Before full run:
- 20–50 steps complete
- loss finite
- no OOM
- checkpoint saved
- adapter loads
- sample/eval prompts run

## Gate 3 — Mid-run monitoring
During training:
- loss trend inspected but not worshipped
- fixed eval prompts sampled
- VRAM and time logged
- overfit signs watched
- bad checkpoints preserved for learning if useful

## Gate 4 — Final eval
For LLMs:
- fixed prompt set
- task-specific examples
- refusal/boundary tests
- regression tests for old capability
- hallucination/source behavior if RAG-connected

For RAG:
- Recall@k
- MRR or nDCG
- hard-negative retrieval tests
- RAGAS or equivalent pipeline eval

For image/video:
- trigger strength tests
- prompt flexibility tests
- identity/style fidelity checks
- negative prompt behavior
- seed/sample grid comparison
- overfit/memorization review

For audio/voice:
- consent check
- speaker similarity and intelligibility
- artifact/noise review
- misuse labeling/disclosure notes

## Gate 5 — Packaging
Release pack should include:
- adapter/model file
- training config
- dataset manifest/provenance summary
- base model ID and revision
- trainer version
- eval report
- intended use
- limitations
- license
- changelog day only

## AIWF rule
If a model cannot pass a minimal eval gate, it can be archived as an experiment but should not be called a finished model.

## Sources
- Model Cards: https://arxiv.org/abs/1810.03993
- Datasheets for Datasets: https://arxiv.org/abs/1803.09010
- RAGAS docs: https://docs.ragas.io/en/stable/
- BEIR repo: https://github.com/beir-cellar/beir
- W&B experiment tracking: https://docs.wandb.ai/
- MLflow tracking: https://mlflow.org/docs/latest/ml/tracking/
