param([string]$Root = ".\aiwf-wheelhouse", [string]$PythonExe = "python")
$ErrorActionPreference = "Stop"
foreach ($d in @("built","source","logs","manifests","reports")) { New-Item -ItemType Directory -Force -Path (Join-Path $Root $d) | Out-Null }
& $PythonExe -c "import sys,platform,json; print(json.dumps({'python':sys.version,'executable':sys.executable,'platform':platform.platform(),'arch':platform.architecture()[0]}, indent=2))"
Write-Host "Wheelhouse initialized at $Root"
