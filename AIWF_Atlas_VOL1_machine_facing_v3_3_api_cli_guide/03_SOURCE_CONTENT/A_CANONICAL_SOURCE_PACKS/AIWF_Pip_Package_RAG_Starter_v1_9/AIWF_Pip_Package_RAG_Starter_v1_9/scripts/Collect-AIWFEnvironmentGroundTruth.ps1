<#
AI Without Fear - Environment Ground Truth Collector
Collects pip freeze, pip check, torch/CUDA/provider info, and requirement files for a ComfyUI install.

Example:
  .\Collect-AIWFEnvironmentGroundTruth.ps1 -ComfyRoot F:\ComfyUI -PythonExe F:\ComfyUI\venv\Scripts\python.exe -OutDir F:\ComfyUI\aiwf_env_reports
#>
param(
    [string]$ComfyRoot = "F:\ComfyUI",
    [string]$PythonExe = "F:\ComfyUI\venv\Scripts\python.exe",
    [string]$OutDir = ".\aiwf_env_reports"
)

$ErrorActionPreference = "Continue"
New-Item -ItemType Directory -Force -Path $OutDir | Out-Null

& $PythonExe -m pip freeze | Set-Content -Encoding UTF8 (Join-Path $OutDir "pip_freeze.txt")
& $PythonExe -m pip check 2>&1 | Set-Content -Encoding UTF8 (Join-Path $OutDir "pip_check.txt")
& $PythonExe -m pip list --format=json | Set-Content -Encoding UTF8 (Join-Path $OutDir "pip_list.json")

$probe = @'
import json, sys, importlib.util
out = {"python": sys.version, "executable": sys.executable, "packages": {}}
for name in ["torch", "torchvision", "torchaudio", "xformers", "onnxruntime", "cv2", "PIL", "numpy", "scipy", "aiohttp", "pydantic", "sqlalchemy"]:
    info = {"importable": False}
    try:
        mod = __import__(name)
        info["importable"] = True
        info["version"] = getattr(mod, "__version__", "unknown")
        if name == "torch":
            info["cuda_available"] = mod.cuda.is_available()
            info["torch_cuda"] = getattr(mod.version, "cuda", None)
            info["cudnn"] = mod.backends.cudnn.version() if mod.backends.cudnn.is_available() else None
        if name == "onnxruntime":
            info["providers"] = mod.get_available_providers()
    except Exception as e:
        info["error"] = repr(e)
    out["packages"][name] = info
print(json.dumps(out, indent=2))
'@
$probePath = Join-Path $OutDir "aiwf_runtime_probe.py"
$probe | Set-Content -Encoding UTF8 $probePath
& $PythonExe $probePath | Set-Content -Encoding UTF8 (Join-Path $OutDir "runtime_probe.json")

& "$PSScriptRoot\Find-AIWFRequirementsFiles.ps1" -Root $ComfyRoot -OutDir $OutDir | Out-Null
& "$PSScriptRoot\Merge-AIWFRequirementsIntoInventory.ps1" -Root $ComfyRoot -OutDir $OutDir | Out-Null

Write-Host "AIWF environment report written to: $OutDir"
