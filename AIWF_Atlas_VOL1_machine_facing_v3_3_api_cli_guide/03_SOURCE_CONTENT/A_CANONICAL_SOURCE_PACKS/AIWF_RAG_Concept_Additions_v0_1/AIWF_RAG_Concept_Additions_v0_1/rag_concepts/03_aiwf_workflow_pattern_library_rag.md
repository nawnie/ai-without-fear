# AIWF Workflow Pattern Library RAG

## Purpose

The AIWF Workflow Pattern Library RAG stores reusable workflow structures, not just finished workflows.

Instead of storing only full JSON files, it stores the pattern underneath the JSON.

The main question it answers is:

> What is the correct structure for this kind of workflow?

This matters because workflows break fast, but patterns transfer.

## Core Patterns

| Pattern | Meaning |
|---|---|
| Text-to-image base chain | Prompt → encode → sampler → VAE decode → save |
| Img2img refine chain | Image → VAE encode → sampler with denoise → decode |
| Inpaint chain | Image + mask → masked latent → sampler → composite |
| Face restore chain | Detect face → crop → restore/swap → paste back |
| Upscale chain | Image → upscale model/tile → refine/detail pass |
| ControlNet chain | Image preprocessor → control model → conditioning injection |
| IPAdapter chain | Reference image → vision encoder → adapter conditioning |
| Video I2V chain | Image → video latent → temporal sampler → combine frames |
| Last-frame chaining | Batch video → extract last frame → next I2V chunk |
| Router workflow | One input → switches → optional branches → final selector |

## Why This Matters

AIWF should not just keep a pile of workflows.

It should know:

- how workflows are structured
- what the required signal routes are
- what branches are optional
- what model families require different loaders
- what inputs belong in a master control panel
- what outputs need previews or saves
- what failure modes are caused by bad graph wiring

## Tool Ideas

### AIWF Workflow Builder

User says:

> Make SDXL inpaint with ReActor and upscale.

System pulls:

- inpaint pattern
- face branch pattern
- upscale pattern
- compatibility matrix notes
- required node pack notes

Then assembles a workflow.

### AIWF Workflow Explainer

Reads a JSON and explains the structure.

Example output:

> This workflow is basically img2img → face restore → upscale, but the ControlNet branch is disconnected.

### AIWF Workflow QA

Checks:

- Are required image/model/latent routes present?
- Are branches actually connected?
- Are masks going to mask inputs?
- Are model types matched to loaders?
- Is there a final preview/save path?
- Are UI controls grouped logically?

## Recommended RAG Fields

```json
{
  "pattern_name": "",
  "pattern_type": "",
  "required_inputs": [],
  "required_nodes_or_capabilities": [],
  "signal_flow": [],
  "optional_branches": [],
  "model_family_variants": {},
  "common_breakpoints": [],
  "qa_checks": [],
  "example_workflows": [],
  "source_refs": [],
  "confidence": ""
}
```

## Placement Recommendation

This should be one of the most important RAGs for the GitHub side.

It turns AIWF from a pile of workflows into a system that can generate, explain, repair, and teach workflows.
