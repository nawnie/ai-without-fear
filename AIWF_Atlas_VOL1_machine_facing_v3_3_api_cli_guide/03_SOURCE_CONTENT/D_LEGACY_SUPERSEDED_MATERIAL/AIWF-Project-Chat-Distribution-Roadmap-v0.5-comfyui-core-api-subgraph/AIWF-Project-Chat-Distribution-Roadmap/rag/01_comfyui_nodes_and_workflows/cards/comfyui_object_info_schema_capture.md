# RAG Card — ComfyUI `object_info` Schema Capture

Date: 2026-05-19
Lane: `01_comfyui_nodes_and_workflows`
Status: active build rule

## Concept

ComfyUI exposes a live node schema catalog at `/object_info`. This catalog should be captured from the user's actual install before AIWF generates, patches, or validates workflow JSON.

## Why It Matters

Generated ComfyUI JSON often fails because the node class name, input name, socket type, or widget range does not match the user's installed node version.

## AIWF Rule

Before repairing a red-node workflow:

1. capture `/object_info`
2. check missing `class_type` names
3. check changed input names
4. check optional/API nodes
5. patch only after the schema map is known

## User Command

```powershell
PowerShell -ExecutionPolicy Bypass -File .\scripts\capture_comfyui_schema.ps1 -ComfyUrl "http://127.0.0.1:8188" -OutDir ".eports"
```

## Retrieval Tags

`comfyui`, `object_info`, `workflow_json`, `schema`, `red_nodes`, `custom_nodes`, `api_format`, `workflow_validation`, `envpack`, `workflow_packs`

## Source Ledger IDs

- `RUNCOMFY_WORKFLOW_API_OBJECT_INFO`
- `COMFY_DOCS_WORKFLOW_JSON_SCHEMA`
- `COMFY_GITHUB_README_APP_MODE_API`
