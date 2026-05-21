<#
AI Without Fear - Requirements Inventory Merger
Reads requirements-like files and creates a normalized package/source CSV for RAG import.

Example:
  .\Merge-AIWFRequirementsIntoInventory.ps1 -Root F:\ComfyUI -OutDir .\reports
#>
param(
    [string]$Root = "F:\ComfyUI",
    [string]$OutDir = ".\reports"
)

$ErrorActionPreference = "Stop"
New-Item -ItemType Directory -Force -Path $OutDir | Out-Null
$tmp = Join-Path $OutDir "aiwf_requirements_files.csv"
& "$PSScriptRoot\Find-AIWFRequirementsFiles.ps1" -Root $Root -OutDir $OutDir | Out-Null
$files = Import-Csv $tmp
$out = Join-Path $OutDir "aiwf_requirements_packages_normalized.csv"

function Normalize-PackageLine([string]$line) {
    $raw = $line.Trim()
    if (-not $raw) { return $null }
    if ($raw.StartsWith('#')) { return $null }
    if ($raw -match '^-r\s+') { return $null }
    if ($raw -match '^(--extra-index-url|--index-url|--find-links|--trusted-host)') { return $null }
    $noComment = ($raw -split '\s+#', 2)[0].Trim()
    if ($noComment -match '^(?<name>[A-Za-z0-9_.-]+)\s*(?<spec>===|==|~=|>=|<=|>|<|!=).*$') {
        return [pscustomobject]@{ Package = $Matches['name']; Spec = $noComment.Substring($Matches['name'].Length).Trim(); RawLine = $raw }
    }
    if ($noComment -match '^(?<name>[A-Za-z0-9_.-]+)(\[.*\])?$') {
        return [pscustomobject]@{ Package = $Matches['name']; Spec = ''; RawLine = $raw }
    }
    return [pscustomobject]@{ Package = ''; Spec = ''; RawLine = $raw }
}

$rows = foreach ($file in $files) {
    if ($file.RelativePath -notmatch 'requirements.*\.txt$') { continue }
    Get-Content -LiteralPath $file.FullPath -ErrorAction SilentlyContinue | ForEach-Object {
        $n = Normalize-PackageLine $_
        if ($n -and $n.Package) {
            [pscustomobject]@{
                Package = $n.Package
                Spec = $n.Spec
                RawLine = $n.RawLine
                SourceScope = $file.Scope
                SourcePath = $file.RelativePath
            }
        }
    }
}

$rows | Sort-Object Package, SourceScope, SourcePath -Unique | Export-Csv -NoTypeInformation -Encoding UTF8 -Path $out
Write-Host "Normalized package requirements written to: $out"
Write-Host "Unique rows: $($rows.Count)"
