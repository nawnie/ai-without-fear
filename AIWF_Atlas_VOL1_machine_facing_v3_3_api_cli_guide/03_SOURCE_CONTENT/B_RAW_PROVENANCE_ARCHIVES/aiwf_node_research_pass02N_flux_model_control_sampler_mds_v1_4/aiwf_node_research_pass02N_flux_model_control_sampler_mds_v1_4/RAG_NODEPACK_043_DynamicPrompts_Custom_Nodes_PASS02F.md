# RAG Nodepack 043 — DynamicPrompts Custom Nodes — PASS 02F Light Coverage

- Repository: `adieyal/comfyui-dynamicprompts`
- Coverage mode: light/default; dense only if this pack becomes first-choice capability.
- Rows captured: 6

## AIWF use

- `DPRandomGenerator` — Prompt variation and templating for labs, prompt batches, and wildcard-style experiments. Policy: `safe_generate_after_user_choice`. Risks: `random_prompting`.
- `DPCombinatorialGenerator` — Prompt variation and templating for labs, prompt batches, and wildcard-style experiments. Policy: `safe_generate_after_user_choice`. Risks: `combinatorial_explosion`.
- `DPFeelingLucky` — Prompt variation and templating for labs, prompt batches, and wildcard-style experiments. Policy: `guarded_generate_after_local_test`. Risks: `external_model_or_randomness`.
- `DPJinja` — Prompt variation and templating for labs, prompt batches, and wildcard-style experiments. Policy: `safe_generate_after_user_choice`. Risks: `template_execution`.
- `DPMagicPrompt` — Prompt variation and templating for labs, prompt batches, and wildcard-style experiments. Policy: `guarded_generate_after_local_test`. Risks: `model_download_or_external_dep`.
- `DPOutput` — Prompt variation and templating for labs, prompt batches, and wildcard-style experiments. Policy: `safe_generate`. Risks: `primitive`.

## Notes
This pass intentionally favors broad coverage and overlap mapping over exhaustive socket capture. Use source_refs in the CSV for deeper follow-up.