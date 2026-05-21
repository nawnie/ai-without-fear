# AIWF cuDNN Windows DLL Loading and PATH Reference

## Why Windows cuDNN failures are confusing

On Windows, a Python package can be installed correctly while the runtime still cannot load the correct DLL. cuDNN failures often appear as framework/provider failures, not as a direct pip error.

The support system should not stop at `pip show nvidia-cudnn-cu12`. It should inspect:

- active Python executable
- active venv
- installed NVIDIA component packages
- `PATH` order
- `CUDA_PATH`
- `CUDNN_PATH` if present
- PyTorch bundled library behavior
- ONNX Runtime CUDA provider behavior
- duplicate old `cudnn*.dll` files in CUDA Toolkit, cuDNN install folders, random app folders, or copied-to-System32 mistakes

## Safe PATH policy

Beginner-safe policy:

1. Do not copy cuDNN DLLs into `C:\Windows\System32`.
2. Prefer framework-selected wheels for PyTorch/ComfyUI first.
3. Prefer a wheelhouse/venv-specific install over global DLL scattering.
4. If manual cuDNN is required, add only the intended cuDNN `bin` folder to PATH and record it in the manifest.
5. If multiple CUDA/cuDNN versions are installed, keep per-project launch scripts that prepend the right paths rather than permanently editing global PATH repeatedly.

## Common bad states

- Torch works, ONNX Runtime CUDA provider missing: likely ONNX Runtime package/provider/cudnn/cuda mismatch.
- ONNX Runtime sees CUDA provider but session creation warns about cuDNN: cuDNN major or PATH issue.
- Build finds `cudnn.h` but runtime fails: headers/import libs were visible, DLLs were not.
- Runtime finds old cuDNN first: PATH order/DLL shadowing.
- User installed CUDA Toolkit only: cuDNN backend may still be missing unless provided by the framework/component wheel.

## AIWF launcher idea

For one-click installs, generate a project launcher that prepends environment-local paths:

```powershell
$env:PATH = "$ProjectRoot\wheelhouse_runtime\nvidia\cudnn\bin;$env:PATH"
$env:CUDA_PATH = "C:\Program Files\NVIDIA GPU Computing Toolkit\CUDA\v12.x"
$env:CUDNN_PATH = "$ProjectRoot\wheelhouse_runtime\nvidia\cudnn"
```

This is safer than mutating machine-wide PATH for every experiment.
