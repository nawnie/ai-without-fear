# cmake

## RAG purpose
Python-distributed CMake package/command used by native-extension builds and packages that require CMake at pip install time.

## Why AI Without Fear cares
Shows up when building packages with C++/CUDA code; relevant to Windows install failures for AI dependencies.

## Common import patterns
- `cmake`

## Install / pinning notes
The pip package can provide CMake, but the rest of the toolchain still matters: compiler, SDK, CUDA, headers, and generator.

## Windows / ComfyUI risk level
**medium**

## Quick diagnostic commands
```powershell
python -c "import cmake; print(cmake.__version__)"
```
```powershell
cmake --version
```

## Common failure signatures
- CMake installed but compiler missing
- Wrong generator selected on Windows
- CMake finds wrong Python/venv
- CUDA toolkit/header path not found

## Dependency cluster notes
Native build cluster: cmake + ninja + pybind11 + setuptools/scikit-build + compiler.

## Source context
Native extension build triage; package install repair; Windows ComfyUI dependency debugging.

## RAG tags
`pip-package`, `v0.6-media-video-audio-cli-build`, `medium`, `windows-ai`, `media`, `build-tooling`, `local-ai`

## Source URLs
- https://cmake.org/documentation/
- https://pypi.org/project/cmake/
- https://scikit-build-core.readthedocs.io/en/latest/guide/getting_started.html
