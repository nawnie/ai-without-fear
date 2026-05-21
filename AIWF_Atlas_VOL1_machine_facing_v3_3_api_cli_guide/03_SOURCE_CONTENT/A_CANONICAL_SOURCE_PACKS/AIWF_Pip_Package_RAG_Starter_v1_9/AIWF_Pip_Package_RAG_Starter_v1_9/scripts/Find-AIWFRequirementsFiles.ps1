<#
AI Without Fear - Requirements File Finder
Finds requirements-like files across ComfyUI and custom_nodes trees.

Example:
  .\Find-AIWFRequirementsFiles.ps1 -Root F:\ComfyUI -OutDir .\reports
#>
param(
    [string]$Root = "F:\ComfyUI",
    [string]$OutDir = ".\reports",
    [switch]$IncludeVenv
)

$ErrorActionPreference = "Stop"
$rootPath = Resolve-Path -LiteralPath $Root
New-Item -ItemType Directory -Force -Path $OutDir | Out-Null
$outCsv = Join-Path $OutDir "aiwf_requirements_files.csv"
$outTxt = Join-Path $OutDir "aiwf_requirements_files.txt"

$patterns = @("requirements*.txt", "pyproject.toml", "setup.py", "setup.cfg", "environment*.yml", "environment*.yaml")
$skipParts = @(".git", "__pycache__", ".cache")
if (-not $IncludeVenv) { $skipParts += @("venv", ".venv", "python_embeded", "python_embedded") }

$files = foreach ($pat in $patterns) {
    Get-ChildItem -LiteralPath $rootPath -Filter $pat -Recurse -File -ErrorAction SilentlyContinue | Where-Object {
        $p = $_.FullName
        -not ($skipParts | Where-Object { $p -match [regex]::Escape("\$_\") })
    }
}

$rows = $files | Sort-Object FullName -Unique | ForEach-Object {
    $rel = $_.FullName.Substring($rootPath.Path.Length).TrimStart('\')
    $scope = if ($rel -match '^custom_nodes\([^\]+)') { "custom_node:" + $Matches[1] } elseif ($rel -match '^requirements') { "comfyui_root" } else { "other" }
    [pscustomobject]@{
        Root = $rootPath.Path
        RelativePath = $rel
        FullPath = $_.FullName
        Scope = $scope
        SizeBytes = $_.Length
    }
}

$rows | Export-Csv -NoTypeInformation -Encoding UTF8 -Path $outCsv
$rows | ForEach-Object { $_.FullPath } | Set-Content -Encoding UTF8 -Path $outTxt
Write-Host "Found $($rows.Count) requirement/config files."
Write-Host "CSV: $outCsv"
Write-Host "TXT: $outTxt"
