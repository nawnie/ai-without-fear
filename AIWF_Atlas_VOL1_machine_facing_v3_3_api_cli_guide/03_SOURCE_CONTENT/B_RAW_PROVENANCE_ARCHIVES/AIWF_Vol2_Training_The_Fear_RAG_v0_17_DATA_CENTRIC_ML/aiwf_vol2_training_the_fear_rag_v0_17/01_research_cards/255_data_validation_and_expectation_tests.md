# 255 — Data Validation and Expectation Tests

**Pass:** 17  
**Snapshot:** March 2026  
**Layer:** Data-centric ML / dataset engineering / governance  
**Status:** RAG research note

## Concept
Expectation tests make data assumptions executable: columns exist, values are in range, classes are valid, captions are non-empty, image dimensions meet bounds, audio duration is allowed.

## AIWF local checks
- invalid files
- bad JSONL rows
- label outside taxonomy
- duplicate file hashes
- caption missing trigger token
- test split contaminated
- personal data detected
- class ratio changed from previous version

## Sources
- Great Expectations: https://greatexpectations.io/
- TensorFlow Data Validation docs: https://www.tensorflow.org/tfx/data_validation/get_started
