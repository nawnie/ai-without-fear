# RAG Nodepack 022 — ComfyUI-LTXVideo — Pass 02C

## Identity
- Repo: `Lightricks/ComfyUI-LTXVideo`
- Static mapping confirmed for the official LTXVideo extension.
- Schema-confirmed this pass: `LTXVBaseSampler`, `LTXVExtendSampler`, `LTXVInContextSampler`.

## Workflow use
Official/current LTXVideo support path. Use it for LTX text/video generation, extension, in-context sampling, low-VRAM loader paths, guides, STG, tiled VAE, IC-LoRA, prompt enhancement, and sparse tracking.

## AIWF rule
Mapping-only LTX nodes are not safe for JSON generation yet. The base/extend/in-context sampler rows are schema-confirmed but still require local tests because they depend on the exact LTX model, VAE, guider, sampler, sigmas, noise, and conditioning stack.

