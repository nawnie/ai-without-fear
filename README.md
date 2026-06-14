# AIWF Research Atlas

<p align="center">
  <img src="AIWF_Atlas_VOL1_machine_facing_v3_3_api_cli_guide/16_VISUAL_ASSETS/torchie_callouts/Aiwf%20logo.png" alt="AI Without Fear logo" width="220"/>
</p>

Status: v3.3 research preview. See `KNOWN_GAPS.md`, `LEARNING_PASS_REVIEW.md`, and the Vol. 2 queue files before treating this as a finished corpus.

AIWF Research Atlas is a GitHub-ready research and retrieval corpus for AI Without Fear work. The original Atlas v3.3 folder, Gradio 6 handbook archive, and older drop-in package have been merged into one Atlas tree so downstream indexing tools can treat them as one evolving knowledge base rather than three separate corpora.

This is not a normal application package. It is a structured research Atlas: policy files, canonical topic lanes, retrieval cards, source archives, visual assets, evaluation material, and Gradio-focused handbook chapters are kept together so retrieval workflows can use grounded project context instead of relying on loose notes or memory.

## Start Here

- `RAG_ATLAS_INDEX.md` - high-level map of the combined Atlas.
- `INGESTION_GUIDE.md` - recommended indexing order and metadata.
- `KNOWN_GAPS.md` - known content and publication gaps.
- `LEARNING_PASS_REVIEW.md` - current review findings and next-pass priorities.
- `LICENSE.md` - conservative research-preview rights statement.
- `NOTES_TO_AI.md` - machine-readable project notes and retrieval boundaries.
- `AIWF_Atlas_VOL1_machine_facing_v3_3_api_cli_guide/` - the single combined Atlas tree.
- `metadata/` - generated repository manifests, checksums, and RAG file indexes.

## Combined Atlas Layout

| Layer | Path | Role |
|---|---|---|
| Project notes | `NOTES_TO_AI.md` | Machine-readable project notes, source boundaries, and retrieval context |
| Atlas control layer | `AIWF_Atlas_VOL1_machine_facing_v3_3_api_cli_guide/00_AI_READ_FIRST/` | Source policy, confidence gates, citation rules, and routing behavior |
| Retrieval index | `AIWF_Atlas_VOL1_machine_facing_v3_3_api_cli_guide/02_RETRIEVAL_INDEX/` | Compact Atlas cards and lane routing |
| Canonical lanes | `AIWF_Atlas_VOL1_machine_facing_v3_3_api_cli_guide/01_CANONICAL_RESEARCH_LANES/` | Synthesized domain knowledge by topic |
| Source evidence | `AIWF_Atlas_VOL1_machine_facing_v3_3_api_cli_guide/03_SOURCE_CONTENT/` | Preserved source packs, raw provenance, and legacy material |
| Gradio 6 update pack | `AIWF_Atlas_VOL1_machine_facing_v3_3_api_cli_guide/03_SOURCE_CONTENT/A_CANONICAL_SOURCE_PACKS/gradio6_rag_archive_20260521_0838/` | Gradio 6 handbook source pack integrated into the Atlas |
| Evaluation | `AIWF_Atlas_VOL1_machine_facing_v3_3_api_cli_guide/09_EVALUATION_HARNESS/` | Evaluation prompts, rubrics, and benchmark scaffolding |
| Visual assets | `AIWF_Atlas_VOL1_machine_facing_v3_3_api_cli_guide/16_VISUAL_ASSETS/` | Diagrams, visual indexes, and callout guidance |
| Packaged release history | `AIWF_Atlas_VOL1_machine_facing_v3_3_api_cli_guide/06_CHANGE_HISTORY/packaged_releases/` | Older zip/drop-in release preserved as history |

## Recommended Use

For retrieval and indexing workflows, load the repo in layers:

1. Review the project notes and source policy files.
2. Index the Atlas control files from `00_AI_READ_FIRST/`.
3. Index the retrieval cards and lane indexes.
4. Index canonical research lanes.
5. Index the integrated Gradio 6 source pack at section-file granularity when Gradio questions are in scope.
6. Use source archives only when provenance or exact evidence is needed.
7. Use manifests, reports, and change history for audit work rather than normal answers.

For human readers, start with `RAG_ATLAS_INDEX.md` and then follow the lane, chapter, or topic path that matches your question.

## Current Scope

This repository is strongest for:

- AIWF retrieval architecture, chunking, source governance, and answer gating.
- ComfyUI workflow, node ecosystem, datatype, API, and automation patterns.
- Python, pip, runtime troubleshooting, and model-serving context.
- Gradio 6 app building, production operation, migration, and API integration.
- Evaluation harnesses, observability, and research-quality checks.
- AI application architecture, safety, licensing, synthetic data, document AI, audio, and related AI practice lanes.

## Important Limits

- This repository is a research corpus, not proof that all included fast-moving technical claims are current forever.
- Current model, API, package, hardware, benchmark, license, and compatibility claims should be verified against official sources before being treated as live guidance.
- Source archives preserve history and provenance. Prefer canonical lanes for normal answers.
- No included material should be treated as a license grant for third-party tools, models, packages, or assets.
- This research-preview repository is currently All Rights Reserved unless a later license grants broader reuse rights.

## GitHub Notes

The repository intentionally keeps the main Atlas folder name so existing internal references remain meaningful. The Gradio archive and packaged drop-in are incorporated inside the Atlas tree as update/history material instead of standing beside it as separate corpora.

## Support

Support AI Without Fear project development, testing, guides, tools, and local AI experiments:

- [Support on Venmo](https://venmo.com/code?user_id=4526061123536861189&created=1779356130)
- [Support policy and reusable copy](SUPPORT.md)
