# RAG Nodepack 041 — Save Image with Generation Metadata — PASS 02F Light Coverage

- Repository: `giriss/comfy-image-saver`
- Coverage mode: light/default; dense only if this pack becomes first-choice capability.
- Rows captured: 9

## AIWF use

- `Save Image w/Metadata` — Save PNG/JPEG/WebP with A1111-like parameters and Comfy workflow metadata. Policy: `safe_generate`. Risks: `metadata,output_node`.
- `Checkpoint Selector` — Expose checkpoint name for metadata saver. Policy: `safe_generate`. Risks: `metadata_helper`.
- `Sampler Selector` — Expose sampler name for metadata saver. Policy: `safe_generate`. Risks: `metadata_helper`.
- `Scheduler Selector` — Expose scheduler for metadata saver. Policy: `safe_generate`. Risks: `metadata_helper`.
- `Seed Generator` — Pass seed into metadata workflows. Policy: `safe_generate`. Risks: `primitive`.
- `String Literal` — Pass prompt metadata text. Policy: `safe_generate`. Risks: `primitive`.
- `Width/Height Literal` — Pass width or height metadata. Policy: `safe_generate`. Risks: `primitive`.
- `Cfg Literal` — Pass CFG metadata. Policy: `safe_generate`. Risks: `primitive`.
- `Int Literal` — Pass generic integer metadata. Policy: `safe_generate`. Risks: `primitive`.

## Notes
This pass intentionally favors broad coverage and overlap mapping over exhaustive socket capture. Use source_refs in the CSV for deeper follow-up.