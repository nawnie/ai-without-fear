# 244 — Deduplication, Near-Deduplication, and Contamination

**Pass:** 17  
**Snapshot:** March 2026  
**Layer:** Data-centric ML / dataset engineering / governance  
**Status:** RAG research note

## Failure mode
If train and eval share duplicates or near-duplicates, the model appears better than it is. For generative AI, near-duplicates also increase memorization and copyright/identity risk.

## Techniques
- exact hashes
- perceptual image hashes
- audio fingerprints
- text MinHash / locality-sensitive hashing
- embedding similarity search
- cluster-based review

## AIWF rule
Dedup before split. Then check contamination across train/val/test after split.

## Lab
Create a small dataset with intentional duplicates, near-duplicates, and paraphrases. Measure how benchmark scores inflate when contamination is allowed.
