# 239 — Task Contract Before Dataset Collection

**Pass:** 17  
**Snapshot:** March 2026  
**Layer:** Data-centric ML / dataset engineering / governance  
**Status:** RAG research note

## Problem
Beginners often collect data first and define the task later. This creates incoherent labels, impossible evals, and models that “sort of” learn the wrong thing.

## Task contract fields
- Intended user behavior
- Input type
- Output type
- Acceptable answer range
- Unacceptable answer range
- Edge cases
- Evaluation examples
- Safety exclusions
- Data source eligibility

## AIWF example
For a support chatbot, the task is not “answer like me.” It may be “given approved policy context, respond in Shawn’s teaching tone without inventing missing facts.” That changes the data and evaluation design.

## Exercise
Write a task contract for: SDXL character LoRA, local RAG assistant, video motion LoRA, tabular classifier, and voice model.
