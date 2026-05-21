# KoboldCpp Boundary

KoboldCpp is a packaged local LLM application/runtime. It supports GGUF workflows and exposes its own API plus OpenAI-compatible `/v1` route.

## Support checklist
- Capture version/build.
- Capture GPU backend selection.
- Capture model path, context, and memory settings.
- Check `/api` docs route and `/v1` OpenAI route separately.
- Confirm whether failure is UI, API, model-load, or generation-time.

Sources: https://github.com/LostRuins/koboldcpp | https://github.com/LostRuins/koboldcpp/wiki
