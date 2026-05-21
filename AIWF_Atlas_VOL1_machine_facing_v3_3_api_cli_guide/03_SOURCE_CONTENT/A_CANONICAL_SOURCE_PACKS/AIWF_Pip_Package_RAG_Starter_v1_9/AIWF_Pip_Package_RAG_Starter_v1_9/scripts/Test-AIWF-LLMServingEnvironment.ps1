$ErrorActionPreference = 'Continue'
Write-Host '=== AIWF LLM Serving Environment Probe ==='
python --version
python -m pip --version
python - <<'PY'
import importlib
mods = ['torch','vllm','sglang','openai','litellm','ray','xgrammar','outlines','lmformatenforcer']
for mod in mods:
    try:
        m = importlib.import_module(mod)
        print(f'{mod}: OK {getattr(m, "__version__", "")}'.strip())
    except Exception as e:
        print(f'{mod}: FAIL {type(e).__name__}: {e}')
try:
    import torch
    print('torch.cuda.is_available=', torch.cuda.is_available())
    print('torch.version.cuda=', torch.version.cuda)
    if torch.cuda.is_available():
        print('gpu=', torch.cuda.get_device_name(0))
except Exception as e:
    print('torch cuda probe failed:', repr(e))
PY
try { nvidia-smi } catch { Write-Host 'nvidia-smi unavailable:' $_.Exception.Message }
try { Invoke-RestMethod http://127.0.0.1:8000/v1/models | ConvertTo-Json -Depth 5 } catch { Write-Host 'vLLM /v1/models unavailable:' $_.Exception.Message }
try { (Invoke-WebRequest http://127.0.0.1:8000/metrics -UseBasicParsing).Content.Split("`n") | Select-Object -First 20 } catch { Write-Host 'vLLM /metrics unavailable:' $_.Exception.Message }
