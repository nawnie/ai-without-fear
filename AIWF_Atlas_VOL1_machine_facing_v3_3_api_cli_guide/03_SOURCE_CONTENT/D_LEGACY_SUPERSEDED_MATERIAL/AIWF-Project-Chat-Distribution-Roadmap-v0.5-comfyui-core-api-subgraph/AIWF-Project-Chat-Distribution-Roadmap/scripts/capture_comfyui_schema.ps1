<#
AIWF ComfyUI Schema Capture
Date: 2026-05-19

Purpose:
Capture the live ComfyUI node catalog so AIWF workflow generation can validate real class_type names,
input names, socket types, ranges, outputs, and tooltips instead of guessing.

Default ComfyUI URL: http://127.0.0.1:8188
#>

param(
    [string]$ComfyUrl = "http://127.0.0.1:8188",
    [string]$OutDir = ".\reports"
)

$ErrorActionPreference = "Stop"

New-Item -ItemType Directory -Path $OutDir -Force | Out-Null

$objectInfoPath = Join-Path $OutDir "comfyui_object_info.json"
$systemStatsPath = Join-Path $OutDir "comfyui_system_stats.json"
$summaryPath = Join-Path $OutDir "comfyui_schema_summary.md"

Write-Host "[AIWF] Capturing ComfyUI schema from $ComfyUrl" -ForegroundColor Cyan

try {
    $objectInfo = Invoke-RestMethod -Uri "$ComfyUrl/object_info" -Method Get -TimeoutSec 30
    $objectInfo | ConvertTo-Json -Depth 100 | Set-Content -Path $objectInfoPath -Encoding UTF8
    Write-Host "[OK] Saved object_info to $objectInfoPath" -ForegroundColor Green
} catch {
    Write-Host "[FAIL] Could not read /object_info. Is ComfyUI running at $ComfyUrl ?" -ForegroundColor Red
    Write-Host $_.Exception.Message -ForegroundColor Red
    exit 1
}

try {
    $systemStats = Invoke-RestMethod -Uri "$ComfyUrl/system_stats" -Method Get -TimeoutSec 30
    $systemStats | ConvertTo-Json -Depth 50 | Set-Content -Path $systemStatsPath -Encoding UTF8
    Write-Host "[OK] Saved system_stats to $systemStatsPath" -ForegroundColor Green
} catch {
    Write-Host "[WARN] Could not read /system_stats. Continuing with schema summary only." -ForegroundColor Yellow
}

$nodeNames = $objectInfo.PSObject.Properties.Name | Sort-Object
$totalNodes = $nodeNames.Count

$coreGuess = @()
$customGuess = @()
foreach ($name in $nodeNames) {
    if ($name -match "^(CheckpointLoader|CLIPTextEncode|KSampler|VAEDecode|VAEEncode|SaveImage|PreviewImage|LoadImage|EmptyLatentImage|ControlNet|LoraLoader|UNETLoader|VAELoader|DualCLIPLoader)") {
        $coreGuess += $name
    } else {
        $customGuess += $name
    }
}

$summary = @()
$summary += "# AIWF ComfyUI Schema Summary"
$summary += ""
$summary += "Date: $(Get-Date -Format yyyy-MM-dd)"
$summary += ""
$summary += "## Capture"
$summary += ""
$summary += "- ComfyUI URL: `$ComfyUrl`"
$summary += "- Object info file: `$objectInfoPath`"
$summary += "- System stats file: `$systemStatsPath`"
$summary += "- Total node class types detected: $totalNodes"
$summary += ""
$summary += "## Common core-like class types detected"
$summary += ""
foreach ($name in ($coreGuess | Select-Object -First 200)) { $summary += "- `$name`" }
$summary += ""
$summary += "## Other/custom/API class types detected"
$summary += ""
foreach ($name in ($customGuess | Select-Object -First 300)) { $summary += "- `$name`" }
$summary += ""
$summary += "## AIWF Next Step"
$summary += ""
$summary += "Attach `comfyui_object_info.json` when asking AIWF to repair or generate workflows. This prevents guessed node names and missing input sockets."

$summary | Set-Content -Path $summaryPath -Encoding UTF8
Write-Host "[OK] Saved schema summary to $summaryPath" -ForegroundColor Green
Write-Host "[DONE] Attach the reports folder when requesting workflow repair/generation." -ForegroundColor Cyan
