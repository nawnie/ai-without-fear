# 258 — Modality-Specific Dataset Quality

**Pass:** 17  
**Snapshot:** March 2026  
**Layer:** Data-centric ML / dataset engineering / governance  
**Status:** RAG research note

## Text/LLM
Clean schema, role consistency, refusal examples, no private leakage, no contradictory policy examples.

## Image LoRA
Identity/style coverage, caption consistency, trigger token strategy, resolution buckets, no near-duplicate domination.

## Video LoRA
Temporal consistency, fps/frame count, motion label clarity, no scene leakage into eval.

## Voice/audio
Consent, speaker isolation, noise control, transcript quality, accent/phoneme coverage, no minors/private calls.

## Tabular
Missingness, outliers, target leakage, time split, feature stability.

## RAG
Document provenance, chunk quality, retrieval eval set, stale content handling.
