# Adapter Merging and Deployment — Keep, Stack, Merge, or Bake?

## Why this matters
Training is not finished when the checkpoint saves. The deployment choice changes flexibility, storage, reproducibility, and failure recovery.

## Four deployment modes

### Keep adapter separate
Best for testing, swapping, stacking, and preserving base model integrity.

Pros:
- small files
- easy rollback
- multiple adapters per base model
- better audit trail

Cons:
- runtime must support adapters
- user must manage base + adapter compatibility

### Stack multiple adapters at inference
Useful when style, domain, or task adapters are independent.

Pros:
- flexible combinations
- avoids permanent merge

Cons:
- adapter conflicts
- runtime support varies
- weights need tuning

### Merge adapter into base
Useful for deployment simplicity or runtimes that cannot load adapters.

Pros:
- one model artifact
- simpler runtime
- no adapter loading step

Cons:
- larger artifact
- less flexible
- merging mistakes can be hard to undo unless originals are retained

### Merge multiple models
Tools like mergekit combine pretrained checkpoints using algorithms such as linear, SLERP, TIES, DARE, and other methods. This is a separate field from LoRA adapter training and should be treated as experimental unless evaluated.

## PEFT adapter merging
PEFT supports adapter operations such as loading, switching, merging, and weighted adapter combinations. The `add_weighted_adapter` path is useful for combining adapters with explicit weights.

## MergeKit
MergeKit is a major open-source toolkit for merging pretrained LLMs. It supports resource-constrained merging and has been cited as an extensible framework for model merging.

## AIWF deployment rule
Never publish only a baked model if the adapter/base separation matters for attribution, reproducibility, or rollback. Keep:
- base model ID + revision/hash
- adapter file
- merge config
- eval results before and after merge
- license/provenance notes

## Failure signatures

### Merged model worse than adapter runtime
Possible precision issue, wrong base revision, quantized merge problem, tokenizer mismatch, or adapter conflict.

### Adapter works in trainer preview but not target UI
Possible key naming mismatch, architecture mismatch, unsupported adapter format, or missing text encoder/component adapter.

### Multiple LoRAs clash
Possible overlapping target concept, too-high weights, style/identity entanglement, or incompatible training datasets.

## AIWF feature idea
Build an Adapter Registry CSV that records base model, adapter type, key format, target architecture, trigger tokens, intended weight range, trainer used, dataset ID, and eval score.

## Sources
- PEFT LoRA developer guide: https://huggingface.co/docs/peft/en/developer_guides/lora
- PEFT model merging docs: https://huggingface.co/docs/peft/developer_guides/model_merging
- Transformers PEFT integration: https://huggingface.co/docs/transformers/en/peft
- mergekit repo: https://github.com/arcee-ai/mergekit
- MergeKit paper: https://arxiv.org/abs/2403.13257
