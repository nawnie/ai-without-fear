# Native Build Failure Signatures

## Python / pip layer

| Error | Meaning | Fix direction |
|---|---|---|
| `No matching distribution found` | no compatible wheel/sdist for Python/platform/index | check Python version, package name, indexes |
| `Could not build wheels for ...` | source build failed | inspect compiler error above final pip summary |
| `pyproject.toml based projects` | modern isolated build backend path | inspect build-system requirements |

## MSVC layer

| Error | Meaning | Fix direction |
|---|---|---|
| `Microsoft Visual C++ 14.x or greater is required` | C++ Build Tools missing | install VS Build Tools C++ workload |
| `cl.exe not found` | build shell not initialized or compiler missing | use Developer PowerShell / fix PATH |
| `link.exe failed` | link stage failure | inspect library paths, ABI, missing symbols |

## CUDA layer

| Error | Meaning | Fix direction |
|---|---|---|
| `nvcc not found` | Toolkit/compiler not installed or PATH missing | install Toolkit or set CUDA_PATH/PATH |
| `Cannot find compiler 'cl.exe' in PATH` | nvcc cannot find host compiler | use Developer Shell or fix VS env |
| `unsupported gpu architecture` | arch flag not supported by installed Toolkit | adjust `TORCH_CUDA_ARCH_LIST` or Toolkit version |
| `no kernel image is available for execution on the device` | wheel lacks GPU architecture | rebuild with correct compute capability |
| `CUDA_HOME environment variable is not set` | PyTorch extension cannot locate Toolkit | set CUDA_HOME/CUDA_PATH or install Toolkit |

## Runtime DLL/provider layer

| Error | Meaning | Fix direction |
|---|---|---|
| `DLL load failed while importing` | dependency DLL missing/incompatible | inspect PATH, wheel repair, CUDA DLLs |
| ONNX Runtime only shows `CPUExecutionProvider` | GPU provider not active | install correct GPU runtime/provider stack |
| `cudnn64_x.dll not found` | cuDNN DLL missing or wrong family | align framework CUDA/cuDNN package family |

## RAG instruction

When diagnosing, classify the failure layer first. Do not prescribe package upgrades until the layer is identified.
