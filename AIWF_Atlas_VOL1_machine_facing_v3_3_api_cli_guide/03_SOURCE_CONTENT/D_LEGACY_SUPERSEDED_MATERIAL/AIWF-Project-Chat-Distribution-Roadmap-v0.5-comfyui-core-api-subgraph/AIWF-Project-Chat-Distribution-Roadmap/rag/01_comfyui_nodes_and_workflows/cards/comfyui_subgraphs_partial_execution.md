# RAG Card — ComfyUI Subgraphs and Partial Execution

Date: 2026-05-19
Lane: `01_comfyui_nodes_and_workflows`
Status: active workflow design rule

## Concept

Subgraphs let AIWF package complex ComfyUI node chains into reusable, cleaner nodes. Partial Execution lets users run only a selected output branch instead of firing the whole workflow.

## AIWF Use

Ship complex workflow packs in two forms:

1. full inspectable developer workflow
2. simplified subgraph/App Mode workflow

Design major branches with separate output nodes so users can preview one branch at a time.

## Best Targets

- old photo restore router
- inpaint crop/stitch router
- ControlNet pose/reference workflow
- ReActor/face branch
- upscale comparison workflow
- VQA prompt rewrite branch

## Guardrail

Do not hide the full workflow permanently. AIWF teaches principles, so the simplified version should sit beside a transparent version.

## Retrieval Tags

`subgraph`, `partial_execution`, `app_mode`, `branch_output`, `workflow_router`, `beginner_ui`, `inspectable_workflow`

## Source Ledger IDs

- `COMFY_DOCS_SUBGRAPH_FEATURE`
- `COMFY_DOCS_PARTIAL_EXECUTION`
- `COMFY_GITHUB_README_APP_MODE_API`
