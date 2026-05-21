# pandas

## RAG purpose
DataFrame/table utility for inventories, manifests, structured reports, and dataset inspection.

## Why AI Without Fear cares
CSV/JSON inventories, package/node RAG tables, model sorter reports, QA logs, and metadata manifests.

## Common import patterns
- `pandas`

## Install / pinning notes
Pin with numpy when reproducibility matters. Avoid casual upgrades in tight compiled stacks.

## Windows / ComfyUI risk level
**medium**

## Quick diagnostic commands
```powershell
python -c "import pandas as pd; print(pd.__version__); print(pd.DataFrame({'ok':[1]}))"
```

## Common failure signatures
- NumPy ABI mismatch
- CSV encoding issues
- Optional dependency missing for Excel/Parquet

## Dependency cluster notes
Data tooling cluster: pandas + numpy + pyarrow/openpyxl when those formats are used.

## Source context
CSV inventories, model sorter reports, package/node RAG tables, training metadata.

## RAG tags
`pip-package`, `v0.5-training-data-config-llm-framework`, `medium`, `windows-ai`, `training`, `rag`, `local-ai`

## Source URLs
- https://pandas.pydata.org/
- https://pandas.pydata.org/docs/getting_started/install.html
