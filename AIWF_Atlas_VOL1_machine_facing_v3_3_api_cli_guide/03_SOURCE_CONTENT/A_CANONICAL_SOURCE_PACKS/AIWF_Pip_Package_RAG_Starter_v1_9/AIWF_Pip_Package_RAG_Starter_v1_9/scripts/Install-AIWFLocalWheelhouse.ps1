param([Parameter(Mandatory=$true)][string]$RequirementsFile, [Parameter(Mandatory=$true)][string]$Wheelhouse, [string]$PythonExe = "python")
$ErrorActionPreference = "Stop"
& $PythonExe -m pip install --no-index --find-links $Wheelhouse -r $RequirementsFile
if ($LASTEXITCODE -ne 0) { throw "Local wheelhouse install failed with exit code $LASTEXITCODE" }
