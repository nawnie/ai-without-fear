<#
AI Without Fear - Pip Inventory Collector
Purpose: collect package versions from one or more Python/ComfyUI venvs without modifying them.
Day log only; no timestamps required in changelog.
#>
param(
    [string[]]$PythonPaths = @(
        "F:\ComfyUI\venv\Scripts\python.exe",
        "F:\ComfyUI_windows_portable\python_embeded\python.exe"
    ),
    [string]$OutDir = "$env:USERPROFILE\Documents\AIWF_Pip_Reports"
)

New-Item -ItemType Directory -Force -Path $OutDir | Out-Null

foreach ($Py in $PythonPaths) {
    if (-not (Test-Path $Py)) {
        Write-Host "[MISS] $Py" -ForegroundColor Yellow
        continue
    }

    $SafeName = ($Py -replace '[:\\/ ]','_')
    $FreezeOut = Join-Path $OutDir "pip_freeze_$SafeName.txt"
    $JsonOut = Join-Path $OutDir "pip_probe_$SafeName.json"

    Write-Host "[SCAN] $Py" -ForegroundColor Cyan
    & $Py -m pip freeze | Out-File -Encoding utf8 $FreezeOut

    $Probe = @'
import json, importlib, importlib.metadata as md, sys, platform
packages = [
 "torch","torchvision","torchaudio","xformers","triton","diffusers","transformers","accelerate",
 "safetensors","huggingface_hub","gradio","fastapi","pydantic","starlette","uvicorn","anyio",
 "numpy","Pillow","opencv-python","controlnet-aux","psutil","gfpgan","basicsr","realesrgan",
 "facexlib","insightface","onnxruntime","onnx","ultralytics","sentence-transformers","chromadb","lancedb"
]
rows=[]
for pkg in packages:
    try:
        version = md.version(pkg)
        status = "installed"
    except Exception as e:
        version = None
        status = "missing"
    rows.append({"package":pkg,"status":status,"version":version})
extra={"python":sys.version,"executable":sys.executable,"platform":platform.platform()}
try:
    import torch
    extra["torch_cuda"] = getattr(torch.version, "cuda", None)
    extra["cuda_available"] = torch.cuda.is_available()
    extra["gpu"] = torch.cuda.get_device_name(0) if torch.cuda.is_available() else None
except Exception as e:
    extra["torch_probe_error"] = repr(e)
print(json.dumps({"environment":extra,"packages":rows}, indent=2))
'@
    & $Py -c $Probe | Out-File -Encoding utf8 $JsonOut
    Write-Host "[DONE] $FreezeOut"
    Write-Host "[DONE] $JsonOut"
}
