# AIWF cuDNN Compatibility: PyTorch, ONNX Runtime, and Custom Extensions

## PyTorch

PyTorch wheels commonly bring their own CUDA/cuDNN runtime expectations. Support should inspect PyTorch first:

```python
import torch
print("torch", torch.__version__)
print("torch cuda", torch.version.cuda)
print("cuda available", torch.cuda.is_available())
print("cudnn enabled", torch.backends.cudnn.enabled)
print("cudnn version", torch.backends.cudnn.version())
```

If PyTorch works, do not immediately install random cuDNN packages over it. That can fix one runtime while breaking another.

## ONNX Runtime

ONNX Runtime CUDA provider compatibility is stricter than many users expect. ONNX Runtime documents that cuDNN 8.x and cuDNN 9.x are not compatible with each other, and that package selection should match CUDA and cuDNN major versions. ONNX Runtime also documents APIs for preloading CUDA/cuDNN DLLs to improve integration with PyTorch.

AIWF support flow:

1. `pip show onnxruntime-gpu`
2. `python -c "import onnxruntime as ort; print(ort.get_available_providers())"`
3. create a minimal CUDA provider session if available
4. compare against torch CUDA/cuDNN versions
5. check for `nvidia-cudnn-cu12`, `nvidia-cudnn-cu13`, or manual cuDNN DLL path

## Custom extensions

For native CUDA/PyTorch extensions:

- `torch.version.cuda` gives the CUDA family PyTorch was built around.
- `nvcc --version` gives the system Toolkit compiler version.
- `cl.exe` availability gives MSVC readiness.
- `TORCH_CUDA_ARCH_LIST` controls architecture targets.
- cuDNN headers/import libs matter only if the extension directly links cuDNN.

If a project directly includes `cudnn.h` or `cudnn_frontend.h`, the manifest must include `CUDNN_PATH` and the exact cuDNN package/install source.

## Source anchors

- https://onnxruntime.ai/docs/execution-providers/CUDA-ExecutionProvider.html
- https://docs.nvidia.com/deeplearning/cudnn/installation/latest/windows.html
- https://docs.nvidia.com/deeplearning/cudnn/backend/latest/api/overview.html
