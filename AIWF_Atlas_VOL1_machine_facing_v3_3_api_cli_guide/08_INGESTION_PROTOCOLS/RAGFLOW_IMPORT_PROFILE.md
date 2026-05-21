# RAGFlow Import Profile

This profile describes how to load the adapter into RAGFlow-style document understanding systems.

## Parser intent

Treat the archive as mixed structured/semi-structured knowledge, not as ordinary prose.

## Knowledge-base layout

Recommended separate knowledge bases:

1. AIWF Adapter Instructions
2. AIWF Canonical Research Lanes
3. AIWF Retrieval Cards
4. AIWF Source Content
5. AIWF Audit Manifests

## Retrieval priority

Route answers through instructions, Atlas cards, and canonical lanes first. Use source content and reports for provenance and long-tail details.

## Rerank guidance

Rerank toward:

- exact class type names
- exact package/model/file names
- lane overview files
- Atlas cards with matching intent
- source coverage notes for credibility

Rerank away from:

- old source files when a newer canonical lane exists
- expansion slots unless the user asks what is missing
- deduplication reports unless the question is about archive history
