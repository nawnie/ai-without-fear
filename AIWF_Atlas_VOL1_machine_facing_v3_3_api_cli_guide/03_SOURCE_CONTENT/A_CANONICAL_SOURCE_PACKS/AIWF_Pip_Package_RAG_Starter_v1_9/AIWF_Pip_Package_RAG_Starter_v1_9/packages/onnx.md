# onnx

## RAG purpose
Open Neural Network Exchange model-format library for loading, inspecting, validating, and converting ONNX graphs.

## Why AI Without Fear cares
Useful for model-file debugging around InsightFace, background removal, VQA helpers, and exported detectors; not an inference accelerator by itself.

## Package identity
- Pip package: `onnx`
- Import name: `onnx`
- Priority: `medium`
- Windows / ComfyUI risk: `medium`

## Common import patterns
- `import onnx`

## Install / pinning notes
```powershell
python -m pip install onnx
python -c "import onnx; print(onnx.__version__)"
```

## Dependency / cluster notes
- protobuf
- numpy
- typing/model helper deps depending on version

## Common failure signatures
- Confusing onnx format tooling with onnxruntime inference runtime.
- Protobuf conflicts can surface in mixed ML venvs.
- Opset/version issues show during load/check/export.

## Quick diagnostic command
```powershell
python -c "import onnx; print(onnx.__version__); print(onnx.__file__)"
```

## AIWF usage notes
Use for inspection/conversion; runtime speed belongs to ONNX Runtime/TensorRT/DirectML.

## RAG tags
`pip-package`, `v0.3-image-restoration-face-segmentation`, `model-format`, `inspection`, `conversion`

## Source URLs
- https://onnx.ai/onnx/
- https://github.com/onnx/onnx/blob/main/INSTALL.md
- https://pypi.org/project/onnx/
