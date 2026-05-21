# Research Pass — ComfyUI Core/API/Subgraph Layer

Date: 2026-05-19

## Current Direction

Continue building AIWF as the glue layer around the ecosystem, not as a replacement for ComfyUI. ComfyUI now already covers the hard UI/runtime layer:

- local and portable execution
- API endpoints
- App Mode
- Subgraphs
- Partial Execution
- official workflow JSON schema
- partner/API nodes
- rapidly moving model templates

AIWF's job is to make this safer, clearer, and more beginner-operable.

## Core Finding

The strongest next step is **schema capture**.

Every workflow-building chat should stop guessing node signatures. Instead, it should ask EnvPack or the user to capture the live ComfyUI node catalog from:

```text
http://127.0.0.1:8188/object_info
```

That catalog can tell us:

- exact `class_type` names
- required inputs
- optional inputs
- socket types
- widget ranges
- output types
- tooltip metadata

This is the missing bridge between generated JSON and workflows that actually load.

## AIWF Build Pattern

```text
ComfyUI live install
    ↓
/object_info capture
    ↓
AIWF node/schema map
    ↓
workflow manifest validation
    ↓
workflow JSON generation or patch
    ↓
user-loadable workflow pack
```

## App Mode / Subgraph Strategy

Complex workflows should ship in two forms:

1. **Developer/full workflow** — everything visible, teachable, inspectable.
2. **User/subgraph or App Mode workflow** — simplified controls only.

This solves the problem we kept hitting with old photo restore, inpaint, ReActor, ControlNet, and upscale compare workflows: users need power, but they do not need every wire in their face during normal use.

## Partial Execution Strategy

Mega-workflows should expose output nodes for every major branch:

- preview restore only
- preview inpaint only
- preview face/identity only
- preview upscale only
- save final composite

That lets users run one branch without firing the entire machine.

## API / Partner Node Policy

Partner/API nodes are useful but must be explicitly marked:

```yaml
execution_mode: api_partner
requires_login: true
requires_credits_or_key: true
local_offline: false
fallback_required: true
```

Do not mix API nodes into the default beginner workflow without a local fallback.

## Workflow Manifest Rule

Every AIWF workflow should include or sit beside a manifest:

```json
{
  "aiwf_manifest_version": "0.1",
  "workflow_name": "Example Workflow",
  "workflow_type": "image_restore",
  "tested_with": {
    "comfyui": "unknown/unverified until user test",
    "frontend": "unknown/unverified until user test"
  },
  "required_custom_nodes": [],
  "optional_custom_nodes": [],
  "required_models": [],
  "expected_model_paths": [],
  "api_partner_nodes": [],
  "known_failure_modes": []
}
```

## Immediate Next Pass

Build the first `workflow_manifest_template.json` and a PowerShell `capture_comfyui_schema.ps1` script that saves:

```text
reports/comfyui_object_info.json
reports/comfyui_system_stats.json
reports/comfyui_schema_summary.md
```

This belongs first in EnvPack, then gets reused by Workflow Packs and ComfyUI Nodes.
