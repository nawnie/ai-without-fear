# Source Governance and Fact-Checking Rules — v0.15

Vol. 2 is a research RAG for writing a college/postgrad-level training manual. Sources must be used by role, not just collected.

## Source hierarchy

1. **Primary math/theory papers and textbooks**: use for equations, principles, and historical claims.
2. **Official framework documentation and repositories**: use for current implementation details, supported model families, install behavior, flags, and APIs.
3. **Government, regulator, and standards sources**: use for law, safety, disclosure, provenance, and policy claims.
4. **Model cards, dataset cards, and benchmark docs**: use for model/dataset-specific limits and intended use.
5. **Community discussions, issues, and third-party guides**: use as hints or watchlist items only.

## Claim-type rules

- **Theory claim**: needs paper/book/course source.
- **Tool claim**: needs official docs/repo; community posts are not enough.
- **Consumer-hardware claim**: needs official memory guidance or local AIWF test evidence. If neither exists, mark as estimate.
- **Legal/policy claim**: needs law/regulator/standards source; avoid confident legal advice wording.
- **Model-family support claim**: needs recheck close to publication because trainer support changes quickly.
- **Benchmark/eval claim**: needs benchmark docs plus notes about task fit and contamination risk.

## March 2026 snapshot rule

The project is being framed as a March 2026 research snapshot. Any repo, model family, trainer compatibility list, or regulatory page that can change after that date should be labeled as volatile and queued for final recheck.

## RAG ingestion rule

Use source logs and the master register as metadata/reference nodes. Do not let source logs dominate retrieval over content cards. Good RAG behavior should retrieve the content card first, then source register entries when the answer needs citation or verification.
