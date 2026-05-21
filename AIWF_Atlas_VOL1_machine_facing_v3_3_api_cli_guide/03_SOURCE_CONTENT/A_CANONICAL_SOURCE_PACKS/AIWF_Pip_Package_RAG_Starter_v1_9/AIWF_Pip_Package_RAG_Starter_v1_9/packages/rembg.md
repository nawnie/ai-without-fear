# rembg

## RAG purpose
Tracks background-removal dependency behavior so AIWF can distinguish useful image preprocessing from unnecessary venv breakage.

## Why AI Without Fear cares
For AIWF, rembg is not central; the important knowledge is when to avoid installing/removing it because other nodes may import it.

## Common import patterns
- `from rembg import remove`

## Install / pinning notes
Uses ONNX Runtime paths; choose extras/provider carefully. Not needed for VQA unless a node imports it directly.

## Windows / ComfyUI risk level
**medium**

## Quick diagnostic commands
```powershell
python -c "from rembg import remove; print('rembg ok')"
```

## Common failure signatures
- ONNX Runtime provider mismatch
- Model download/cache problems
- Installing GPU/ROCm extras into the wrong environment

## AIWF usage notes
Background removal utility often used in image preprocessing pipelines.

## RAG tags
`pip-package`, `v0.4-rag-ocr-llm-client`, `medium`, `background-removal`, `onnxruntime`, `image-preprocessing`, `dependency-risk`

## Source URLs
- https://github.com/danielgatis/rembg
- https://pypi.org/project/rembg/2.0.28/
