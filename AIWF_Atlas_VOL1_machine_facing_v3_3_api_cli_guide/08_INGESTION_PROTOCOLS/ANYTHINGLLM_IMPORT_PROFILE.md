# AnythingLLM Import Profile

Use this profile when loading the adapter into AnythingLLM or similar local document-chat systems.

## Recommended workspace setup

Create one workspace for the AIWF Atlas. Add the archive contents as documents after extraction.

## Priority loading

Load these first:

1. `00_AI_READ_FIRST/`
2. `02_RETRIEVAL_INDEX/`
3. `01_CANONICAL_RESEARCH_LANES/`

Load these only after the first pass:

4. `03_SOURCE_CONTENT/`
5. `04_MANIFESTS/`
6. `05_REPORTS/`

## Prompt instruction for workspace

Use the contents of `00_AI_READ_FIRST/SYSTEM_PROMPT_FOR_AI_ASSISTANTS.md` and `00_AI_READ_FIRST/ADAPTER_OPERATING_CONTRACT.md` as workspace instructions if the host allows custom instructions.

## Important behavior

AnythingLLM-style document chat may flatten folders. To reduce flattening damage:

- keep lane names in filenames or metadata when possible
- index Atlas cards early
- avoid relying only on raw source files
- use canonical lanes for answers and source files for evidence

## Validation questions

After import, ask:

1. What is the correct load order for this adapter?
2. Which layer should answer ComfyUI workflow design questions?
3. What should the assistant do if retrieved source content conflicts with a canonical lane?
4. Which topics are reserved for 20-25 expansion?
