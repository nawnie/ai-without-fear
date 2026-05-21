# build

## RAG purpose
PEP 517/518 build frontend used to turn a source tree with pyproject.toml into sdist/wheel artifacts.

## Why AI Without Fear cares
Local AI work frequently depends on packages that ship C/C++/CUDA/Rust extensions. When PyPI wheels lag behind Python, Torch, CUDA, or Windows versions, AIWF may need to build a local wheelhouse instead of telling beginners to compile during install.

## Common import / command patterns
- pip package: `build`
- import/module: `build`

## Install / pinning notes
Install into a clean build venv; run python -m build --wheel for pure/backend-driven builds.

## Windows / ComfyUI risk level
**low**

## Quick diagnostic commands
```powershell
python -m pip show build
```
```powershell
python -c "import importlib; importlib.import_module('build'); print('OK: build')"
```

## Common failure signatures
- Package builds from source unexpectedly because no matching wheel exists for Python/platform.
- Build isolation hides already-installed runtime packages needed by native extension discovery.
- Compiler, CUDA Toolkit, or Rust toolchain missing even though pip/build packages are installed.
- Wheel imports on the build machine but fails elsewhere because external DLL/shared-library dependencies were not bundled or documented.

## Dependency cluster notes
Wheelhouse cluster: pip/wheel/build + pyproject backend + compiler/toolchain + optional repair tool + manifest. Do not treat a compiled wheel as universal; tag it by Python ABI, OS, architecture, Torch version, CUDA version, and GPU target where relevant.

## Source context
AIWF local wheelhouse pass; Windows ComfyUI dependency repair; native extension build planning.

## RAG tags
`pip-package`, `v1.1-local-wheelhouse-native-build`, `low`, `windows-ai`, `build-tooling`, `wheelhouse`, `local-ai`

## Source URLs
- https://packaging.python.org/en/latest/guides/writing-pyproject-toml/
- https://pypi.org/project/build/
