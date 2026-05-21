# RAG Nodepack 036 — ComfyUI Browser — Pass 02E

Repository: `talesofai/comfyui-browser`

## AIWF stance

Common legacy/wrapper utility pack; useful for RAG repair and red-node diagnosis. Do not use as default AIWF foundation without target-node schema sweep.

## Rows added

- `LoadImageByUrl //Browser` — mapping_confirmed; policy: guarded_generate_after_schema_check; use: Load image from URL for browser-managed workflows.
- `SelectInputs //Browser` — mapping_confirmed; policy: rag_only_needs_node_schema_sweep; use: Select inputs for browser/XYZ workflows.
- `XyzPlot //Browser` — mapping_confirmed; policy: rag_only_needs_node_schema_sweep; use: Browser-provided XYZ plot workflow helper.
- `DifyTextGenerator //Browser` — mapping_confirmed; policy: rag_only_external_api; use: Generate text through Dify integration.
- `UploadToRemote //Browser` — mapping_confirmed; policy: rag_only_external_api; use: Upload outputs to remote service.
