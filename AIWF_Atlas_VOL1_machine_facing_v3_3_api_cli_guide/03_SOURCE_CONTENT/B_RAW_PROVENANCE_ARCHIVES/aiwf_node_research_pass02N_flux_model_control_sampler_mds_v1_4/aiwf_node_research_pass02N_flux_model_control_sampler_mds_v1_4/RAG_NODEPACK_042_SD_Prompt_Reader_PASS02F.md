# RAG Nodepack 042 — SD Prompt Reader — PASS 02F Light Coverage

- Repository: `receyuki/comfyui-prompt-reader-node`
- Coverage mode: light/default; dense only if this pack becomes first-choice capability.
- Rows captured: 2

## AIWF use

- `SDPromptReader` — Read metadata from generated images and recover generation settings. Policy: `safe_generate`. Risks: `metadata,reverse_engineering,compatibility`.
- `SDPromptSaver` — Save images with compatible metadata and optional sidecar metadata file. Policy: `safe_generate`. Risks: `metadata,output_node,hashing`.

## Notes
This pass intentionally favors broad coverage and overlap mapping over exhaustive socket capture. Use source_refs in the CSV for deeper follow-up.