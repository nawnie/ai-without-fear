# AIWF Training Judge v0.1

## Purpose

Training Judge is the evaluation and release-decision layer for AI Without Fear Vol. 2. It sits after Dataset Doctor and after a trainer run.

## Design principle

A training run is not judged by vibes. It is judged by before/after evidence against the intended task, regression tasks, safety checks, and deployment constraints.

## Required inputs

```yaml
base_model: string
trained_artifact: path
artifact_type: adapter|merged|quantized|checkpoint
trainer: unsloth|llamafactory|axolotl|torchtune|simpletuner|kohya|musubi|onetrainer|manual|other
training_config: path
dataset_manifest: path
eval_suite: path
risk_suite: path optional
export_targets: list
hardware_report: path optional
```

## Required outputs

```yaml
recommendation: keep|retry|reject|release_candidate
confidence: low|medium|high
scorecard:
  task_success: number
  regression: number
  safety: number
  documentation: number
  deployment: number
failures:
  hard: list
  soft: list
next_actions: list
```

## Phases

1. **Load smoke test** — artifact loads, tokenizer/template works, sample generation works.
2. **Base comparison** — compare base model to trained artifact on same eval prompts.
3. **Private task eval** — intended domain hidden set.
4. **Regression eval** — general behavior or old tasks.
5. **Risk eval** — safety, privacy, prompt injection, policy boundaries.
6. **Export eval** — repeat key tests on merged and quantized outputs.
7. **Release audit** — model card, dataset card, licenses, consent, provenance.

## First implementation target

Build as a Python CLI/library first, then wrap in a Gradio tab. Keep trainer-agnostic.

## Not in v0.1

- full RL reward-model training,
- automatic legal determinations,
- replacing human review for likeness/voice/person data,
- universal benchmark claims.
