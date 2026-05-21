# Chat Handoff 14 — ML Theory / Training RAG Lane

## Owns

This chat owns the AIWF RAG lane for machine-learning theory, training concepts, and model behavior.

Primary folder:

```text
rag/03_ml_theory_training_and_model_behavior/
```

## Does not own

- final Field Manual prose unless routed to the Field Manual chat
- ComfyUI workflow JSON implementation
- EnvPack diagnostics code
- broad agent/tool-use RAG notes
- package install/runtime dependency maps

## Current state

The lane now has a first source-backed pass covering:

- diffusion denoising
- latent diffusion and VAE intuition
- schedulers/samplers
- tokens and attention
- LoRA, DreamBooth, textual inversion
- PEFT and QLoRA
- DPO as Volume II/post-training context
- ControlNet structural conditioning
- DiT/newer model backbone explanation
- overfitting and optimizer foundations

## Output files created

```text
rag/03_ml_theory_training_and_model_behavior/00_SOURCE_LEDGER.md
rag/03_ml_theory_training_and_model_behavior/01_raw_sources/2026-05-19_ml_theory_source_notes.md
rag/03_ml_theory_training_and_model_behavior/02_clean_notes/ml_theory_concept_map.md
rag/03_ml_theory_training_and_model_behavior/02_clean_notes/training_ladder_prompt_to_finetune.md
rag/03_ml_theory_training_and_model_behavior/03_aiwf_cards/ml_theory_core_cards.md
rag/03_ml_theory_training_and_model_behavior/04_retrieval_exports/cards_ml_theory_core.jsonl
rag/03_ml_theory_training_and_model_behavior/04_retrieval_exports/assistant_context_ml_theory.md
rag/03_ml_theory_training_and_model_behavior/05_open_questions.md
```

## Next three useful passes

1. Add a dedicated **CFG / guidance / denoise / img2img** source pass.
2. Add **model-family comparison cards** for SD 1.5, SDXL, Flux, WAN, and LTX.
3. Add **dataset and LoRA training practice cards** with workflow-safe starter ranges and failure signatures.

## Starter prompt for next chat/pass

```text
You are continuing the AI Without Fear ML theory/training RAG lane. Read the source ledger, concept map, training ladder, and core cards. Continue with a focused pass on CFG, denoise strength, img2img/inpainting theory, and model-family differences. Keep Volume I explanations beginner-safe, park math-heavy details for Volume II, and update the source ledger, changelog, cards, JSONL export, and open questions.
```
