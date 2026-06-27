# AIWF Atlas Vol. 1

Version: v2.13 - adapter evaluation benchmarking pass

The AIWF Atlas Vol. 1 is the machine-facing domain memory layer for AI Without Fear work. It supports Atlas systems, local AI assistants, agents, workflow copilots, Gradio apps, and ComfyUI helper layers.

The **AI Without Fear Field Guide** teaches humans. The **Atlas Layer** gives AI systems structured memory, Atlas cards, source policies, failure patterns, workflow context, and operating rules for AIWF-style answers.

## Brand principle

> Master principles, not platforms. Tools change. Principles transfer.

## Force-multiplier framing

AIWF treats AI as a tool, not a replacement. The Field Guide teaches humans how to understand and guide AI systems. The Atlas Layer gives assistants the structured memory needed to support that work without pretending the machine makes the final call.

## Humor rule

AIWF humor is dry and practical. It can help with OOM errors, dependency failures, tangled workflows, and beginner reassurance. It should never weaken source verification, safety, consent, licensing, or privacy warnings.

## Current active structure

- `00_AI_READ_FIRST/` - operating rules, source rules, brand rules, and AI-facing policies.
- `01_CANONICAL_RESEARCH_LANES/` - current canonical research lanes.
- `02_RETRIEVAL_INDEX/` - current retrieval and lane indexes.
- `03_SOURCE_CONTENT/` - preserved source payloads and provenance.
- `04_MANIFESTS/` - current active manifests.
- `05_REPORTS/` - current release and audit reports.
- `06_CHANGE_HISTORY/` - historical manifests, reports, and prior pass artifacts.
- `07_EXPANSION_QUEUE/` - the only active location for future-work and roadmap notes.
- `08_INGESTION_PROTOCOLS/` - import profiles for common RAG/app systems.
- `09_EVALUATION_HARNESS/` - evaluation scaffolds.
- `10_SCHEMA_AND_INDEX/` - schemas, source gates, and machine rules.
- `11_PROMPT_PACKS/` through `15_ANSWER_TEMPLATES/` - assistant operating assets.

## Current counts

- Canonical lanes: 35
- Atlas cards: 404

## Current ingestion rule

Start with `00_AI_READ_FIRST/00_LOAD_ORDER.md`, then use `02_RETRIEVAL_INDEX/CANONICAL_RETRIEVAL_CARDS_CURRENT.jsonl` and the relevant canonical lane files. Do not index `06_CHANGE_HISTORY/` by default.

## Source integrity rule

Use web verification for current, volatile, benchmark, model, hardware, license, API, and tool-compatibility claims unless explicitly told not to.

## Brand consistency rule

Load `00_AI_READ_FIRST/AIWF_BRAND_VOICE_AND_POSITIONING.md` and `00_AI_READ_FIRST/CANONICAL_AIWF_TERMINOLOGY.md` before producing public-facing or repo-facing responses from this adapter.

## Latest focus

This pass adds the updated AIWF force-multiplier framing and humor/style rules. It does not change the underlying research claims or source payloads.

## Brand Alignment v2.8

The adapter now includes a stricter active-layer brand map. AIWF voice is practical, source-aware, beginner-safe, systems-minded, and dryly funny only where humor helps the operator keep moving. Raw source files remain archival evidence and should not be rewritten for tone.

## Workflow Prompt Brand Alignment

The adapter includes brand-aligned default workflow prompts under `11_PROMPT_PACKS/default_workflow_prompts/`. These prompts are for AIWF assistants, workflow copilots, Gradio tools, ComfyUI helpers, RAG librarians, source verifiers, and release QA agents.

Use `00_AI_READ_FIRST/WORKFLOW_PROMPT_AND_MARKDOWN_BRAND_POLICY.md` before editing active workflow-facing Markdown. Raw source content remains provenance and should not be rewritten merely for tone.

## Visual Assets

This adapter includes a dedicated `16_VISUAL_ASSETS/` layer with reusable SVG and Mermaid diagrams for core AIWF systems: adapter load order, retrieval routing, source verification, ComfyUI datatype boundaries, Gradio-to-ComfyUI automation, lakeFS versioning, synthetic data flywheels, evaluation harnesses, cost routing, and Torchie callout style guidance.

Index the visual asset README and index by default. Do not embed raw SVGs unless the user asks for diagrams or guide visuals.

## Torchie 2026 Rebrand

The active Torchie mascot reference is stored under `16_VISUAL_ASSETS/torchie_callouts/`. Use the 2026 rebrand sheet and derived crops for new AIWF callouts, workflow cards, and guide visuals. Former Torchie art is preserved only as change history.

## Torchie Active Markdown/PDF Audit

The v2.12 audit confirms there are no PDFs inside the adapter and no active non-provenance Markdown references instructing use of the former Torchie artwork. The current visual identity is the 2026 rebrand sheet in `16_VISUAL_ASSETS/torchie_callouts/`.

## Adapter Evaluation Benchmarking

This version adds a proof-testing lane and evaluation harness assets. The adapter includes golden questions, expected-source maps, a raw-RAG comparison protocol, and a result schema for testing whether AIWF structured memory improves assistant behavior.

Do not claim performance superiority from the archive alone. Use the benchmark protocol and record model/version-specific results.

## v2.14 Evaluation Structure Hardening

The evaluation harness now uses current-only filenames for the benchmark protocol, raw-RAG comparison plan, golden questions, expected source maps, and lane quality audit. Older versioned evaluation/control artifacts were moved into `06_CHANGE_HISTORY/` so active ingestion does not trip over stale files.

Recommended evaluation entry point: `09_EVALUATION_HARNESS/README.md`.

## v3.2 Quality-Control Note

The Atlas now includes an explicit Torchie operator shorthand protocol for `A`, `B`, `I`, `Z`, `Q`, `S`, and `R` build sessions. Active product identity has been cleaned toward Atlas language; technical uses of retrieval-augmented generation remain only where they describe the method or named tools.

## v3.3 API + CLI Guide Insert

Added `17_FIELD_GUIDE_INSERTS/` with a human-facing API and CLI usage chapter insert. This covers provider APIs, local model CLI runtimes, local OpenAI-compatible servers, ComfyUI API routes, and Gradio-as-control-surface patterns.

Start with `17_FIELD_GUIDE_INSERTS/API_AND_CLI_USAGE_FIELD_GUIDE_INSERT.md` for the full explanation or `17_FIELD_GUIDE_INSERTS/API_CLI_QUICK_REFERENCE.md` for commands.

## GitHub Integration Pass

The Gradio 6 archive has been folded into this Atlas as a canonical source pack:

- `03_SOURCE_CONTENT/A_CANONICAL_SOURCE_PACKS/gradio6_rag_archive_20260521_0838/`

The older repo drop-in package has been preserved as release history:

- `06_CHANGE_HISTORY/packaged_releases/AIWF_Atlas_repo_dropin_v2_3/`

Use the root repository files `NOTES_TO_AI.md`, `RAG_ATLAS_INDEX.md`, `INGESTION_GUIDE.md`, and `LEARNING_PASS_REVIEW.md` for GitHub-facing navigation and current review notes.
