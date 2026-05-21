param([string]$OutDir = "$PWD\AIWF_NVIDIA_DLL_Report")
New-Item -ItemType Directory -Force -Path $OutDir | Out-Null
$patterns = @("cudnn*.dll", "cublas*.dll", "cufft*.dll", "curand*.dll", "cusolver*.dll", "cusparse*.dll", "nvrtc*.dll", "nvjitlink*.dll")
$entries = @()
$pathParts = ($env:PATH -split ';') | Where-Object { $_ -and (Test-Path $_) }
foreach ($part in $pathParts) { foreach ($pattern in $patterns) { Get-ChildItem -Path $part -Filter $pattern -ErrorAction SilentlyContinue | ForEach-Object { $entries += [ordered]@{ directory=$part; file=$_.Name; full_name=$_.FullName; length=$_.Length } } } }
$entries | ConvertTo-Json -Depth 4 | Set-Content -Path (Join-Path $OutDir "AIWF_NVIDIA_DLL_Load_Report.json") -Encoding UTF8
$entries | Sort-Object file, full_name | Format-Table -AutoSize | Out-String | Set-Content -Path (Join-Path $OutDir "AIWF_NVIDIA_DLL_Load_Report.txt") -Encoding UTF8
Write-Host "Found $($entries.Count) NVIDIA DLL candidates visible through PATH."
Write-Host "Report: $OutDir"
