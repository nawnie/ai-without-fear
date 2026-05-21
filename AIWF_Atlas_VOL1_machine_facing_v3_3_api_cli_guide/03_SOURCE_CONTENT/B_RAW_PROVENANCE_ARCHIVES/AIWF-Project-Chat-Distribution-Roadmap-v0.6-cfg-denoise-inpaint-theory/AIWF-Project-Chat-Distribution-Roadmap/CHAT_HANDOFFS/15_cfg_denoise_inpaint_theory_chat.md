# Chat Handoff 15 — CFG / Denoise / Inpaint Theory

Purpose:

Maintain the bridge between ML theory and practical image editing workflows in AI Without Fear.

This chat owns:

- CFG as prompt pressure;
- denoise/strength as rewrite permission;
- img2img as noised-source controlled rewriting;
- inpainting masks as edit contracts;
- failure signatures for seams, blur, identity loss, and underpowered edits;
- task-to-setting notes for restoration, replacement, identity-safe edits, structure-control edits, and creative repaint.

Primary files:

```text
rag/03_ml_theory_training_and_model_behavior/01_raw_sources/2026-05-19_cfg_denoise_inpaint_source_notes.md
rag/03_ml_theory_training_and_model_behavior/02_clean_notes/cfg_denoise_img2img_inpainting_operator_model.md
rag/03_ml_theory_training_and_model_behavior/02_clean_notes/editing_preset_notes_first_pass.md
rag/03_ml_theory_training_and_model_behavior/03_aiwf_cards/cfg_denoise_inpaint_cards.md
rag/03_ml_theory_training_and_model_behavior/04_retrieval_exports/cards_cfg_denoise_inpaint.jsonl
rag/03_ml_theory_training_and_model_behavior/04_retrieval_exports/assistant_context_cfg_denoise_inpaint.md
```

Do not rebuild:

- Diffusers pipelines;
- ComfyUI core inpainting primitives;
- A1111/Forge UI behavior.

Build around them:

- beginner explanations;
- workflow validators;
- sane preset notes;
- troubleshooting cards;
- prompt-rewrite helpers;
- ComfyUI tooltip language.

Starter prompt:

```text
You are continuing the AIWF CFG / denoise / img2img / inpainting theory lane. Read the v0.6 files in rag/03_ml_theory_training_and_model_behavior. Expand the operator model only where it improves workflow building. Do not turn this into generic ML theory. Prioritize practical settings, failure signatures, and validator rules for ComfyUI and Gradio workflows.
```
