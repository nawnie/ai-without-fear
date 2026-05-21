# ComfyUI Advanced Pass 01 — Source Coverage

This source pack anchors advanced ComfyUI research to official ComfyUI documentation where possible. Use it as the preferred source set for custom-node socket/datatype questions, workflow API questions, frontend extension behavior, subgraph packaging, and troubleshooting.

- **COMFY-DOC-001** — ComfyUI Custom Nodes - Properties: https://docs.comfy.org/custom-nodes/backend/server_overview
  - Notes: INPUT_TYPES, RETURN_TYPES, FUNCTION, OUTPUT_NODE, IS_CHANGED.
- **COMFY-DOC-002** — ComfyUI Images, Latents, and Masks: https://docs.comfy.org/custom-nodes/backend/images_and_masks
  - Notes: IMAGE [B,H,W,C], MASK [B,H,W], LATENT dict with samples [B,C,H,W].
- **COMFY-DOC-003** — ComfyUI Datatypes: https://docs.comfy.org/custom-nodes/backend/datatypes
  - Notes: Client-side strong typing and built-in datatypes.
- **COMFY-DOC-004** — ComfyUI Hidden and Flexible Inputs: https://docs.comfy.org/custom-nodes/backend/more_on_inputs
  - Notes: Hidden inputs, custom datatypes, wildcard inputs, forceInput.
- **COMFY-DOC-005** — ComfyUI V3 Migration: https://docs.comfy.org/custom-nodes/v3_migration
  - Notes: V3 schema, custom types, MultiType, MatchType.
- **COMFY-DOC-006** — ComfyUI Lazy Evaluation: https://docs.comfy.org/custom-nodes/backend/lazy_evaluation
  - Notes: lazy inputs, check_lazy_status, ExecutionBlocker.
- **COMFY-DOC-007** — ComfyUI Javascript Extensions: https://docs.comfy.org/custom-nodes/js/javascript_overview
  - Notes: WEB_DIRECTORY, js loading, app.registerExtension.
- **COMFY-DOC-008** — ComfyUI Javascript Hooks: https://docs.comfy.org/custom-nodes/js/javascript_hooks
  - Notes: Extension hooks invoked by Comfy app lifecycle.
- **COMFY-DOC-009** — ComfyUI UI Subgraphs: https://docs.comfy.org/custom-nodes/js/subgraphs
  - Notes: Subgraph node identifiers, graph traversal, active/root graph distinctions.
- **COMFY-DOC-010** — ComfyUI Subgraph Blueprints: https://docs.comfy.org/custom-nodes/subgraph_blueprints
  - Notes: subgraphs folder, JSON files, global_subgraphs endpoint.
- **COMFY-DOC-011** — ComfyUI Cloud/API Overview: https://docs.comfy.org/development/cloud/overview
  - Notes: Workflows are API-format JSON with node IDs as keys, class_type, inputs; async jobs.
- **COMFY-DOC-012** — ComfyUI Node Definition JSON: https://docs.comfy.org/specs/nodedef_json
  - Notes: Node definition JSON schema, inputs metadata: forceInput, lazy, tooltip, advanced.
- **COMFY-DOC-013** — ComfyUI Troubleshooting Custom Node Issues: https://docs.comfy.org/troubleshooting/custom-node-issues
  - Notes: Disable all custom nodes, binary-search custom node/frontend extension conflicts, dependency conflict patterns.
- **COMFY-DOC-014** — ComfyUI General Troubleshooting: https://docs.comfy.org/troubleshooting/overview
  - Notes: Default workflow, disable custom nodes, console errors, comfy node update all, reporting routes.
- **COMFY-DOC-015** — ComfyUI Workflow Templates: https://docs.comfy.org/custom-nodes/workflow_templates
  - Notes: example_workflows folder and optional thumbnail images for node developers.
