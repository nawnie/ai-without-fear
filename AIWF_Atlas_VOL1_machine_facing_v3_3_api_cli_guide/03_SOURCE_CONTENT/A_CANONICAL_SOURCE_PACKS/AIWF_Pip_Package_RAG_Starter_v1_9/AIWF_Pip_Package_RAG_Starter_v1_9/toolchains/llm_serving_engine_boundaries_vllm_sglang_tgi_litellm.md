# LLM Serving Engine Boundaries: vLLM, SGLang, TGI, LiteLLM, Ray Serve

## Boundary map
- **vLLM:** inference engine plus OpenAI-compatible HTTP server.
- **SGLang:** high-performance serving framework for LLMs and multimodal models with OpenAI/Hugging Face API compatibility.
- **TGI:** Hugging Face Text Generation Inference server stack; now documented as maintenance mode, with Hugging Face recommending newer downstream engines such as vLLM and SGLang going forward.
- **LiteLLM:** gateway/router/proxy interface; it is not the GPU inference engine.
- **Ray Serve LLM:** distributed serving layer that can wrap vLLM-style engine configs and expose OpenAI-compatible APIs.

## Support rule
Never diagnose these as equivalent just because an OpenAI client can call them. Separate: engine, proxy, client, transport, model runtime, quantization, metrics, and deployment runtime.

## Sources
https://docs.vllm.ai/en/latest/getting_started/quickstart/ | https://docs.sglang.io/ | https://huggingface.co/docs/text-generation-inference/index | https://docs.litellm.ai/docs/ | https://docs.ray.io/en/latest/serve/llm/user-guides/vllm-compatibility.html
