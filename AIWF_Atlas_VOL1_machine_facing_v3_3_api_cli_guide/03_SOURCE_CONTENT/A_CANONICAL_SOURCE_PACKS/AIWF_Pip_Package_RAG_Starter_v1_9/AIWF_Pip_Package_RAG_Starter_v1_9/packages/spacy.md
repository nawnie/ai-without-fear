# spacy

## RAG purpose
Optional preprocessing layer for smarter chunking, entity extraction, and metadata enrichment before vector indexing.

## Why AI Without Fear cares
spaCy is not required for basic RAG, but it becomes useful when the archive needs structured metadata from messy docs.

## Common import patterns
- `import spacy`
- `nlp = spacy.load("en_core_web_sm")`

## Install / pinning notes
Installing `spacy` alone does not install language pipelines. Use spaCy download commands or model wheels separately.

## Windows / ComfyUI risk level
**medium**

## Quick diagnostic commands
```powershell
python -c "import spacy; print(spacy.__version__)"
```
```powershell
python -m spacy validate
```

## Common failure signatures
- Package installed but model pipeline missing
- Model/pipeline version not compatible with spaCy version
- Confusing spaCy tokenization with LLM token counting

## AIWF usage notes
Industrial NLP toolkit for tokenization, sentence segmentation, entity extraction, and document preprocessing.

## RAG tags
`pip-package`, `v0.4-rag-ocr-llm-client`, `medium`, `nlp`, `rag-preprocessing`, `metadata`, `entity-extraction`

## Source URLs
- https://spacy.io/usage
- https://spacy.io/usage/models
