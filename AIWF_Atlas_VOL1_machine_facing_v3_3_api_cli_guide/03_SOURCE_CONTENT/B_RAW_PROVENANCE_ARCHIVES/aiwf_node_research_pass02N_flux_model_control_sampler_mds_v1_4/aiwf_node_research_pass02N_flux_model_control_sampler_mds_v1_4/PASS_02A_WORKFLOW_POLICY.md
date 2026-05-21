# Pass 02A Workflow Generation Policy

## Safe first

Use rows with `workflow_generation_policy` beginning with `safe_to_generate` first. In Pass 02A this mainly means image/mask helper nodes from `comfyui-inpaint-nodes`, selected IPAdapter helpers, and simple ControlNet Aux selectors/label overlays.

## Guarded

Rows marked `guarded_generate_after_local_test` or `guarded_generate_after_schema_check` may be used only when:
1. the exact node exists in the user's ComfyUI install,
2. the socket names match the CSV/schema note,
3. the workflow is labeled as local-test required.

## RAG only

Rows marked `rag_only_needs_module_sweep`, `rag_only_needs_local_test`, or `do_not_generate` are knowledge-library rows only. Do not place them in generated workflow JSON.

## Pack-specific rules

- ComfyUI-GGUF: useful for low-VRAM/quantized model experiments, not a default teaching path.
- ControlNet Aux: avoid `ExecuteAllControlNetPreprocessors` in normal workflows; it is a diagnostic/gallery tool.
- IPAdapter Plus: use helper rows first; FaceID requires InsightFace and should always be local-test.
- Inpaint Nodes: good target for AIWF "ultimate inpaint" workflows; keep Fooocus and LaMa/MAT model nodes guarded.
- WanVideoWrapper: expert workflows only until sampler/model nodes are audited deeper.
- Advanced-ControlNet: do not use deprecated IDs. Prefer `_v2` apply nodes, but only after schema sweep.
