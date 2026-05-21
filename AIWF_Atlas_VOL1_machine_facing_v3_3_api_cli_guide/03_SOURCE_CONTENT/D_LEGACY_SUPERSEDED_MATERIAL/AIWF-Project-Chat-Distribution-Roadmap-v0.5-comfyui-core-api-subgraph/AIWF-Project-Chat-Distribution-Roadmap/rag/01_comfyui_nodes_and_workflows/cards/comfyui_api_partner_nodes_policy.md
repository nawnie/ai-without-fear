# RAG Card — ComfyUI API / Partner Nodes Policy

Date: 2026-05-19
Lane: `01_comfyui_nodes_and_workflows`
Status: compatibility rule

## Concept

ComfyUI partner/API nodes are useful but they are not the same dependency class as local nodes. They may require login, keys, credits, model-provider accounts, and internet access.

## AIWF Policy

Default beginner workflows should not silently depend on partner/API nodes. If they are included, mark them explicitly:

```yaml
execution_mode: api_partner
requires_login: true
requires_credits_or_key: true
local_offline: false
fallback_required: true
```

## Why It Matters

AIWF promises local-first learning. API nodes can be excellent accelerators, but they must not break offline/local expectations.

## Retrieval Tags

`partner_nodes`, `api_nodes`, `openai_image`, `claude_llm`, `flux2imagenode`, `grokimageeditnodev2`, `credits`, `local_first`, `fallback_required`

## Source Ledger IDs

- `COMFY_DOCS_CHANGELOG_2026_05_13_V0211`
- `COMFY_API_NODES_WAVE_2`
- `COMFY_GITHUB_README_APP_MODE_API`
