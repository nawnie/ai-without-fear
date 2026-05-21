<#
AIWF C++/CUDA Build Environment Smoke Test
Run from the same PowerShell environment you plan to build native/CUDA wheels in.
#>
param([string]$Python = "python")
Write-Host "=== AIWF C++/CUDA Build Environment Smoke Test ==="
Write-Host "PowerShell: $($PSVersionTable.PSVersion)"
Write-Host "CUDA_PATH: $env:CUDA_PATH"
Write-Host "TORCH_CUDA_ARCH_LIST: $env:TORCH_CUDA_ARCH_LIST"
Write-Host "MAX_JOBS: $env:MAX_JOBS"
function Test-Cmd($Name) {
    $cmd = Get-Command $Name -ErrorAction SilentlyContinue
    if ($cmd) { Write-Host "[OK] $Name -> $($cmd.Source)" }
    else { Write-Host "[MISS] $Name not found in PATH" }
}
Test-Cmd "cl.exe"
Test-Cmd "link.exe"
Test-Cmd "nvcc.exe"
Test-Cmd "cmake.exe"
Test-Cmd "ninja.exe"
Test-Cmd "git.exe"
Test-Cmd "nvidia-smi.exe"
Write-Host "`n--- Versions ---"
try { & cl 2>&1 | Select-Object -First 3 } catch {}
try { & nvcc --version } catch {}
try { & nvidia-smi } catch {}
try { & cmake --version | Select-Object -First 1 } catch {}
try { & ninja --version } catch {}
Write-Host "`n--- Python / Torch CUDA ---"
& $Python -c "import sys, platform; print('python', sys.version); print('platform', platform.platform()); import torch; from torch.utils.cpp_extension import CUDA_HOME; print('torch', torch.__version__); print('torch.version.cuda', torch.version.cuda); print('torch cuda available', torch.cuda.is_available()); print('CUDA_HOME from torch', CUDA_HOME); print('device', torch.cuda.get_device_name(0) if torch.cuda.is_available() else None); print('capability', torch.cuda.get_device_capability(0) if torch.cuda.is_available() else None); print('arch list', torch.cuda.get_arch_list() if torch.cuda.is_available() else None); print('cudnn', torch.backends.cudnn.version() if torch.cuda.is_available() else None)"
Write-Host "`nDone. If cl.exe or nvcc.exe is missing, do not attempt CUDA source builds from this shell."
