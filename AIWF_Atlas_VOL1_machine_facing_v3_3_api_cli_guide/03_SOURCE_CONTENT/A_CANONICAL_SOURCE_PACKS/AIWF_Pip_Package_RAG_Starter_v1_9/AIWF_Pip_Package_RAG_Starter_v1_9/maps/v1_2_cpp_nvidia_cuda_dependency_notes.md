# v1.2 C++ / NVIDIA / CUDA Dependency Notes

## Why this pass exists

AI Without Fear is moving into the zone where cutting-edge repos may not provide stable wheels for every Windows/Python/Torch/CUDA combination. The archive therefore needs a deep native-build layer, not just package cards.

## New RAG concepts added

1. **CUDA is layered:** driver, runtime libraries, developer Toolkit, framework ABI, and GPU architecture are distinct.
2. **pip CUDA component wheels are not the same thing as a complete developer Toolkit.** NVIDIA documents them primarily as Python/runtime use; developer tools may still need separate installation.
3. **PyTorch CUDA extensions must record `TORCH_CUDA_ARCH_LIST`.** Default visible-card behavior is convenient but not reproducible.
4. **MSVC is part of the CUDA compiler chain on Windows.** `nvcc` orchestrates host compilation through `cl.exe`.
5. **Wheelhouses must be target-specific.** A wheelhouse should encode Python, Windows, torch, CUDA, and GPU architecture.
6. **NVIDIA package families must not be mixed casually.** `cu12` and `cu13` component wheels are different targets.

## Recommended AIWF default for Shawn's 4070 Ti Super class machine

For local personal CUDA extension builds:

```powershell
$env:TORCH_CUDA_ARCH_LIST = '8.9'
$env:MAX_JOBS = '6'
```

For a slightly broader Ada/Ampere wheelhouse:

```powershell
$env:TORCH_CUDA_ARCH_LIST = '8.6 8.9+PTX'
```

Exact target should be confirmed with `torch.cuda.get_device_capability(0)`.

## Build order for risky native packages

Find existing wheels first. Check GitHub releases/forks for maintained Windows wheels. Check whether a newer project covers the scope before building. Build locally only when there is no safe maintained wheel. Build into wheelhouse, not directly into main ComfyUI. Smoke test in a clean venv. Store manifest and logs.

## RAG warning rule

If a user asks “should I install CUDA?” the correct answer is not a yes/no. Ask which layer is missing: driver, Toolkit compiler, runtime libraries, PyTorch CUDA wheel, ONNX Runtime provider, or custom-node CUDA extension build. Then test that layer directly.
