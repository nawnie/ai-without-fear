# LlamaIndex Loader Profile

This profile describes a sane LlamaIndex ingestion strategy for the adapter.

## Node strategy

Create separate document nodes by file role:

- AI instruction nodes: no aggressive chunking; preserve whole files.
- Atlas card nodes: one JSONL row equals one retrieval unit.
- Canonical overview nodes: semantic section chunking by heading.
- Concept map nodes: preserve bullets and relationships.
- Source content nodes: chunk by heading/code block, with lower retrieval priority metadata.
- Manifests: row-level chunks for CSV/JSONL where possible.

## Metadata strategy

Attach:

```json
{
  "aiwf_layer": "00_AI_READ_FIRST | 01_CANONICAL_RESEARCH_LANES | 02_RETRIEVAL_INDEX | 03_SOURCE_CONTENT | 04_MANIFESTS | 05_REPORTS",
  "retrieval_priority": 100,
  "canonical_status": "instruction | canonical | source | audit | current_field",
  "lane_id": "optional",
  "document_role": "overview | card | source | policy | manifest | report"
}
```

## Retrieval strategy

Use hybrid retrieval if available. Exact terms matter for node class types, package names, model filenames, and commands.

Recommended order:

1. metadata-filtered retrieval for lane/policy when intent is clear
2. hybrid keyword + dense retrieval
3. rerank
4. include source archive chunks only when they support or clarify canonical guidance

## Do not

- collapse all files into equal-priority chunks
- chunk JSONL Atlas cards across row boundaries
- strip file path metadata
- remove version labels from source archive records
