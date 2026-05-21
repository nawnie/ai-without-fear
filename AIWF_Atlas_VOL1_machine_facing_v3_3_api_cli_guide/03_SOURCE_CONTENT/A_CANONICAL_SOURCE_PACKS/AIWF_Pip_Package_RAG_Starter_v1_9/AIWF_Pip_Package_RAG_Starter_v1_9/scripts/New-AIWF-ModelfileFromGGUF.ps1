param(
    [Parameter(Mandatory=$true)][string]$GGUFPath,
    [string]$OutPath = ".\Modelfile",
    [string]$SystemPrompt = "You are a helpful local AI assistant."
)
if (!(Test-Path $GGUFPath)) { Write-Error "GGUF not found: $GGUFPath"; exit 1 }
$abs = (Resolve-Path $GGUFPath).Path
@"
FROM $abs
SYSTEM """$SystemPrompt"""
PARAMETER temperature 0.7
PARAMETER top_p 0.9
"@ | Set-Content -Path $OutPath -Encoding UTF8
Write-Host "Wrote $OutPath" -ForegroundColor Green
