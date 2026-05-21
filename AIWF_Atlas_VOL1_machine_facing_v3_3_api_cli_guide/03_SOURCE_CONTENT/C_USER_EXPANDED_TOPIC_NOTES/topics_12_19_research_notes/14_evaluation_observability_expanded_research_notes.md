# AI Evaluation and Observability — Expanded Research Notes

## Purpose
Define how the adapter, its retrieval, and AI applications should be tested, scored, traced, and regression-checked.

## Canonical summary
Evaluation is the difference between a knowledge pack that feels useful once and one that remains reliable over time. The adapter should score retrieval, answer correctness, citation quality, refusal behavior, tool selection, and troubleshooting usefulness. Observability connects traces, prompts, retrieved chunks, tool calls, latency, cost, and user outcomes so changes can be measured instead of guessed.

## In scope
- golden test sets
- retrieval precision and recall
- groundedness and citation checks
- LLM-as-judge with guardrails
- task-completion scoring
- agent/tool evaluation
- offline and online evals
- trace inspection
- latency/cost/error monitoring
- regression gates

## Core concepts
- eval dataset
- golden answer
- retrieval precision
- retrieval recall
- groundedness
- answer correctness
- hallucination rate
- LLM judge
- trace
- span
- latency p95
- cost per task
- regression test
- online monitoring

## AIWF interpretation
This topic is part of the adapter's machine-memory layer. It should help an AI assistant retrieve, reason, and answer with better domain maturity than a raw small model. Use this note as source content, but prefer the canonical lane files for direct answer routing.

## Source anchors
- MLflow GenAI evaluation and monitoring: https://mlflow.org/docs/latest/genai/eval-monitor/
- MLflow evaluation datasets: https://mlflow.org/docs/latest/genai/datasets/
- Azure Databricks GenAI eval harness: https://learn.microsoft.com/en-us/azure/databricks/mlflow3/genai/eval-monitor/concepts/eval-harness
- Arize AI observability / Phoenix OSS: https://arize.com/
