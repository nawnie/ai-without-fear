# onnxruntime

## RAG purpose
CPU ONNX inference runtime for exported ONNX models used by face, segmentation, background, VQA, and auxiliary helpers.

## Why AI Without Fear cares
Stable CPU fallback for InsightFace/ReActor and ONNX helpers. Distinguish it from onnxruntime-gpu because both import as onnxruntime.

## Package identity
- Pip package: `onnxruntime`
- Import name: `onnxruntime`
- Priority: `high`
- Windows / ComfyUI risk: `medium`

## Common import patterns
- `import onnxruntime as ort`

## Install / pinning notes
```powershell
python -m pip install onnxruntime
python -c "import onnxruntime as ort; print(ort.__version__); print(ort.get_available_providers())"
```

## Dependency / cluster notes
- numpy
- protobuf/flatbuffers-style deps depending on wheel
- Visual C++ runtime on Windows

## Common failure signatures
- CPU and GPU packages together can confuse provider behavior.
- Helper libs may require explicit provider names.
- Unsupported model opset errors occur at runtime after import succeeds.

## Quick diagnostic command
```powershell
python -c "import onnxruntime as ort; print(ort.__version__); print(ort.get_available_providers())"
```

## AIWF usage notes
Provider list is the real test, not import success.

## RAG tags
`pip-package`, `v0.3-image-restoration-face-segmentation`, `onnx`, `inference-runtime`, `cpu-provider`

## Source URLs
- https://onnxruntime.ai/docs/install/
- https://onnxruntime.ai/docs/get-started/with-python.html
- https://pypi.org/project/onnxruntime/
