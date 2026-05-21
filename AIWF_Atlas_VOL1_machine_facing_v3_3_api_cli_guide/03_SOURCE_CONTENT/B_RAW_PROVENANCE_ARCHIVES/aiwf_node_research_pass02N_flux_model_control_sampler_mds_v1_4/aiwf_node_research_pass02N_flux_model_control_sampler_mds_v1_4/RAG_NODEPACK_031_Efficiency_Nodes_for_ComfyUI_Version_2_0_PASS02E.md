# RAG Nodepack 031 — Efficiency Nodes for ComfyUI Version 2.0+ — Pass 02E

Repository: `jags111/efficiency-nodes-comfyui`

## AIWF stance

Common legacy/wrapper utility pack; useful for RAG repair and red-node diagnosis. Do not use as default AIWF foundation without target-node schema sweep.

## Rows added

- `TSC_EfficientLoader` — schema_confirmed; policy: rag_only_prefer_core_or_aiwf_wrappers; use: Compact checkpoint/prompt/latent loader wrapper for legacy efficiency workflows.
- `TSC_EfficientLoaderSDXL` — schema_confirmed; policy: rag_only_prefer_core_or_aiwf_wrappers; use: Compact SDXL base/refiner loader wrapper.
- `TSC_KSampler` — schema_confirmed; policy: rag_only_prefer_core_or_aiwf_wrappers; use: All-in-one sampler wrapper with preview/decode/script hooks.
- `TSC_LoRA_Stacker` — schema_confirmed; policy: guarded_generate_after_schema_check; use: Legacy LoRA stacking helper.
- `TSC_Control_Net_Stacker` — schema_confirmed; policy: guarded_generate_after_schema_check; use: Legacy ControlNet stack builder.
- `TSC_Apply_ControlNet_Stack` — schema_confirmed; policy: guarded_generate_after_schema_check; use: Apply stacked ControlNets to conditioning.
