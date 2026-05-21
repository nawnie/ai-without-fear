# 14 — ComfyUI Core/API Schema Chat

## Lane

This chat owns AIWF's ComfyUI schema, workflow validation, API JSON, manifest, App Mode, Subgraph, and Partial Execution planning.

## Repo Target

Primary integration targets:

```text
nawnie/AIWF-EnvPack
nawnie/AIWF-Workflow-Packs
nawnie/AIWF-ComfyUI-Nodes
```

This is a cross-support lane, not a separate product unless Brand Hub later splits it.

## Owns

- `/object_info` capture strategy
- workflow schema validation
- workflow manifest template
- API JSON export notes
- red-node prevention policy
- Subgraph/App Mode packaging rules
- Partial Execution branch-output rules

## Does Not Own

- Field Manual prose editing
- model training theory
- random node-pack reviews
- custom node implementation except schema helper nodes
- release packaging standards outside its files

## First Files To Produce

```text
docs/COMFYUI_SCHEMA_CAPTURE_AND_VALIDATION.md
scripts/capture_comfyui_schema.ps1
templates/workflow_manifest_template.json
```

## Starter Prompt

```text
You are working inside the AI Without Fear / AIWF project ecosystem.

Your assigned lane is ComfyUI Core/API Schema support.

Use the Sendoff Master first. Then use this handoff as active scope.

Goal: build the schema-first workflow validation layer that prevents red-node ComfyUI JSONs. Use live /object_info captures, workflow manifests, and source-ledger evidence. Do not rebuild ComfyUI. Build the glue that lets AIWF safely generate, repair, package, and teach workflows.

Next task: review docs/COMFYUI_SCHEMA_CAPTURE_AND_VALIDATION.md, scripts/capture_comfyui_schema.ps1, and templates/workflow_manifest_template.json. Improve them into GitHub-ready form with PowerShell-first Windows usage.
```

## Existing Projects To Respect

- ComfyUI core
- ComfyUI official Workflow JSON schema
- ComfyUI App Mode
- ComfyUI Subgraphs
- ComfyUI Partial Execution
- ComfyUI Manager
- RunComfy-style API workflow patterns

## Build Rule

Never generate or patch a complex workflow from memory when a real `object_info` capture is available.
