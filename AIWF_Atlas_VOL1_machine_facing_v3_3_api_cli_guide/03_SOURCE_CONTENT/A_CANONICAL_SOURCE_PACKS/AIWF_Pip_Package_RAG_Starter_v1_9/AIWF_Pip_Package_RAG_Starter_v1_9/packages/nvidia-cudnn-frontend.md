# nvidia-cudnn-frontend

## Identity
- **pip name:** `nvidia-cudnn-frontend`
- **import/module clue:** `cudnn_frontend / nvidia_cudnn_frontend`
- **category:** `nvidia_cudnn_frontend_api`
- **AIWF confidence:** source-reviewed for role, install-risk classification, and cuDNN/CUDA stack placement.

## What it is
cuDNN Frontend API package: Python and C++ frontend layers over the cuDNN Graph API.

## Why AIWF cares
cuDNN is one of the most common hidden failure points in modern local AI support. A package can import successfully while the actual CUDA execution path fails because the wrong cuDNN major version, wrong CUDA family, missing DLL path, or incompatible framework wheel is loaded. The support RAG must treat this as an ABI/runtime layer, not a simple pip package.

## Install and build notes
Install from pip for Python frontend usage or from source for development/samples. For source builds and samples, CUDAToolkit_ROOT and CUDNN_PATH can be used to override default discovery paths.

## Deep support notes
- Separate **CUDA driver**, **CUDA Toolkit/developer tools**, **CUDA runtime/component wheels**, **cuDNN backend runtime**, **cuDNN frontend API**, and **framework/runtime ABI**.
- For Windows manual backend installs, confirm that `bin\cudnn*.dll`, `include\cudnn*.h`, and `lib\x64\cudnn*.lib` exist in the selected cuDNN install root, and that the `bin` folder is on `PATH` when a non-framework runtime needs it.
- Do not assume PyTorch, ONNX Runtime, TensorRT, TensorFlow, and custom CUDA extensions all want the same cuDNN major. ONNX Runtime explicitly distinguishes cuDNN 8.x and 9.x compatibility for CUDA execution providers.
- A support system should capture: GPU name, driver, compute capability, Python version, torch version, torch CUDA version, `torch.backends.cudnn.version()`, ONNX Runtime providers, installed NVIDIA pip component wheels, `CUDA_PATH`, `PATH`, and any detected `cudnn*.dll` locations.

## AIWF diagnostic checks
1. `python -m pip show nvidia-cudnn-frontend` if this is an installed package path.
2. Run a smoke test for `torch.cuda.is_available()`, `torch.version.cuda`, and `torch.backends.cudnn.version()`.
3. `python -c "import onnxruntime as ort; print(ort.get_available_providers())"` for ONNX Runtime provider visibility.
4. On Windows, inspect `PATH` for cuDNN `bin` and CUDA Toolkit `bin` folders; check duplicate/stale cuDNN DLLs before changing versions.
5. For source builds, record MSVC version, `nvcc --version`, `CUDA_PATH`, `CUDNN_PATH`, and `TORCH_CUDA_ARCH_LIST` in the wheelhouse manifest.

## Windows risk
**high**. The risk is not only installation failure; it is silent provider fallback, DLL shadowing, major-version mismatch, or a framework using bundled libraries while another runtime uses system/component-wheel libraries.

## AIWF install stance
This is developer/advanced support material. It matters when a project is using cuDNN Graph API, frontend samples, experimental kernels, or native cuDNN-dependent builds; it is not required for normal PyTorch image generation.

## Source anchors
- https://docs.nvidia.com/deeplearning/cudnn/frontend/latest/index.html
- https://docs.nvidia.com/deeplearning/cudnn/installation/latest/python-frontend-install.html
- https://docs.nvidia.com/deeplearning/cudnn/installation/latest/cpp-frontend-install.html
- https://pypi.org/project/nvidia-cudnn-frontend/

## RAG status
Full card; reviewed in v1.3 cuDNN/toolkit depth pass.
