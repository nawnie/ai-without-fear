# easyocr

## RAG purpose
OCR fallback/complement for images where Tesseract struggles, especially natural-scene text or non-standard layouts.

## Why AI Without Fear cares
Useful for image-heavy AIWF material, but should not be installed casually into fragile ComfyUI venvs because it is another torch consumer.

## Common import patterns
- `import easyocr`
- `reader = easyocr.Reader(["en"])`

## Install / pinning notes
Install torch/torchvision correctly first on Windows. EasyOCR is convenient but inherits PyTorch/CUDA dependency risk.

## Windows / ComfyUI risk level
**high**

## Quick diagnostic commands
```powershell
python -c "import easyocr; print('easyocr ok')"
```

## Common failure signatures
- Torch/torchvision mismatch
- Model download blocked or slow on first run
- GPU expected but CPU path used

## AIWF usage notes
Deep-learning OCR package for scene text and document text across many languages.

## RAG tags
`pip-package`, `v0.4-rag-ocr-llm-client`, `high`, `ocr`, `deep-learning`, `torch-dependent`, `image-audit`

## Source URLs
- https://github.com/JaidedAI/EasyOCR
- https://www.jaided.ai/easyocr/
