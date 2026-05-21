# ComfyUI Advanced Research Pass 03 Report — Workflow API Automation and Gradio Bridge

## Summary

This pass adds a canonical lane for automating ComfyUI workflows through local API routes and wrapping workflows with Gradio applications.

## Added

- `01_CANONICAL_RESEARCH_LANES/32_comfyui_workflow_api_automation_gradio_bridge/`
- `03_SOURCE_CONTENT/A_CANONICAL_SOURCE_PACKS/comfyui_advanced_pass03_workflow_api_automation_gradio_bridge/`
- `12_RETRIEVAL_RECIPES/COMFYUI_WORKFLOW_API_GRADIO_BRIDGE_RECIPE.md`
- 12 Atlas cards
- source anchors for official ComfyUI and Gradio documentation

## Source verification

The pass uses official ComfyUI route documentation, official ComfyUI workflow JSON specification, the official ComfyUI API example script, official ComfyUI Cloud API overview, and official Gradio documentation for Blocks, queueing, state, and file uploads.

## Machine behavior added

The assistant should now distinguish:

- local API vs cloud API
- UI workflow JSON vs API prompt JSON
- ComfyUI queue vs Gradio queue
- user-facing controls vs arbitrary node mutation
- session state vs global state
- upload handling vs arbitrary file paths

## Release hygiene

No source payload content was removed. Active machine indexes were regenerated after adding the lane.

## Finalization checks

- Active source manifests refreshed across ComfyUI advanced passes 01–03.
- Active v2.0 reports moved to change history.
- Current duplicate and cleanliness audits regenerated.
- Active non-roadmap cleanup markers found: 0.
- Exact duplicate hash rows: 0.
