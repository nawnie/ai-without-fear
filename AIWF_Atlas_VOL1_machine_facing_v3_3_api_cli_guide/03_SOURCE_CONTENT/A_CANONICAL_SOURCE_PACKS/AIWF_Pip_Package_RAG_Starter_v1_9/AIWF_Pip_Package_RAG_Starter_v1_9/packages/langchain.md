# langchain

## RAG purpose
LLM application framework for agents, tools, retrieval, provider integrations, and orchestration patterns.

## Why AI Without Fear cares
Useful reference before building AIWF helper apps; package split means base install is not the whole stack.

## Common import patterns
- `langchain`

## Install / pinning notes
Provider integrations are separate packages, such as langchain-openai.

## Windows / ComfyUI risk level
**medium**

## Quick diagnostic commands
```powershell
python -c "import langchain; print(langchain.__version__)"
```
```powershell
python -m pip show langchain
```

## Common failure signatures
- Old import paths break
- Provider package missing
- Heavy dependency graph conflicts
- Agent abstraction hides direct API failures

## Dependency cluster notes
LLM app framework cluster: langchain + langchain-community + provider packages + vector DB/embedding packages.

## Source context
RAG/orchestration comparisons; local/cloud model integrations; app framework research.

## RAG tags
`pip-package`, `v0.5-training-data-config-llm-framework`, `medium`, `windows-ai`, `training`, `rag`, `local-ai`

## Source URLs
- https://docs.langchain.com/oss/python/langchain/install
- https://docs.langchain.com/oss/python/integrations/providers/overview
- https://pypi.org/project/langchain/
