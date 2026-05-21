# AIWF Source Ledger Pass 03 — ComfyUI Core/API/Subgraph Layer

Date: 2026-05-19

## Purpose

This pass turns current ComfyUI core capabilities into AIWF build rules. The goal is not to rebuild ComfyUI. The goal is to make AIWF better at:

- validating workflow JSONs before users load them
- capturing the real node schemas from the user's local install
- building compatibility manifests from `object_info`
- keeping API/partner nodes separate from local nodes
- using Subgraphs and Partial Execution to make complex workflows feel like beginner-safe tools

## Verified Source Claims

| Source ID | What it confirms | AIWF consequence |
|---|---|---|
| `COMFY_DOCS_CHANGELOG_2026_05_13_V0211` | ComfyUI v0.21.1 added/updated partner/API nodes including Flux2ImageNode, GrokImageEditNodeV2, OpenAI Image, Claude LLM, and LTXV fixes. | Compatibility matrix needs a fast-moving `api_partner_nodes` class. These should not be treated as guaranteed local/offline dependencies. |
| `COMFY_GITHUB_README_APP_MODE_API` | ComfyUI already exposes complex workflows through App Mode and supports API endpoints. | AIWF should wrap, teach, validate, and package workflows; not fork/recreate the UI. |
| `COMFY_DOCS_WORKFLOW_JSON_SCHEMA` | Workflow JSON has an official JSON Schema and latest workflow schema version 1.0. | AIWF workflow generator should validate schema and keep version metadata. |
| `RUNCOMFY_WORKFLOW_API_OBJECT_INFO` | `workflow_api.json` and `object_info.json` provide machine-readable node structure and schema catalog. | EnvPack should capture `/object_info`; Workflow Packs should use it to prevent red-node JSONs. |
| `COMFY_DOCS_SUBGRAPH_FEATURE` | Subgraphs are now the official way to package complex node chains into reusable nodes. | AIWF mega-workflows should ship as inspectable full workflows plus optional subgraph/app-mode variants. |
| `COMFY_DOCS_PARTIAL_EXECUTION` | Partial Execution allows running a branch to an output node. | AIWF compare workflows should expose output nodes per branch to test modules independently. |
| `COMFY_API_NODES_WAVE_2` | LLM/API nodes can write, reason, generate prompts, branch logic, and scaffold multi-step chains. | Treat LLM-assisted prompt rewriting as a modular layer; do not hardwire it into every workflow. |

## Build Decision

**Adopt schema-first ComfyUI workflow support.**

The next AIWF workflow infrastructure should assume three files can exist beside every workflow:

```text
workflow.json
workflow_api.json
workflow_manifest.json
```

Where:

- `workflow.json` is the visible ComfyUI workflow users load and inspect.
- `workflow_api.json` is the API/export format used by automation tools and Gradio/worker launchers.
- `workflow_manifest.json` is AIWF's own metadata: required models, custom nodes, optional nodes, expected folders, known failures, and tested ComfyUI/frontend versions.

## Practical Rule

Do not generate future workflow JSON blindly from guessed node names. The correct sequence is:

1. Capture the user's local `/object_info`.
2. Build a node availability map.
3. Validate class names and input names against the map.
4. Generate or patch the workflow.
5. Add a manifest explaining every custom-node dependency and fallback.
6. Only then package it.

## Why This Matters

Most AIWF workflow failures so far come from one of four sources:

1. wrong custom node installed
2. correct node installed but different class/input schema
3. model exists but is in the wrong folder
4. workflow assumes a node pack or API node the user does not have

Capturing `object_info` lets AIWF stop guessing.

## Next Files To Build

- `workflow_manifest_template.json`
- `scripts/capture_comfyui_schema.ps1`
- `docs/COMFYUI_SCHEMA_CAPTURE_AND_VALIDATION.md`
- `rag/01_comfyui_nodes_and_workflows/cards/comfyui_object_info_schema_capture.md`
