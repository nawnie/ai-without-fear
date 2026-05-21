# RAG Atlas Index

This file maps the combined repository for RAG ingestion and human navigation.

## Combined Atlas

| Area | Path | Description |
|---|---|---|
| AIWF Atlas Vol. 1 | `AIWF_Atlas_VOL1_machine_facing_v3_3_api_cli_guide/` | Single combined machine-facing AIWF domain memory layer |
| Gradio 6 update pack | `AIWF_Atlas_VOL1_machine_facing_v3_3_api_cli_guide/03_SOURCE_CONTENT/A_CANONICAL_SOURCE_PACKS/gradio6_rag_archive_20260521_0838/gradio6_rag_archive/` | Integrated section-level Gradio 6 guide for building, securing, deploying, testing, and operating Gradio apps |
| Drop-in release history | `AIWF_Atlas_VOL1_machine_facing_v3_3_api_cli_guide/06_CHANGE_HISTORY/packaged_releases/AIWF_Atlas_repo_dropin_v2_3/` | Older packaged zip/drop-in form preserved as release history |
| Root metadata | `metadata/` | Generated file lists, checksums, and RAG-oriented manifest files |

## Primary Atlas Entry Points

- `AIWF_Atlas_VOL1_machine_facing_v3_3_api_cli_guide/README.md`
- `AIWF_Atlas_VOL1_machine_facing_v3_3_api_cli_guide/AIWF_ATLAS_PROFILE.json`
- `AIWF_Atlas_VOL1_machine_facing_v3_3_api_cli_guide/00_AI_READ_FIRST/00_LOAD_ORDER.md`
- `AIWF_Atlas_VOL1_machine_facing_v3_3_api_cli_guide/00_AI_READ_FIRST/HOW_TO_USE_THIS_KNOWLEDGE_SET.md`
- `AIWF_Atlas_VOL1_machine_facing_v3_3_api_cli_guide/02_RETRIEVAL_INDEX/CANONICAL_RETRIEVAL_CARDS_CURRENT.jsonl`
- `AIWF_Atlas_VOL1_machine_facing_v3_3_api_cli_guide/02_RETRIEVAL_INDEX/machine_lane_index.json`

## Primary Gradio Entry Points

- `AIWF_Atlas_VOL1_machine_facing_v3_3_api_cli_guide/03_SOURCE_CONTENT/A_CANONICAL_SOURCE_PACKS/gradio6_rag_archive_20260521_0838/gradio6_rag_archive/AI_GUIDANCE.md`
- `AIWF_Atlas_VOL1_machine_facing_v3_3_api_cli_guide/03_SOURCE_CONTENT/A_CANONICAL_SOURCE_PACKS/gradio6_rag_archive_20260521_0838/gradio6_rag_archive/RAG_INDEX.md`
- `AIWF_Atlas_VOL1_machine_facing_v3_3_api_cli_guide/03_SOURCE_CONTENT/A_CANONICAL_SOURCE_PACKS/gradio6_rag_archive_20260521_0838/gradio6_rag_archive/chapter_01/`
- `AIWF_Atlas_VOL1_machine_facing_v3_3_api_cli_guide/03_SOURCE_CONTENT/A_CANONICAL_SOURCE_PACKS/gradio6_rag_archive_20260521_0838/gradio6_rag_archive/chapter_10/`
- `AIWF_Atlas_VOL1_machine_facing_v3_3_api_cli_guide/03_SOURCE_CONTENT/A_CANONICAL_SOURCE_PACKS/gradio6_rag_archive_20260521_0838/gradio6_rag_archive/chapter_15/`
- `AIWF_Atlas_VOL1_machine_facing_v3_3_api_cli_guide/03_SOURCE_CONTENT/A_CANONICAL_SOURCE_PACKS/gradio6_rag_archive_20260521_0838/gradio6_rag_archive/chapter_17/`

## Atlas Lane Groups

The AIWF Atlas contains 35 canonical lanes under `01_CANONICAL_RESEARCH_LANES/`. Each lane generally contains:

- `CANONICAL_OVERVIEW.md`
- `CONCEPT_MAP.md`
- `SOURCE_COVERAGE.md`
- `RETRIEVAL_CARDS.jsonl`
- `QA_TEST_PROMPTS.md`
- `EMBEDDING_AND_CHUNKING_STRATEGY.md`
- `GAP_AUDIT_AND_VOL2_QUEUE.md`

Use lane files for synthesized answers. Use source archives for exact evidence, older versions, or provenance.

## Gradio Chapter Map

| Chapter | Focus |
|---|---|
| `chapter_01` | Introduction, Gradio 6 changes, handbook usage |
| `chapter_02` | Installation, first app, launch parameters |
| `chapter_03` | Chatbots and multimodal chat |
| `chapter_04` | Blocks, events, state, progress |
| `chapter_05` | Core components |
| `chapter_06` | Theming and custom components |
| `chapter_07` | Queuing, streaming, performance |
| `chapter_08` | State, caching, optimization |
| `chapter_09` | Authentication, security, validation |
| `chapter_10` | Deployment and lakeFS integration |
| `chapter_11` | API clients, FastAPI, LangGraph integration |
| `chapter_12` | Custom components and Svelte 5 |
| `chapter_13` | Labs and practical projects |
| `chapter_14` | Capstones |
| `chapter_15` | Migration from Gradio 5 |
| `chapter_16` | Glossary and resources |
| `chapter_17` | Production operations, observability, testing, logging |

## Generated Metadata

- `metadata/repository_manifest.csv` - file inventory with path, extension, size, and layer.
- `metadata/rag_file_index.jsonl` - line-delimited file index for ingestion pipelines.
- `metadata/rag_ingestion_manifest.json` - summary of recommended ingestion layers.
- `metadata/checksums_sha256.txt` - repository-level checksums for integrity checks.

