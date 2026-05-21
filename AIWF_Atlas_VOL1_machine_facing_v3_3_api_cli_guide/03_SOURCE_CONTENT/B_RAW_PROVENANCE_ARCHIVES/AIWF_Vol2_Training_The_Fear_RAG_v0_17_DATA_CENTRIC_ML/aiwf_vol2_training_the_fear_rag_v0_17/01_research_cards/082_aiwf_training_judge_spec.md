# AIWF Training Judge — Spec Bridge

## One-line purpose

AIWF Training Judge decides whether a training run improved the intended behavior enough to keep, merge, export, or release.

## Inputs

- base model reference,
- adapter/checkpoint path,
- merged model path if present,
- quantized model path if present,
- training config,
- dataset manifest,
- private eval set,
- public eval selection,
- risk prompt packs,
- hardware/environment report,
- run logs.

## Outputs

- keep/reject recommendation,
- scorecard,
- regression report,
- risk report,
- export recommendation,
- model card draft,
- missing documentation list.

## Minimum scoring sections

1. **Loadability:** model and tokenizer load without patching.
2. **Task success:** intended use improves versus base.
3. **Regression:** unrelated core behavior does not collapse.
4. **Safety:** model does not become materially riskier.
5. **Grounding:** RAG/citation behavior improves or remains stable.
6. **Style control:** adapter does not overtake user prompt control.
7. **Efficiency:** latency/VRAM/token speed are acceptable.
8. **Release readiness:** license, consent, source, card, evals exist.

## Pass/fail rules

Hard fail if:

- artifact cannot load,
- tokenizer mismatch breaks outputs,
- license/consent source is unknown for sensitive data,
- private data appears memorized,
- quantized export fails evals while being advertised as equivalent,
- model card omits base model or training data class.

Soft fail if:

- improvement is small but measurable,
- style drift is strong but intended,
- quantized artifact loses some quality but release notes disclose it,
- red-team failures are outside intended release scope and clearly documented.

## AIWF design choice

The Training Judge should be trainer-agnostic. It should accept outputs from Unsloth, LLaMA-Factory, Axolotl, torchtune, SimpleTuner, kohya, musubi-tuner, OneTrainer, and manual scripts.

## Related files

- `05_specs/AIWF_Training_Judge_v0_1.md`
- `02_tables/eval_gate_matrix_pass_07.csv`
- `01_research_cards/079_eval_harness_private_benchmarks.md`
- `01_research_cards/083_post_training_failure_modes_reward_hacking_regression.md`
