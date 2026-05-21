# v1.0 Local Wheelhouse Foundation

## Purpose
A local wheelhouse is a folder of `.whl` files that can reinstall a known-working AI environment without rebuilding native packages every time. It is not just a cache; it is an install artifact library.

For AI Without Fear, the wheelhouse exists for three reasons:

1. **Beginner installs:** one-click installers should install from known-good wheels instead of compiling on the user's machine whenever possible.
2. **Cutting-edge AI packages:** when upstream packages have no wheel for a new Python/Torch/CUDA combination, build once, test once, then reuse.
3. **Rollback/debugging:** if a custom node breaks a venv, the wheelhouse gives us a reproducible package set to restore from.

## Golden rule
Never call a wheel "good" just because it builds. A wheel is only AIWF-good after it installs into a clean venv and passes smoke tests for import, provider detection, and a minimal runtime call.

## Wheelhouse identity fields
Every wheelhouse should be labeled by:

- OS: Windows/Linux/macOS
- CPU architecture: usually x86_64/AMD64
- Python version and ABI tag
- Torch version
- Torch CUDA build tag, if applicable
- CUDA Toolkit version used to build native CUDA extensions
- NVIDIA driver version on the test machine
- GPU architecture target, when CUDA kernels are compiled
- source repo URL + commit/tag
- build command used
- smoke test command/result

## Basic commands
Build wheels for a requirements file:

```powershell
python -m pip wheel -r requirements.txt -w .\wheelhouse\built\current
```

Install only from a local wheelhouse:

```powershell
python -m pip install --no-index --find-links .\wheelhouse\built\current -r requirements.txt
```

Build a package from a local source checkout:

```powershell
python -m pip wheel . -w .\wheelhouse\built\current --no-deps
```

## What belongs here
Good candidates: native code, fragile Windows wheels, Torch/CUDA ABI packages, custom-node dependencies, and patched forks. Bad candidates: random pure-Python packages, untested third-party wheels, and wheels without source commit/build command/smoke test.

## Sources
- Python Packaging pyproject guidance: https://packaging.python.org/en/latest/guides/writing-pyproject-toml/
- pip wheel command: https://pip.pypa.io/en/stable/cli/pip_wheel/
- pip build system/build isolation: https://pip.pypa.io/en/stable/reference/build-system/
- Wheel binary format spec: https://packaging.python.org/specifications/binary-distribution-format/
