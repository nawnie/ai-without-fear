# Changelog

## 2026-05-15

- Created cross-chat distribution roadmap for the AI Without Fear GitHub project.
- Added master roadmap for coordinating individual project chats.
- Added project chat map covering Brand Hub, EnvPack, Model Checker, Field Manual, Knowledge Pack, Workflow Packs, ComfyUI Nodes, Old Photo Restore, QwenVL/VQA/LLM Nodes, AIWF Photos, and Labs.
- Added reusable checklist for keeping each chat aligned with GitHub-ready output.
- Added per-chat handoff files with scope, non-scope, repo targets, next outputs, and copy/paste starter prompts.


## v0.2-distribution-control

- Added `SENDOFF_MASTER.md` for one-file project chat sendoff.
- Added `CHAT_SCOPE_FIREWALL.md` to prevent cross-chat roadmap drift.
- Added scope/memory rules to every chat handoff.
- Added Markdown-only `CROSS_PROJECT_NOTE.md` routing rule for unavoidable cross-project concerns.
- Added `AI_FIELD_GUIDE_AGENT_PLAN.md` for the 8-agent Field Guide production structure.
- Added Volume II parking rule: Training AI is future scope, held until 3.5 training becomes practical enough to document seriously.


## 2026-05-19

- Added `RAG_DIRECTORY_ARCHITECTURE.md` defining the Source Ledger + Retrieval Contract standard.
- Added `CHAT_HANDOFFS/13_rag_source_ledger_chat.md` for the RAG source/provenance workstream.
- Added starter `rag/` folder with four topic lanes, templates, source ledgers, and open-question files.
- Added `FIELD_MANUAL_FORCE_MULTIPLIER_INSERT.md` for routing into the Field Manual lane.
- Updated master roadmap, project chat map, README, and cross-chat checklist for RAG source hygiene.

## v0.4-runtime-package-ledger

- Expanded `rag/02_python_pip_and_runtime_packages/` from current_field structure into a source-backed runtime package ledger.
- Added package family map, Windows runtime dependency strategy, AIWF runtime cards, and JSONL retrieval export.
- Added the venv-island/profile-runner rule for Gradio and one-click installer planning.
- Added build-target notes for a future requirements auditor and workflow dependency report.

## v0.5-ml-theory-training-ledger

- Expanded `rag/03_ml_theory_training_and_model_behavior/` from current_field structure into a source-backed ML theory/training ledger.
- Added concept map, training ladder, AIWF ML theory cards, JSONL retrieval export, and assistant context export.
- Added source entries for diffusion, latent diffusion, transformers, tokenization, LoRA, DreamBooth, Textual Inversion, PEFT, QLoRA, DPO, ControlNet, DiT, Adam, and dropout/overfitting.
- Added `CHAT_HANDOFFS/14_ml_theory_training_rag_chat.md` for continuing this RAG lane.

## v0.6-cfg-denoise-inpaint-theory

- Added a focused ML theory pass for CFG, denoise strength, img2img, and inpainting.
- Added source notes, clean operator model, editing preset notes, AIWF cards, JSONL retrieval export, and assistant context export.
- Added workflow-validator requirements for mask path, denoise/CFG task mismatch, crop/stitch overlap, face/reference control, and repeated VAE round trips.
- Added `CHAT_HANDOFFS/15_cfg_denoise_inpaint_theory_chat.md` for continuing the editing-theory lane.

---

## Consolidated near-duplicate retained material

This section was added during AIWF near-duplicate consolidation. The canonical file was kept, and only unique non-matching chunks from older/alternate copies were appended below so the duplicate copy could be removed without cutting information.

### Unique retained material from `CONTENT/AIWF-Project-Chat-Distribution-Roadmap-v0.5-comfyui-core-api-subgraph/AIWF-Project-Chat-Distribution-Roadmap/CHANGELOG.md`

- Added Field Manual force-multiplier insert under `FIELD_MANUAL_INSERTS/`.
- Added ComfyUI Core/API/Subgraph source-ledger pass.
- Added schema-first workflow validation rule built around ComfyUI `/object_info` capture.
- Added `scripts/capture_comfyui_schema.ps1` for local ComfyUI schema and system-stats capture.
- Added `templates/workflow_manifest_template.json` for workflow dependency/compatibility metadata.
- Added RAG cards for ComfyUI `object_info`, Subgraphs/Partial Execution, and API/partner-node policy.
- Added `CHAT_HANDOFFS/14_comfyui_core_api_schema_chat.md`.


### Unique retained material from `CONTENT/AIWF-Project-Chat-Distribution-Roadmap-v0.3-rag-source-ledger/AIWF-Project-Chat-Distribution-Roadmap/CHANGELOG.md`

- Added `docs/FORCE_MULTIPLIER_INSERT.md` for the Field Manual introduction/core philosophy area.
- Added `SOURCES/AIWF_SOURCE_LEDGER.md` to keep source checks, existing projects, and use/wrap/document/build decisions in one place.
- Added `RAG_DIRECTORIES/RAG_DIRECTORY_ARCHITECTURE.md` with four active RAG lanes: ComfyUI nodes, Python packages, models/workflows/formats, and theory/tools/agents.
- Added starter README files for all four RAG directories.
- Added `templates/source_note_template.md` for consistent RAG source capture.
- Added `CHAT_HANDOFFS/13_rag_source_ledger_chat.md` and updated `PROJECT_CHAT_MAP.md` with the RAG Source Ledger lane.
