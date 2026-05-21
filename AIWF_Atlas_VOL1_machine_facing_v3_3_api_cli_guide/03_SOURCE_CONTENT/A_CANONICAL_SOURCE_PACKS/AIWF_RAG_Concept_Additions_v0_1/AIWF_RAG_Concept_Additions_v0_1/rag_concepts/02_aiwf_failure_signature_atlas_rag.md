# AIWF Failure Signature Atlas RAG

## Purpose

The AIWF Failure Signature Atlas RAG is a troubleshooting-first knowledge base built around recognizable failure patterns.

Instead of organizing only by tool or model, it organizes by symptom.

The user describes what they see, and AIWF maps it to probable causes, checks, and fixes.

## Failure Signatures

| Failure signature | Likely causes |
|---|---|
| Black image | VAE issue, bad latent route, unsupported precision, model mismatch |
| Washed-out image | Wrong VAE, CFG too low/high, bad scheduler, incompatible LoRA |
| Plastic skin | Over-restoration, bad face restore strength, excessive denoise |
| OOM crash | VRAM overload, batch too high, resolution too high, cache buildup |
| Random slop | Wrong model family, prompt-model mismatch, bad conditioning path |
| Red/missing nodes | Missing custom node, renamed node class, dependency failure |
| Broken workflow load | Bad links, node schema mismatch, stale workflow format |
| Bad hands/faces | Model limitation, low detail pass, no face/pose guidance |
| Video flicker | Poor temporal consistency, weak start/end frame logic, no smoothing |
| Identity drift | Missing IPAdapter/ReActor/reference conditioning, high denoise |

## Beginner Language Mapping

Beginners often do not know the technical name of the problem.

They know:

- “The face melted.”
- “The workflow is red.”
- “The image looks fried.”
- “The video changes person halfway through.”
- “ComfyUI says CUDA OOM.”
- “It loads but output is garbage.”

This RAG should translate those descriptions into technical diagnosis.

## Tool Ideas

### AIWF Troubleshooter

User enters symptom.

The tool asks 3–5 focused questions and gives a likely fix order.

Example question flow:

1. What model family are you using?
2. Did the workflow load with red nodes?
3. Is the issue visible output, a crash, or a traceback?
4. What GPU and VRAM tier are you on?
5. Did this workflow ever work before?

### AIWF Log Doctor

Combines traceback lines with the visual symptom.

Example:

- Log says CUDA OOM
- User says image/video fails halfway through
- Tool recommends lowering resolution, batch, frames, or cache retention first

### AIWF Workflow QA

Checks JSON for common failure patterns before the user runs it.

Checks include:

- missing required model loader
- disconnected branches
- invalid mask routes
- model family mismatch
- missing final preview/save node
- stale custom node schema

## Recommended RAG Fields

```json
{
  "symptom_name": "",
  "beginner_descriptions": [],
  "visual_pattern": "",
  "log_patterns": [],
  "likely_causes_ranked": [],
  "first_checks": [],
  "fix_order": [],
  "related_model_families": [],
  "related_node_packs": [],
  "known_false_positives": [],
  "source_refs": [],
  "confidence": ""
}
```

## Placement Recommendation

This should become a core RAG directory.

It turns scattered troubleshooting into a reusable diagnostic system.
