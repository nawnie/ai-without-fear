# Evaluation Harnesses and Private Benchmarks

## Why evals belong in the training RAG

A training run is not complete when the progress bar finishes. It is complete when the model passes a meaningful evaluation suite. Without evals, users confuse lower loss, nicer vibes, or one cherry-picked output with actual improvement.

## Public benchmark tools

### EleutherAI lm-evaluation-harness

Broad benchmark harness for generative language models. Good for sanity-checking general capability.

### OpenAI Evals

Framework for evaluating LLMs and systems with custom/private evals. Important conceptually even for local projects: write tests for the patterns you care about.

### Hugging Face Evaluate / LightEval direction

Evaluate standardizes metric calculation; Hugging Face notes newer LLM eval work should consider LightEval. Useful for reproducible metric tracking.

### DeepEval

Pytest-like framework for LLM app evaluations. Useful for RAG and application-level checks.

### RAGAS

RAG-specific evaluation: context relevance, faithfulness, answer correctness, and similar metrics.

## Private benchmark design

Every AIWF project should have a private eval set:

- 50–200 prompts for tiny projects,
- 200–1000 prompts for serious local releases,
- hidden expected outputs or rubrics,
- adversarial cases,
- old-task regression cases,
- license-safe examples,
- no overlap with training data.

## Domains and metrics

| Domain | Eval type | Metric |
|---|---|---|
| Chat assistant | rubric + pairwise | helpfulness, instruction following, tone, safety |
| Code bot | unit tests | pass rate, syntax, dependency correctness |
| RAG bot | retrieval + answer | recall@k, faithfulness, citation grounding |
| Extraction | exact/partial match | F1, schema validity |
| Image LoRA | visual review + prompt grid | identity/style adherence, artifacts, prompt leakage |
| Video LoRA | temporal review | flicker, motion consistency, identity drift |
| Voice | transcript + MOS-style review | WER, speaker similarity, artifacts, consent |

## AIWF rule

Split evals into four levels:

1. Smoke test: does the artifact load?
2. Task test: does it do the thing?
3. Regression test: did it break old behavior?
4. Risk test: does it fail safely?

## Sources

- EleutherAI lm-evaluation-harness: https://github.com/EleutherAI/lm-evaluation-harness
- OpenAI Evals: https://github.com/openai/evals
- OpenAI eval guide: https://developers.openai.com/api/docs/guides/evals
- Hugging Face Evaluate: https://huggingface.co/docs/evaluate/index
- DeepEval GitHub: https://github.com/confident-ai/deepeval
- Hugging Face LLM course evaluation page: https://huggingface.co/learn/llm-course/chapter11/5
