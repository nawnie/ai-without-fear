# AIWF RAG Directory Architecture

Purpose: split AIWF research into directories that answer different kinds of questions without turning the RAG into one dense, noisy pile.

## Recommended Four Active RAG Directories

```text
rag/
  01_comfyui_nodes/
  02_python_pip_packages/
  03_models_workflows_and_formats/
  04_theory_tools_and_agents/
```

This is intentionally practical. It supports the current AIWF work: ComfyUI workflows, node packs, local tooling, beginner education, diagnostics, and future local-agent helpers.

## 01_comfyui_nodes

Owns custom-node research.

Include:

- node pack name
- repo URL
- author/maintainer if visible
- install method
- core node categories
- required dependencies
- known breakage risks
- last visible activity / health notes
- ComfyUI Manager / Registry presence
- whether AIWF should use, wrap, document, or build around it

Priority logic:

- 10k+ downloads or obviously popular: high value
- under 10k but new/2026/first-of-type: still review
- first node of a type: dense review
- common duplicate functionality: light review
- anything with security or dependency risks: dense review

## 02_python_pip_packages

Owns Python dependency research.

Include:

- package name
- PyPI URL
- GitHub URL if available
- import name
- current purpose in AIWF
- license if easy to identify
- Windows install risk
- CUDA/native-extension risk
- wheels available or source compile likely
- known conflicts with torch/diffusers/transformers/opencv/numpy
- whether the package is runtime dependency, optional feature, or dev-only

Initial package clusters:

```text
torch stack: torch, torchvision, torchaudio, xformers, triton windows notes
image stack: pillow, opencv-python, imageio, imageio-ffmpeg, scikit-image
model stack: safetensors, huggingface_hub, transformers, diffusers, accelerate
ui stack: gradio, fastapi, uvicorn, rich, textual, tkinter built-ins
system stack: psutil, GPUtil, py-cpuinfo, platformdirs, pyyaml
security/support: pip-audit, packaging, importlib-metadata
```

## 03_models_workflows_and_formats

Owns model families, workflow JSONs, and file format knowledge.

Include:

- SD 1.5
- SDXL
- Flux
- WAN
- LTX
- Sana family
- ControlNet / IPAdapter / ReActor / SAM / GroundingDINO style dependencies
- LoRA / checkpoint / VAE / text encoder placement
- safetensors metadata patterns
- workflow JSON structure
- ComfyUI link/socket rules
- model folder placement and duplicate risks

This directory should produce the knowledge needed for AIWF workflow packs and model checker reports.

## 04_theory_tools_and_agents

Owns the bigger learning layer.

Include:

- ML foundations for Volume I and future Volume II parking lot
- prompt engineering principles
- context engineering
- agent tool-use patterns
- local LLM tool calling
- VQA/image understanding
- file editing agents
- retrieval and source-ledger design
- evals, hallucination checks, and human-in-the-loop review

This directory should support the Field Manual and the future assistant layer without pushing unstable code into beta repos.

## Per-Source Markdown Template

```markdown
# Source Note — <Project or Package Name>

## Classification

- RAG directory:
- Tags:
- Source type: GitHub / PyPI / Hugging Face / Civitai / Paper / Docs / Forum
- URL:
- License:
- Last reviewed: 2026-05-19

## What It Does

Plain-language summary.

## Why AIWF Cares

How this affects AIWF docs, tools, nodes, workflow packs, EnvPack, or Labs.

## Use / Wrap / Document / Build Decision

Decision:
Reason:

## Beginner Notes

What a beginner needs to know before using this.

## Technical Notes

Dependencies, install risks, GPU/VRAM implications, file placement, API shape, node types, or workflow structure.

## Failure Modes

Known errors, conflicts, bad assumptions, or support traps.

## Source Quotes / Facts To Verify

Keep short. Prefer paraphrase plus URL.

## Follow-Up

- [ ] Check install
- [ ] Check examples
- [ ] Check license
- [ ] Check Windows behavior
- [ ] Decide if source belongs in Field Manual, EnvPack, Workflow Packs, Nodes, or Labs
```

## Quality Bar

A RAG source is useful only if it helps answer one of these:

1. What already exists?
2. Should AIWF use, wrap, document, or build?
3. What breaks for beginners?
4. What file, model, dependency, or workflow path matters?
5. What should a local assistant know before giving advice?

If a note does not answer at least one, do not keep it.
