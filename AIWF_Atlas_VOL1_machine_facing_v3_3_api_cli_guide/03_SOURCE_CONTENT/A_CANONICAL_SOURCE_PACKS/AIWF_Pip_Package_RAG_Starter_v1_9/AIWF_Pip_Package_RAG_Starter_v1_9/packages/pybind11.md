# pybind11

## RAG purpose
Header-only C++ binding library for exposing C++ types/functions to Python extension modules.

## Why AI Without Fear cares
Relevant because many AI packages expose native code to Python; pybind11 errors are build-architecture errors, not model/workflow errors.

## Common import patterns
- `pybind11`

## Install / pinning notes
Pip installing pybind11 supplies headers/CMake config, but a compiler/build backend is still required for packages that compile extensions.

## Windows / ComfyUI risk level
**medium**

## Quick diagnostic commands
```powershell
python -c "import pybind11; print(pybind11.__version__); print(pybind11.get_include())"
```

## Common failure signatures
- Missing headers during native build
- CMake cannot find pybind11 config
- Compiler/ABI mismatch
- Package build fails but pybind11 import itself works

## Dependency cluster notes
Native binding cluster: pybind11 + cmake + setuptools/scikit-build + compiler toolchain.

## Source context
Native extension troubleshooting; Windows build-tooling RAG; source build explanations.

## RAG tags
`pip-package`, `v0.6-media-video-audio-cli-build`, `medium`, `windows-ai`, `media`, `build-tooling`, `local-ai`

## Source URLs
- https://pybind11.readthedocs.io/en/stable/installing.html
- https://pybind11.readthedocs.io/en/stable/compiling.html
- https://pypi.org/project/pybind11/
