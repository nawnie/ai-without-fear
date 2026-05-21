# 025 — AIWF Dataset Doctor Spec Bridge

## Purpose

The training ecosystem already has trainers. AIWF's first original training tool should probably be a Dataset Doctor, not a new trainer.

## Why

Bad datasets waste GPU time and produce misleading results. Most beginner failures are not caused by one wrong magic setting. They come from:

- duplicate examples
- bad captions
- wrong chat template
- data leakage
- noisy transcripts
- missing metadata
- mismatched image/caption pairs
- over-narrow subject coverage
- illegal/uncleared source material
- no validation split
- no fixed evaluation prompts

## Dataset Doctor modules

### Image LoRA module

Checks:

- file/caption pairing
- missing captions
- repeated trigger token frequency
- aspect ratios and bucket spread
- image dimensions
- duplicate and near-duplicate images
- face/person count if enabled
- bad EXIF/source metadata flags
- caption conflict patterns
- train/validation split

### Video LoRA module

Checks:

- duration
- fps
- resolution
- codec readability
- duplicate frames
- scene cuts
- motion labels
- audio presence
- subject consistency
- bad/black frames
- clip/caption pairing

### LLM SFT module

Checks:

- JSON/JSONL validity
- role fields
- chat template compatibility
- empty responses
- duplicate conversations
- very long examples
- train/eval leakage
- unsafe/private data markers
- instruction/answer mismatch

### Preference dataset module

Checks:

- chosen/rejected presence
- identical chosen/rejected pairs
- weak preference pairs
- length bias
- formatting mismatch
- prompt leakage
- train/eval leakage

### Embedding/reranker module

Checks:

- query/positive format
- hard negative presence
- duplicate positives
- false negatives
- corpus leakage
- chunk length distribution
- retrieval eval split

### Voice module

Checks:

- consent metadata
- transcript availability
- clipping
- noise floor estimate
- speaker segmentation
- silence trimming
- language labels
- sample rate
- duplicate clips

## Output reports

- `dataset_report.md`
- `dataset_report.json`
- `train_ready_score.csv`
- `issues_to_fix.csv`
- recommended trainer presets
- model card skeleton

## Severity levels

- Blocker: training should not start.
- High: likely to waste training or create bad model.
- Medium: quality risk.
- Low: cleanup recommendation.

## AIWF rule

A beginner should run Dataset Doctor before every training job. Training without dataset inspection is gambling with GPU time.
