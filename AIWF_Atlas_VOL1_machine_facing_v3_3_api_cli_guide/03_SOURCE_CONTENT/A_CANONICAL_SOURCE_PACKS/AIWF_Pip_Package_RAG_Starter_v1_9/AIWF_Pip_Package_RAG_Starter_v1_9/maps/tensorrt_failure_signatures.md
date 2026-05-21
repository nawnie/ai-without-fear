# TensorRT failure signatures

## Install/index failures

Symptoms: package tries to fetch dependencies from `pypi.nvidia.com`; package is a small source distribution that pulls platform-specific NVIDIA wheels; corporate network cannot reach NVIDIA package index; package family mismatch between `cu12` and `cu13`.

Likely causes: missing `--extra-index-url https://pypi.nvidia.com`; restricted network; Python version/wheel tag not available; wrong CUDA-family metapackage.

## Import succeeds, build fails

Symptoms: `import tensorrt` works; ONNX parser fails; unsupported operator messages; missing plugin creator; dynamic shape/profile errors.

Likely causes: graph is unsupported as exported; plugins not loaded; optimization profiles missing/invalid; TensorRT version too old/new for exporter output.

## Engine builds, runtime fails

Symptoms: engine/plan file exists; load or execution fails; illegal memory access; binding shape mismatch; plugin library not found.

Likely causes: engine built for a different environment; incorrect binding/profile usage; missing runtime plugin DLL/shared library; CUDA/cuDNN/TensorRT runtime mismatch.

## Accuracy regression

Symptoms: output numerically diverges from PyTorch/ONNX Runtime; image/model output becomes garbage after optimization; FP16/INT8 path changes behavior.

Likely causes: precision mode too aggressive; calibration data poor/missing; unsupported op fallback difference; graph simplification changed semantics.
