# 254 — Feature Stores and Structured ML

**Pass:** 17  
**Snapshot:** March 2026  
**Layer:** Data-centric ML / dataset engineering / governance  
**Status:** RAG research note

## Concept
Feature stores manage reusable, validated features for training and inference. For small local AIWF projects, a CSV/Parquet feature table can teach the same concept without enterprise infrastructure.

## Why it matters
Production ML fails when training features and inference features disagree. Feature stores address point-in-time correctness, consistency, reuse, and serving.

## AIWF translation
Teach the idea first: a feature is a maintained contract, not an accidental column.

## Sources
- Feast docs: https://docs.feast.dev/
- Feast site: https://feast.dev/
