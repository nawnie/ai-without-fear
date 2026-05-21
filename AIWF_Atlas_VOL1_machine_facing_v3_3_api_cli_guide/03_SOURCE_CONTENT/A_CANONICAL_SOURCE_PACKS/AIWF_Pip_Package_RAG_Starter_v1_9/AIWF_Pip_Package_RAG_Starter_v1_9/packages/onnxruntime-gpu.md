# onnxruntime-gpu

## RAG purpose
GPU-enabled ONNX Runtime package using CUDA/TensorRT execution providers where compatible.

## Why AI Without Fear cares
Potential InsightFace/ONNX speedup, but high risk if CUDA, cuDNN, PATH, PyTorch CUDA family, and ORT provider versions do not align.

## Package identity
- Pip package: `onnxruntime-gpu`
- Import name: `onnxruntime`
- Priority: `medium`
- Windows / ComfyUI risk: `very_high`

## Common import patterns
- `import onnxruntime as ort`

## Install / pinning notes
```powershell
python -m pip install onnxruntime-gpu
python -c "import onnxruntime as ort; print(ort.__version__); print(ort.get_available_providers())"
nvidia-smi
```

## Dependency / cluster notes
- CUDA/cuDNN/provider requirements
- Visual C++ runtime
- numpy
- NVIDIA driver

## Common failure signatures
- CUDA provider missing from get_available_providers.
- PATH may lack CUDA/cuDNN DLLs on Windows.
- Version mismatch with PyTorch CUDA/system CUDA causes provider load failure.
- CPU/GPU ORT packages together can mask active package.

## Quick diagnostic command
```powershell
python -c "import onnxruntime as ort; print(ort.__version__); print(ort.get_available_providers())"
```

## AIWF usage notes
Only recommend GPU ORT after provider compatibility is confirmed.

## RAG tags
`pip-package`, `v0.3-image-restoration-face-segmentation`, `onnx`, `cuda-provider`, `gpu-runtime`, `insightface`

## Source URLs
- https://onnxruntime.ai/docs/install/
- https://onnxruntime.ai/docs/execution-providers/CUDA-ExecutionProvider.html
- https://pypi.org/project/onnxruntime-gpu/
