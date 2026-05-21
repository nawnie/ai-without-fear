# Evaluation Frameworks — lm-eval-harness, OpenCompass, RAGAS, DeepEval

## Purpose

Training without evaluation is just expensive self-confirmation. This card maps common evaluation frameworks and how AIWF should use them.

## Evaluation layers

### Layer 1 — smoke test

Does the trained model load? Does the adapter apply? Does inference produce non-garbage?

### Layer 2 — regression test

Does it still handle core tasks the base model handled?

### Layer 3 — target task eval

Does it improve on the exact intended behavior?

### Layer 4 — failure-mode eval

Does it hallucinate, leak, overfit, refuse incorrectly, copy training examples, or collapse into a narrow style?

### Layer 5 — deployment eval

Does the final quantized/merged/exported model behave like the trained checkpoint?

## lm-evaluation-harness

EleutherAI’s lm-evaluation-harness is a unified framework for evaluating generative language models across many tasks, with YAML task definitions.

### Use for

- standardized LLM benchmarks
- few-shot evaluation
- comparing base vs trained model
- reproducible eval runs

### AIWF caution

Benchmarks are not product evals. A model can improve on a public benchmark and get worse for your actual workflow.

## OpenCompass

OpenCompass is an LLM evaluation platform supporting many models and datasets, with subjective/LLM-as-judge paths.

### Use for

- broader model comparison
- formal benchmark suites
- subjective/open-ended evaluation when configured carefully

### AIWF caution

LLM-as-judge is useful but not truth. Judge prompts, judge model, rubric, and calibration matter.

## RAGAS

RAGAS evaluates retrieval-augmented generation systems, including reference-free RAG evaluation workflows.

### Use for

- AIWF RAG systems
- document assistant quality
- faithfulness/relevance/context precision checks
- production trace evaluation

### AIWF caution

RAGAS evaluates the RAG pipeline, not just the model. Bad retrieval and bad generation must be separated.

## DeepEval

DeepEval is a Pytest-like LLM evaluation framework with plug-and-play metrics and LLM-as-judge options.

### Use for

- app-level tests
- agent/RAG/chatbot regression tests
- CI-like eval for AIWF tools
- custom rubrics

### AIWF caution

Metric names can create false confidence. Always inspect examples.

## AIWF evaluation pack concept

Every training card should include an eval harness suggestion:

| Training type | Minimum eval |
|---|---|
| LLM SFT | held-out prompts + base vs adapter comparison |
| preference training | chosen/rejected win rate + qualitative review |
| embedding/reranker | recall@k, MRR/NDCG, hard-negative eval |
| RAG assistant | retrieval metrics + faithfulness + answer usefulness |
| image LoRA | prompt grid, overfit check, trigger strength, composability |
| video LoRA | motion consistency, identity drift, temporal artifacts |
| voice | intelligibility, speaker similarity, consented identity safety, misuse guardrails |

## Eval set design

For AIWF local projects, use:

- 20 smoke prompts.
- 50 target prompts.
- 50 adversarial prompts.
- 20 old capabilities/regression prompts.
- 10 “don’t know / ask for logs” prompts for support bots.

For image/video:

- locked seed prompt grid.
- same sampler/resolution before and after.
- base vs LoRA comparison.
- multiple LoRA strengths.
- negative prompt consistency.
- held-out subject/style combinations.

## Sources

- EleutherAI lm-evaluation-harness: https://github.com/EleutherAI/lm-evaluation-harness
- lm-eval task guide: https://github.com/EleutherAI/lm-evaluation-harness/blob/main/docs/task_guide.md
- OpenCompass: https://github.com/open-compass/opencompass
- OpenCompass LLM judge guide: https://github.com/open-compass/opencompass/blob/main/docs/en/advanced_guides/llm_judge.md
- RAGAS: https://www.ragas.io/
- RAGAS paper: https://arxiv.org/abs/2309.15217
- DeepEval: https://github.com/confident-ai/deepeval
- DeepEval docs: https://deepeval.com/docs/getting-started
