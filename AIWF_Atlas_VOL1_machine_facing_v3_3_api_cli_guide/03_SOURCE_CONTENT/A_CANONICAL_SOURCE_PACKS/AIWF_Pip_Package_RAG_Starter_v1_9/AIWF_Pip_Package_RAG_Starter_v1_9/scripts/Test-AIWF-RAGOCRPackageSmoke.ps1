<#
AI Without Fear - RAG/OCR/LLM Package Smoke Test
Purpose: verify imports and runtime/provider boundaries without modifying the environment.
Usage:
  .\Test-AIWF-RAGOCRPackageSmoke.ps1 -Python "F:\ComfyUI\venv\Scripts\python.exe"
#>
param(
  [string]$Python = "python"
)

$checks = @(
  @{Name="sentence-transformers"; Code="from sentence_transformers import SentenceTransformer; print('sentence-transformers ok')"},
  @{Name="chromadb"; Code="import chromadb; print('chromadb', getattr(chromadb, '__version__', 'unknown'))"},
  @{Name="lancedb"; Code="import lancedb; print('lancedb ok')"},
  @{Name="faiss-cpu"; Code="import faiss; print('faiss', getattr(faiss, '__version__', 'unknown'))"},
  @{Name="ollama-client"; Code="import ollama; print('ollama client ok')"},
  @{Name="openai"; Code="from openai import OpenAI; print('openai sdk ok')"},
  @{Name="tiktoken"; Code="import tiktoken; print(tiktoken.get_encoding('o200k_base').encode('hello'))"},
  @{Name="tokenizers"; Code="import tokenizers; print('tokenizers', tokenizers.__version__)"},
  @{Name="spacy"; Code="import spacy; print('spacy', spacy.__version__)"},
  @{Name="pytesseract-wrapper"; Code="import pytesseract; print('pytesseract import ok')"},
  @{Name="easyocr"; Code="import easyocr; print('easyocr ok')"},
  @{Name="rembg"; Code="from rembg import remove; print('rembg ok')"},
  @{Name="transparent-background"; Code="import transparent_background; print('transparent_background ok')"},
  @{Name="onnxruntime-providers"; Code="import onnxruntime as ort; print(ort.__version__); print(ort.get_available_providers())"},
  @{Name="protobuf"; Code="import google.protobuf; print('protobuf', google.protobuf.__version__)"},
  @{Name="pyyaml"; Code="import yaml; print('yaml', yaml.__version__)"}
)

Write-Host "AIWF RAG/OCR/LLM package smoke test" -ForegroundColor Cyan
Write-Host "Python: $Python"
foreach ($check in $checks) {
  Write-Host "`n[$($check.Name)]" -ForegroundColor Yellow
  & $Python -c $check.Code
  if ($LASTEXITCODE -ne 0) {
    Write-Host "FAILED: $($check.Name)" -ForegroundColor Red
  } else {
    Write-Host "OK: $($check.Name)" -ForegroundColor Green
  }
}

Write-Host "`nExternal runtime checks:" -ForegroundColor Cyan
Write-Host "- pytesseract still needs: tesseract --version"
Write-Host "- ollama client still needs: ollama list"
Write-Host "- ONNX provider truth is the provider list, not only import success."
