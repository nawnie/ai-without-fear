# v1.1 Native / CUDA Wheel Build Notes

## Why this matters
The deeper AIWF gets into ComfyUI, training, video, segmentation, quantization, and custom nodes, the more we hit packages that are not simple Python. Some packages include C++, CUDA, Rust, or external DLL/shared library dependencies. If no compatible wheel exists, pip falls back to source builds.

## Windows build chain checklist
For native Python extensions on Windows:

1. Use the same Python version/architecture as the target venv.
2. Install Microsoft C++ build tools / Visual Studio C++ workload.
3. For CUDA extensions, install a compatible NVIDIA CUDA Toolkit with `nvcc`.
4. Confirm `cl.exe` is visible in the shell used for the build.
5. Confirm `nvcc --version` works if CUDA code is compiled.
6. Confirm the target venv already has the intended Torch build installed when building Torch extensions.
7. Prefer `pip wheel` into a wheelhouse over `pip install` directly into the working ComfyUI venv.

## Torch/CUDA extension rule
PyTorch C++/CUDA extensions are not normal C extensions. They need to match the installed PyTorch build and its ABI/runtime assumptions. Build in a clean clone of the target venv or a dedicated build venv that mirrors it.

Typical flow:

```powershell
python -m pip install --upgrade pip setuptools wheel ninja packaging
python -m pip install torch torchvision torchaudio --index-url <matching-pytorch-index>
python -m pip wheel . -w .\wheelhouse\built\torch_cuda --no-build-isolation --no-deps
```

`--no-build-isolation` is not universally correct; it is a surgical option for packages that need to see the already-installed Torch/CUDA environment during build. Use the default isolated build first unless the package docs or failure pattern points to Torch/CUDA discovery problems.

## CUDA-specific checks
```powershell
where nvcc
nvcc --version
python -c "import torch; print(torch.__version__); print(torch.version.cuda); print(torch.cuda.is_available())"
```

For RTX 4070 Ti Super class systems, build scripts may need architecture targeting that includes Ada Lovelace GPUs. Do not assume old package defaults target current GPUs.

## Build isolation decision table
| Situation | Default build isolation? | Notes |
|---|---:|---|
| Pure Python package | Yes | Let pyproject build dependencies resolve cleanly. |
| C/C++ package with normal headers | Yes first | If it fails, inspect missing compiler/header. |
| PyTorch CUDA extension | Often no | Build backend may need target Torch already installed. |
| Rust package with maturin | Yes first | Needs Rust only if no prebuilt wheel. |
| Package with local patched dependency | Case-by-case | Prefer constraints and local wheels over global venv mutation. |

## Failure signatures
- `Microsoft Visual C++ 14.x or greater is required`: MSVC build tools/workload missing.
- `cl.exe not found`: build shell is not a Developer Prompt or environment is not initialized.
- `nvcc fatal`: CUDA Toolkit/compiler path problem.
- `No CUDA runtime is found`: CUDA Toolkit/runtime path problem or package expects toolkit rather than driver-only CUDA.
- `undefined symbol` / DLL load failure: external shared library not bundled/found.
- `Detected CUDA version mismatches the version that was used to compile PyTorch`: Torch/CUDA/toolkit mismatch.

## Sources
- PyTorch custom C++/CUDA operators: https://docs.pytorch.org/tutorials/advanced/cpp_custom_ops.html
- PyTorch extension examples: https://github.com/pytorch/extension-cpp
- Microsoft C++ workload install guidance: https://learn.microsoft.com/en-us/cpp/build/vscpp-step-0-installation?view=msvc-170
- Python Windows compiler notes: https://wiki.python.org/moin/WindowsCompilers
- CUDA Windows installation guide: https://docs.nvidia.com/cuda/cuda-installation-guide-microsoft-windows/
- NVIDIA NVCC supported host compiler notes: https://docs.nvidia.com/cuda/cuda-compiler-driver-nvcc/
