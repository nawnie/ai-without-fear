param(
  [string]$ComfyRoot = "F:\ComfyUI",
  [string]$ModelRoot = "F:\Ai_Models",
  [string]$OutDir = "$env:USERPROFILE\Documents\AIWF\DiffusionModelSupportBundle"
)

New-Item -ItemType Directory -Path $OutDir -Force | Out-Null
$layoutJson = Join-Path $OutDir "diffusion_model_layout_report.json"
& "$PSScriptRoot\Test-AIWF-DiffusionModelLayout.ps1" -ComfyRoot $ComfyRoot -ModelRoot $ModelRoot -Json | Out-File -Encoding utf8 $layoutJson

$paths = @(
  (Join-Path $ComfyRoot "extra_model_paths.yaml"),
  (Join-Path $ComfyRoot "extra_model_paths.yaml.example"),
  (Join-Path $ComfyRoot "user\comfyui.log")
)
foreach ($p in $paths) {
  if (Test-Path $p) { Copy-Item $p -Destination (Join-Path $OutDir (Split-Path $p -Leaf)) -Force }
}

Get-ChildItem -Path $ModelRoot -Directory -ErrorAction SilentlyContinue |
  Select-Object FullName, LastWriteTime |
  Export-Csv -NoTypeInformation -Encoding utf8 (Join-Path $OutDir "model_root_top_level_folders.csv")

Write-Host "AIWF diffusion model support bundle written to: $OutDir"
