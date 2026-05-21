# AIWF Playbook: cuDNN on Windows for Local AI Support

## Goal

Install or verify cuDNN only when needed, without poisoning the whole machine.

## Preferred order

1. Use framework-provided wheels first for beginner ComfyUI/PyTorch installs.
2. If ONNX Runtime GPU or another runtime requires external CUDA/cuDNN, install the matching NVIDIA component wheel or manual cuDNN backend package.
3. For native source builds, install/verify CUDA Toolkit + MSVC + cuDNN headers/import libs/runtime DLLs.
4. Build wheels once into an AIWF wheelhouse and reuse.

## Manual Windows backend checklist

Expected files after archive/install:

```text
C:\Program Files\NVIDIA\CUDNN\v9.x\bin\cudnn*.dll
C:\Program Files\NVIDIA\CUDNN\v9.x\include\cudnn*.h
C:\Program Files\NVIDIA\CUDNN\v9.x\lib\x64\cudnn*.lib
```

PATH should include only the intended cuDNN `bin` folder for the target environment.

## Python wheel checklist

```powershell
python -m pip install nvidia-cudnn-cu12
python -m pip show nvidia-cudnn-cu12
python -m pip install nvidia-cudnn-frontend
```

Use `nvidia-cudnn-cu13` only when the target framework stack explicitly supports CUDA 13.

## Smoke tests

```powershell
python -c "import torch; print(torch.__version__, torch.version.cuda, torch.cuda.is_available(), torch.backends.cudnn.version())"
python -c "import onnxruntime as ort; print(ort.get_available_providers())"
```

## Manifest fields

```json
{
  "cuda_lane": "cu12",
  "cudnn_major": "9",
  "cudnn_source": "nvidia-cudnn-cu12 wheel",
  "cudnn_version": "record exact pip/manual version",
  "torch_version": "record",
  "torch_cuda": "record",
  "onnxruntime_gpu_version": "record",
  "path_strategy": "venv/project launcher prepends paths; no System32 copy"
}
```
