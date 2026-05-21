# Consumer Training Rules of Thumb — Pass 04

## Main rule

Train only when the failure is repeatable, narrow, and dataset-solvable. If prompting, RAG, retrieval, tool use, or a better base model solves the problem, training is optional rather than required.

## The ladder

1. Prompt better.
2. Add examples/context.
3. Add RAG or a tool.
4. Try a better/smaller/more appropriate base model.
5. Fine-tune with adapters.
6. Preference-tune only after SFT behavior exists.
7. Full fine-tune only with serious compute and reason.
8. Pretraining is not a consumer workflow.

## Hardware rule

VRAM is only one limit. Training also depends on:

- sequence length;
- image/video resolution;
- frame count;
- batch size;
- activation memory;
- optimizer state;
- checkpoint/eval spikes;
- CPU RAM and disk throughput.

## Dataset rule

Small clean datasets beat large messy datasets for narrow adaptation. Large messy datasets create confident garbage.

## Evaluation rule

A training run without a baseline and held-out eval is a story, not evidence.

## Legal/consent rule

A model can be technically successful and still be unusable if the dataset rights, consent, or disclosure trail is broken.
