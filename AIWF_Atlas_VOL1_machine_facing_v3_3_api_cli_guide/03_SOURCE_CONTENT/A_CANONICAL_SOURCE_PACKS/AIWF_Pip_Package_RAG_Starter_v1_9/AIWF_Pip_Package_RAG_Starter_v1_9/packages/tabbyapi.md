# tabbyAPI

## Role in AIWF
TabbyAPI is the official API server for ExLlamaV2/V3-style inference. It is the bridge between EXL2 loaders and OpenAI-compatible local app clients.

## Support boundary
- Source/runtime app, not a casual dependency.
- Backend: ExLlamaV2 / ExLlamaV3.
- API: FastAPI-based server with OpenAI-compatible behavior.
- Model: usually EXL2 quantized folder.

## Install / runtime notes
Keep TabbyAPI isolated because the project is rolling-release and may require dependency reinstalls after updates. A support bundle should include config file, model path, exact ExLlamaV2 version, torch/CUDA versions, server log, and first request payload.

## Windows risk
High. Use an isolated venv and avoid mixing it into ComfyUI or AnythingLLM runtime environments.

## Sources
- https://github.com/theroyallab/tabbyAPI/
- https://github.com/theroyallab/tabbyAPI/wiki/01.-Getting-Started
