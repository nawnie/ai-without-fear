param([Parameter(Mandatory=$true)][string]$RequirementsFile, [string]$Wheelhouse = ".\aiwf-wheelhouse\built\requirements", [string]$PythonExe = "python", [string]$ExtraIndexUrl = "")
$ErrorActionPreference = "Stop"
New-Item -ItemType Directory -Force -Path $Wheelhouse | Out-Null
$args = @("-m", "pip", "wheel", "-r", $RequirementsFile, "-w", $Wheelhouse)
if ($ExtraIndexUrl.Trim().Length -gt 0) { $args += @("--extra-index-url", $ExtraIndexUrl) }
Write-Host "Running: $PythonExe $($args -join ' ')"
& $PythonExe @args
if ($LASTEXITCODE -ne 0) { throw "Requirements wheel build failed with exit code $LASTEXITCODE" }
Get-ChildItem $Wheelhouse -Filter *.whl | Sort-Object Name | Select-Object Name,Length
