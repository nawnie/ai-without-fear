<#
AIWF Triton serving environment probe.
Checks Python client package, common ports, health endpoints, and metrics endpoint.
#>
param(
  [string]$Python = "python",
  [string]$HostName = "127.0.0.1",
  [int]$HttpPort = 8000,
  [int]$GrpcPort = 8001,
  [int]$MetricsPort = 8002
)

Write-Host "=== AIWF Triton Serving Probe ==="
& $Python -m pip show tritonclient 2>$null
& $Python -c "import tritonclient; print('tritonclient import ok')" 2>$null

$live = "http://$HostName`:$HttpPort/v2/health/live"
$ready = "http://$HostName`:$HttpPort/v2/health/ready"
$metrics = "http://$HostName`:$MetricsPort/metrics"
foreach ($u in @($live,$ready,$metrics)) {
  Write-Host "`nGET $u"
  try {
    $r = Invoke-WebRequest $u -UseBasicParsing -TimeoutSec 5
    Write-Host "Status:" $r.StatusCode
    if ($u -like "*/metrics") { $r.Content -split "`n" | Select-Object -First 20 | ForEach-Object { Write-Host $_ } }
    else { Write-Host $r.Content }
  } catch { Write-Host "FAILED:" $_.Exception.Message }
}

Write-Host "`nTCP listener quick check:"
Get-NetTCPConnection -State Listen -ErrorAction SilentlyContinue | Where-Object { $_.LocalPort -in @($HttpPort,$GrpcPort,$MetricsPort) } | Format-Table -AutoSize
