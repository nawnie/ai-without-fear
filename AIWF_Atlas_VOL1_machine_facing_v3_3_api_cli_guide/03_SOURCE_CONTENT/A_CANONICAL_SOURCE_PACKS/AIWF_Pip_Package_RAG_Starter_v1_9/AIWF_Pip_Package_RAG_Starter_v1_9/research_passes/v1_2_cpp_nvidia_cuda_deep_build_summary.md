# v1.2 Research Pass — C++ / NVIDIA / CUDA Native Wheel Builds

## Scope

This pass expands the archive from package documentation into a native build knowledge base for cutting-edge AI dependencies.

## Added

- Deep C++/native Python build mental model.
- NVIDIA CUDA Windows reference.
- PyTorch C++/CUDA extension reference.
- Wheel ABI/tagging reference.
- CUDA component wheel map.
- Native build failure signature map.
- Windows CUDA wheel build playbook.
- C++/CUDA build environment smoke test script.
- Wheelhouse manifest generator script.
- 21 NVIDIA/CUDA package cards.

## Main conclusion

Local wheel compilation is necessary for some cutting-edge AI work, but it should be treated as build infrastructure, not as normal user installation. Beginners should consume tested wheelhouses; maintainers/builders should compile in isolated environments and publish wheel + manifest + smoke-test logs.

## Sources reviewed

- NVIDIA CUDA Installation Guide for Microsoft Windows.
- NVIDIA CUDA Quick Start Guide.
- NVIDIA CUDA Downloads.
- NVIDIA PyPI package index.
- PyTorch `torch.utils.cpp_extension` documentation.
