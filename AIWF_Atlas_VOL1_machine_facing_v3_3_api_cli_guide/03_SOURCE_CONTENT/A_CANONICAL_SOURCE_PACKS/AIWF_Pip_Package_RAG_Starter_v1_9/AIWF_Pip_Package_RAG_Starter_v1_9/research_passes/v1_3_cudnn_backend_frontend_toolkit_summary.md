# v1.3 Research Pass — cuDNN Backend, Frontend, Toolkit, and DLL Loading

## Why this pass exists

The previous CUDA/C++ pass was not deep enough on cuDNN. cuDNN deserves its own support subsystem because modern AI breakage often happens after pip import succeeds: ONNX Runtime provider creation, PyTorch/ORT mismatch, DLL loading, cuDNN 8 vs 9 mismatch, and source-build header/link failures.

## Added package coverage

- nvidia-cudnn-cu11
- nvidia-cudnn-cu12
- nvidia-cudnn-cu13
- nvidia-cudnn
- nvidia-cudnn-frontend
- nvidia-cudnn-jit-cu12
- nvidia-cudnn-jit-cu13
- cuda-python
- cuda-toolkit
- cuda-bindings
- cuda-core
- cuda-pathfinder

## Added support concepts

- cuDNN is not the same thing as the CUDA Toolkit.
- cuDNN Backend and cuDNN Frontend should be separated in RAG retrieval.
- Windows requires thinking about DLL visibility, headers, and import libs separately.
- ONNX Runtime compatibility must match CUDA and cuDNN major versions.
- Framework-bundled libraries and NVIDIA component wheels should not be mixed blindly.

## Result

The RAG now has enough depth to answer “why does CUDA work in Torch but not in ONNX Runtime?”, “why does a native build ask for cudnn.h?”, “why did installing cuDNN not fix ComfyUI?”, and “when should I use nvidia-cudnn-cu12 vs manual cuDNN?”
