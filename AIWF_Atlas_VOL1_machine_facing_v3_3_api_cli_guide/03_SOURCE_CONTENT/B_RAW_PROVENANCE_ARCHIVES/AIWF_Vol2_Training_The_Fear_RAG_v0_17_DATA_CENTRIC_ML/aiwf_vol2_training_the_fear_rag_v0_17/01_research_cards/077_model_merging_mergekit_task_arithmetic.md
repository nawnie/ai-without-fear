# Model Merging — mergekit, Task Arithmetic, SLERP, TIES, DARE, Passthrough

## What model merging is

Model merging combines model weights, deltas, or layers without doing a normal training run. It is not magic; it is controlled weight surgery. It can combine useful behaviors, but it can also create incoherent hybrids.

## Why it matters for consumer hardware

Merging can run on CPU or modest GPU resources depending on method and model size. That makes it attractive for users who cannot afford another full training run. mergekit is the current key project to understand.

## Common methods

### Linear merge / model soup

Weighted average of compatible models. Simple but can wash out strengths.

### SLERP

Spherical linear interpolation between models. Often used for two-model blends.

### Task arithmetic

Treats fine-tuning changes as task vectors that can be added/subtracted.

### TIES

Attempts to trim interference and resolve sign conflicts between model deltas.

### DARE

Drops/rescales deltas before merging; often paired with TIES.

### Passthrough / layer stacking

Builds a model by taking layer ranges from different models. Powerful but easy to break.

### MoE-style merge

Combines experts/routing concepts. Usually more complex than beginner users need.

## AIWF rule

A merge is not a substitute for evaluation. Every merge needs:

- baseline model tests,
- source model tests,
- merge tests,
- regression tests,
- license compatibility check,
- model card explaining all parents and weights.

## Compatibility checks

Before merging:

- same architecture family,
- same tokenizer or explicit tokenizer strategy,
- compatible hidden sizes/layer counts unless using passthrough methods that account for it,
- compatible licenses,
- clear parent provenance.

## AIWF use case

AIWF should not teach merging as “make a better model instantly.” Teach it as:

> Merging is a way to test whether two trained behaviors can coexist before investing in a new data/training pass.

## Sources

- mergekit GitHub: https://github.com/arcee-ai/mergekit
- MergeKit paper: https://arxiv.org/html/2403.13257v1
- Hugging Face model merging blog: https://huggingface.co/blog/mlabonne/merge-models
