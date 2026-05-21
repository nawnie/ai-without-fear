# AIWF Compatibility Matrix RAG

## Purpose

The AIWF Compatibility Matrix RAG is a practical “what works with what” knowledge base.

It tracks compatibility across model families, file types, loaders, node packs, VRAM tiers, model placement, conversion paths, and workflow requirements.

The core question it answers is:

> Before we build or troubleshoot anything, is this model, node, file type, loader, and hardware combination actually compatible?

## Scope

| Area | Examples |
|---|---|
| Model families | SD 1.5, SDXL, Pony, Illustrious, Flux, WAN, LTX, Hunyuan, Sana |
| File types | `.safetensors`, `.ckpt`, `.gguf`, `.pth`, `.onnx`, `.pt`, `.bin` |
| Model placement | checkpoints, diffusion_models, text_encoders, clip, vae, controlnet, loras |
| ComfyUI node support | which node packs support which model types |
| VRAM expectations | 8 GB, 12 GB, 16 GB, 24 GB+ practical tiers |
| Common failure modes | wrong folder, wrong loader, missing text encoder, bad VAE, incompatible LoRA |
| Conversion paths | GGUF, fp16, fp8, quantized diffusion models, ONNX, TensorRT |
| Workflow notes | what workflows need different loaders or conditioning paths |

## Why This Matters

A lot of beginner pain is not bad prompting.

It is silent incompatibility:

- wrong model family
- wrong loader
- wrong folder
- wrong text encoder
- wrong VAE
- wrong LoRA base
- wrong conditioning path
- wrong assumption about what a node supports

This RAG should act as the bridge between the node RAG, pip/package RAG, workflow RAG, and troubleshooting RAG.

## Tool Ideas

### AIWF Workflow Doctor

Reads a workflow JSON and detects model-loader mismatches.

Example output:

> This workflow uses a Flux loader, but your selected checkpoint appears to be SDXL. Replace loader X with Y.

### AIWF Model Sorter

Scans model folders and suggests correct placement.

Example output:

> This file looks like a T5 text encoder; it should probably be in `models/text_encoders`, not `models/checkpoints`.

### AIWF Node Recommender

Given a goal like “SDXL inpaint with face restore,” recommends likely node packs and avoids outdated or incompatible paths.

Example output:

> Use these node packs; avoid these older nodes; this model type requires this conditioning route.

## Recommended RAG Fields

```json
{
  "model_family": "",
  "file_extensions": [],
  "expected_folder": "",
  "loader_nodes": [],
  "required_text_encoders": [],
  "required_vae": "",
  "supported_node_packs": [],
  "vram_tiers": {},
  "known_failure_modes": [],
  "conversion_notes": [],
  "workflow_requirements": [],
  "source_refs": [],
  "confidence": ""
}
```

## Placement Recommendation

This should sit beside the node RAG and pip/package RAG because it acts as the bridge between them.

Nodes are not useful unless the model format, dependencies, loader, and hardware expectations actually line up.
