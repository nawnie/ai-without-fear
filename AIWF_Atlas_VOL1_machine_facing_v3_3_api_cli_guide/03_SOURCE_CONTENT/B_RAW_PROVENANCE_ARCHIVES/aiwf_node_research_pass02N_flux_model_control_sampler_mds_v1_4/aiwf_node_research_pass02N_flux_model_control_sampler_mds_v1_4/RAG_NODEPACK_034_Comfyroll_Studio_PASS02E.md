# RAG Nodepack 034 — Comfyroll Studio — Pass 02E

Repository: `Suzie1/ComfyUI_Comfyroll_CustomNodes`

## AIWF stance

Common legacy/wrapper utility pack; useful for RAG repair and red-node diagnosis. Do not use as default AIWF foundation without target-node schema sweep.

## Rows added

- `COMFYROLL_MODULE_GROUPS` — module_inventory_confirmed; policy: rag_only_needs_node_schema_sweep; use: Broad legacy/common utility pack: aspect ratios, LoRA, ControlNet, pipes, graphics, animation, text, switches.
- `CR SDXL Aspect Ratio` — mapping_confirmed; policy: rag_only_needs_node_schema_sweep; use: SDXL aspect/latent dimension helper
- `CR Apply Multi-ControlNet` — mapping_confirmed; policy: rag_only_needs_node_schema_sweep; use: Apply stacked ControlNets
- `CR LoRA Stack` — mapping_confirmed; policy: rag_only_needs_node_schema_sweep; use: Build LoRA stack
- `CR Image Input Switch` — mapping_confirmed; policy: rag_only_needs_node_schema_sweep; use: Image routing/switching
- `CR XY Save Grid Image` — mapping_confirmed; policy: rag_only_needs_node_schema_sweep; use: XY/grid output helper
- `CR Overlay Text` — mapping_confirmed; policy: rag_only_needs_node_schema_sweep; use: Overlay text onto images
