# ComfyUI Advanced Pass 04 Source Anchors

This source pack verifies the ComfyUI advanced workflow-design lane. It covers subgraphs, blueprint packaging, workflow templates, switch/router behavior, lazy execution, execution blocking, workflow JSON structure, node replacement, and graph-expansion patterns.

| Source ID | Source | Status | Use |
|---|---|---|---|
| COMFY-PASS04-DOC-001 | [ComfyUI Subgraph user guide](https://docs.comfy.org/interface/features/subgraph) | official_docs_verified | Subgraphs as reusable workflow components; creation from selected nodes; exposed input/output slots; bypass behavior; nested subgraphs; subgraph blueprints. |
| COMFY-PASS04-DOC-002 | [ComfyUI Subgraph blueprints developer documentation](https://docs.comfy.org/custom-nodes/subgraph_blueprints) | official_docs_verified | Packaging reusable subgraph components in custom node directories under a subgraphs folder. |
| COMFY-PASS04-DOC-003 | [ComfyUI UI subgraphs developer guide](https://docs.comfy.org/custom-nodes/js/subgraphs) | official_docs_verified | Nested subgraph identifiers, recursive traversal, root graph vs active graph, subgraph events, and widget promotion. |
| COMFY-PASS04-DOC-004 | [ComfyUI Nodes core concepts](https://docs.comfy.org/development/core-concepts/nodes) | official_docs_verified | General node graph model, node states, missing/error states, and datatype-valid connections. |
| COMFY-PASS04-DOC-005 | [ComfyUI Workflow JSON schema](https://docs.comfy.org/specs/workflow_json) | official_docs_verified | Workflow graph serialization, nodes, links, groups, config, and schema-bound structure. |
| COMFY-PASS04-DOC-006 | [ComfyUI ComfySwitchNode built-in docs](https://docs.comfy.org/built-in-nodes/ComfySwitchNode) | official_docs_verified | Boolean switch logic using MATCH_TYPE inputs for routing one of two typed values. |
| COMFY-PASS04-DOC-007 | [ComfyUI ComfySoftSwitchNode built-in docs](https://docs.comfy.org/built-in-nodes/ComfySoftSwitchNode) | official_docs_verified | Lazy switch behavior and typed routing where only the needed input is evaluated. |
| COMFY-PASS04-DOC-008 | [ComfyUI Lazy Evaluation documentation](https://docs.comfy.org/custom-nodes/backend/lazy_evaluation) | official_docs_verified | Switch/router nodes, skipping expensive unused branches, ExecutionBlocker behavior, and output disabling patterns. |
| COMFY-PASS04-DOC-009 | [ComfyUI Node Expansion documentation](https://docs.comfy.org/custom-nodes/backend/expansion) | official_docs_verified | Programmatic graph expansion, GraphBuilder, loop-like nodes, and cache-aware subgraph construction. |
| COMFY-PASS04-DOC-010 | [ComfyUI Node Replacement documentation](https://docs.comfy.org/custom-nodes/backend/node-replacement) | official_docs_verified | Migrating deprecated nodes, renamed nodes, refactored inputs, output mapping, and widget binding. |
| COMFY-PASS04-DOC-011 | [ComfyUI Workflow templates documentation](https://docs.comfy.org/custom-nodes/workflow_templates) | official_docs_verified | Packaging example workflows for custom nodes and exposing them through the template browser. |


## Canonical source rules

- Use official ComfyUI docs before tutorials for subgraphs, switches, lazy inputs, and workflow JSON.
- Treat the built-in Switch and Soft Switch docs as implementation anchors for typed routing.
- Use the Lazy Evaluation docs when a workflow branch should not be evaluated unless selected.
- Use Subgraph and Subgraph Blueprint docs for reusable app-like workflow components.
- Use Node Replacement when a workflow or node pack evolves and old workflows need automatic migration.
- Use Node Expansion only for developer-grade graph construction; do not recommend it as the first solution for ordinary user workflows.
