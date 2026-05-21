# 252 — Privacy, PII, and Sensitive Data Triage

**Pass:** 17  
**Snapshot:** March 2026  
**Layer:** Data-centric ML / dataset engineering / governance  
**Status:** RAG research note

## Purpose
Training data can memorize, leak, or reproduce personal information. Local training does not remove the ethical or legal need to inspect data.

## Minimum triage
- direct identifiers
- indirect identifiers
- biometric voice/face content
- minors
- health/legal/financial data
- private conversations
- consent scope
- removal requests

## AIWF rule
Consent is not just “can I possess the file?” It is “can I train on it, release an adapter from it, and demonstrate outputs from it?”

## Dataset Doctor feature
PII scan + biometric/person content flag + rights review checklist.
