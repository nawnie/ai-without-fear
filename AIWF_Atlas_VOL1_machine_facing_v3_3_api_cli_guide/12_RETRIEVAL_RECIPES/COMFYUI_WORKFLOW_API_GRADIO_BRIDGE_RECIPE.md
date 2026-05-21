# ComfyUI Workflow API and Gradio Bridge Retrieval Recipe

Use this recipe when a user asks how to automate ComfyUI, run a workflow from code, build a Gradio UI over ComfyUI, retrieve outputs, or handle prompt queue/status.

## Retrieve first

1. `01_CANONICAL_RESEARCH_LANES/32_comfyui_workflow_api_automation_gradio_bridge/CANONICAL_OVERVIEW.md`
2. `01_CANONICAL_RESEARCH_LANES/32_comfyui_workflow_api_automation_gradio_bridge/COMFYUI_API_AUTOMATION_PATTERN_GUIDE.md`
3. `01_CANONICAL_RESEARCH_LANES/32_comfyui_workflow_api_automation_gradio_bridge/GRADIO_TO_COMFYUI_BRIDGE_PATTERN_GUIDE.md`
4. `03_SOURCE_CONTENT/A_CANONICAL_SOURCE_PACKS/comfyui_advanced_pass03_workflow_api_automation_gradio_bridge/SOURCE_ANCHORS.md`

## Answer pattern

1. Identify whether the user is using local ComfyUI, ComfyUI Cloud, or a hosted provider.
2. Identify whether the provided JSON is UI workflow JSON or API prompt JSON.
3. Name the stable workflow contract: allowed inputs, node IDs, output nodes, model requirements.
4. Give the minimal route sequence: submit, track, retrieve.
5. Add Gradio queue/state guidance if the user is building a UI.
6. Add safety warning if remote access, file upload, or arbitrary workflow execution is involved.

## Common corrections

- Do not mix local `/prompt` with cloud `/api/prompt` without explaining the difference.
- Do not treat normal UI save files as guaranteed API payloads.
- Do not expose arbitrary node ID editing to beginners.
- Do not ignore returned `node_errors`.

## Brand-Aligned Workflow Prompt Note v2.9

For workflow automation and Gradio bridge prompts, emphasize control surfaces, state boundaries, and error visibility. Humor is allowed for local debugging friction, not for remote access, file upload, or arbitrary workflow execution risks.
