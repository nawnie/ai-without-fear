# MLOps, LLMOps, and Release Management — Expanded Research Notes

## Purpose
Define versioned release discipline for AI systems: prompts, datasets, models, evals, deployments, monitoring, rollbacks, and change logs.

## Canonical summary
LLMOps extends MLOps into prompt, retrieval, tool, model, and evaluation versioning. The assistant should treat each AI app release as a bundle: model version, prompt version, retrieval index version, dataset version, eval result, config, and rollback path. The adapter itself should follow this discipline.

## In scope
- experiment tracking
- model registry
- prompt versioning
- dataset versioning
- evaluation versioning
- deployment stages
- rollback strategy
- CI/CD for AI apps
- release gates
- monitoring drift
- feedback loops
- change logs

## Core concepts
- experiment tracking
- model registry
- prompt registry
- dataset version
- eval version
- release gate
- rollback
- canary release
- shadow traffic
- drift monitoring
- feedback loop
- incident report
- changelog

## AIWF interpretation
This topic is part of the adapter's machine-memory layer. It should help an AI assistant retrieve, reason, and answer with better domain maturity than a raw small model. Use this note as source content, but prefer the canonical lane files for direct answer routing.

## Source anchors
- MLflow GenAI eval and monitoring: https://mlflow.org/docs/latest/genai/eval-monitor/
- MLflow evaluation datasets: https://mlflow.org/docs/latest/genai/datasets/
- Arize AI observability: https://arize.com/
- LangChain / LangSmith platform: https://www.langchain.com/
