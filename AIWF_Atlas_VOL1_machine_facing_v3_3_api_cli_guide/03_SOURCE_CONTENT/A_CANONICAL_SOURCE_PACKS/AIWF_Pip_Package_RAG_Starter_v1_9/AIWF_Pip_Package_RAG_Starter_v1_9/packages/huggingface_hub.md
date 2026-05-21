# huggingface_hub

## RAG purpose
Official Python client for downloading models, datasets, and individual files from Hugging Face Hub, including cache management and offline-aware behavior.

## Why AI Without Fear cares
AIWF needs reproducible model fetches for one-click installs, model bootstrap scripts, Gradio apps, and clean instructions for local cache placement.

## Common import patterns
- `import huggingface_hub`
- `from huggingface_hub import hf_hub_download, snapshot_download`

## Install / pinning notes
Use `hf_hub_download` for a known single file and `snapshot_download` for full repo snapshots. Set cache_dir or HF_HOME/HF_HUB_CACHE when model storage needs to live on F:\Ai_Models or another large drive.

## Windows / ComfyUI risk level
**low**

## Quick diagnostic commands
```powershell
python -c "import huggingface_hub; print(huggingface_hub.__version__)"
```
```powershell
$env:HF_HOME="F:\Ai_Models\hf_cache"
```

## Common failure signatures
- gated repo / token errors
- download path goes to small C: drive cache
- offline mode cache miss
- repo revision changed and old cache is reused unexpectedly

## AIWF usage notes
For RAG, always record repo_id, filename/pattern, revision/commit if reproducibility matters, and target model folder.

## RAG tags
`pip-package`, `v0.2-model-io`, `low`, `windows-ai`, `comfyui`, `gradio`, `local-ai`

## Source URLs
- https://huggingface.co/docs/huggingface_hub/en/guides/download
- https://huggingface.co/docs/huggingface_hub/en/package_reference/environment_variables


## v1.8 large-model download/cache addendum
`huggingface_hub` handles `hf download`, `hf_hub_download`, and `snapshot_download`. For support, capture cache path, repo revision, local-dir behavior, dry-run output when available, and whether transfer acceleration or Xet-backed storage is involved. Download success must be verified at the model-folder level, not just by HTTP status.

Sources: https://huggingface.co/docs/huggingface_hub/en/guides/download | https://huggingface.co/docs/huggingface_hub/en/package_reference/serialization
