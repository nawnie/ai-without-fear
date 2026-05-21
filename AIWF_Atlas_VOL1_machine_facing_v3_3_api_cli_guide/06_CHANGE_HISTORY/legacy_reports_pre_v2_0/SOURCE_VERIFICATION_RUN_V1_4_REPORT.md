# Source Verification Run v1.4 Report

## Purpose

Continue the v1.3 source verification pass by checking more high-impact claims that affect ingestion, app integration, RAG behavior, and runtime guidance.

## Summary

- Added 15 new manually verified source anchors.
- Added both CSV and JSONL verification samples.
- Focused on official docs and official repositories where possible.
- Added domain summary for the new verification batch.
- Preserved all source material; no research content was removed.

## New files

- `00_AI_READ_FIRST/SOURCE_VERIFICATION_GUIDE_V1_4_ADDENDUM.md`
- `04_MANIFESTS/source_verification_sample_v1_4.csv`
- `04_MANIFESTS/source_verification_sample_v1_4.jsonl`
- `04_MANIFESTS/source_domain_summary_v1_4_additions.csv`
- `05_REPORTS/SOURCE_VERIFICATION_RUN_V1_4_REPORT.md`

## Verified anchor groups

### Agent systems

Verified LangGraph claims about durable execution, streaming, human-in-the-loop, interrupts, state persistence, and resumable execution from official LangGraph documentation.

### RAG and document systems

Verified Haystack's positioning as an open-source framework for production-ready agents, RAG, and multimodal search. Verified RAGFlow's positioning around deep document understanding, citations, datasets, and parsing intervention.

### Open WebUI ingestion

Verified Open WebUI's Knowledge & RAG feature framing, including knowledge bases, vector search, full-content injection, and embedding model settings.

### ComfyUI ecosystem

Verified ComfyUI official documentation coverage for custom nodes, local API, built-in nodes, cloud API, and ComfyUI custom-node installation pattern. Verified ComfyUI-Manager update behavior from the official repository.

### Gradio UI layer

Verified Interface, ChatInterface, and session-state claims from official Gradio docs.

### RAG chunking

Verified LlamaIndex claims that chunking defines retrieval/processing units and that chunk size should be evaluated against response quality.

## Risk notes

- `fast_moving` claims should be rechecked before release.
- Official docs can change; store URLs and use the verification manifest as a review queue.
- Vendor blogs are acceptable for conceptual guidance but should not be used as the sole source for package API details.

## Result

The adapter now has a stronger verified-source spine for lanes 02, 03, 04, 11, 13, 14, and 17. This improves trustworthiness for small-model assistants using the adapter as a machine memory layer.
