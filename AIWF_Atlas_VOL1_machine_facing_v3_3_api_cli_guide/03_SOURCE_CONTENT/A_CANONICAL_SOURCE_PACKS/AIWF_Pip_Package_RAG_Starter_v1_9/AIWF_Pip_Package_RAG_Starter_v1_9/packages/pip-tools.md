# pip-tools

## RAG purpose
Creates pinned requirements from input constraints; useful for turning a working AI venv into repeatable wheelhouse manifests.

## Why AI Without Fear cares
Local AI work frequently depends on packages that ship C/C++/CUDA/Rust extensions. When PyPI wheels lag behind Python, Torch, CUDA, or Windows versions, AIWF may need to build a local wheelhouse instead of telling beginners to compile during install.

## Common import / command patterns
- pip package: `pip-tools`
- import/module: `piptools`

## Install / pinning notes
Use pip-compile for deterministic lock files; keep CUDA/Torch wheel indexes explicit outside generic PyPI resolution.

## Windows / ComfyUI risk level
**low**

## Quick diagnostic commands
```powershell
python -m pip show pip-tools
```
```powershell
python -c "import importlib; importlib.import_module('piptools'); print('OK: piptools')"
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
- https://pip-tools.readthedocs.io/en/latest/
