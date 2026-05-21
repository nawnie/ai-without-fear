# Notes to AI Assistants

This repository is intended to be used as one combined research Atlas for Retrieval-Augmented Generation systems, local AI assistants, workflow copilots, and human reviewers. Treat it as a layered knowledge base, not as a flat pile of Markdown files.

## Core Intent

Use this repo to answer AI Without Fear technical questions with grounded, source-aware context. Prefer retrieved evidence from the Atlas over memory. Keep answers practical, beginner-safe, and honest about uncertainty.

The Gradio 6 handbook archive is now an integrated Atlas source pack at:

`AIWF_Atlas_VOL1_machine_facing_v3_3_api_cli_guide/03_SOURCE_CONTENT/A_CANONICAL_SOURCE_PACKS/gradio6_rag_archive_20260521_0838/gradio6_rag_archive/`

The older drop-in package is preserved as release history at:

`AIWF_Atlas_VOL1_machine_facing_v3_3_api_cli_guide/06_CHANGE_HISTORY/packaged_releases/AIWF_Atlas_repo_dropin_v2_3/`

## Load Order

1. Read this file.
2. Read `AIWF_Atlas_VOL1_machine_facing_v3_3_api_cli_guide/00_AI_READ_FIRST/00_LOAD_ORDER.md`.
3. Read the Atlas operating, retrieval, source-priority, confidence, and citation policies in `00_AI_READ_FIRST/`.
4. Use `AIWF_Atlas_VOL1_machine_facing_v3_3_api_cli_guide/02_RETRIEVAL_INDEX/` to route the query.
5. Retrieve from the matching canonical lane under `01_CANONICAL_RESEARCH_LANES/`.
6. For Gradio 6 questions, retrieve section-level files from the integrated Gradio source pack under `03_SOURCE_CONTENT/A_CANONICAL_SOURCE_PACKS/`.
7. Inspect source archives only when the canonical lane or handbook section is insufficient, provenance is requested, or a conflict must be resolved.

## Retrieval Behavior

- Keep Atlas cards intact as chunks.
- Chunk canonical lane Markdown by heading.
- Chunk Gradio handbook files at section-file granularity.
- Preserve exact identifiers: command flags, node class names, package names, model filenames, paths, API endpoints, and version labels.
- Do not merge unrelated lanes just because they share broad AI terminology.
- Keep visual assets linked to their parent topic when indexing.

## Source Priority

For normal AIWF answers:

1. Root guidance and Atlas control files.
2. Atlas retrieval cards and lane index.
3. Canonical research lanes.
4. Integrated Gradio handbook section files for Gradio-specific topics.
5. Source content and provenance archives.
6. Manifests, reports, and change history for maintenance or audit questions.

Current official documentation outranks this repository for live software status.

## Confidence Rules

Answer directly when retrieved context includes a relevant canonical lane, exact identifiers, and no unresolved conflict.

Qualify the answer when the material is relevant but older, version-sensitive, overlapping across lanes, or based on reports rather than canonical lane guidance.

Do not guess exact commands, file paths, node sockets, package names, model licenses, or API behavior when the archive does not contain enough evidence.

## Gradio 6 Notes

For Gradio questions:

- Prefer the integrated source pack's `AI_GUIDANCE.md` and `RAG_INDEX.md` as routing files.
- Use chapter and section filenames in retrieved context.
- Prioritize Chapters 10 and 17 for deployment and production operations.
- Prioritize Chapter 15 for migration from Gradio 5.
- Avoid suggesting outdated Gradio 5 patterns unless the user asks about migration.

## Current Review Warnings

See `LEARNING_PASS_REVIEW.md` and `KNOWN_GAPS.md` before public release. The current review flags templated retrieval-card summaries, retrieval-card schema drift, thin Gradio handbook sections, and missing Gradio `SOURCES.md` as content-quality issues for a future pass.

## Output Style

Be direct, practical, and grounded. Separate facts from inference and recommendations. When citations are not supported by the host system, name the file or lane used.

Use AIWF framing where relevant: AI is leverage, not replacement. The human supplies goals, judgment, values, taste, and final decisions.

## Safety and Freshness

Use current verification for volatile claims: model availability, APIs, packages, hardware, benchmarks, licenses, security practices, tool compatibility, and active repository status.

Do not treat this repository as a replacement for official docs, a complete all-purpose AI reference, a trained model, a fine-tune, or a license grant.

