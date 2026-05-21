# insightface

## RAG purpose
Face analysis package for detection, embeddings, recognition, alignment, and face-swap identity workflows; modern versions use ONNX Runtime backend.

## Why AI Without Fear cares
Critical for ReActor and face-control workflows. It provides identity embedding/analysis; install success is not enough if ORT providers are wrong.

## Package identity
- Pip package: `insightface`
- Import name: `insightface`
- Priority: `critical`
- Windows / ComfyUI risk: `very_high`

## Common import patterns
- `import insightface`
- `from insightface.app import FaceAnalysis`

## Install / pinning notes
```powershell
python -m pip install insightface
# CPU backend
python -m pip install onnxruntime
# GPU backend only after confirming CUDA/cuDNN/provider match
python -m pip install onnxruntime-gpu
```

## Dependency / cluster notes
- onnxruntime or onnxruntime-gpu
- opencv-python
- numpy
- model downloads like buffalo_l
- Windows wheel/build compatibility

## Common failure signatures
- Windows wheel/build issues are common.
- CUDA provider may silently be unavailable or fall back.
- Pretrained model license can differ from Python package license.
- Provider order often matters: CUDAExecutionProvider then CPUExecutionProvider.

## Quick diagnostic command
```powershell
python -c "import onnxruntime as ort; print(ort.get_available_providers())"
```

## AIWF usage notes
For ReActor support, ask for ORT providers and model/license context before fixes.

## RAG tags
`pip-package`, `v0.3-image-restoration-face-segmentation`, `face-swap`, `identity`, `reactor`, `onnxruntime`

## Source URLs
- https://github.com/deepinsight/insightface/tree/master/python-package
- https://pypi.org/project/insightface/
- https://github.com/deepinsight/insightface
