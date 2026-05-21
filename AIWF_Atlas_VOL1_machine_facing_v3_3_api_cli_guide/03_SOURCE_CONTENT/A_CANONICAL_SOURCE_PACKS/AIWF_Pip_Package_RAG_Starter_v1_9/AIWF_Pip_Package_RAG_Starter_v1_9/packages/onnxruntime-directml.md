# onnxruntime-directml

## RAG purpose
Provider-specific ORT card so the archive can distinguish CUDA, CPU, and DirectML execution paths.

## Why AI Without Fear cares
This matters for Windows machines that are not NVIDIA/CUDA-first, but in Shawn’s RTX/CUDA ComfyUI context it is usually a separate lane, not the default.

## Common import patterns
- `import onnxruntime as ort`
- `print(ort.get_available_providers())`

## Install / pinning notes
Do not mix blindly with CPU/GPU ORT packages in one venv. Confirm providers with `ort.get_available_providers()`.

## Windows / ComfyUI risk level
**high**

## Quick diagnostic commands
```powershell
python -c "import onnxruntime as ort; print(ort.__version__); print(ort.get_available_providers())"
```

## Common failure signatures
- DirectML provider not listed after install
- Conflicting onnxruntime packages installed together
- Assuming DirectML performance/ops coverage equals CUDA EP

## AIWF usage notes
ONNX Runtime package with Microsoft DirectML execution provider for Windows GPU acceleration on DirectX 12 hardware.

## RAG tags
`pip-package`, `v0.4-rag-ocr-llm-client`, `high`, `onnxruntime`, `directml`, `windows`, `execution-provider`, `gpu-provider`

## Source URLs
- https://onnxruntime.ai/docs/execution-providers/DirectML-ExecutionProvider.html
- https://pypi.org/project/onnxruntime-directml/
- https://onnxruntime.ai/docs/install/
