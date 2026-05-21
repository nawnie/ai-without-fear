# triton

## RAG purpose
GPU kernel language/compiler used by some PyTorch optimization paths and attention implementations. It may appear as a transitive dependency in modern torch acceleration stacks.

## Why AI Without Fear cares
Triton can be involved in performance paths, torch.compile, and custom kernels, but Windows support and project expectations vary. It should not be blindly forced into every AIWF venv.

## Common import patterns
- `import triton`

## Install / pinning notes
Let the framework pull the version it expects unless a repo explicitly requires a known Triton build. For Windows ComfyUI, treat it as project-specific.

## Windows / ComfyUI risk level
**very_high**

## Quick diagnostic commands
```powershell
python -c "import triton; print(triton.__version__)"
```

## Common failure signatures
- repo expects Triton but package is absent
- compiler/kernel errors from unsupported platform or mismatched torch path

## AIWF usage notes
Research status remains high because different model repos use or avoid Triton differently.

## RAG tags
`pip-package`, `v0.2-core-runtime`, `very_high`, `windows-ai`, `comfyui`, `gradio`, `local-ai`

## Source URLs
- https://triton-lang.org/
- https://pytorch.org/
