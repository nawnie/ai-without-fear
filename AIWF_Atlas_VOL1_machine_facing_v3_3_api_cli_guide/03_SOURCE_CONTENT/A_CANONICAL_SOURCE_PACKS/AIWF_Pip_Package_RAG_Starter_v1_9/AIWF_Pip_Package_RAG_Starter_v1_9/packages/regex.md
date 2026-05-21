# regex

## RAG purpose
Advanced regular-expression engine for prompt parsing, metadata extraction, and messy logs.

## Why AI Without Fear cares
More capable matching than stdlib re for Unicode-heavy text and complex extraction patterns.

## Common import patterns
- `regex`

## Install / pinning notes
Do not assume identical behavior to stdlib re; document patterns using regex-only features.

## Windows / ComfyUI risk level
**low**

## Quick diagnostic commands
```powershell
python -c "import regex; print(regex.__version__)"
```

## Common failure signatures
- Pattern works in regex but not re
- Backtracking/performance problems on huge logs
- Unexpected Unicode class behavior

## Dependency cluster notes
Text parsing cluster: regex + ftfy + tokenizers/sentencepiece.

## Source context
Text cleanup, prompt parsing, filename parsing, requirement parsing.

## RAG tags
`pip-package`, `v0.5-training-data-config-llm-framework`, `low`, `windows-ai`, `training`, `rag`, `local-ai`

## Source URLs
- https://pypi.org/project/regex/
