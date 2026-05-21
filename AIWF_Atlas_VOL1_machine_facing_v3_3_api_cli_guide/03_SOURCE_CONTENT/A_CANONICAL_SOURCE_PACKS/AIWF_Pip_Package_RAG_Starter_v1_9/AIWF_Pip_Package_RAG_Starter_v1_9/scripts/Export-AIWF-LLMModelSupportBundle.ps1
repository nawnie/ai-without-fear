param(
    [Parameter(Mandatory=$true)][string]$ModelPath,
    [string]$OutDir = "$env:USERPROFILE\Documents\AIWF_Model_Support_Bundle"
)
New-Item -ItemType Directory -Force -Path $OutDir | Out-Null
$report = Join-Path $OutDir "model_file_report.txt"
"AIWF LLM Model Support Bundle" | Out-File $report
"ModelPath: $ModelPath" | Out-File $report -Append
"Date: $(Get-Date -Format yyyy-MM-dd)" | Out-File $report -Append
"" | Out-File $report -Append
Get-ChildItem -Path $ModelPath -Recurse -File -ErrorAction SilentlyContinue | Select-Object FullName, Length | Format-Table -AutoSize | Out-String | Out-File $report -Append
Write-Host "Wrote $report" -ForegroundColor Green
