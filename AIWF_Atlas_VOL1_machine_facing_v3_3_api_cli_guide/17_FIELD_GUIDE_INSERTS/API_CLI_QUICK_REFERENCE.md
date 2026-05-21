# API + CLI Quick Reference

This file is the short version. Use the full guide insert for explanations.

## Environment variables

```powershell
$env:OPENAI_API_KEY = "..."
$env:ANTHROPIC_API_KEY = "..."
$env:GEMINI_API_KEY = "..."
$env:HF_TOKEN = "..."
```

## Ollama

```powershell
ollama pull qwen3
ollama run qwen3
ollama list
ollama ps
ollama show qwen3
ollama serve
```

Local API:

```powershell
Invoke-RestMethod -Uri "http://localhost:11434/api/chat" -Method Post -ContentType "application/json" -Body (@{model="qwen3";messages=@(@{role="user";content="hello"});stream=$false} | ConvertTo-Json -Depth 10)
```

## llama.cpp

```powershell
llama-cli -m "F:\Ai_Models\gguf\model.gguf" -p "hello" -n 128
llama-server -m "F:\Ai_Models\gguf\model.gguf" --host 127.0.0.1 --port 8080
```

## vLLM

```powershell
vllm --help
vllm serve "Qwen/Qwen2.5-7B-Instruct" --dtype auto --host 127.0.0.1 --port 8000 --api-key local-dev-token
vllm chat --model "Qwen/Qwen2.5-7B-Instruct"
vllm complete --model "Qwen/Qwen2.5-7B-Instruct" --prompt "hello"
vllm collect-env
```

## Hugging Face TGI

```powershell
text-generation-server download-weights "mistralai/Mistral-7B-Instruct-v0.3"
text-generation-server quantize "mistralai/Mistral-7B-Instruct-v0.3" "./quantized-output"
text-generation-launcher --model-id "mistralai/Mistral-7B-Instruct-v0.3" --port 8080
```

## ComfyUI

```powershell
cd F:\ComfyUI
.\.venv\Scripts\Activate.ps1
python main.py --listen 127.0.0.1 --port 8188
```

Common API routes:

```text
POST /prompt
GET /prompt
GET /history/{prompt_id}
POST /upload/image
GET /view
GET /system_stats
```

## Safety default

Use `127.0.0.1` until you deliberately configure auth, firewall rules, reverse proxy, and exposure controls. Local servers are friendly until the internet sees them. Then the raccoons arrive with curl.
