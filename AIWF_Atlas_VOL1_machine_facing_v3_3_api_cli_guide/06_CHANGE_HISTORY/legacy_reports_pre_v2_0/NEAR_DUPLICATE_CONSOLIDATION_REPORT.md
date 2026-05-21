# AIWF Near-Duplicate Consolidation Report

No timestamps are used in this changelog/report; only project version facts and file actions are recorded.

## Summary

- Input archive: `AIWF_CS_Knowledge_Data_Archive_v0_1_deduped.zip`
- Output archive root: `AIWF_CS_Knowledge_Data_Archive_v0_2_near_consolidated`
- Input file count: 1260
- Output file count: 1236
- Near-duplicate version groups consolidated: 22
- Version-variant files removed after consolidation: 27

## Consolidation policy

- Exact duplicates were already removed in v0.1; this pass handles near-duplicates inside known version families.
- Same logical-path files from `AIWF_Pip_Package_RAG_Starter` v1.5/v1.9 were consolidated into the newest canonical copy.
- Same logical-path files from `AIWF-Project-Chat-Distribution-Roadmap` v0.3/v0.5/v0.6 were consolidated into the newest canonical copy.
- Markdown/text files kept the newest full copy, then appended only unique chunks from older/alternate copies under a retained-material section.
- CSV files were merged by unique rows.
- JSONL files were merged by unique lines.
- Python, PowerShell, normal JSON, and workflow-style structured files were not near-merged; unsafe line edits could break runnable assets.
- Unrelated files with generic names such as README/CHANGELOG from different project families were not merged.

## Consolidated groups

### `AIWF-Project-Chat-Distribution-Roadmap :: CHANGELOG.md`

- Kept canonical: `CONTENT/AIWF-Project-Chat-Distribution-Roadmap-v0.6-cfg-denoise-inpaint-theory/AIWF-Project-Chat-Distribution-Roadmap/CHANGELOG.md`
- Removed version copies: 2
- Unique chunks/rows added: 2
  - `CONTENT/AIWF-Project-Chat-Distribution-Roadmap-v0.5-comfyui-core-api-subgraph/AIWF-Project-Chat-Distribution-Roadmap/CHANGELOG.md`
  - `CONTENT/AIWF-Project-Chat-Distribution-Roadmap-v0.3-rag-source-ledger/AIWF-Project-Chat-Distribution-Roadmap/CHANGELOG.md`

### `AIWF-Project-Chat-Distribution-Roadmap :: CHAT_HANDOFFS/13_rag_source_ledger_chat.md`

- Kept canonical: `CONTENT/AIWF-Project-Chat-Distribution-Roadmap-v0.6-cfg-denoise-inpaint-theory/AIWF-Project-Chat-Distribution-Roadmap/CHAT_HANDOFFS/13_rag_source_ledger_chat.md`
- Removed version copies: 1
- Unique chunks/rows added: 15
  - `CONTENT/AIWF-Project-Chat-Distribution-Roadmap-v0.3-rag-source-ledger/AIWF-Project-Chat-Distribution-Roadmap/CHAT_HANDOFFS/13_rag_source_ledger_chat.md`

### `AIWF-Project-Chat-Distribution-Roadmap :: CROSS_CHAT_CHECKLIST.md`

- Kept canonical: `CONTENT/AIWF-Project-Chat-Distribution-Roadmap-v0.6-cfg-denoise-inpaint-theory/AIWF-Project-Chat-Distribution-Roadmap/CROSS_CHAT_CHECKLIST.md`
- Removed version copies: 2
- Unique chunks/rows added: 3
  - `CONTENT/AIWF-Project-Chat-Distribution-Roadmap-v0.5-comfyui-core-api-subgraph/AIWF-Project-Chat-Distribution-Roadmap/CROSS_CHAT_CHECKLIST.md`
  - `CONTENT/AIWF-Project-Chat-Distribution-Roadmap-v0.3-rag-source-ledger/AIWF-Project-Chat-Distribution-Roadmap/CROSS_CHAT_CHECKLIST.md`

### `AIWF-Project-Chat-Distribution-Roadmap :: MASTER_DISTRIBUTION_ROADMAP.md`

- Kept canonical: `CONTENT/AIWF-Project-Chat-Distribution-Roadmap-v0.6-cfg-denoise-inpaint-theory/AIWF-Project-Chat-Distribution-Roadmap/MASTER_DISTRIBUTION_ROADMAP.md`
- Removed version copies: 2
- Unique chunks/rows added: 4
  - `CONTENT/AIWF-Project-Chat-Distribution-Roadmap-v0.5-comfyui-core-api-subgraph/AIWF-Project-Chat-Distribution-Roadmap/MASTER_DISTRIBUTION_ROADMAP.md`
  - `CONTENT/AIWF-Project-Chat-Distribution-Roadmap-v0.3-rag-source-ledger/AIWF-Project-Chat-Distribution-Roadmap/MASTER_DISTRIBUTION_ROADMAP.md`

### `AIWF-Project-Chat-Distribution-Roadmap :: PROJECT_CHAT_MAP.md`

- Kept canonical: `CONTENT/AIWF-Project-Chat-Distribution-Roadmap-v0.6-cfg-denoise-inpaint-theory/AIWF-Project-Chat-Distribution-Roadmap/PROJECT_CHAT_MAP.md`
- Removed version copies: 2
- Unique chunks/rows added: 6
  - `CONTENT/AIWF-Project-Chat-Distribution-Roadmap-v0.5-comfyui-core-api-subgraph/AIWF-Project-Chat-Distribution-Roadmap/PROJECT_CHAT_MAP.md`
  - `CONTENT/AIWF-Project-Chat-Distribution-Roadmap-v0.3-rag-source-ledger/AIWF-Project-Chat-Distribution-Roadmap/PROJECT_CHAT_MAP.md`

### `AIWF-Project-Chat-Distribution-Roadmap :: README.md`

- Kept canonical: `CONTENT/AIWF-Project-Chat-Distribution-Roadmap-v0.6-cfg-denoise-inpaint-theory/AIWF-Project-Chat-Distribution-Roadmap/README.md`
- Removed version copies: 2
- Unique chunks/rows added: 5
  - `CONTENT/AIWF-Project-Chat-Distribution-Roadmap-v0.5-comfyui-core-api-subgraph/AIWF-Project-Chat-Distribution-Roadmap/README.md`
  - `CONTENT/AIWF-Project-Chat-Distribution-Roadmap-v0.3-rag-source-ledger/AIWF-Project-Chat-Distribution-Roadmap/README.md`

### `AIWF_Pip_Package_RAG_Starter :: CHANGELOG.md`

- Kept canonical: `CONTENT/AIWF_Pip_Package_RAG_Starter_v1_9/AIWF_Pip_Package_RAG_Starter_v1_9/CHANGELOG.md`
- Removed version copies: 1
- Unique chunks/rows added: 0
  - `CONTENT/AIWF_Pip_Package_RAG_Starter_v1_5/AIWF_Pip_Package_RAG_Starter_v1_5/CHANGELOG.md`

### `AIWF_Pip_Package_RAG_Starter :: PACKAGE_INDEX.md`

- Kept canonical: `CONTENT/AIWF_Pip_Package_RAG_Starter_v1_9/AIWF_Pip_Package_RAG_Starter_v1_9/PACKAGE_INDEX.md`
- Removed version copies: 1
- Unique chunks/rows added: 232
  - `CONTENT/AIWF_Pip_Package_RAG_Starter_v1_5/AIWF_Pip_Package_RAG_Starter_v1_5/PACKAGE_INDEX.md`

### `AIWF_Pip_Package_RAG_Starter :: RAG_LOADER_NOTES.md`

- Kept canonical: `CONTENT/AIWF_Pip_Package_RAG_Starter_v1_9/AIWF_Pip_Package_RAG_Starter_v1_9/RAG_LOADER_NOTES.md`
- Removed version copies: 1
- Unique chunks/rows added: 0
  - `CONTENT/AIWF_Pip_Package_RAG_Starter_v1_5/AIWF_Pip_Package_RAG_Starter_v1_5/RAG_LOADER_NOTES.md`

### `AIWF_Pip_Package_RAG_Starter :: README.md`

- Kept canonical: `CONTENT/AIWF_Pip_Package_RAG_Starter_v1_9/AIWF_Pip_Package_RAG_Starter_v1_9/README.md`
- Removed version copies: 1
- Unique chunks/rows added: 6
  - `CONTENT/AIWF_Pip_Package_RAG_Starter_v1_5/AIWF_Pip_Package_RAG_Starter_v1_5/README.md`

### `AIWF_Pip_Package_RAG_Starter :: START_HERE.md`

- Kept canonical: `CONTENT/AIWF_Pip_Package_RAG_Starter_v1_9/AIWF_Pip_Package_RAG_Starter_v1_9/START_HERE.md`
- Removed version copies: 1
- Unique chunks/rows added: 11
  - `CONTENT/AIWF_Pip_Package_RAG_Starter_v1_5/AIWF_Pip_Package_RAG_Starter_v1_5/START_HERE.md`

### `AIWF_Pip_Package_RAG_Starter :: TODO_RESEARCH_QUEUE.md`

- Kept canonical: `CONTENT/AIWF_Pip_Package_RAG_Starter_v1_9/AIWF_Pip_Package_RAG_Starter_v1_9/TODO_RESEARCH_QUEUE.md`
- Removed version copies: 1
- Unique chunks/rows added: 2
  - `CONTENT/AIWF_Pip_Package_RAG_Starter_v1_5/AIWF_Pip_Package_RAG_Starter_v1_5/TODO_RESEARCH_QUEUE.md`

### `AIWF_Pip_Package_RAG_Starter :: maps/package_cluster_index.md`

- Kept canonical: `CONTENT/AIWF_Pip_Package_RAG_Starter_v1_9/AIWF_Pip_Package_RAG_Starter_v1_9/maps/package_cluster_index.md`
- Removed version copies: 1
- Unique chunks/rows added: 0
  - `CONTENT/AIWF_Pip_Package_RAG_Starter_v1_5/AIWF_Pip_Package_RAG_Starter_v1_5/maps/package_cluster_index.md`

### `AIWF_Pip_Package_RAG_Starter :: package_cards_index.csv`

- Kept canonical: `CONTENT/AIWF_Pip_Package_RAG_Starter_v1_9/AIWF_Pip_Package_RAG_Starter_v1_9/package_cards_index.csv`
- Removed version copies: 1
- Unique chunks/rows added: 0
  - `CONTENT/AIWF_Pip_Package_RAG_Starter_v1_5/AIWF_Pip_Package_RAG_Starter_v1_5/package_cards_index.csv`

### `AIWF_Pip_Package_RAG_Starter :: package_source_index.csv`

- Kept canonical: `CONTENT/AIWF_Pip_Package_RAG_Starter_v1_9/AIWF_Pip_Package_RAG_Starter_v1_9/package_source_index.csv`
- Removed version copies: 1
- Unique chunks/rows added: 0
  - `CONTENT/AIWF_Pip_Package_RAG_Starter_v1_5/AIWF_Pip_Package_RAG_Starter_v1_5/package_source_index.csv`

### `AIWF_Pip_Package_RAG_Starter :: packages/huggingface_hub.md`

- Kept canonical: `CONTENT/AIWF_Pip_Package_RAG_Starter_v1_9/AIWF_Pip_Package_RAG_Starter_v1_9/packages/huggingface_hub.md`
- Removed version copies: 1
- Unique chunks/rows added: 0
  - `CONTENT/AIWF_Pip_Package_RAG_Starter_v1_5/AIWF_Pip_Package_RAG_Starter_v1_5/packages/huggingface_hub.md`

### `AIWF_Pip_Package_RAG_Starter :: packages/llama-cpp-python.md`

- Kept canonical: `CONTENT/AIWF_Pip_Package_RAG_Starter_v1_9/AIWF_Pip_Package_RAG_Starter_v1_9/packages/llama-cpp-python.md`
- Removed version copies: 1
- Unique chunks/rows added: 0
  - `CONTENT/AIWF_Pip_Package_RAG_Starter_v1_5/AIWF_Pip_Package_RAG_Starter_v1_5/packages/llama-cpp-python.md`

### `AIWF_Pip_Package_RAG_Starter :: packages/ollama.md`

- Kept canonical: `CONTENT/AIWF_Pip_Package_RAG_Starter_v1_9/AIWF_Pip_Package_RAG_Starter_v1_9/packages/ollama.md`
- Removed version copies: 1
- Unique chunks/rows added: 0
  - `CONTENT/AIWF_Pip_Package_RAG_Starter_v1_5/AIWF_Pip_Package_RAG_Starter_v1_5/packages/ollama.md`

### `AIWF_Pip_Package_RAG_Starter :: packages/safetensors.md`

- Kept canonical: `CONTENT/AIWF_Pip_Package_RAG_Starter_v1_9/AIWF_Pip_Package_RAG_Starter_v1_9/packages/safetensors.md`
- Removed version copies: 1
- Unique chunks/rows added: 0
  - `CONTENT/AIWF_Pip_Package_RAG_Starter_v1_5/AIWF_Pip_Package_RAG_Starter_v1_5/packages/safetensors.md`

### `AIWF_Pip_Package_RAG_Starter :: packages/transformers.md`

- Kept canonical: `CONTENT/AIWF_Pip_Package_RAG_Starter_v1_9/AIWF_Pip_Package_RAG_Starter_v1_9/packages/transformers.md`
- Removed version copies: 1
- Unique chunks/rows added: 0
  - `CONTENT/AIWF_Pip_Package_RAG_Starter_v1_5/AIWF_Pip_Package_RAG_Starter_v1_5/packages/transformers.md`

### `AIWF_Pip_Package_RAG_Starter :: pip_package_inventory.csv`

- Kept canonical: `CONTENT/AIWF_Pip_Package_RAG_Starter_v1_9/AIWF_Pip_Package_RAG_Starter_v1_9/pip_package_inventory.csv`
- Removed version copies: 1
- Unique chunks/rows added: 0
  - `CONTENT/AIWF_Pip_Package_RAG_Starter_v1_5/AIWF_Pip_Package_RAG_Starter_v1_5/pip_package_inventory.csv`

### `AIWF_Pip_Package_RAG_Starter :: pip_package_inventory.md`

- Kept canonical: `CONTENT/AIWF_Pip_Package_RAG_Starter_v1_9/AIWF_Pip_Package_RAG_Starter_v1_9/pip_package_inventory.md`
- Removed version copies: 1
- Unique chunks/rows added: 2
  - `CONTENT/AIWF_Pip_Package_RAG_Starter_v1_5/AIWF_Pip_Package_RAG_Starter_v1_5/pip_package_inventory.md`

## Safety notes

- This is a conservative consolidation, not a semantic rewrite. It removes repeated version copies while retaining unique chunks/rows from removed copies.
- Some duplicated *ideas* may remain where files were not close version variants; that is intentional to avoid accidental knowledge loss.
- Use `MANIFESTS/near_duplicate_consolidation_map.csv` for a quick audit trail and `MANIFESTS/near_duplicate_consolidation_map.json` for detailed similarity scores.
