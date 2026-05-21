# Wheel Tags, ABI, and Why Local Wheels Break

## 1. Wheel filename anatomy

```text
name-version-python_tag-abi_tag-platform_tag.whl
```

Example:

```text
example-0.1.0-cp312-cp312-win_amd64.whl
```

This is compatible with CPython 3.12 on 64-bit Windows. A different Python minor version may require a different wheel.

## 2. Why Python 3.12 vs 3.13 matters

If upstream only publishes `cp310` or `cp311` wheels and the user runs Python 3.12/3.13, pip may attempt to compile from source. This is why ComfyUI custom nodes often work for one user and explode for another.

## 3. Pure Python vs native wheel

`py3-none-any` is pure Python and broadly compatible. `cp312-cp312-win_amd64` is a native CPython 3.12 Windows x64 wheel. `abi3` uses stable ABI across multiple CPython versions only if the package was built for it.

## 4. Torch/CUDA wheels add hidden compatibility layers

A torch extension wheel may have a normal Python/platform tag but still be incompatible if it was built against a different torch/CUDA ABI. The filename may not fully encode that. AIWF manifests must.

## 5. AIWF wheel manifest fields

Required fields for native/CUDA wheels: wheel filename, Python version, platform, compiler, CUDA Toolkit, CUDA path, NVIDIA driver, torch version, torch CUDA family, `TORCH_CUDA_ARCH_LIST`, source repo, source commit, build command, smoke test result, and notes.

## 6. Repair vs rebuild

A wheel that imports on the build machine but fails elsewhere may be missing bundled DLLs. On Windows, `delvewheel` can inspect/repair wheels. On Linux, `auditwheel` is the analogous manylinux repair tool. Repair is not magic; licensing and redistribution rules still matter.

## 7. One-click installer implication

The one-click installer should prefer:

```powershell
python -m pip install --no-index --find-links .\wheelhouse -r requirements.lock.txt
```

Only fall back to online indexes when the local wheelhouse is incomplete.
