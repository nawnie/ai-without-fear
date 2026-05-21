# Handoff — RAG Source Ledger Chat

## Chat Mission

Build and maintain the AIWF RAG source ledger standard across the four RAG topic lanes.

This chat does not own the whole AIWF project. It owns source tracking, retrieval hygiene, and RAG-ready research structure.

## Initial Location

```text
AI-Field-Manual-2026/rag/
```

## Possible Later Repo

```text
nawnie/AIWF-Knowledge-Pack
```

## Scope Firewall / Memory Rule

This chat owns only this roadmap.

- Store **this chat's assigned roadmap** as the active working memory/context for this chat.
- Treat all other project roadmaps as **read-only reference** only.
- Do **not** begin work on another project's files, repo, roadmap, features, or implementation unless the Brand Hub explicitly reassigns scope.
- Do **not** casually suggest changes for other projects in normal chat, `.txt` files, or side notes.
- If a cross-project dependency or concern is unavoidable, write it only as a Markdown handoff note in a fenced code block, titled `CROSS_PROJECT_NOTE.md`, and send it back to Brand Hub / Release Packaging for routing.
- When uncertain, stay in lane and produce the next GitHub-ready file for this project.

## Owns

- RAG directory structure
- `00_SOURCE_LEDGER.md` templates
- source quality scoring
- source decision labels
- RAG card schema
- `cards.jsonl` export format
- open-question tracking
- source freshness notes

## Does Not Own

- EnvPack implementation
- ComfyUI node source code
- workflow JSON building
- Field Manual prose editing, except source-backed knowledge cards
- Labs experiments

## Existing Projects to Check

Before inventing a format, check:

- AnythingLLM document/RAG behavior
- OpenWebUI knowledge behavior
- MCP resource/prompt/tool concepts
- common JSONL retrieval formats
- current AIWF `ai_knowledge.json` conventions

## Required Four RAG Topic Lanes

```text
01_comfyui_nodes_and_workflows/
02_python_pip_and_runtime_packages/
03_ml_theory_training_and_model_behavior/
04_agents_rag_local_llm_and_tool_use/
```

## Standard Inner Folder Template

```text
rag_topic_name/
├── 00_SOURCE_LEDGER.md
├── 01_raw_sources/
├── 02_clean_notes/
├── 03_aiwf_cards/
├── 04_retrieval_exports/
├── 05_open_questions.md
└── CHANGELOG.md
```

## Next GitHub-Ready Outputs

1. `rag/README.md`
2. `rag/RAG_DIRECTORY_ARCHITECTURE.md`
3. `rag/templates/SOURCE_LEDGER_TEMPLATE.md`
4. `rag/templates/AIWF_CARD_TEMPLATE.md`
5. `rag/CHANGELOG.md`

## Copy/Paste Starter Prompt

```text
You are working inside the AI Without Fear GitHub project. This chat owns the RAG Source Ledger and retrieval hygiene layer.

Initial location: AI-Field-Manual-2026/rag/
Possible later repo: nawnie/AIWF-Knowledge-Pack

Mission: build the RAG directory structure, source ledger templates, source quality scoring, AIWF decision labels, RAG card schema, and retrieval export format for the four AIWF RAG topic lanes.

Do not implement EnvPack, workflow JSONs, custom ComfyUI nodes, or Labs experiments here.

Scope and memory rules:
- Store this assigned roadmap as the active working memory/context for this chat.
- Treat other AIWF roadmaps as read-only reference only.
- Do not work on other project lanes unless Brand Hub explicitly reassigns scope.
- Do not make casual suggestions for other projects in normal chat or .txt files.
- If a cross-project note is unavoidable, output it only as Markdown inside a fenced code block titled CROSS_PROJECT_NOTE.md, then return to this project's assigned work.

Standing rules:
- Do not reinvent the wheel; check AnythingLLM, OpenWebUI, MCP, JSONL RAG conventions, and current AIWF knowledge files before defining formats.
- Write actual GitHub-ready files.
- Changelog uses days only, no timestamps.
- Every source gets a quality grade and AIWF decision label.
- Separate tested claims from untested research notes.

Next outputs:
rag/README.md, rag/RAG_DIRECTORY_ARCHITECTURE.md, rag/templates/SOURCE_LEDGER_TEMPLATE.md, rag/templates/AIWF_CARD_TEMPLATE.md, rag/CHANGELOG.md
```

## Runtime Package Ledger Pass — 2026-05-19

Added the first non-current_field package/runtime pass under:

```text
rag/02_python_pip_and_runtime_packages/
```

Files added:

```text
01_raw_sources/2026-05-19_runtime_source_notes.md
02_clean_notes/package_family_map.md
02_clean_notes/windows_runtime_dependency_strategy.md
03_aiwf_cards/package_runtime_core_cards.md
04_retrieval_exports/cards_runtime_core.jsonl
04_retrieval_exports/assistant_context_runtime_core.md
```

Primary conclusion:

AIWF should use a small launcher plus isolated backend venv profiles. This preserves one-click usability while avoiding torch/OpenCV/ONNX/SAM/ReActor/restoration dependency collisions.

---

## Consolidated near-duplicate retained material

This section was added during AIWF near-duplicate consolidation. The canonical file was kept, and only unique non-matching chunks from older/alternate copies were appended below so the duplicate copy could be removed without cutting information.

### Unique retained material from `CONTENT/AIWF-Project-Chat-Distribution-Roadmap-v0.3-rag-source-ledger/AIWF-Project-Chat-Distribution-Roadmap/CHAT_HANDOFFS/13_rag_source_ledger_chat.md`

Build and maintain the source-ledger and RAG research directories for AI Without Fear.
Start inside the project knowledge/research area:
Mirror high-value implementation notes into the relevant repo only after the owning project needs them.
This chat owns only source collection, source evaluation, and RAG-ready research notes.
- Store this assigned roadmap as the active working memory/context for this chat.
- Treat all other AIWF roadmaps as read-only reference only.
- Do not implement EnvPack, workflow packs, node packs, or Labs code here.
- If a finding affects another repo, write a fenced Markdown `CROSS_PROJECT_NOTE.md` and return to source-ledger work.
- source ledger
- RAG directory structure
- ComfyUI node research notes
- Python package notes
- model/workflow format notes
- theory/tool/agent notes
- source freshness checks
- use/wrap/document/build decisions
- production code
- workflow JSON generation
- Field Manual chapter rewrites
- ComfyUI node implementation
- EnvPack feature implementation
Before adding or recommending AIWF work, check:
- ComfyUI official docs and registry
- ComfyUI-Manager
- ComfyUI-Doctor
- MTB
- Hugging Face docs/models
- Civitai model/workflow ecosystem
- GitHub repos
- PyPI packages
- academic papers when theory is involved
1. `SOURCES/AIWF_SOURCE_LEDGER.md`
2. `RAG_DIRECTORIES/RAG_DIRECTORY_ARCHITECTURE.md`
3. `RAG_DIRECTORIES/01_comfyui_nodes/README.md`
4. `RAG_DIRECTORIES/02_python_pip_packages/README.md`
5. `RAG_DIRECTORIES/03_models_workflows_and_formats/README.md`
6. `RAG_DIRECTORIES/04_theory_tools_and_agents/README.md`
7. `templates/source_note_template.md`
```text
You are working inside the AI Without Fear GitHub project. This chat owns the RAG source ledger and source-note directories only.
Mission: research existing projects, packages, nodes, models, papers, and docs so AIWF does not reinvent the wheel. Every source should end with a use/wrap/document/build decision.
Do not implement EnvPack, workflow packs, custom nodes, or Labs code here.
Standing rules:
- Check existing projects before recommending new work.
- Write GitHub-ready Markdown source notes.
- Keep source notes practical and searchable.
- Changelog uses days only, no timestamps.
- Prefer direct source URLs and official docs when available.
Next outputs:
SOURCES/AIWF_SOURCE_LEDGER.md, RAG_DIRECTORIES/RAG_DIRECTORY_ARCHITECTURE.md, directory READMEs, templates/source_note_template.md
```
