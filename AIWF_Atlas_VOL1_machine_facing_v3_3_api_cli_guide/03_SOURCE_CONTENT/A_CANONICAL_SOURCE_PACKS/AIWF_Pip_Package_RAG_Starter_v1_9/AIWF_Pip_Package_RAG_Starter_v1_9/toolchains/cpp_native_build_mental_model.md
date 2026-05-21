# C++ / Native Python Build Mental Model for AI Packages

This is the foundation layer for understanding why the newest AI packages fail to install on Windows.

## 1. A Python package can contain several different things

A pip package can be:

1. **Pure Python**: only `.py` files. Usually portable.
2. **Python + prebuilt extension module**: ships `.pyd` on Windows, `.so` on Linux. Fast to install if the wheel matches your Python/OS/ABI.
3. **Source distribution requiring compilation**: pip downloads source and builds locally using MSVC, CMake, Ninja, Rust, CUDA, or other compilers.
4. **Runtime wrapper around external binaries**: import works only if a separate runtime/CLI/DLL exists.
5. **Meta-package**: installs other packages; may contain little code itself.

AI stacks usually fail at #2 and #3: the package either lacks a wheel for your Python/CUDA combo, or pip falls back to source compilation.

## 2. Windows native Python extension basics

On Windows, compiled Python extension modules commonly end in `.pyd`, but a `.pyd` is a DLL with Python extension entry points. A native wheel may also ship ordinary `.dll` files. The wheel must match Python ABI, platform tag, MSVC runtime assumptions, dependent DLLs, and CUDA/torch ABI expectations when it is a torch/CUDA extension.

## 3. MSVC, cl.exe, link.exe, and the Developer Shell

Most Windows C/C++ Python builds expect Microsoft's compiler toolchain. `cl.exe` compiles C/C++ source files; `link.exe` links objects/libraries into `.pyd`/`.dll` outputs; Windows SDK headers/libraries provide system APIs; Visual Studio Build Tools or Visual Studio Community provides the C++ workload.

A normal PowerShell window may not know where `cl.exe` is. A Visual Studio Developer PowerShell/CMD initializes `PATH`, `INCLUDE`, `LIB`, and related variables. AIWF scripts should detect toolchain availability instead of assuming it.

## 4. CMake, Ninja, setuptools, scikit-build-core, Meson, and maturin

Native Python builds increasingly use `pyproject.toml` rather than a direct `setup.py`. The build backend decides what tooling is needed: `setuptools`, `torch.utils.cpp_extension`, `scikit-build-core`, `meson-python`, `maturin`, or `cibuildwheel`.

The practical AIWF rule: read `pyproject.toml` first. It tells the installer what build backend and build requirements are involved.

## 5. The C++ standard and ABI problem

Many AI packages need C++14/C++17/C++20. The selected compiler must support the dialect requested by the package. CUDA Toolkit also constrains which host compilers and C++ dialects are supported. CUDA 13.2's Windows guide lists supported Visual Studio/MSVC versions and C++ dialects; this must be checked per Toolkit release, not guessed.

## 6. Python ABI and wheel tags

A wheel filename encodes compatibility. Example pattern:

```text
package-version-cp312-cp312-win_amd64.whl
```

The two `cp312` fields mean the Python tag and ABI tag. `win_amd64` means 64-bit Windows. If you are on Python 3.12 and only a `cp310` wheel exists, pip may try a source build. That is the danger point.

## 7. AIWF local wheel policy

1. Never make beginners compile by default.
2. Build wheels in a clean, isolated build venv.
3. Record compiler, CUDA Toolkit, torch version, Python version, source commit, and environment variables.
4. Test the wheel in a second clean install venv.
5. Store wheel + manifest + smoke-test log together.
6. Only then use the wheelhouse in one-click installers.

## 8. Failure-signature map

| Symptom | Likely layer |
|---|---|
| `Microsoft Visual C++ 14.x or greater is required` | MSVC/C++ Build Tools missing |
| `cl.exe not found` | not in Developer Shell or Build Tools missing |
| `nvcc fatal: Cannot find compiler 'cl.exe' in PATH` | CUDA sees no host compiler |
| `CUDA_HOME environment variable is not set` | CUDA Toolkit path not detected |
| `no kernel image is available for execution on the device` | extension was built without your GPU architecture |
| `DLL load failed while importing ...` | dependent DLL missing or incompatible |
| `undefined symbol` / unresolved external | ABI/link mismatch |
| `subprocess-exited-with-error` | wrapper error; inspect build log above the final pip summary |
| `Failed building wheel for ...` | source build failed; not necessarily package bug |

## 9. What the RAG must teach

The important troubleshooting move is to identify the failing layer before changing packages: Python version mismatch, missing wheel, missing compiler, missing CUDA Toolkit, torch/CUDA ABI mismatch, wrong GPU architecture, runtime DLL missing, or source too old for current compiler/Python.
