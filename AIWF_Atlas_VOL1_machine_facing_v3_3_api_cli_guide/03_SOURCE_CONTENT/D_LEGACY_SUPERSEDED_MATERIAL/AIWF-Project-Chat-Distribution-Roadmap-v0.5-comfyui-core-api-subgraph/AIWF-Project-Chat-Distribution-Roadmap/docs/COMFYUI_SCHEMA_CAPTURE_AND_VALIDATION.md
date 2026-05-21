# ComfyUI Schema Capture and Workflow Validation

Date: 2026-05-19

## Why This Exists

AIWF has been generating and repairing ComfyUI workflows across many custom node packs. The main failure pattern is not JSON syntax. It is **schema mismatch**:

- the workflow uses a class name the user does not have
- the node exists but the input names changed
- a node pack exposes a different socket type than expected
- an API/partner node is treated as a local/offline node
- a workflow is built from examples instead of the user's actual install

The fix is to capture the user's live ComfyUI schema before generating or patching workflows.

## Required User Command

From the folder containing this package:

```powershell
PowerShell -ExecutionPolicy Bypass -File .\scripts\capture_comfyui_schema.ps1 -ComfyUrl "http://127.0.0.1:8188" -OutDir ".eports"
```

This writes:

```text
reports/comfyui_object_info.json
reports/comfyui_system_stats.json
reports/comfyui_schema_summary.md
```

## How AIWF Should Use It

1. Read `comfyui_object_info.json`.
2. Confirm every workflow `class_type` exists.
3. Confirm every node input exists and has compatible type/range.
4. Compare required custom nodes against the manifest.
5. Flag API/partner nodes separately from local nodes.
6. Generate a repair list before producing patched JSON.

## Rule For Future Workflow Packs

Every workflow folder should contain:

```text
README.md
workflow.json
workflow_manifest.json
models.md
troubleshooting.md
```

Optional but recommended:

```text
workflow_api.json
screenshots/
reports/tested_object_info_sample.json
```

## Schema-First Repair Checklist

- [ ] Does every `class_type` exist in the target `object_info`?
- [ ] Does every linked input socket exist?
- [ ] Are widget values inside documented min/max ranges?
- [ ] Are image/latent/model/mask socket types compatible?
- [ ] Are API nodes marked as API nodes?
- [ ] Are optional branches bypassable?
- [ ] Does each major branch have its own output node for Partial Execution?
- [ ] Does the workflow manifest list required models and expected folders?

## AIWF Policy

Never describe a workflow as verified unless it has been tested against a real ComfyUI install or at minimum validated against a captured `object_info` from the target environment.
