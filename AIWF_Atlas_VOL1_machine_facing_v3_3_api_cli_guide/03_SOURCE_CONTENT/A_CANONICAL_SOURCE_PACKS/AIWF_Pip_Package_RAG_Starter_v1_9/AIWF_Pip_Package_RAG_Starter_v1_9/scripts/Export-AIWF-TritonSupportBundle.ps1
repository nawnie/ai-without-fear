<#
Exports a lightweight Triton support bundle: tree, configs, health, metrics, pip freeze, and GPU summary.
#>
param(
  [string]$ModelRepository = ".\models",
  [string]$OutputDir = ".\AIWF_Triton_Support_Bundle",
  [string]$Python = "python",
  [string]$HostName = "127.0.0.1",
  [int]$HttpPort = 8000,
  [int]$MetricsPort = 8002
)
New-Item -ItemType Directory -Force -Path $OutputDir | Out-Null
"AIWF Triton Support Bundle" | Out-File "$OutputDir\README.txt" -Encoding utf8
Get-Date | Out-File "$OutputDir\collected_at.txt" -Encoding utf8
try { nvidia-smi | Out-File "$OutputDir\nvidia-smi.txt" -Encoding utf8 } catch { $_ | Out-File "$OutputDir\nvidia-smi_error.txt" -Encoding utf8 }
try { & $Python -m pip freeze | Out-File "$OutputDir\pip_freeze.txt" -Encoding utf8 } catch { $_ | Out-File "$OutputDir\pip_freeze_error.txt" -Encoding utf8 }
try { Get-ChildItem -Recurse $ModelRepository | Select-Object FullName,Length,LastWriteTime | Out-File "$OutputDir\model_repository_tree.txt" -Encoding utf8 } catch { $_ | Out-File "$OutputDir\model_repository_tree_error.txt" -Encoding utf8 }
try { Get-ChildItem -Recurse $ModelRepository -Filter config.pbtxt | ForEach-Object { "--- $($_.FullName) ---"; Get-Content $_.FullName } | Out-File "$OutputDir\config_pbtxt_all.txt" -Encoding utf8 } catch {}
foreach ($name in @('live','ready')) {
  $url = "http://$HostName`:$HttpPort/v2/health/$name"
  try { Invoke-WebRequest $url -UseBasicParsing -TimeoutSec 5 | Select-Object StatusCode,Content | Format-List | Out-File "$OutputDir\health_$name.txt" -Encoding utf8 } catch { $_ | Out-File "$OutputDir\health_$name`_error.txt" -Encoding utf8 }
}
try { Invoke-WebRequest "http://$HostName`:$MetricsPort/metrics" -UseBasicParsing -TimeoutSec 5 | Select-Object -ExpandProperty Content | Out-File "$OutputDir\metrics.txt" -Encoding utf8 } catch { $_ | Out-File "$OutputDir\metrics_error.txt" -Encoding utf8 }
Write-Host "Wrote $OutputDir"
