# Open WebUI Import Profile

Use this profile when loading the adapter into Open WebUI knowledge collections or comparable local RAG UI systems.

## Collection design

Prefer multiple collections if the host allows it:

- `AIWF Instructions`
- `AIWF Retrieval Index`
- `AIWF Canonical Lanes`
- `AIWF Source Archive`
- `AIWF Manifests and Reports`

If only one collection is practical, preserve the folder names during upload and use filename prefixes where possible.

## Recommended retrieval behavior

The model should retrieve from instruction/index/canonical collections before source archive collections.

## System instruction seed

Use `00_AI_READ_FIRST/SYSTEM_PROMPT_FOR_AI_ASSISTANTS.md` as the top-level instruction text.

## Failure mode to watch

If Open WebUI retrieves only raw source files and misses the canonical lanes, answers may become verbose, stale, or contradictory. Fix by increasing priority or separating collections.
