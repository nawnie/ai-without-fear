# RAG Project Source Overview — Pass 02K

## What this file is for

This file teaches the RAG system how to interpret the growing AIWF node-research archive.

## Source classes

### `github_repo`
Use for exact node existence, class type names, schemas, dependency hints, and risk flags. Prefer rows marked `schema_confirmed` or `key_schema_confirmed`.

### `official_workflow_template`
Use as a high-trust workflow baseline. These can justify default workflow shapes when the exact node graph is present.

### `uploaded_markdown_field_report`
Use for strategy, recommendation priority, teaching framing, and caveats. Do not use alone for exact generated JSON unless the class/schema is independently verified.

### `chat_research_log`
Use for project decisions and policy memory: light-vs-dense research, popularity threshold, retry behavior, and safety around red-node risks.

## Query behavior for RAG

When asked “what should AIWF build first,” prioritize the decision layer.  
When asked “what is this node's exact class type or input,” prioritize schema-confirmed CSV rows and source-code RAG markdowns.  
When asked “can we generate this workflow JSON now,” check `workflow_generation_policy`, `requires_local_test`, and `risk_tags` before answering.

## Current high-value build targets

1. `AIWF_MODERN_VIDEO_01_WAN22_5B_NATIVE`
2. `AIWF_MODERN_INPAINT_01_CROP_STITCH_FOOOCUS`
3. `AIWF_MODERN_UPSCALE_01_ULTIMATE_SD_UPSCALE`
4. `AIWF_FACE_QUALITY_01_FACE_DETAILER`
5. `AIWF_LEGACY_VIDEO_01_ANIMATEDIFF_SD15`

## Current blocked or guarded targets

- 14B Wan template: official template exists, but subgraph internals need expansion before hand-written JSON.
- ReActor: identity/consent/licensing guardrails.
- SeedVR2: active V3 extension source exists, but local dependency/VRAM testing is required.
- HyperLoRA / InfiniteYou: promising identity/adaptation systems, but model/license/dependency risk is high.
- LayerStyle packs: dynamic module import; needs per-file sweep before schema generation.
