# Raw-file retrieval vs AIWF Adapter Comparison Plan

## Purpose

Raw-file retrieval answers the question: “What happens if we simply embed the pile?”

Atlas retrieval answers the question: “What happens if the pile has lanes, source gates, Atlas cards, policies, and a memory map?”

## Test method

For each question:

1. Run raw-file retrieval over preserved sources only.
2. Run adapter retrieval over canonical lanes and Atlas cards first, then sources.
3. Compare retrieved context, answer quality, and safety behavior.
4. Record whether the adapter prevented a likely failure.

## Expected adapter advantages

- better source priority
- better current-vs-historical handling
- fewer fabricated details
- more beginner-safe commands
- stronger “ask for logs/files” behavior
- better warning around volatile claims

## Expected raw-RAG weaknesses

- retrieves old reports as if current
- confuses source registers with proof
- overweights repeated boilerplate
- misses operating policies
- produces confident but under-governed answers
