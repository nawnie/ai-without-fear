param(
    [Parameter(Mandatory=$true)][string]$WheelFile,
    [Parameter(Mandatory=$true)][string]$SourceRepo,
    [string]$SourceCommit = "unknown",
    [string]$Output = "wheelhouse_manifest.generated.json",
    [string]$Python = "python"
)
$info = [ordered]@{}
$info.wheel_file = $WheelFile
$info.source_repo = $SourceRepo
$info.source_commit = $SourceCommit
$info.generated_day = (Get-Date -Format "yyyy-MM-dd")
$info.cuda_path = $env:CUDA_PATH
$info.torch_cuda_arch_list = $env:TORCH_CUDA_ARCH_LIST
$info.max_jobs = $env:MAX_JOBS
$info.nvidia_smi = try { (& nvidia-smi 2>&1) -join "`n" } catch { $_.Exception.Message }
$info.nvcc = try { (& nvcc --version 2>&1) -join "`n" } catch { $_.Exception.Message }
$info.cl = try { (& cl 2>&1 | Select-Object -First 6) -join "`n" } catch { $_.Exception.Message }
$pyJson = & $Python -c "import json, sys, platform; out={'python':sys.version,'platform':platform.platform()};\ntry:\n import torch; out.update({'torch':torch.__version__,'torch_cuda':torch.version.cuda,'torch_cuda_available':torch.cuda.is_available()});\n out.update({'gpu':torch.cuda.get_device_name(0),'compute_capability':torch.cuda.get_device_capability(0),'arch_list':torch.cuda.get_arch_list(),'cudnn':torch.backends.cudnn.version()}) if torch.cuda.is_available() else None\nexcept Exception as e: out['torch_error']=repr(e)\nprint(json.dumps(out, indent=2))"
$info.python_torch = $pyJson | ConvertFrom-Json
$info | ConvertTo-Json -Depth 8 | Set-Content -Path $Output -Encoding UTF8
Write-Host "Wrote $Output"
