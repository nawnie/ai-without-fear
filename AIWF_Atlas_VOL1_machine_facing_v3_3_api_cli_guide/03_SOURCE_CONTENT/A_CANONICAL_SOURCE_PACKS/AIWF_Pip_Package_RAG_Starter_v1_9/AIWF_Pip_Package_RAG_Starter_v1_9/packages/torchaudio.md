# torchaudio

## RAG purpose
PyTorch audio companion package. Less central for image-first ComfyUI workflows, but important for ASR, audio preprocessors, multimodal video/audio projects, and parity with official PyTorch install bundles.

## Why AI Without Fear cares
Usually not the bug in image stacks, but if installed it should match torch. It becomes relevant as AIWF expands into video, audio transcription, multimodal assistants, and media pipelines.

## Common import patterns
- `import torchaudio`

## Install / pinning notes
Install with the same official PyTorch command as torch/torchvision when an audio stack requires it. Do not force it into a minimal image-only venv unless required.

## Windows / ComfyUI risk level
**medium**

## Quick diagnostic commands
```powershell
python -c "import torch, torchaudio; print(torch.__version__); print(torchaudio.__version__)"
```

## Common failure signatures
- missing DLL/import errors after torch upgrade
- audio model repos demanding a different torch family

## AIWF usage notes
Track as part of the torch family, not as a standalone AIWF dependency.

## RAG tags
`pip-package`, `v0.2-core-runtime`, `medium`, `windows-ai`, `comfyui`, `gradio`, `local-ai`

## Source URLs
- https://pytorch.org/get-started/locally/
