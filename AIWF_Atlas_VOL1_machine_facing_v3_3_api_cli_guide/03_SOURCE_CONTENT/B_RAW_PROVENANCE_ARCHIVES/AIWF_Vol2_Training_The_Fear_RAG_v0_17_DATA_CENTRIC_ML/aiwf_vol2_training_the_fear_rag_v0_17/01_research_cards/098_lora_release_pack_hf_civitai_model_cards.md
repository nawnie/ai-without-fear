# LoRA Release Pack — Hugging Face / Civitai / Local RAG

## Why release packs matter

Training is not finished when the adapter file exists. A LoRA without documentation becomes untestable. AIWF should teach users to package LoRAs like small software releases.

## Required files

- adapter file: `.safetensors` or backend-specific adapter folder
- README / model card
- license note
- training manifest
- dataset provenance summary
- sample prompt grid
- negative examples / known failure modes
- intended base model and exact version
- inference settings
- compatible UI notes: ComfyUI, Forge, diffusers, etc.

## Recommended model card fields

- LoRA name
- base model
- trained model family
- trainer backend and version
- dataset size
- dataset source category
- consent/provenance status
- caption policy
- rank/alpha/network details
- optimizer/LR/scheduler
- total steps/epochs
- hardware used
- recommended strength range
- known limitations
- prohibited/unsafe uses if relevant

## AIWF RAG rule

Every LoRA release pack should generate a `rag_card.md` so the local AIWF helper can answer questions like:

- “Which base model does this LoRA need?”
- “What strength should I start at?”
- “Why does it keep copying the red jacket?”
- “Can I merge this?”
- “Was this trained on consented data?”
