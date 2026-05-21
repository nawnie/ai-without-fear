# Ingestion Protocols

This folder contains machine-facing guidance for loading the AIWF Atlas into different retrieval hosts.

These are not end-user tutorials. They define how an AI system or builder should preserve the adapter's structure during ingestion.

## General ingestion order

1. Load `00_AI_READ_FIRST/` as system or instruction context.
2. Load `02_RETRIEVAL_INDEX/` as high-priority retrieval data.
3. Load `01_CANONICAL_RESEARCH_LANES/` as primary domain knowledge.
4. Load `03_SOURCE_CONTENT/` as lower-priority provenance and fallback detail.
5. Keep `04_MANIFESTS/` and `05_REPORTS/` searchable for audit/debug queries.
6. Do not index zip files inside the source archive unless intentionally expanding nested sources.

## Recommended metadata fields

Attach these metadata keys during ingestion when the host supports metadata:

- `aiwf_layer`
- `lane_id`
- `lane_title`
- `document_role`
- `source_family`
- `version_label`
- `canonical_status`
- `retrieval_priority`
- `risk_level`
- `machine_read_first`

## Retrieval priority scale

- `100`: AI instructions and operating policy
- `90`: Atlas cards and canonical lane overview files
- `80`: concept maps, chunking strategy, QA prompts
- `70`: reports and manifests
- `60`: source archive content
- `40`: legacy or superseded source content
- `10`: expansion slots and future-topic stubs
