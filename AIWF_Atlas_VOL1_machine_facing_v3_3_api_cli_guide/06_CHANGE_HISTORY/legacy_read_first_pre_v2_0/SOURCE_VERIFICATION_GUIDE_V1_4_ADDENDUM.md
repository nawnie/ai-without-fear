# Source Verification Guide Addendum v1.4

This addendum extends the v1.3 verification layer with a second high-impact anchor pass.

## What v1.4 verifies

The v1.4 pass focuses on implementation/runtime claims that an AI assistant is likely to use when giving advice:

- agent orchestration and human-in-the-loop behavior
- RAG engine and document-ingestion claims
- Open WebUI knowledge/RAG import behavior
- ComfyUI official documentation and custom-node install behavior
- ComfyUI-Manager update behavior
- Gradio Interface, ChatInterface, and session-state claims
- RAG chunking/chunk-size evaluation guidance

## Source priority used

1. Official documentation
2. Official GitHub repositories
3. Vendor documentation/glossaries
4. Vendor blogs only when the claim is conceptual rather than factual API behavior

## Important limitation

This pass verifies that the referenced public sources support the archive's anchor claims. It does not guarantee that every fast-moving implementation detail remains current at future release time. Claims tagged `fast_moving` should be rechecked before publishing, shipping code, or giving install commands.
