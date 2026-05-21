# RAG Loader Notes

## Recommended chunking

Use package cards as independent documents. Keep each card intact when possible because the sections are intentionally short and semantically grouped.

Recommended metadata fields:

- `pip_name`
- `import_name`
- `category`
- `priority`
- `windows_risk`
- `rag_status`
- `doc_quality`
- `doc_batch`
- `source_urls`

## Retrieval strategy

Use `pip_package_inventory.csv` as the structured lookup table and `packages/*.md` as the explanatory corpus.

Good query expansion examples:

- User says `cv2` → search `opencv-python`, `opencv-python-headless`, image/video I/O cluster.
- User says `PIL` → search `Pillow`.
- User says `onnxruntime` GPU problem → search `onnxruntime`, `onnxruntime-gpu`, `onnxruntime-directml`, providers.
- User says `Tesseract` → search `pytesseract` and external binary requirement.
- User says `ComfyUI Manager` → search `comfyui_manager`, `comfyui-manager`, manager requirements.

## Answer policy for an AI assistant using this pack

When the package card is `stub`, `research`, or `needs_full_doc`, treat it as a lead, not final authority. Tell the user it needs source verification before install/pinning advice.

When the package card is `documented_v*`, prefer the package card plus dependency-cluster maps over memory.

When the issue is Windows/CUDA/ComfyUI related, ask for or collect:

- Python version
- `pip freeze`
- `pip check`
- `torch.__version__`
- `torch.version.cuda`
- `torch.cuda.is_available()`
- `onnxruntime.get_available_providers()` when relevant
- custom-node `requirements.txt` files


## Source loading

Load `sources/source_registry.csv` as source metadata and `sources/package_to_sources.csv` as the join table. When answering support questions, prefer package-card content for explanation and source rows for provenance. Flag high-refresh-priority sources when advice depends on fast-moving install or compatibility claims.
