# Hugging Face AutoTrain — Low-Code Training Bridge

## Scope

AutoTrain is a no-code/low-code training path from Hugging Face. It is useful for AIWF because it can serve as a bridge for beginners who are not ready for YAML or Python trainer scripts.

## What it covers

- LLM fine-tuning.
- Image classification.
- Other supervised ML tasks depending on current AutoTrain support.
- Local and cloud-oriented workflows.
- Data upload and automatic training flow.

## Why it matters

AIWF should not force every beginner into raw Axolotl or TRL scripts. A good training guide needs progressive paths:

1. no-code experiment;
2. guided config;
3. scriptable trainer;
4. advanced distributed training.

AutoTrain can fill stage 1 or 2.

## Limits

- It may hide too many details for deep learning.
- Data formatting still matters.
- It does not replace careful evaluation.
- It may not support every new model family as quickly as specialist trainers.
- It is not the best fit for custom diffusion/video LoRA workflows.

## AIWF use

Document AutoTrain as:

- a beginner bridge;
- a fast proof-of-concept tool;
- a baseline generator;
- not the final expert workflow.

## Dataset Doctor integration

Before sending data to AutoTrain, AIWF should check:

- format validity;
- missing fields;
- duplicated rows;
- label imbalance;
- empty prompts or empty completions;
- too-long examples;
- license/consent/provenance status.

## Sources

- https://huggingface.co/autotrain
- https://github.com/huggingface/autotrain-advanced
- https://huggingface.co/docs/autotrain/en/llm_finetuning
- https://huggingface.co/docs/autotrain/image_classification
