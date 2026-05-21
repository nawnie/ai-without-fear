# AIWF RAG Directory Architecture

## Purpose

This file defines the shared structure for AI Without Fear RAG directories.

The important addition is not just another folder. The important addition is a **Source Ledger + Retrieval Contract** that every RAG directory follows.

That gives the project a way to keep using many AI agents without losing track of:

- what was researched
- where it came from
- whether it is still current
- whether it is official, community, academic, experimental, or opinion
- whether AIWF should use, wrap, document, or build around it
- what the assistant is allowed to claim from that source

## Why This Matters

AIWF is becoming a multi-repo, multi-chat project. The risk is not lack of ideas. The risk is drift, duplicate research, stale claims, and unsourced conclusions.

A RAG library should not just be a pile of Markdown. It should be a usable memory system.

Each RAG directory should answer four questions quickly:

1. **What is true enough to teach?**
2. **What is useful enough to build around?**
3. **What already exists so we do not reinvent the wheel?**
4. **What is uncertain, outdated, risky, or needs retesting?**

## Recommended Four RAG Topic Lanes

These are topic lanes, not hard repo boundaries.

```text
01_comfyui_nodes_and_workflows/
02_python_pip_and_runtime_packages/
03_ml_theory_training_and_model_behavior/
04_agents_rag_local_llm_and_tool_use/
```

### 01 — ComfyUI Nodes and Workflows

Use this for:

- ComfyUI custom node packs
- workflow JSON patterns
- inpainting / upscaling / video generation pipelines
- WAN, LTX, SDXL, Flux, SD 1.5 workflow behavior
- node compatibility notes
- Civitai / GitHub workflow references

Primary AIWF consumers:

- `AIWF-Workflow-Packs`
- `AIWF-ComfyUI-Nodes`
- Field Manual workflow chapters

### 02 — Python Pip and Runtime Packages

Use this for:

- torch / torchvision / torchaudio
- CUDA / cuDNN compatibility
- transformers / diffusers / accelerate
- safetensors / huggingface_hub
- gradio / fastapi / pydantic
- llama-cpp-python / ollama wrappers
- dependency conflict notes

Primary AIWF consumers:

- `AIWF-EnvPack`
- model checker module
- one-click install scripts
- troubleshooting docs

### 03 — ML Theory, Training, and Model Behavior

Use this for:

- diffusion fundamentals
- transformers / attention / embeddings
- LoRA, DreamBooth, fine-tuning, captioning, datasets
- quantization
- sampling, schedulers, CFG, denoise
- evaluation and failure signatures
- Volume II parking-lot research

Primary AIWF consumers:

- `AI-Field-Manual-2026`
- future Training AI volume
- knowledge cards
- assistant explanations

### 04 — Agents, RAG, Local LLM, and Tool Use

Use this for:

- AnythingLLM
- OpenWebUI
- Ollama
- LM Studio
- MCP
- local file editing agents
- CLI agents
- browser/search agents
- safe tool execution patterns
- local automation workflows

Primary AIWF consumers:

- `AIWF-Knowledge-Pack`
- AIWF assistant layer
- future local helper apps
- small-business implementation workflows

## Required Inner Structure for Every RAG Topic Directory

Each topic directory should use the same inner layout.

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

### `00_SOURCE_LEDGER.md`

The source ledger is the most important file.

Each entry should include:

```markdown
## Source Name

- Source type: Official docs / GitHub repo / paper / community guide / issue / video / opinion
- URL or local file:
- Date checked:
- Topic lane:
- Stability: Stable / fast-moving / deprecated / experimental
- AIWF decision: Use / wrap / document / build missing piece / avoid for now
- Why it matters:
- Claims we can safely use:
- Claims that need retesting:
- Related AIWF repo:
```

### `01_raw_sources/`

Store raw or minimally edited source captures when allowed.

Use for:

- copied notes from official docs
- short source summaries
- repo README snapshots
- issue notes
- paper metadata

Do not dump copyrighted full books, full articles, or giant copied pages here.

### `02_clean_notes/`

Turn raw research into readable AIWF notes.

Use for:

- summaries
- comparison notes
- install notes
- compatibility notes
- caution notes
- research conclusions

### `03_aiwf_cards/`

This is the RAG-friendly layer.

Each card should be short, titled, and retrieval-ready.

Recommended card types:

```text
concept_card
failure_pattern_card
tool_card
workflow_card
model_card
package_card
source_decision_card
```

Each card should include:

```yaml
id:
title:
type:
topic_lane:
source_refs:
stability:
summary:
use_when:
do_not_use_when:
aiwf_decision:
```

### `04_retrieval_exports/`

This folder is for files intended to be loaded into AnythingLLM, OpenWebUI, a local RAG system, or a future AIWF assistant.

Use clean Markdown and/or JSONL.

Suggested exports:

```text
cards.jsonl
cards.md
source_index.json
assistant_context.md
```

### `05_open_questions.md`

Track unresolved items instead of letting the assistant hallucinate confidence.

Use for:

- needs retesting
- maybe outdated
- possible replacement project
- install not verified
- Windows status unknown
- license unclear
- safety/security concern

## RAG Source Quality Scale

Use this simple scale in notes and cards.

```text
A — Official / primary source, current, directly applicable
B — Strong GitHub repo or paper, but needs context/testing
C — Community source, useful but must be verified
D — Anecdotal, issue-thread-only, or likely stale
X — Avoid for now; broken, abandoned, unsafe, license unclear, or out of scope
```

## AIWF Decision Labels

Every researched tool, repo, package, or concept should get one of these labels.

```text
USE
WRAP
DOCUMENT
BUILD_MISSING_PIECE
WATCH
AVOID_FOR_NOW
```

### USE

The existing project already does the job well enough.

AIWF should teach or link it, not rebuild it.

### WRAP

The existing project is useful but needs a beginner-friendly shell, launcher, preset, workflow, or one-click path.

### DOCUMENT

The project is useful mainly as a reference or dependency.

### BUILD_MISSING_PIECE

The existing ecosystem has a gap that AIWF can reasonably fill.

### WATCH

Promising, but too new, unstable, or under-tested.

### AVOID_FOR_NOW

Not worth integrating yet because it is broken, risky, stale, too narrow, or outside AIWF scope.

## Retrieval Contract

A RAG answer built from these directories should obey this contract:

1. Prefer source ledger decisions over loose notes.
2. Prefer official docs and actively maintained repos over social posts.
3. Mention uncertainty when the source is experimental or stale.
4. Do not claim a workflow is tested unless the test is recorded.
5. Do not claim a package is safe unless the install path and dependency risk are checked.
6. If a tool already solves the problem, recommend using or wrapping it before building.
7. Separate beginner-safe instructions from advanced/labs instructions.
8. Keep Windows PowerShell examples whenever possible.

## Initial Source Targets

These are starting points for the first source ledgers.

### ComfyUI / Workflow Lane

- ComfyUI core docs and repo
- ComfyUI-Manager
- ComfyUI-Doctor
- MTB
- rgthree-comfy
- ComfyUI-Easy-Use
- VideoHelperSuite
- ReActor
- Acly inpaint nodes
- Civitai workflows with high usage

### Pip / Runtime Lane

- PyTorch install matrix
- CUDA toolkit / driver compatibility notes
- NVIDIA cuDNN docs
- Hugging Face diffusers docs
- transformers docs
- safetensors docs
- llama-cpp-python docs
- Gradio docs

### ML Theory Lane

- diffusion model papers and explainers
- transformer/attention papers and explainers
- LoRA papers and practical training docs
- quantization references
- evaluation/failure-pattern references

### Agent / RAG Lane

- AnythingLLM docs
- OpenWebUI docs
- Ollama docs
- MCP specification
- local agent frameworks
- safe tool-use / sandboxing references

## Next Outputs

1. Create the four RAG topic folders.
2. Add a `00_SOURCE_LEDGER.md` template to each one.
3. Add the first 10 source entries per topic.
4. Convert the best source entries into `03_aiwf_cards/`.
5. Export `cards.jsonl` for local RAG testing.
