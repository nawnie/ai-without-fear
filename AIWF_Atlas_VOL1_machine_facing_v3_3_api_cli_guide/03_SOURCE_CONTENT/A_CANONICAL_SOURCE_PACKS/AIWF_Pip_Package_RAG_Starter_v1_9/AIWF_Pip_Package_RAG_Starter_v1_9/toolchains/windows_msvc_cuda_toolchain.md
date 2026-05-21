# Windows MSVC + CUDA Toolchain Card

## Purpose
This is not a pip package card. It documents the external toolchain needed when pip falls back to building C/C++/CUDA extensions on Windows.

## Required pieces
- 64-bit Python matching the target environment
- Microsoft Visual Studio or Build Tools with the **Desktop development with C++** workload
- Windows SDK selected through Visual Studio Installer
- CUDA Toolkit when compiling CUDA code, not just NVIDIA display drivers
- `cl.exe` visible to the build shell
- `nvcc.exe` visible for CUDA builds

## Diagnostics
```powershell
where cl
cl
where nvcc
nvcc --version
python -c "import platform, sys; print(sys.version); print(platform.architecture())"
```

## Notes
Microsoft documents that C++ support is an optional Visual Studio workload, not installed by default. NVIDIA documents that CUDA Toolkit installation on Windows includes development tools and supported Visual Studio compiler requirements. NVCC uses the host compiler found in the current execution path unless configured otherwise.

## Sources
- https://learn.microsoft.com/en-us/cpp/build/vscpp-step-0-installation?view=msvc-170
- https://docs.nvidia.com/cuda/cuda-installation-guide-microsoft-windows/
- https://docs.nvidia.com/cuda/cuda-compiler-driver-nvcc/
