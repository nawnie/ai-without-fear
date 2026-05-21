# AIWF cuDNN Failure Signatures

## Runtime/provider failures

| Symptom | Likely layer | First checks |
|---|---|---|
| `CUDAExecutionProvider` not available | ONNX Runtime package/provider | `pip show onnxruntime-gpu`; `ort.get_available_providers()` |
| Provider available but session creation fails | CUDA/cuDNN DLL or major mismatch | ONNX Runtime CUDA table; `nvidia-cudnn-cu12/cu13`; PATH |
| Torch CUDA works, ONNX CUDA fails | ORT uses different CUDA/cuDNN loading path | ORT package version vs PyTorch version; DLL preload options |
| `cudnn*.dll not found` | Windows DLL visibility | PATH, venv/site-packages NVIDIA component location, manual cuDNN bin |
| `cudnn64_8.dll` requested but cuDNN 9 installed | major mismatch | install runtime matching expected major |
| `cudnn64_9.dll` requested but cuDNN 8 installed | major mismatch | install runtime matching expected major |

## Build/link failures

| Symptom | Likely layer | First checks |
|---|---|---|
| `fatal error C1083: cannot open include file: cudnn.h` | headers missing | CUDNN_PATH/include, manual install include folder |
| unresolved `cudnn*` external symbols | import libs missing or not linked | CUDNN_PATH/lib/x64, linker args |
| build succeeds, import fails | runtime DLL not visible | PATH contains cuDNN bin |
| `cudnn_frontend.h` missing | frontend header package/source missing | nvidia-cudnn-frontend / cudnn-frontend repo include path |

## Bad fix patterns

- Installing every NVIDIA package into one venv without matching framework requirements.
- Mixing cu12 and cu13 component wheels in a stable ComfyUI venv.
- Copying DLLs into System32.
- Upgrading cuDNN globally to fix ONNX Runtime while PyTorch/custom nodes expect a different major.
- Trusting `pip list` over runtime provider smoke tests.
