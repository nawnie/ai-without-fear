param(
    [string]$OutputDir = "$PWD\AIWF_TensorRT_Support_Bundle",
    [string]$Python = "python"
)

New-Item -ItemType Directory -Force -Path $OutputDir | Out-Null
$stamp = Get-Date -Format "yyyyMMdd_HHmmss"
$report = Join-Path $OutputDir "tensorrt_support_report_$stamp.txt"
"=== AIWF TensorRT Support Bundle ===" | Out-File $report
"Generated: $(Get-Date)" | Out-File $report -Append
"Python command: $Python" | Out-File $report -Append
"--- pip freeze TensorRT/NVIDIA slice ---" | Out-File $report -Append
& $Python -m pip freeze | Select-String -Pattern "tensorrt|nvidia|cuda|cudnn|onnx|polygraphy|torch" -CaseSensitive:$false | Out-File $report -Append
"--- Python import probe ---" | Out-File $report -Append
& $Python -c "import sys, os; print('python:', sys.version); print('executable:', sys.executable); print('CUDA_PATH:', os.environ.get('CUDA_PATH'))" | Out-File $report -Append
Write-Host "Wrote $report"
