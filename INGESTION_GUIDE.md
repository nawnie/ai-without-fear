# Ingestion Guide

This guide describes a practical indexing order for turning this repository into a RAG corpus. The repository is now one combined Atlas tree; the Gradio 6 archive and old drop-in package have been moved inside `AIWF_Atlas_VOL1_machine_facing_v3_3_api_cli_guide/`.

## Recommended Order

1. Index root guidance:
   - `README.md`
   - `NOTES_TO_AI.md`
   - `RAG_ATLAS_INDEX.md`
   - `INGESTION_GUIDE.md`
   - `KNOWN_GAPS.md`
   - `LEARNING_PASS_REVIEW.md`

2. Index Atlas control files:
   - `AIWF_Atlas_VOL1_machine_facing_v3_3_api_cli_guide/00_AI_READ_FIRST/`
   - `AIWF_Atlas_VOL1_machine_facing_v3_3_api_cli_guide/10_SCHEMA_AND_INDEX/`

3. Index Atlas routing files:
   - `AIWF_Atlas_VOL1_machine_facing_v3_3_api_cli_guide/02_RETRIEVAL_INDEX/`
   - `AIWF_Atlas_VOL1_machine_facing_v3_3_api_cli_guide/12_RETRIEVAL_RECIPES/`

4. Index canonical research lanes:
   - `AIWF_Atlas_VOL1_machine_facing_v3_3_api_cli_guide/01_CANONICAL_RESEARCH_LANES/`

5. Index the integrated Gradio 6 source pack:
   - `AIWF_Atlas_VOL1_machine_facing_v3_3_api_cli_guide/03_SOURCE_CONTENT/A_CANONICAL_SOURCE_PACKS/gradio6_rag_archive_20260521_0838/gradio6_rag_archive/AI_GUIDANCE.md`
   - `AIWF_Atlas_VOL1_machine_facing_v3_3_api_cli_guide/03_SOURCE_CONTENT/A_CANONICAL_SOURCE_PACKS/gradio6_rag_archive_20260521_0838/gradio6_rag_archive/RAG_INDEX.md`
   - `AIWF_Atlas_VOL1_machine_facing_v3_3_api_cli_guide/03_SOURCE_CONTENT/A_CANONICAL_SOURCE_PACKS/gradio6_rag_archive_20260521_0838/gradio6_rag_archive/chapter_*/`

6. Index supporting answer assets:
   - `AIWF_Atlas_VOL1_machine_facing_v3_3_api_cli_guide/11_PROMPT_PACKS/`
   - `AIWF_Atlas_VOL1_machine_facing_v3_3_api_cli_guide/15_ANSWER_TEMPLATES/`
   - `AIWF_Atlas_VOL1_machine_facing_v3_3_api_cli_guide/16_VISUAL_ASSETS/`
   - `AIWF_Atlas_VOL1_machine_facing_v3_3_api_cli_guide/17_FIELD_GUIDE_INSERTS/`

7. Index source evidence only when your system can preserve provenance metadata:
   - `AIWF_Atlas_VOL1_machine_facing_v3_3_api_cli_guide/03_SOURCE_CONTENT/`

8. Index reports, manifests, and change history for archive maintenance:
   - `AIWF_Atlas_VOL1_machine_facing_v3_3_api_cli_guide/04_MANIFESTS/`
   - `AIWF_Atlas_VOL1_machine_facing_v3_3_api_cli_guide/05_REPORTS/`
   - `AIWF_Atlas_VOL1_machine_facing_v3_3_api_cli_guide/06_CHANGE_HISTORY/`

## Chunking Rules

- Keep `.jsonl` retrieval cards as individual records.
- Chunk canonical Markdown by heading.
- Keep each Gradio handbook section file as a high-level chunk, then split by heading only if needed.
- Keep tables intact.
- Keep CSV rows intact when they represent evidence or evaluation records.
- Keep image/SVG assets as metadata-linked files rather than text chunks.
- Preserve source paths exactly.

## Suggested Metadata

Use these fields when your RAG system supports metadata:

- `repository`: `AIWF Research Atlas`
- `corpus`: `aiwf_atlas` | `root_guidance` | `root_metadata`
- `layer`: `root_guidance` | `read_first` | `schema` | `retrieval_index` | `canonical_lane` | `gradio_handbook` | `source_content` | `manifest` | `report` | `change_history` | `visual_asset` | `packaged_release`
- `source_path`
- `file_name`
- `extension`
- `lane_id`
- `chapter`
- `provenance_role`
- `needs_current_verification`

## Freshness Rules

Before treating an answer as current guidance, verify claims about:

- API behavior
- model availability
- package versions
- hardware compatibility
- benchmarks
- licenses
- active GitHub repository status
- security practices
- cloud/provider pricing or limits

## Retrieval Defaults

For broad AIWF questions, route through Atlas cards and canonical lanes.

For Gradio app questions, route through the integrated Gradio source pack first, then Atlas Gradio lanes for AIWF framing and broader architecture.

For provenance questions, retrieve the canonical answer first and then inspect the source archive named by `SOURCE_COVERAGE.md` or manifest files.

