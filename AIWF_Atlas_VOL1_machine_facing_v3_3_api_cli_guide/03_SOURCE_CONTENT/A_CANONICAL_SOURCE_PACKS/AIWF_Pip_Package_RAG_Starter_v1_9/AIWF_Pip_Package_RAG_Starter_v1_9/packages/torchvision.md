# torchvision

## RAG purpose
PyTorch vision companion package. Provides image transforms, pretrained vision models, datasets, and compiled operators used by many image, detection, restoration, and training stacks.

## Why AI Without Fear cares
A mismatched torchvision is a classic hidden breakage in Stable Diffusion and restoration tooling. It may import successfully but fail when native operators are called.

## Common import patterns
- `import torchvision`

## Install / pinning notes
Install as part of the same official PyTorch bundle as torch and torchaudio. Treat torch/torchvision/torchaudio as a matched ABI family, not independent upgrade targets.

## Windows / ComfyUI risk level
**high**

## Quick diagnostic commands
```powershell
python -c "import torch, torchvision; print(torch.__version__); print(torchvision.__version__)"
```

## Common failure signatures
- `RuntimeError: operator torchvision::nms does not exist`
- import-time DLL/native extension errors
- restoration packages fail after torch upgrade

## AIWF usage notes
For ComfyUI repair, compare torch and torchvision first before chasing node code bugs.

## RAG tags
`pip-package`, `v0.2-core-runtime`, `high`, `windows-ai`, `comfyui`, `gradio`, `local-ai`

## Source URLs
- https://pytorch.org/get-started/locally/
