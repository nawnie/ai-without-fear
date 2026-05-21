# RAG Nodepack 040 — ImagesGrid — Pass 02E

Repository: `LEv145/images-grid-comfy-plugin`

## AIWF stance

Small utility pack with some safe schema-confirmed workflow candidates.

## Rows added

- `ImagesGridByColumns` — schema_confirmed; policy: safe_generate_when_installed; use: Create review/contact-sheet grid by max columns.
- `ImagesGridByRows` — schema_confirmed; policy: safe_generate_when_installed; use: Create review/contact-sheet grid by max rows.
- `LatentCombine` — mapping_confirmed; policy: guarded_generate_after_schema_check; use: Combine latents for grid/review workflows.
- `ImageCombine` — mapping_confirmed; policy: guarded_generate_after_schema_check; use: Combine images outside row/column grid helpers.
- `GridAnnotation` — mapping_confirmed; policy: guarded_generate_after_schema_check; use: Create annotation object for grid nodes.
