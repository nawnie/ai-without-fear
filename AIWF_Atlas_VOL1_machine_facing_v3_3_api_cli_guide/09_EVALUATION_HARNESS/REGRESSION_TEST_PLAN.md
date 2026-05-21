# Regression Test Plan

Run this plan after each major adapter update.

## Test modes

1. Small model without RAG.
2. Small model with naive folder RAG over source content only.
3. Small model with AIWF adapter load order and retrieval policy.
4. Optional: larger cloud model with no adapter as a comparison baseline.

## Required checks

- Does the answer retrieve the correct lane?
- Does the answer avoid unsupported class types, commands, paths, and package names?
- Does the answer distinguish canonical guidance from source history?
- Does the answer give a practical next action?
- Does the answer preserve beginner-safe defaults?
- Does the answer identify missing coverage when applicable?

## Failure logging

Every failed answer should produce a gap record with:

- user question
- expected lane
- retrieved chunks
- failure type
- missing knowledge
- proposed new Atlas card or lane update
