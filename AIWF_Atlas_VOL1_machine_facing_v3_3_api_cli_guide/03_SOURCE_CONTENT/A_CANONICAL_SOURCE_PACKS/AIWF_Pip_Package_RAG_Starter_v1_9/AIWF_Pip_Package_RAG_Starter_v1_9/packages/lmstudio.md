# lmstudio

## Role in AIWF
`lmstudio` is the Python SDK for LM Studio. It is useful when AIWF tools want to talk to a local LM Studio runtime from scripts, notebooks, or backend services.

## Support boundary
Do not confuse the SDK with the LM Studio app/server. The SDK talks to LM Studio; it does not replace the app, model manager, or local server process.

## Install / runtime notes
```powershell
pip install lmstudio
```
LM Studio can serve models locally through REST APIs, SDKs, OpenAI-compatible endpoints, and Anthropic-compatible endpoints. Default OpenAI-compatible examples commonly use a local base URL like `http://localhost:1234/v1`.

## Windows risk
Low for the SDK; support issues usually live in the LM Studio app state, loaded model, server setting, or port/firewall boundary.

## Sources
- https://lmstudio.ai/docs/python
- https://lmstudio.ai/docs/developer/core/server
- https://lmstudio.ai/docs/developer/openai-compat
