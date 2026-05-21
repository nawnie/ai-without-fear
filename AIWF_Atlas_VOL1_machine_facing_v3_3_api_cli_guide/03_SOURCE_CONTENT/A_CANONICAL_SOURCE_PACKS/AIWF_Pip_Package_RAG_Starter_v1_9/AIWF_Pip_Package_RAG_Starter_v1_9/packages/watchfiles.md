# watchfiles

## Identity
- **pip name:** `watchfiles`
- **import/module clue:** `watchfiles`
- **category:** `dev_server_file_watch_reload`
- **AIWF confidence:** source-reviewed for v1.6 LLM serving and OpenAI-compatible local server support.

## What it is
Fast file-watch/reload package used in dev servers; can trigger native-wheel/build issues on unusual Python versions.

## Why AIWF cares
This package belongs to the LLM serving layer rather than the basic ComfyUI image-generation layer. It can affect local chat servers, RAG agents, tool-call/JSON output systems, OpenAI-compatible endpoints, GPU memory behavior, streaming, and advanced support bundles.

## Install and build notes
- Keep beginner installs conservative. Prefer known-good wheels, containers, or project-provided install commands before source builds.
- Record Python version, torch version, CUDA runtime/toolkit, GPU model, driver version, and exact package version for any support ticket.
- For native/CUDA packages, import success is not enough; run a real model/kernel/server smoke test.
- Do not assume this package installs a server runtime unless the package is explicitly the serving engine or gateway.

## Deep support notes
- Check whether the failure is in **model loading**, **tokenizer/chat template**, **attention backend**, **KV cache sizing**, **quantization format**, **OpenAI API adapter**, **streaming transport**, or **client routing**.
- For OpenAI-compatible APIs, verify `/v1/models` before testing completions/chat completions.
- For structured output/guided decoding, capture the schema, guided backend, tokenizer, model family, and exact request payload.
- For quantized models, capture quantization method, checkpoint format, required kernels, compute capability, and whether the model was pre-quantized or quantized on load.

## AIWF diagnostic checks
```powershell
python -m pip show watchfiles
python - <<'PY'
import importlib
mod = 'watchfiles'
try:
    m = importlib.import_module(mod)
    print(mod, 'import ok', getattr(m, '__version__', 'version unknown'))
except Exception as e:
    print(mod, 'IMPORT FAILED:', repr(e))
PY
```

## Windows risk
`medium` — risk comes from native wheels, CUDA kernels, server/runtime assumptions, or async networking behavior. For Windows-first AIWF support, prefer one-click wheelhouses and explicit environment probes.

## Sources
https://watchfiles.helpmanual.io/ | https://pypi.org/project/watchfiles/
