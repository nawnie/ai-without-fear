# 204 — Checkpointing, Early Stopping, and Model Selection

**Pass:** 14 — Optimization and Training Dynamics  
**Snapshot framing:** March 2026 Vol. 2 research state  
**Reader level:** college/postgrad, written in field-manual style  
**Primary role in Vol. 2:** Prevents “last checkpoint wins” thinking.

## Core idea
The final checkpoint is not automatically the best checkpoint. Early stopping and checkpoint selection use validation evidence to choose the model that generalizes best, not the one trained longest.

## What the reader must learn
Know save interval, validation interval, patience, best checkpoint, overtraining, sample grid review, and rollback.

## Practical rules
Save enough checkpoints to inspect the learning trajectory. For LoRAs, keep early/mid/final checkpoints until validation chooses the keeper.

## Failure signatures
Best output appears mid-run; final checkpoint is overbaked; no validation artifacts saved; cannot reproduce or rollback.

## AIWF application
AIWF Release Pack should include selected-checkpoint rationale, not just files.

## Exercise hook
Evaluate checkpoints at 25%, 50%, 75%, 100% of a run and pick the best with a written rule.

## Source anchors
- Hugging Face Transformers single GPU performance: https://huggingface.co/docs/transformers/perf_train_gpu_one
