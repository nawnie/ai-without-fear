# pytesseract

## RAG purpose
Extracts text from images/PDF screenshots so visual assets can be indexed and audited for source-credit or guide accuracy.

## Why AI Without Fear cares
This package is a classic install trap: `pip install pytesseract` can succeed while OCR still fails because the real binary is missing.

## Common import patterns
- `import pytesseract`
- `text = pytesseract.image_to_string(image)`

## Install / pinning notes
Pip installs the wrapper, not the Tesseract executable. On Windows, install Tesseract OCR separately and ensure the executable is on PATH or configured explicitly.

## Windows / ComfyUI risk level
**high**

## Quick diagnostic commands
```powershell
python -c "import pytesseract; print(pytesseract.get_tesseract_version())"
```
```powershell
tesseract --version
```

## Common failure signatures
- TesseractNotFoundError because executable is not installed or not on PATH
- Language data missing
- Poor OCR from low-resolution or stylized guide images

## AIWF usage notes
Python wrapper for the Tesseract OCR engine; useful for extracting text from screenshots, scans, and guide images.

## RAG tags
`pip-package`, `v0.4-rag-ocr-llm-client`, `high`, `ocr`, `image-text`, `external-binary`, `windows-path`, `rag-ingest`

## Source URLs
- https://pypi.org/project/pytesseract/
- https://github.com/madmaze/pytesseract
