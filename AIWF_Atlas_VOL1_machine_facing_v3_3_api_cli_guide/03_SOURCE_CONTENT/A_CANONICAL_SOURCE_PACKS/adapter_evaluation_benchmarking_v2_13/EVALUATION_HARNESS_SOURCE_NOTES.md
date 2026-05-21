# Evaluation Harness Source Notes

AIWF should evaluate the Knowledge Adapter as a system, not as a vibe. The practical question is whether the adapter makes a smaller or local model more correct, more grounded, more useful, and less likely to invent a suspiciously confident answer while Torchie quietly chews on a power cable.

## Verified source anchors

- Ragas documents metrics for LLM applications, including RAG and agentic workflows. Use it for retrieval/component-level evaluation language.
- MLflow documents development and production evaluation/monitoring for LLM and agent applications using scorers and systematic quality measurement.
- DeepEval positions itself as an open-source LLM evaluation framework with many plug-and-play metrics for agents, RAG, chatbots, and related systems.
- LangSmith documents a workflow of datasets, evaluators, and experiments, with evaluator options including human review, code rules, LLM-as-judge, and pairwise comparison.

## AIWF interpretation

The adapter should be tested on practical operator tasks:

1. Retrieve the right lane or source.
2. Answer with source-grounded specificity.
3. Qualify volatile or unsupported claims.
4. Ask for logs or files when diagnosis requires runtime context.
5. Avoid turning a vague guess into a confident-looking manual page.

## Evaluation rule

A passing answer is not merely fluent. A passing answer is useful, grounded, source-aware, and safe to hand to a beginner who may be one bad PowerShell command away from summoning the dependency gremlins.
