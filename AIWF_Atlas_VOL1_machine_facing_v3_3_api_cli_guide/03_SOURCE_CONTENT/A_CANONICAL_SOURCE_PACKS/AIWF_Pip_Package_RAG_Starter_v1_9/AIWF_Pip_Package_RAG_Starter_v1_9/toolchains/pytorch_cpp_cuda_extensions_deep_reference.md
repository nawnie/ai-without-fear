# PyTorch C++/CUDA Extension Deep Reference

## 1. Why this matters

Many cutting-edge AI repos ship custom kernels for speed or memory efficiency. If no wheel exists for your exact Python/Torch/CUDA/OS combo, pip attempts a local build. That is where users hit native compiler failure.

Examples include xFormers, flash-attention style packages, bitsandbytes variants, GroundingDINO/native detection stacks, custom samplers/ops, and research repos with `.cu` files.

## 2. PyTorch's extension helpers

PyTorch provides `CppExtension`, `CUDAExtension`, `BuildExtension`, and JIT helpers like `torch.utils.cpp_extension.load()`.

`CUDAExtension` sets up CUDA include paths, library paths, and runtime library linkage for a CUDA/C++ extension. `BuildExtension` handles mixed C++/CUDA/SYCL compilation and supports separate compiler flag lists for `cxx`, `nvcc`, and `sycl`.

## 3. Minimal setup.py pattern

```python
from setuptools import setup
from torch.utils.cpp_extension import BuildExtension, CUDAExtension

setup(
    name='aiwf_cuda_extension',
    ext_modules=[
        CUDAExtension(
            name='aiwf_cuda_extension',
            sources=['extension.cpp', 'extension_kernel.cu'],
            extra_compile_args={'cxx': ['/O2'], 'nvcc': ['-O2']},
        )
    ],
    cmdclass={'build_ext': BuildExtension},
)
```

## 4. TORCH_CUDA_ARCH_LIST

PyTorch documents that CUDA extensions default to compiling for all visible card architectures plus PTX. This is convenient but not always reproducible. AIWF should set it explicitly for wheelhouse builds.

```powershell
$env:TORCH_CUDA_ARCH_LIST = '8.9'
python -m pip wheel . -w .\wheelhouse
```

```powershell
$env:TORCH_CUDA_ARCH_LIST = '8.6 8.9+PTX'
python -m pip wheel . -w .\wheelhouse
```

## 5. MAX_JOBS

PyTorch's `BuildExtension` uses Ninja by default and can use many workers. On consumer systems, this can spike CPU/RAM usage. Use `MAX_JOBS` to limit parallelism:

```powershell
$env:MAX_JOBS = '6'
```

## 6. The torch/CUDA ABI lock

A compiled extension is not just tied to Python. It is tied to Python ABI tag, platform tag, torch version, torch CUDA build family, compiler/toolchain, GPU architecture list, and source commit.

## 7. Useful introspection

```powershell
python -c "import torch; from torch.utils.cpp_extension import CUDA_HOME; print(torch.__version__, torch.version.cuda, torch.cuda.is_available(), CUDA_HOME); print(torch.cuda.get_device_capability(0) if torch.cuda.is_available() else None)"
```

## 8. Common PyTorch extension failures

| Error fragment | What it usually means | AIWF response |
|---|---|---|
| `CUDA_HOME environment variable is not set` | Toolkit not located | install Toolkit or set CUDA_HOME/CUDA_PATH correctly |
| `cl.exe not found` | MSVC build env missing | launch Developer PowerShell or install Build Tools C++ workload |
| `ninja: build stopped: subcommand failed` | wrapper failure | read first compiler error above final ninja summary |
| `no kernel image is available` | wrong `TORCH_CUDA_ARCH_LIST` | rebuild for the actual GPU compute capability |
| `unresolved external symbol` | link/ABI mismatch | check torch version, libraries, source branch |
| `DLL load failed` | runtime DLL missing | inspect wheel with delvewheel; verify CUDA DLLs/provider path |

## 9. AIWF build discipline

Do not install a source-built wheel straight into the main ComfyUI venv first. Build in a clean build venv, output wheel to wheelhouse, install into a clean test venv using `--no-index --find-links`, run import plus actual operation smoke test, then install into ComfyUI.

## 10. What not to do

Do not run random `pip install --upgrade torch` inside a working ComfyUI venv to fix a build. Do not mix cu12/cu13 packages because a forum answer worked for someone else. Do not assume an import means GPU path works. Do not make end users compile unless there is no alternative.
