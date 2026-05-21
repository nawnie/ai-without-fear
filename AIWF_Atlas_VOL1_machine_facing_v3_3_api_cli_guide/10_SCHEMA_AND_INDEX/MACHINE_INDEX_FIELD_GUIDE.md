# Machine Index Field Guide

This file defines the practical index roles used by the adapter.

## Index roles

### Instruction index

Contains AI behavior rules and should be loaded as system/developer context when possible.

### Atlas-card index

High-signal query-to-answer kernels. This should be the first semantic index used for domain questions.

### Canonical lane index

The main knowledge layer. Use for full answers, explanations, and policy decisions.

### Source archive index

Historical/source evidence layer. Use for provenance, exact original material, and deeper detail.

### Audit index

Manifests, reports, dedupe maps, and change history. Use for questions about the archive itself.

### current_field index

Future topic stubs. Use only to detect missing coverage or route work-in-progress additions.

## Retrieval composition

For most answers, retrieve:

- 1-3 Atlas cards
- 1 canonical overview or concept map chunk
- 0-2 source evidence chunks
- 0-1 policy/conflict chunks if needed

Do not flood the context window with raw source material unless the user explicitly asks for exhaustive research.
