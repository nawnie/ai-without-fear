# Pass 05 Index — Dataset Construction, Captioning, Synthetic Data, and Run Evidence

## Purpose
Pass 05 expands the RAG from “what trainers exist” into “how a beginner should build training data and prove a run worked.” This pass is deliberately practical: most consumer-hardware training failures are not optimizer failures; they are dataset, formatting, captioning, validation, and run-record failures.

## New research cards
- 052 — LLM dataset formats and chat templates
- 053 — Data cleaning, deduplication, PII removal, and dataset triage
- 054 — Synthetic instruction data, distillation, self-instruct, and Evol-Instruct
- 055 — Preference dataset construction for DPO/ORPO/KTO/RLAIF style work
- 056 — Image LoRA captioning and tagging toolchain
- 057 — Video dataset preparation for Wan, LTX, and diffusion video LoRAs
- 058 — Multimodal/VLM dataset construction patterns
- 059 — Training telemetry, experiment tracking, and run evidence
- 060 — Reproducibility package format for AIWF training runs

## Practical conclusion
AIWF Vol. 2 needs to teach the “dataset first” rule. A 16GB consumer GPU can train useful adapters when the dataset is small, clean, consistent, and validated. The same GPU becomes useless when the dataset has mismatched chat templates, duplicate examples, unredacted private data, bad captions, leaking eval samples, or no run record.

## AIWF implementation implication
The next AIWF tool should not be a trainer. It should be a **Dataset Doctor + Run Pack Builder** that:
1. detects dataset type,
2. validates schemas,
3. checks privacy/provenance,
4. performs dedup/near-dup checks,
5. audits caption quality,
6. creates train/validation/test splits,
7. exports to trainer-specific formats,
8. writes a reproducible run pack.

## Added tables/specs
- `dataset_format_cheatsheet_pass_05.csv`
- `captioning_tool_matrix_pass_05.csv`
- `video_dataset_prep_matrix_pass_05.csv`
- `experiment_tracking_matrix_pass_05.csv`
- `AIWF_Dataset_Doctor_v0_3.md`
- `DATASET_CONSTRUCTION_RULES_PASS_05.md`
