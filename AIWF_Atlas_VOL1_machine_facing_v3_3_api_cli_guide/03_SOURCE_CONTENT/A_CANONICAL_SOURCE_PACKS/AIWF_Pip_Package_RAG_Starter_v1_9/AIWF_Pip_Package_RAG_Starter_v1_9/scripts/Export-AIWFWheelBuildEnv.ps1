param([string]$OutFile = ".\aiwf-wheelhouse\reports\wheel_build_env.json", [string]$PythonExe = "python")
$ErrorActionPreference = "Stop"
New-Item -ItemType Directory -Force -Path (Split-Path $OutFile) | Out-Null
$envInfo = [ordered]@{}
$envInfo["where_python"] = (& where.exe python 2>$null) -join "`n"
$envInfo["where_cl"] = (& where.exe cl 2>$null) -join "`n"
$envInfo["where_nvcc"] = (& where.exe nvcc 2>$null) -join "`n"
$envInfo["nvcc_version"] = (& nvcc --version 2>$null) -join "`n"
$envInfo["pip_freeze"] = (& $PythonExe -m pip freeze 2>$null) -join "`n"
$envInfo | ConvertTo-Json -Depth 6 | Set-Content -Encoding UTF8 $OutFile
Write-Host "Wrote $OutFile"
