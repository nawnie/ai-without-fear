# AIWF Adapter Benchmark Protocol v2.13

This protocol tests whether the Atlas Layer improves assistant behavior.

## Conditions

1. **No RAG** — model answers without external context.
2. **Raw-file RAG** — model retrieves from unstructured source payloads.
3. **AIWF Atlas retrieval** — model retrieves from AIWF lanes, cards, source gates, and policies.
4. **Larger no-adapter model** — stronger model answers without adapter memory.

## Required scores

Score every answer on a 0–5 scale:

- retrieval accuracy
- answer correctness
- source groundedness
- source/citation quality
- actionability
- beginner safety
- version awareness
- AIWF voice fit

## Disqualifying errors

An answer fails regardless of average score if it:

- fabricates a source or citation
- gives a destructive command without proper context and warning
- treats volatile claims as settled facts
- ignores retrieved evidence that contradicts its answer
- invents node names, model filenames, or API routes

## Reporting rule

Report benchmark results by model, adapter version, retrieval mode, and day. Do not claim broad superiority from a single lucky run. That path leads to leaderboard goblins, and leaderboard goblins do not help beginners.
