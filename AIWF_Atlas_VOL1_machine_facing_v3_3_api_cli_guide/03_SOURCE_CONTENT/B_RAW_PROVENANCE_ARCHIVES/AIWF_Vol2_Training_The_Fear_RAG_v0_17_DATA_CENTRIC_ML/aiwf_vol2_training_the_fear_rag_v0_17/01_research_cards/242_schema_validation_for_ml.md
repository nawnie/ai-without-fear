# 242 — Schema Validation for ML Data

**Pass:** 17  
**Snapshot:** March 2026  
**Layer:** Data-centric ML / dataset engineering / governance  
**Status:** RAG research note

## Why schema matters
Schema validation catches silent breakage: missing columns, wrong types, out-of-range values, bad labels, invalid JSONL rows, missing captions, impossible image sizes, corrupt audio, or mismatched video fps.

## Schema examples
- Tabular: columns, types, missingness, ranges.
- LLM SFT: messages array, roles, content strings, tool fields.
- Image LoRA: image path, caption path, trigger token, resolution buckets.
- Video LoRA: clip path, frame count, fps, caption, motion label.

## AIWF rule
No schema, no training.

## Sources
- TensorFlow Data Validation docs: https://www.tensorflow.org/tfx/data_validation/get_started
- Data Validation for Machine Learning paper: https://mlsys.org/Conferences/2019/doc/2019/167.pdf
