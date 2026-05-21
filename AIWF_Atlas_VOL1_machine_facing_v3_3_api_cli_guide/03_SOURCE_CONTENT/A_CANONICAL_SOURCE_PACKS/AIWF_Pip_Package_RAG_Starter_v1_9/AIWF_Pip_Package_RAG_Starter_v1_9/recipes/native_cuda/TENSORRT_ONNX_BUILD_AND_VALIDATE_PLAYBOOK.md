# TensorRT ONNX build and validate playbook

Use this as the support workflow before recommending TensorRT to a user.

## 1. Create an isolated venv

Do not use the user's working ComfyUI environment for first tests.

```powershell
py -3.11 -m venv .venv-trt-test
.\.venv-trt-test\Scripts\Activate.ps1
python -m pip install --upgrade pip setuptools wheel
```

## 2. Install a deliberate TensorRT family

Pick one family. Do not mix randomly.

```powershell
python -m pip install tensorrt-cu12 --extra-index-url https://pypi.nvidia.com
```

## 3. Verify import/version

```powershell
python -c "import tensorrt as trt; print(trt.__version__)"
```

## 4. Test ONNX before TensorRT

Use ONNX Runtime or framework validation first. If ONNX does not run correctly, TensorRT is not the first problem.

## 5. Build engine from known-good ONNX

Capture the full build log. Include precision flags, workspace/memory settings, shape profiles, and plugin paths.

## 6. Validate outputs

Compare source framework or ONNX Runtime output against TensorRT output. Use Polygraphy where possible.

## 7. Create a manifest

Store engine with a manifest containing package versions, GPU, driver, CUDA/cuDNN family, source ONNX hash, plugin list, and validation result.
