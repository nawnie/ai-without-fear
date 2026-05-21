# accelerate

## RAG purpose
Hugging Face helper library for device placement, mixed precision, distributed training, and simplified PyTorch training/inference launch patterns.

## Why AI Without Fear cares
Important for training stacks, model loading with device maps, low-memory loading, and keeping scripts portable from single-GPU consumer hardware to larger systems.

## Common import patterns
- `import accelerate`
- `from accelerate import Accelerator`

## Install / pinning notes
Pin with the HF stack. Run `accelerate env` when diagnosing training or multi-device behavior.

## Windows / ComfyUI risk level
**medium**

## Quick diagnostic commands
```powershell
python -c "import accelerate; print(accelerate.__version__)"
```
```powershell
accelerate env
```

## Common failure signatures
- model loading complains accelerate is required
- device_map or low_cpu_mem_usage path unavailable
- training script launches but places model on wrong device

## AIWF usage notes
For AIWF Volume II training, this is a core bridge package.

## RAG tags
`pip-package`, `v0.2-huggingface-diffusion`, `medium`, `windows-ai`, `comfyui`, `gradio`, `local-ai`

## Source URLs
- https://huggingface.co/docs/accelerate/en/index
- https://huggingface.co/docs/accelerate/package_reference/accelerator
- https://huggingface.co/docs/accelerate/en/basic_tutorials/install
