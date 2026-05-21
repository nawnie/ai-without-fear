param(
    [Parameter(Mandatory=$true)][string]$ModelPath,
    [int]$Port = 8080,
    [int]$Context = 4096,
    [int]$GpuLayers = 999
)
# Adjust executable path to your llama.cpp build.
$ServerExe = ".\llama-server.exe"
& $ServerExe -m $ModelPath --port $Port -c $Context -ngl $GpuLayers
