# Reproducibility Package Format for AIWF Training Runs

## Scope
This card defines the AIWF “training run pack”: the minimum artifact bundle needed for a person or AI assistant to understand, reproduce, audit, or continue a training experiment.

## Why this matters
Training projects often fail because the model file survives but the reasoning disappears. The user forgets which dataset was used, what base model was loaded, what learning rate worked, what captions changed, or why a checkpoint was abandoned.

AIWF Vol. 2 should normalize run packs from the beginning.

## Required files

### 1. `README_RUN_CARD.md`
Human-readable summary:
- goal,
- base model,
- trainer,
- dataset,
- hardware,
- method,
- final judgment,
- known issues,
- next step.

### 2. `dataset_manifest.json`
Machine-readable dataset record:
- sources,
- permission/consent,
- file counts,
- row counts,
- splits,
- dedup stats,
- PII status,
- caption/schema status.

### 3. `trainer_config.*`
Exact config used by trainer:
- YAML/TOML/JSON/env file,
- no missing UI-only settings,
- no undocumented edits.

### 4. `environment_report.json`
Collected before training:
- GPU,
- VRAM,
- driver,
- torch,
- CUDA,
- Python,
- key packages,
- repo commits.

### 5. `source_log.md`
Sources and documentation consulted. Include repo URLs, docs URLs, model card URLs, dataset URLs, and license notes.

### 6. `metrics.csv`
Step-level or epoch-level metrics:
- step,
- loss,
- validation loss,
- learning rate,
- VRAM used if available,
- seconds per step,
- checkpoint path.

### 7. `eval_prompt_deck.md`
Fixed prompts used to compare checkpoints. For image/video LoRAs, include seeds and generation settings.

### 8. `samples/`
Before/after outputs:
- baseline model result,
- early checkpoint,
- final checkpoint,
- failure sample.

### 9. `MODEL_CARD_DRAFT.md`
The release/audit document:
- intended use,
- limitations,
- training data summary,
- consent/license notes,
- risks,
- example prompts,
- hardware/training summary.

## Optional files
- `WANDB_RUN_URL.txt`
- `MLFLOW_RUN_ID.txt`
- `tensorboard_logs/`
- `dataset_preview.csv`
- `caption_audit.csv`
- `privacy_report.json`
- `eval_results.json`
- `failure_notes.md`

## AIWF run card template
```markdown
# Run Card: <name>

## Goal

## Base Model

## Trainer

## Hardware

## Dataset

## Method

## Key Settings

## Results

## Failure Signatures

## Legal/Consent Notes

## Keep / Retry / Abandon Decision

## Next Pass
```

## Archive naming
Use semantic versions for research packs and day-only changelog notes:
- `AIWF_Vol2_Training_The_Fear_RAG_v0_5.zip`
- `run_2026-05-19_subject_lora_test_01/`

## AIWF rule
> A checkpoint without a run card should not enter the model library.

## Integration with AIWF tools
The Dataset Doctor should output `dataset_manifest.json`. The EnvPack/System Diagnostic tool should output `environment_report.json`. The trainer wrapper should copy configs and logs into the run pack automatically.

## Sources
- Hugging Face model cards: https://huggingface.co/docs/hub/model-cards
- W&B experiment tracking docs: https://docs.wandb.ai/models/track
- MLflow Model Registry docs: https://mlflow.org/docs/latest/ml/model-registry/
- TensorBoard docs: https://www.tensorflow.org/tensorboard
- Hugging Face Datasets processing docs: https://huggingface.co/docs/datasets/en/process
