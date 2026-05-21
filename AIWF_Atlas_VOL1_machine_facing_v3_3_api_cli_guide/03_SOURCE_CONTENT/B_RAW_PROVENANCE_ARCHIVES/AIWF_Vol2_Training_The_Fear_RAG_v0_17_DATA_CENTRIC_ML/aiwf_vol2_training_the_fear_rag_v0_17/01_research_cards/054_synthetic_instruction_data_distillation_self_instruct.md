# Synthetic Instruction Data, Distillation, Self-Instruct, and Evol-Instruct

## Scope
This card covers how synthetic data can be used to build instruction datasets, preference datasets, retrieval datasets, and domain-specific examples for small consumer training runs.

## Core warning
Synthetic data is powerful, but it is not free truth. It can amplify teacher-model errors, compress bias, leak style artifacts, and create circular evaluations if the same model family generates and judges the data.

## Main patterns

### 1. Self-Instruct
Self-Instruct generates instructions, inputs, and outputs from a language model, filters invalid/similar examples, and uses the resulting synthetic data for instruction tuning.

AIWF translation:
- Start with a seed set of real tasks.
- Generate variations.
- Filter duplicates and weak examples.
- Manually inspect a sample.
- Fine-tune only after validation.

Best for:
- bootstrapping a task dataset,
- expanding sparse examples,
- creating beginner-friendly instruction corpora.

Bad for:
- facts requiring authoritative sources,
- safety-critical guidance,
- creating expert behavior from a weak teacher.

### 2. Evol-Instruct
Evol-Instruct, associated with WizardLM, rewrites seed instructions into more complex versions. It is useful for creating difficulty gradients: simple, medium, hard, multi-constraint, and reasoning-heavy tasks.

AIWF use:
- generate curriculum ladders,
- make “same task, harder constraints” datasets,
- create evaluation prompts that test generalization.

Risk:
- complexity inflation without correctness.
- The final prompt may be hard but not useful.

### 3. Teacher-student distillation
A stronger model produces answers, explanations, or preference labels for a smaller model. This can create useful datasets for local 7B/8B/14B adapters.

Use cases:
- domain assistant tone transfer,
- structured output generation,
- support workflow answers,
- code/documentation style imitation,
- rubric-based feedback generation.

Rules:
- Keep the teacher output provenance.
- Never pretend synthetic teacher output is human-labeled.
- Use human spot checks.
- Keep a real held-out eval set.

### 4. AI feedback / RLAIF datasets
LLMs can judge or rank outputs to build preference data. Frameworks like Distilabel explicitly target synthetic data and AI feedback pipelines.

Good for:
- low-cost preference pair generation,
- ranking multiple answers,
- creating rejected examples from common failure modes.

Danger:
- judge model bias becomes model behavior.
- If the judge rewards verbosity, the trained model becomes verbose.
- If the judge rewards “sounds right,” hallucination can survive.

## Synthetic data pipeline
1. Define task scope.
2. Write a dataset contract.
3. Create seed examples.
4. Generate synthetic examples.
5. Filter malformed rows.
6. Deduplicate against seeds and within synthetic set.
7. Run PII and policy checks.
8. Score with rubric/judge.
9. Human review a sample.
10. Split into train/validation/test.
11. Mark provenance as synthetic.
12. Run a small adapter experiment.

## Recommended fields
```json
{
  "id": "aiwf_synth_000001",
  "task_family": "training_help",
  "generation_method": "teacher_distillation",
  "teacher_model": "record exact model here",
  "seed_source": "human_seed_v1",
  "prompt": "...",
  "response": "...",
  "rubric_score": 4,
  "review_status": "spot_checked",
  "synthetic": true,
  "license_notes": "internal/private unless reviewed"
}
```

## What not to do
- Do not generate 100,000 examples before testing 200.
- Do not train on unfiltered synthetic slop.
- Do not use the same synthetic data as eval.
- Do not use synthetic examples to claim real-world expertise without verification.
- Do not generate celebrity/person voice or likeness training data without rights.

## AIWF rule
> Synthetic data is scaffolding. Keep the scaffold labeled, inspected, and removable.

## Sources
- Self-Instruct GitHub: https://github.com/yizhongw/self-instruct
- Self-Instruct paper: https://arxiv.org/abs/2212.10560
- WizardLM Evol-Instruct paper: https://arxiv.org/abs/2304.12244
- WizardLM GitHub: https://github.com/nlpxucan/WizardLM
- Distilabel docs: https://distilabel.argilla.io/
- Distilabel GitHub: https://github.com/argilla-io/distilabel
- Hugging Face Distilabel docs: https://huggingface.co/docs/hub/en/datasets-distilabel
- Mistral/Distilabel synthetic DPO cookbook: https://docs.mistral.ai/resources/cookbooks/third_party-argilla-distilabel_synthetic_dpo_dataset
