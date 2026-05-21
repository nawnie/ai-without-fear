param([string]$OutDir = "$env:USERPROFILE\Documents\AIWF_LLMServing_SupportBundle")
New-Item -ItemType Directory -Force -Path $OutDir | Out-Null
python --version *> (Join-Path $OutDir 'python_version.txt')
python -m pip freeze *> (Join-Path $OutDir 'pip_freeze.txt')
python -m pip list *> (Join-Path $OutDir 'pip_list.txt')
try { nvidia-smi *> (Join-Path $OutDir 'nvidia_smi.txt') } catch {}
python - <<'PY' *> (Join-Path $OutDir 'torch_cuda_probe.txt')
import torch
print('torch', torch.__version__)
print('torch.version.cuda', torch.version.cuda)
print('cuda available', torch.cuda.is_available())
if torch.cuda.is_available():
    print('gpu', torch.cuda.get_device_name(0))
    print('capability', torch.cuda.get_device_capability(0))
PY
foreach ($url in @('http://127.0.0.1:8000/v1/models','http://127.0.0.1:8000/metrics')) {
  $safe = ($url -replace '[^a-zA-Z0-9]','_') + '.txt'
  try { Invoke-WebRequest $url -UseBasicParsing *> (Join-Path $OutDir $safe) } catch { $_.Exception.Message | Out-File (Join-Path $OutDir $safe) }
}
Compress-Archive -Path (Join-Path $OutDir '*') -DestinationPath "$OutDir.zip" -Force
Write-Host "Support bundle: $OutDir.zip"
