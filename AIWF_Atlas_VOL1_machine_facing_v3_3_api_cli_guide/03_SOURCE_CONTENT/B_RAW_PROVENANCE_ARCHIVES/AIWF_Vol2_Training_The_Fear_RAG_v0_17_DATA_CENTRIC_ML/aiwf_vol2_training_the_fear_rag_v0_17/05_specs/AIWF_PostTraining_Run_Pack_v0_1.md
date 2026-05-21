# AIWF Post-Training Run Pack v0.1

## Purpose

A standard folder format for SFT, DPO, GRPO, distillation, merge, and quantization experiments.

## Folder format

```text
post_training_run_pack/
├── README.md
├── run_config.yaml
├── base_model.txt
├── dataset_manifest.csv
├── preference_manifest.csv optional
├── synthetic_data_ledger.csv optional
├── trainer_logs/
├── checkpoints/
├── adapters/
├── merges/
├── quantized_exports/
├── evals/
│   ├── before_base.json
│   ├── after_adapter.json
│   ├── after_merge.json optional
│   ├── after_quant.json optional
│   └── eval_summary.md
├── risk_tests/
├── model_card_draft.md
├── dataset_card_draft.md
└── changelog.md
```

## AIWF rule

Every artifact needs enough context to answer:

- what was trained,
- on what data,
- using which method,
- with which base,
- why it was trained,
- whether it improved,
- what got worse,
- whether it can be released.
