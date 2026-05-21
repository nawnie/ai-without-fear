param([Parameter(Mandatory=$true)][string]$SourcePath, [string]$Wheelhouse = ".\aiwf-wheelhouse\built\current", [switch]$NoBuildIsolation, [switch]$NoDeps, [string]$PythonExe = "python")
$ErrorActionPreference = "Stop"
New-Item -ItemType Directory -Force -Path $Wheelhouse | Out-Null
$args = @("-m", "pip", "wheel", $SourcePath, "-w", $Wheelhouse)
if ($NoBuildIsolation) { $args += "--no-build-isolation" }
if ($NoDeps) { $args += "--no-deps" }
Write-Host "Running: $PythonExe $($args -join ' ')"
& $PythonExe @args
if ($LASTEXITCODE -ne 0) { throw "Wheel build failed with exit code $LASTEXITCODE" }
Get-ChildItem $Wheelhouse -Filter *.whl | Sort-Object LastWriteTime -Descending | Select-Object -First 10 Name,Length,LastWriteTime
