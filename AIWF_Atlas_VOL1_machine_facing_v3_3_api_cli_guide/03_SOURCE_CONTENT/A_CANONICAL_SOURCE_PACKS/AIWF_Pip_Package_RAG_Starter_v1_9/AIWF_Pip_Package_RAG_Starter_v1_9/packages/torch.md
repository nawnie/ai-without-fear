# torch

## RAG purpose
PyTorch core tensor, autograd, model execution, and CUDA runtime package. In AIWF this is the root dependency for ComfyUI, diffusers, training scripts, VQA/VLM helpers, restoration nodes, and most GPU diagnostic checks.

## Why AI Without Fear cares
If torch is wrong, nearly everything above it lies. CUDA availability, VRAM behavior, attention backends, torchvision custom ops, xformers, and many restoration packages all inherit their constraints from the torch build.

## Common import patterns
- `import torch`

## Install / pinning notes
Use the official PyTorch install selector for the target OS, Python, package manager, and CUDA platform. Do not casually run plain `pip install torch --upgrade` inside a working ComfyUI venv because it can swap the CUDA wheel family.

## Windows / ComfyUI risk level
**very_high**

## Quick diagnostic commands
```powershell
F:\ComfyUI\venv\Scripts\python.exe -c 'import torch; print(torch.__version__); print(torch.version.cuda); print(torch.cuda.is_available()); print(torch.cuda.get_device_name(0) if torch.cuda.is_available() else "NO CUDA")'
```
```powershell
nvidia-smi
```

## Common failure signatures
- `torch.cuda.is_available()` returns False after a pip update
- xformers reports it was built for a different PyTorch/CUDA/Python build
- torchvision operator errors such as missing NMS/custom C++ ops
- ComfyUI falls back to CPU or exits during model load

## AIWF usage notes
For Windows local-AI stacks, document the exact Python version, torch version, CUDA wheel tag, NVIDIA driver branch, and whether the app uses embedded Python or a venv.

## RAG tags
`pip-package`, `v0.2-core-runtime`, `very_high`, `windows-ai`, `comfyui`, `gradio`, `local-ai`

## Source URLs
- https://pytorch.org/get-started/locally/
- https://pytorch.org/
