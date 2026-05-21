param(
    [Parameter(Mandatory=$true)][string]$ModelPath
)
Write-Host "AIWF LLM Model File Layout Probe" -ForegroundColor Cyan
if (!(Test-Path $ModelPath)) { Write-Error "Path not found: $ModelPath"; exit 1 }
$files = Get-ChildItem -Path $ModelPath -Recurse -File -ErrorAction SilentlyContinue
$patterns = @('*.gguf','*.safetensors','model.safetensors.index.json','config.json','tokenizer.json','tokenizer.model','tokenizer_config.json','special_tokens_map.json','generation_config.json','processor_config.json','preprocessor_config.json','*.exl2')
foreach ($p in $patterns) {
    $matches = $files | Where-Object { $_.Name -like $p }
    if ($matches) {
        Write-Host "FOUND $p" -ForegroundColor Green
        $matches | Select-Object -First 10 FullName, Length | Format-Table -AutoSize
    } else {
        Write-Host "MISSING/NOT DETECTED $p" -ForegroundColor DarkYellow
    }
}
Write-Host "`nTop-level files:" -ForegroundColor Cyan
Get-ChildItem -Path $ModelPath -File | Select-Object Name, Length | Format-Table -AutoSize
