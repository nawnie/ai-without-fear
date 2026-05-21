# AIWF Project Chat Distribution Roadmap

This package contains a roadmap for distributing the AI Without Fear GitHub project across individual project chats.

## Files

```text
MASTER_DISTRIBUTION_ROADMAP.md
PROJECT_CHAT_MAP.md
CROSS_CHAT_CHECKLIST.md
CHANGELOG.md
CHAT_HANDOFFS/
```

## How to use

Open the handoff file for the chat you are working in, paste the starter prompt into that chat, and keep that chat focused on its assigned lane.

The most important rule:

> AI Without Fear is the umbrella. Each chat owns one product lane.

## First beta priority

The first GitHub beta should be:

```text
AIWF-EnvPack
```

Purpose:

> One PowerShell command creates a clean local-AI support report showing GPU, CUDA, Torch, ComfyUI, custom nodes, ports, logs, model folders, duplicates, and likely mismatches.


## Updated distribution rule

Use `SENDOFF_MASTER.md` before any individual handoff. Each project chat should store only its assigned roadmap as active memory/context. Other roadmaps are reference-only.

Cross-project suggestions must not drift into normal chat or `.txt` files. If unavoidable, write them as Markdown in a fenced code block titled `CROSS_PROJECT_NOTE.md` and route them back to Brand Hub or Release Packaging.

## New control files

```text
SENDOFF_MASTER.md
CHAT_SCOPE_FIREWALL.md
AI_FIELD_GUIDE_AGENT_PLAN.md
```


## v0.3 additions

```text
RAG_DIRECTORY_ARCHITECTURE.md
FIELD_MANUAL_FORCE_MULTIPLIER_INSERT.md
CHAT_HANDOFFS/13_rag_source_ledger_chat.md
rag/
```

## RAG directory rule

Each RAG topic lane should keep a `00_SOURCE_LEDGER.md` before creating retrieval cards or assistant exports. This keeps sources, freshness, AIWF decisions, and open questions visible.

## v0.4 Runtime Package Ledger

The RAG package now includes a first real pass on `rag/02_python_pip_and_runtime_packages/`:

- source-backed runtime package ledger
- package family map
- Windows dependency strategy
- venv-island/profile-runner install architecture
- runtime AIWF cards
- JSONL retrieval export

Key rule: AIWF should not ship one giant AI `requirements.txt`. It should use a small launcher plus isolated backend profiles for ComfyUI bridge, Diffusers, VQA, SAM/GroundingDINO auto-mask, face/restoration, and video tools.

## v0.5 ML Theory / Training Ledger

The RAG package now includes a first real pass on `rag/03_ml_theory_training_and_model_behavior/`:

- source-backed theory/training ledger
- beginner-safe ML concept map
- training ladder from prompting to fine-tuning
- ML theory retrieval cards
- JSONL retrieval export
- assistant context export for future tooltips/local helpers

Key rule: Volume I teaches mechanisms as operator intuition. Volume II can hold math, architecture, optimization, post-training, and research-paper depth.

## v0.6 CFG / Denoise / Inpaint Theory

The ML theory lane now includes a workflow-facing pass for image editing controls:

- CFG as prompt pressure, not quality
- denoise/strength as source-preservation versus rewrite freedom
- img2img as controlled rewriting from a noised source image
- inpainting masks as edit contracts
- ComfyUI masked-latent QA notes
- task-to-setting starter matrix
- failure signatures for seams, blur, identity loss, underpowered edits, and overcooked prompts

Key rule: AIWF should not rebuild Diffusers or ComfyUI inpainting engines. AIWF should build explanations, workflow validators, prompt-rewrite helpers, sane presets, and troubleshooting cards around existing engines.

---

## Consolidated near-duplicate retained material

This section was added during AIWF near-duplicate consolidation. The canonical file was kept, and only unique non-matching chunks from older/alternate copies were appended below so the duplicate copy could be removed without cutting information.

### Unique retained material from `CONTENT/AIWF-Project-Chat-Distribution-Roadmap-v0.5-comfyui-core-api-subgraph/AIWF-Project-Chat-Distribution-Roadmap/README.md`

## v0.5 continuation additions
This package now includes a ComfyUI schema-first workflow support pass:
> Stop guessing ComfyUI node schemas. Capture `/object_info`, validate against the user's live install, then generate or patch workflows.


### Unique retained material from `CONTENT/AIWF-Project-Chat-Distribution-Roadmap-v0.3-rag-source-ledger/AIWF-Project-Chat-Distribution-Roadmap/README.md`

This package now includes a first-pass RAG/source-ledger layer:
The source-ledger layer exists to enforce the AIWF rule: do not rebuild what existing projects already cover; use, wrap, document, or build only the missing piece.
