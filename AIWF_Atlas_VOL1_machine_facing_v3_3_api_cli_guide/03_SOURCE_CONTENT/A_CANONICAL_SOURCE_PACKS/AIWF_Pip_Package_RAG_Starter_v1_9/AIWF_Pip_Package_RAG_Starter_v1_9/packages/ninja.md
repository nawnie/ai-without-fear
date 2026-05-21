# ninja

## RAG purpose
Ninja build system Python package/wrapper used by some native extension build pipelines for faster compilation.

## Why AI Without Fear cares
Relevant when packages compile CUDA/C++ extensions, especially SAM/flash-attention-like or custom node native dependencies.

## Common import patterns
- `ninja`

## Install / pinning notes
Having ninja does not provide MSVC/CUDA/CMake by itself. Treat as one part of native build stack.

## Windows / ComfyUI risk level
**medium**

## Quick diagnostic commands
```powershell
python -c "import ninja; print(ninja.__file__)"
```
```powershell
ninja --version
```

## Common failure signatures
- Ninja installed but compiler missing
- CMake cannot find ninja executable
- Build uses Visual Studio generator instead
- PATH points to wrong ninja

## Dependency cluster notes
Native build cluster: ninja + cmake + pybind11 + compiler toolchain + CUDA toolkit when needed.

## Source context
Native extension build triage; Windows AI package installs; CUDA/C++ package diagnostics.

## RAG tags
`pip-package`, `v0.6-media-video-audio-cli-build`, `medium`, `windows-ai`, `media`, `build-tooling`, `local-ai`

## Source URLs
- https://ninja-build.org/
- https://pypi.org/project/ninja/
