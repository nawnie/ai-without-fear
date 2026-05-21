# API and CLI Usage Field Guide Insert

**Placement:** Human-facing Field Guide / practical operations appendix.  
**Audience:** beginners moving from chat boxes into real local tools, APIs, command lines, and app wiring.  
**Atlas role:** This is a guide insert, not a raw Atlas-only embedding card. It should be readable by a person and usable by an AI assistant.

## Core idea

APIs and CLIs are two doors into the same machine room.

- **CLI:** best for quick local tests, model pulls, server startup, environment checks, and one-off runs.
- **API:** best for apps, Gradio front ends, agents, automation, queues, and repeatable workflows.

Torchie summary: **CLI is the wrench. API is the socket on the wall. Do not lick either.**

## The API mental model

Most AI APIs have the same skeleton:

1. **Endpoint** — the URL you call.
2. **Authentication** — API key, token, local server key, or sometimes no auth for localhost.
3. **Model** — the model ID or local model name.
4. **Input** — message, prompt, image, audio, file, or workflow payload.
5. **Options** — max tokens, temperature, top-p, seed, stream, tools, response format.
6. **Response** — text, JSON, tool call, image/video reference, file ID, or job ID.
7. **Errors** — rate limit, bad auth, wrong model, invalid schema, timeout, model not loaded.

The trick is not memorizing every provider. The trick is recognizing the pattern.

## PowerShell environment setup

Use environment variables. Never hardcode keys in scripts you might upload to GitHub.

```powershell
$env:OPENAI_API_KEY = "paste-key-here"
$env:ANTHROPIC_API_KEY = "paste-key-here"
$env:GEMINI_API_KEY = "paste-key-here"
$env:HF_TOKEN = "paste-key-here"
```

For a project folder, prefer a `.env` file that is ignored by Git:

```powershell
Add-Content .gitignore ".env"
```

If a command works only after you paste a secret into the file, Torchie has been forced to wear the tiny security shame hat. Avoid this.

## Cloud API quick patterns

### OpenAI-style Responses API pattern

OpenAI's current developer direction centers on the Responses API and tool/function calling. Treat this as an agent-capable endpoint pattern rather than only a plain chat call.

```powershell
$headers = @{
  "Authorization" = "Bearer $env:OPENAI_API_KEY"
  "Content-Type" = "application/json"
}

$body = @{
  model = "<model-name>"
  input = "Explain CFG scale like I am debugging a stubborn image workflow."
} | ConvertTo-Json -Depth 10

Invoke-RestMethod `
  -Uri "https://api.openai.com/v1/responses" `
  -Method Post `
  -Headers $headers `
  -Body $body
```

Use tool/function calling when the model needs to ask your code to do something specific: search files, run a calculation, call a local service, inspect a workflow, or fetch current data.

### Claude Messages API pattern

Claude's direct API surface is the Messages API. Your application manages the conversation state and tool loop.

```powershell
$headers = @{
  "x-api-key" = "$env:ANTHROPIC_API_KEY"
  "anthropic-version" = "2023-06-01"
  "content-type" = "application/json"
}

$body = @{
  model = "<claude-model-name>"
  max_tokens = 500
  messages = @(
    @{ role = "user"; content = "Give me a safe local AI deployment checklist." }
  )
} | ConvertTo-Json -Depth 10

Invoke-RestMethod `
  -Uri "https://api.anthropic.com/v1/messages" `
  -Method Post `
  -Headers $headers `
  -Body $body
```

Claude tool use follows the same broad idea: the model returns a structured tool call, then your application executes it or lets a server-side tool execute when that tool is provider-managed.

### Gemini generateContent pattern

Gemini uses `generateContent` style requests. Keep model names and versions checked against current Google AI docs because they move faster than a caffeinated dependency goblin.

```powershell
$uri = "https://generativelanguage.googleapis.com/v1beta/models/<gemini-model-name>:generateContent?key=$env:GEMINI_API_KEY"

$body = @{
  contents = @(
    @{ parts = @(@{ text = "Summarize this API pattern for a beginner." }) }
  )
} | ConvertTo-Json -Depth 10

Invoke-RestMethod -Uri $uri -Method Post -ContentType "application/json" -Body $body
```

## Local model CLI quick reference

### Ollama

Good for: beginner-friendly local models, quick pulls, local chat, OpenAI-compatible local testing.

```powershell
ollama pull qwen3
ollama run qwen3
ollama list
ollama ps
ollama show qwen3
ollama rm qwen3
ollama serve
```

Useful local API pattern:

```powershell
$body = @{
  model = "qwen3"
  messages = @(@{ role = "user"; content = "Say hello from local inference." })
  stream = $false
} | ConvertTo-Json -Depth 10

Invoke-RestMethod `
  -Uri "http://localhost:11434/api/chat" `
  -Method Post `
  -ContentType "application/json" `
  -Body $body
```

Ollama also supports OpenAI-compatible API patterns for many integrations, but check the current compatibility docs before assuming every OpenAI feature works locally.

### llama.cpp

Good for: GGUF models, direct control, CPU/GPU offload experiments, lightweight local servers.

```powershell
llama-cli -m "F:\Ai_Models\gguf\model.gguf" -p "Explain latents in one paragraph." -n 256
```

Run a local server:

```powershell
llama-server -m "F:\Ai_Models\gguf\model.gguf" --host 127.0.0.1 --port 8080
```

Basic local call:

```powershell
$body = @{
  messages = @(@{ role = "user"; content = "Give me a short local AI safety checklist." })
} | ConvertTo-Json -Depth 10

Invoke-RestMethod `
  -Uri "http://127.0.0.1:8080/v1/chat/completions" `
  -Method Post `
  -ContentType "application/json" `
  -Body $body
```

Keep this rule: llama.cpp generally expects **GGUF** model files. If your model is not GGUF, you are probably in conversion-land, where maps become optional and the terrain gets rude.

### vLLM

Good for: high-throughput serving, OpenAI-compatible server patterns, bigger GPU-backed deployments.

```powershell
vllm --help
vllm serve "Qwen/Qwen2.5-7B-Instruct" --dtype auto --host 127.0.0.1 --port 8000 --api-key local-dev-token
```

Call it through an OpenAI-compatible client pattern:

```powershell
$headers = @{ "Authorization" = "Bearer local-dev-token"; "Content-Type" = "application/json" }
$body = @{
  model = "Qwen/Qwen2.5-7B-Instruct"
  messages = @(@{ role = "user"; content = "What is model routing?" })
} | ConvertTo-Json -Depth 10

Invoke-RestMethod -Uri "http://127.0.0.1:8000/v1/chat/completions" -Method Post -Headers $headers -Body $body
```

Other useful commands:

```powershell
vllm chat --model "Qwen/Qwen2.5-7B-Instruct"
vllm complete --model "Qwen/Qwen2.5-7B-Instruct" --prompt "Define API gateway."
vllm bench --help
vllm collect-env
```

### Hugging Face Text Generation Inference / TGI

Good for: production-ish open model serving, container deployment, serving parameter inspection, private/gated Hugging Face models.

```powershell
text-generation-server download-weights "mistralai/Mistral-7B-Instruct-v0.3"
text-generation-server quantize "mistralai/Mistral-7B-Instruct-v0.3" "./quantized-output"
text-generation-launcher --model-id "mistralai/Mistral-7B-Instruct-v0.3" --port 8080
```

Use TGI when you want an inference server more than a quick chat toy. If you just want to ask a local model whether your prompt is nonsense, Ollama or llama.cpp is usually faster to sanity-check.

## ComfyUI API + CLI-adjacent operations

ComfyUI is primarily a visual workflow app, but it has API routes for automation. The important split:

- **workflow JSON** = visual graph format used by the UI
- **API prompt JSON** = node-ID keyed execution payload used by `/prompt`

Typical local launch:

```powershell
cd F:\ComfyUI
.\.venv\Scriptsctivate
python main.py --listen 127.0.0.1 --port 8188
```

Useful routes:

```text
POST /prompt          queue a prompt/workflow execution
GET  /prompt          check queue/execution information
GET  /history/<built-in function id>    retrieve finished prompt history
POST /upload/image    upload input image
GET  /view            view generated image/output
GET  /system_stats    check Python, device, VRAM/system stats
```

Do not expose ComfyUI to the public internet without authentication, network controls, and a very clear reason. Raw local AI servers are not houseplants. They do not become safe because you named them Steve.

## Gradio as the human control surface

Use Gradio when a command line becomes too sharp for the intended user.

Good Gradio wrappers expose:

- model selector
- input/output preview
- logs
- cost/latency panel
- safe defaults
- launch status
- exportable result files
- source/citation display
- queue/progress state

Gradio can mount into FastAPI, which makes it useful as a UI layer over APIs. The Atlas pattern is:

```text
Gradio UI -> local API/client code -> model runtime / ComfyUI / Atlas lookup -> visible result + logs
```

## Debugging checklist

When API/CLI calls fail, check in this order:

1. **Is the server running?** Check port and process.
2. **Is the model available?** Pull/download/load it first.
3. **Is the endpoint correct?** `/api/chat`, `/v1/chat/completions`, `/v1/responses`, `/prompt`, etc.
4. **Is auth required?** API key, bearer token, local server key.
5. **Is the payload shaped correctly?** Messages vs prompt vs workflow JSON.
6. **Is the model name exact?** Local names and hosted model IDs are unforgiving little gremlins.
7. **Is it a streaming response?** Disable streaming for debugging.
8. **Is VRAM/RAM enough?** A 70B model cannot be negotiated with by saying please.
9. **Is the server bound to the right host?** `127.0.0.1` for local only, `0.0.0.0` only when you understand the exposure.
10. **Are secrets safe?** No keys in screenshots, GitHub, logs, or shared prompts.

## Safe beginner defaults

- Start local servers on `127.0.0.1`.
- Use small models for first tests.
- Disable streaming until the basic call works.
- Log request IDs and errors, not API keys.
- Use environment variables for secrets.
- Use timeouts and retries.
- Keep a copy/paste smoke-test command for each server.
- Treat OpenAI-compatible as a family resemblance, not a legal guarantee.

## Source anchors

- [developers.openai.com](https://developers.openai.com/api/docs/guides/migrate-to-responses) — OpenAI Responses API positioning and migration from older Assistants-style patterns.
- [developers.openai.com](https://developers.openai.com/api/docs/guides/function-calling) — OpenAI function/tool calling model-to-external-system pattern.
- [docs.anthropic.com](https://docs.anthropic.com/claude/reference/getting-started-with-the-api) — Claude API overview, Messages API, batches, token counting, models API, and beta file/skills/agents/session APIs.
- [docs.anthropic.com](https://docs.anthropic.com/en/docs/get-started) — Claude API quickstart and first-call patterns.
- [docs.anthropic.com](https://docs.anthropic.com/en/docs/build-with-claude/tool-use) — Claude tool-use loop and client/server tool distinction.
- [ai.google.dev](https://ai.google.dev/gemini-api/docs/quickstart) — Gemini API quickstart and tool-use entry point.
- [ai.google.dev](https://ai.google.dev/gemini-api/docs) — Gemini generateContent API landing and model API entry point.
- [docs.ollama.com](https://docs.ollama.com/cli) — Ollama CLI commands such as run, launch, and model management.
- [docs.ollama.com](https://docs.ollama.com/api/introduction) — Ollama API stability/versioning and official libraries.
- [docs.ollama.com](https://docs.ollama.com/api/openai-compatibility) — Ollama OpenAI-compatible API support including /v1/responses constraints.
- [github.com](https://github.com/ggml-org/llama.cpp) — llama.cpp GGUF requirement and CLI/server local inference tools.
- [github.com](https://github.com/ggml-org/llama.cpp/blob/master/tools/server/README.md) — llama.cpp HTTP server / llama-server REST APIs and web UI.
- [docs.vllm.ai](https://docs.vllm.ai/en/latest/serving/openai_compatible_server/) — vLLM OpenAI-compatible HTTP server.
- [docs.vllm.ai](https://docs.vllm.ai/en/stable/cli/) — vLLM CLI commands: chat, complete, serve, bench, collect-env, run-batch.
- [huggingface.co](https://huggingface.co/docs/text-generation-inference/index) — Hugging Face Text Generation Inference overview.
- [huggingface.co](https://huggingface.co/docs/text-generation-inference/basic_tutorials/using_cli) — TGI CLI commands for downloading weights, serving, quantizing, and viewing serving parameters.
- [docs.comfy.org](https://docs.comfy.org/development/comfyui-server/comms_routes) — ComfyUI server routes such as /prompt, /upload/image, /view, /system_stats.
- [docs.comfy.org](https://docs.comfy.org/specs/workflow_json) — ComfyUI workflow JSON specification.
- [github.com](https://github.com/comfyanonymous/ComfyUI/blob/master/script_examples/basic_api_example.py) — ComfyUI API prompt example using node-id keyed API-format payloads.
- [gradio.app](https://www.gradio.app/docs/gradio/mount_gradio_app) — Gradio FastAPI mounting and SSR-related deployment surface.
