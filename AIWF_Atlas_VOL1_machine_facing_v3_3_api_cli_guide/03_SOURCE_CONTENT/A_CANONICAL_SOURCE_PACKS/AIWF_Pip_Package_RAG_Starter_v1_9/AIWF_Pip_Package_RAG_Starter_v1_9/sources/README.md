# Sources Directory

This folder was added in v1.7 so the package RAG has traceable source provenance instead of scattered URLs.

## Files

- `source_registry.csv` — one row per unique external source URL.
- `source_registry.json` — JSON version for RAG loaders.
- `package_to_sources.csv` — package-to-source join table.
- `source_to_packages.csv` — reverse source-to-package join table.
- `source_domain_summary.csv` — domain-level summary for trust and refresh planning.
- `chat_sources_reviewed.csv` — sources explicitly surfaced or relied on during the chat passes.
- `SOURCES.md` — human-readable source summary.
- `source_quality_policy.md` — how to treat official docs, PyPI, GitHub, and fast-moving AI sources.
- `source_refresh_queue.md` — high-volatility sources to refresh before publishing hard install advice.
- `source_usage_map.md` — maps source families to RAG usage.

## Rule

The package cards can summarize behavior, but support decisions should trace back to a source row when the advice affects installation, CUDA/cuDNN/TensorRT compatibility, build flags, or security posture.
