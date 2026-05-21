# 237 — Data-Centric ML as the Foundation of Training

**Pass:** 17  
**Snapshot:** March 2026  
**Layer:** Data-centric ML / dataset engineering / governance  
**Status:** RAG research note

## Purpose
Shift Vol. 2 from model-chasing to data discipline. Most practical training failures are not caused by the trainer; they are caused by unclear task contracts, dirty labels, hidden leakage, bad splits, missing provenance, and weak evaluation sets.

## Core concept
Data-centric ML treats the dataset as an engineered object. The model is not the only thing optimized; the distribution, labels, schema, documentation, validation checks, sampling plan, and release gates are optimized too.

## AIWF rule
Before asking “what trainer should I use?”, ask:
1. What is the target behavior?
2. What data represents that behavior?
3. What data must be excluded?
4. What split proves generalization?
5. What failure cases must survive evaluation?

## Vol. 2 application
The Dataset Doctor is not a nice-to-have; it is the front door to every LLM, LoRA, video, voice, tabular, RAG, or VLM training run.

## Sources
- MIT Data-Centric AI lecture: https://dcai.csail.mit.edu/lectures/data-centric-model-centric/
- van der Schaar Lab data-centric AI framing: https://www.vanderschaar-lab.com/dc-check/what-is-data-centric-ai/
- Stanford HAI data-centric AI article: https://hai.stanford.edu/news/data-centric-ai-ai-models-are-only-good-their-data-pipeline
