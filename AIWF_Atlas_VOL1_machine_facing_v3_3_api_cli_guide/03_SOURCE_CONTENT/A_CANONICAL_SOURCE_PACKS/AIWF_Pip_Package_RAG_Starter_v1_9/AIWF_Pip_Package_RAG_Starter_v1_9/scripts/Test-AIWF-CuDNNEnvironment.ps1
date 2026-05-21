param(
    [string]$Python = "python",
    [string]$OutDir = "$PWD\AIWF_CuDNN_Report"
)
New-Item -ItemType Directory -Force -Path $OutDir | Out-Null
$report = [ordered]@{ python=$Python; nvidia_smi=$null; nvcc=$null; cl=$null; pip_packages=@{}; path_cudnn_hits=@(); python_probe=$null }
function Try-Run($cmd, $args) { try { return (& $cmd @args 2>&1 | Out-String).Trim() } catch { return "ERROR: $($_.Exception.Message)" } }
$report.nvidia_smi = Try-Run "nvidia-smi" @("--query-gpu=name,driver_version,compute_cap", "--format=csv")
$report.nvcc = Try-Run "nvcc" @("--version")
$report.cl = Try-Run "cl" @()
$packages = @("torch", "onnxruntime-gpu", "onnxruntime", "nvidia-cudnn-cu11", "nvidia-cudnn-cu12", "nvidia-cudnn-cu13", "nvidia-cudnn-frontend", "nvidia-cudnn-jit-cu12", "nvidia-cudnn-jit-cu13", "cuda-python", "cuda-toolkit", "cuda-bindings", "cuda-core", "cuda-pathfinder")
foreach ($p in $packages) { $report.pip_packages[$p] = Try-Run $Python @("-m", "pip", "show", $p) }
$pathParts = ($env:PATH -split ';') | Where-Object { $_ -and (Test-Path $_) }
foreach ($part in $pathParts) { try { $hits = Get-ChildItem -Path $part -Filter "cudnn*.dll" -ErrorAction SilentlyContinue | Select-Object -ExpandProperty FullName; foreach ($h in $hits) { $report.path_cudnn_hits += $h } } catch {} }
$probe = @'
import sys, json, importlib.util, os
out = {"executable": sys.executable, "version": sys.version, "env": {"CUDA_PATH": os.environ.get("CUDA_PATH"), "CUDNN_PATH": os.environ.get("CUDNN_PATH")}}
try:
    import torch
    out["torch"] = {"version": torch.__version__, "cuda": torch.version.cuda, "cuda_available": torch.cuda.is_available(), "cudnn_enabled": torch.backends.cudnn.enabled, "cudnn_version": torch.backends.cudnn.version()}
except Exception as e:
    out["torch_error"] = repr(e)
try:
    import onnxruntime as ort
    out["onnxruntime"] = {"version": getattr(ort, "__version__", None), "providers": ort.get_available_providers()}
except Exception as e:
    out["onnxruntime_error"] = repr(e)
mods = ["cuda", "cuda.bindings", "cuda.core", "cuda.pathfinder", "cudnn_frontend", "nvidia_cudnn_frontend"]
out["module_specs"] = {m: (importlib.util.find_spec(m) is not None) for m in mods}
print(json.dumps(out, indent=2))
'@
$temp = Join-Path $OutDir "aiwf_cudnn_probe.py"
Set-Content -Path $temp -Value $probe -Encoding UTF8
$report.python_probe = Try-Run $Python @($temp)
$jsonPath = Join-Path $OutDir "AIWF_CuDNN_Environment_Report.json"
$mdPath = Join-Path $OutDir "AIWF_CuDNN_Environment_Report.md"
$report | ConvertTo-Json -Depth 8 | Set-Content -Path $jsonPath -Encoding UTF8
$md = @("# AIWF cuDNN Environment Report", "", "## Python probe", '```json', $report.python_probe, '```', "", "## NVIDIA SMI", '```text', $report.nvidia_smi, '```', "", "## NVCC", '```text', $report.nvcc, '```', "", "## cuDNN DLLs visible through PATH", '```text', (($report.path_cudnn_hits | Sort-Object -Unique) -join "`n"), '```')
$md -join "`n" | Set-Content -Path $mdPath -Encoding UTF8
Write-Host "Wrote $jsonPath"
Write-Host "Wrote $mdPath"
