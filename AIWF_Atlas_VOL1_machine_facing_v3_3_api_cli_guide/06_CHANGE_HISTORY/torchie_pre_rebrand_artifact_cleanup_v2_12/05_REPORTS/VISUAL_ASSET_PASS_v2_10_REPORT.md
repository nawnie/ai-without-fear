# Visual Asset Pass v2.10 Report

## Summary

This pass added a dedicated visual-assets layer to the AIWF Knowledge Adapter. It does not rewrite source research. It adds diagrams, editable Mermaid versions, visual-use policies, and Torchie callout guidance.

## Added

- `16_VISUAL_ASSETS/README.md`
- `16_VISUAL_ASSETS/VISUAL_ASSET_INDEX.md`
- `16_VISUAL_ASSETS/diagrams/svg/*.svg`
- `16_VISUAL_ASSETS/diagrams/mermaid/*.mmd`
- `16_VISUAL_ASSETS/torchie_callouts/torchie_callout_style_sheet.svg`
- `16_VISUAL_ASSETS/torchie_callouts/TORCHIE_VISUAL_CALLOUT_SPEC.md`
- `00_AI_READ_FIRST/VISUAL_ASSET_USE_POLICY.md`
- `11_PROMPT_PACKS/AIWF_VISUAL_EXPLANATION_PROMPT.md`
- `04_MANIFESTS/visual_asset_manifest_v2_10.csv`
- `04_MANIFESTS/visual_asset_manifest_v2_10.jsonl`

## Diagrams Added

- Field Guide vs Knowledge Adapter
- AIWF Adapter Load Order
- Retrieval Routing Matrix
- Source Verification Gate
- AIWF Brand Voice Role Map
- ComfyUI Datatype Boundaries
- Gradio → ComfyUI Bridge
- lakeFS AI Data Versioning Loop
- Synthetic Data Flywheel
- Adapter Evaluation Harness
- Hardware Cost + Model Routing
- Torchie Callout Style Sheet

## Indexing Policy

Raw SVGs are visual assets and should not be embedded by default. Index the visual asset README, visual asset index, and Torchie callout spec. Retrieve raw SVGs only when the user asks for diagrams or guide visuals.

## Duplicate Policy

Reusable visual assets may be duplicated across release packages when intentional. Duplicate active Markdown, schema, prompt, and workflow-instruction files should continue to be consolidated or replaced with pointers.
