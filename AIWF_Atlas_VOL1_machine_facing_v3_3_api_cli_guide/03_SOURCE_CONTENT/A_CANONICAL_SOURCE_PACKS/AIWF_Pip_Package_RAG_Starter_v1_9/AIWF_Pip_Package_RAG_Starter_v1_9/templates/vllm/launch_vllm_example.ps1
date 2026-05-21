param(
    [string]$Model = 'Qwen/Qwen2.5-1.5B-Instruct',
    [int]$Port = 8000,
    [double]$GpuMemoryUtilization = 0.85,
    [int]$MaxModelLen = 8192
)

vllm serve $Model --host 127.0.0.1 --port $Port --gpu-memory-utilization $GpuMemoryUtilization --max-model-len $MaxModelLen
