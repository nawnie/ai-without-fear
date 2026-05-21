# pyproject-hooks

## RAG purpose
Low-level hook caller used by build frontends; important for understanding pyproject build failure messages.

## Why AI Without Fear cares
Local AI work frequently depends on packages that ship C/C++/CUDA/Rust extensions. When PyPI wheels lag behind Python, Torch, CUDA, or Windows versions, AIWF may need to build a local wheelhouse instead of telling beginners to compile during install.

## Common import / command patterns
- pip package: `pyproject-hooks`
- import/module: `pyproject_hooks`

## Install / pinning notes
Usually pulled as a dependency; do not pin manually unless debugging build frontend behavior.

## Windows / ComfyUI risk level
**low**

## Quick diagnostic commands
```powershell
python -m pip show pyproject-hooks
```
```powershell
python -c "import importlib; importlib.import_module('pyproject_hooks'); print('OK: pyproject_hooks')"
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
- https://pypi.org/project/pyproject-hooks/
- https://pip.pypa.io/en/stable/reference/build-system/
