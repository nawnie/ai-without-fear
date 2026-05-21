param(
    [string]$Python = "python"
)

Write-Host "=== AIWF TensorRT Environment Probe ==="
& $Python -c "import sys, os; print('python:', sys.version); print('executable:', sys.executable); print('CUDA_PATH:', os.environ.get('CUDA_PATH'))"
$mods = @('tensorrt','onnx','onnxruntime','polygraphy','onnx_graphsurgeon','torch','torch_tensorrt','tensorrt_llm')
foreach ($m in $mods) {
    & $Python -c "import importlib; m='$m';
try:
 mod=importlib.import_module(m); print(m + ': OK version=' + str(getattr(mod, '__version__', 'unknown')))
except Exception as e:
 print(m + ': MISSING/ERROR ' + type(e).__name__ + ': ' + str(e))"
}
Write-Host "--- NVIDIA/TensorRT pip packages ---"
& $Python -m pip freeze | Select-String -Pattern "tensorrt|nvidia|cuda|cudnn|onnx|polygraphy|torch" -CaseSensitive:$false
