# vLLM OpenAI-Compatible Local Server Playbook

## Minimal smoke path
```powershell
python -m pip show vllm
python -c "import torch; print(torch.__version__, torch.version.cuda, torch.cuda.is_available())"
python -c "import vllm; print('vllm import ok')"
vllm serve Qwen/Qwen2.5-1.5B-Instruct --host 127.0.0.1 --port 8000 --gpu-memory-utilization 0.85
```

In another PowerShell:
```powershell
Invoke-RestMethod http://127.0.0.1:8000/v1/models
Invoke-RestMethod http://127.0.0.1:8000/metrics | Select-Object -First 20
```

## 16 GB VRAM conservative start
- Start with a small instruct model.
- Use `--gpu-memory-utilization 0.80` to `0.90`.
- Lower `--max-model-len` before blaming packages.
- Avoid high concurrent request settings until a single request path is stable.

## Evidence to save
- Full launch command.
- `python -m pip freeze`.
- `nvidia-smi`.
- Torch CUDA probe.
- vLLM logs from process start through first request.
- Request payload and error response.
