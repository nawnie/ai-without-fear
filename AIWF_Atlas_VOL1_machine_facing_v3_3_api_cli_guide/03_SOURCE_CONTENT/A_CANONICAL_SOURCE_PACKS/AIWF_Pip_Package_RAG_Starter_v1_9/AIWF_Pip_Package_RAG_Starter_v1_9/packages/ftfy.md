# ftfy

## RAG purpose
Text repair package for broken Unicode in captions, scraped docs, prompts, and dataset metadata.

## Why AI Without Fear cares
Fixes mojibake before tokenization, embedding, caption cleaning, or metadata storage.

## Common import patterns
- `ftfy`

## Install / pinning notes
Light dependency; not a replacement for a deliberate text normalization policy.

## Windows / ComfyUI risk level
**low**

## Quick diagnostic commands
```powershell
python -c "import ftfy; print(ftfy.fix_text('cafÃ©'))"
```

## Common failure signatures
- Cleanup changes intended characters
- User expects non-Unicode decoding; ftfy works on Python Unicode strings

## Dependency cluster notes
Text cleanup cluster: ftfy + regex + tokenizer packages.

## Source context
CLIP/text cleanup, prompt/dataset cleaning, training data preprocessing.

## RAG tags
`pip-package`, `v0.5-training-data-config-llm-framework`, `low`, `windows-ai`, `training`, `rag`, `local-ai`

## Source URLs
- https://ftfy.readthedocs.io/
- https://pypi.org/project/ftfy/
