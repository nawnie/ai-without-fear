# API + CLI Guide Insert Report v3.3

## Summary

Added a human-facing Field Guide insert for API and CLI usage, plus a compact command reference and Atlas routing cards.

## User requirement handled

- API usage information was added/expanded.
- CLI usage was added to the **actual guide part**, not only the machine embedding/Atlas lane layer.
- Commands use Windows/PowerShell-first examples where appropriate.
- Official source anchors were added for cloud APIs, local CLI runtimes, local OpenAI-compatible servers, ComfyUI API routes, and Gradio/FastAPI mounting.

## Added files

- `17_FIELD_GUIDE_INSERTS/README.md`
- `17_FIELD_GUIDE_INSERTS/API_AND_CLI_USAGE_FIELD_GUIDE_INSERT.md`
- `17_FIELD_GUIDE_INSERTS/API_CLI_QUICK_REFERENCE.md`
- `01_CANONICAL_RESEARCH_LANES/17_model_serving_deployment/API_AND_CLI_USAGE_EXPANSION.md`
- `04_MANIFESTS/api_cli_source_pinset_current.csv`
- `04_MANIFESTS/api_cli_source_pinset_current.jsonl`
- `10_SCHEMA_AND_INDEX/api_cli_usage_policy_current.json`

## Source count

Added 20 API/CLI source anchors to the Atlas source-maintenance layer.

## Notes

The insert avoids hardcoding model versions where provider names change quickly. It uses placeholders such as `<model-name>` when exact current model choice should be checked against the provider docs.
