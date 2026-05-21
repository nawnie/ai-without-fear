# NVIDIA CUDA on Windows — Deep Reference for Local AI Wheel Builds

## 1. Three different “CUDA” layers

In AI install conversations, people say “CUDA” when they may mean different layers: NVIDIA display/compute driver, CUDA runtime libraries, and CUDA Toolkit/developer tools.

A user can have working PyTorch CUDA without a usable local `nvcc`. PyTorch wheels often bring the CUDA runtime pieces they need, but compiling CUDA extensions still requires a compatible build toolchain.

## 2. Windows requirements that matter

For CUDA development on Windows, NVIDIA's guide requires a CUDA-capable GPU, a supported Windows version, a supported Microsoft Visual Studio/MSVC version, and the NVIDIA CUDA Toolkit.

CUDA 13.2 Update 1 currently documents support for Windows 11/10 and Visual Studio 2026, Visual Studio 2022, and Visual Studio 2019, with native x86_64 support and C++14 default plus C++17/C++20 support. Check the exact Toolkit version's table before installing.

## 3. Driver vs runtime compatibility

`nvidia-smi` reports the driver-supported CUDA version, not necessarily the Toolkit used by PyTorch. `nvcc --version` reports the Toolkit compiler version if installed. `torch.version.cuda` reports the CUDA version family used to build the installed torch package.

Record all three. They answer different questions.

```powershell
nvidia-smi
nvcc --version
python -c "import torch; print(torch.__version__, torch.version.cuda, torch.cuda.is_available())"
```

## 4. System Toolkit vs pip CUDA component wheels

NVIDIA documents CUDA pip wheels for using CUDA with Python. Those pip wheels are primarily runtime-oriented and do not fully replace developer tools. For source compilation, a full Toolkit and host compiler may still be required.

Common CUDA component wheel families include `nvidia-cuda-runtime-cu12`, `nvidia-cuda-nvcc-cu12`, `nvidia-cuda-nvrtc-cu12`, `nvidia-cublas-cu12`, `nvidia-cudnn-cu12`, `nvidia-cufft-cu12`, `nvidia-curand-cu12`, `nvidia-cusolver-cu12`, `nvidia-cusparse-cu12`, `nvidia-npp-cu12`, `nvidia-nvjpeg-cu12`, `nvidia-nvjitlink-cu12`, `nvidia-nvtx-cu12`, and `nvidia-nvml-dev-cu12`.

AIWF policy: do not mix CUDA component families casually. A `cu12` stack and a `cu13` stack must be treated as different wheelhouse targets.

## 5. CUDA_PATH and Visual Studio build customizations

The CUDA Toolkit installer sets `CUDA_PATH`. Visual Studio CUDA projects use CUDA build customization files such as `CUDA 13.2.props`. NVIDIA notes that explicitly selecting the Toolkit version for a project is often better than relying blindly on `$(CUDA_PATH)`, because newer Toolkit installs can change build customizations.

For Python source builds, the same concept applies: record exactly which Toolkit path was used.

## 6. NVCC mental model

`nvcc` is not a normal standalone compiler. It orchestrates host C++ compilation through `cl.exe` on Windows, CUDA device compilation, fatbin/PTX generation, and host/device linking. `nvcc --version` passing does not prove `cl.exe` is usable.

## 7. GPU architectures and TORCH_CUDA_ARCH_LIST

PyTorch CUDA extensions default to compiling for visible GPU architectures plus PTX. PyTorch documents `TORCH_CUDA_ARCH_LIST` as the override. For a 4070 Ti Super class Ada GPU, compute capability is in the 8.9 family, so an AIWF single-machine build would normally prefer:

```powershell
$env:TORCH_CUDA_ARCH_LIST = '8.9'
```

A broader shared wheelhouse might include:

```powershell
$env:TORCH_CUDA_ARCH_LIST = '8.6 8.9+PTX'
```

Do not include every architecture by default. More architectures increase build time and wheel size.

## 8. PTX vs SASS

SASS/cubin is compiled machine code for a specific compute capability. PTX is intermediate representation that can JIT for newer compatible GPUs. PTX improves forward compatibility but can reduce performance versus explicitly compiled architecture targets.

## 9. cuDNN and provider checks

For PyTorch, check `torch.backends.cudnn.version()` and `torch.cuda.is_available()`. For ONNX Runtime, check `onnxruntime.get_available_providers()`. For a source-built CUDA extension, add a real operation smoke test. Import success is not enough.

## 10. AIWF wheelhouse targets

Separate wheelhouses by ABI target, for example `windows-cp312-torch2.x-cu12x-sm89`. The exact names should come from the actual environment, not wishful thinking.

## 11. Never trust one variable alone

`nvidia-smi`, `nvcc --version`, `cl.exe`, `torch.cuda.is_available()`, `torch.version.cuda`, ONNX provider lists, `deviceQuery`, `bandwidthTest`, and package-specific smoke tests each prove different layers.
