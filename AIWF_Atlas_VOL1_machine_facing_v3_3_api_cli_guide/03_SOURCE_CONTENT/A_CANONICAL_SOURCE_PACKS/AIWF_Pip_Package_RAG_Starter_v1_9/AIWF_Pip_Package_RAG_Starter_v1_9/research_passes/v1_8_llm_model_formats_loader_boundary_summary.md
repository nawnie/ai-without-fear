# v1.8 Research Pass — LLM Model Formats and Loader Boundaries

This pass extends the archive beyond pip-package imports into the model artifact layer required by a real AI support system.

## Added package/runtime cards
- gguf
- exllamav2
- lmstudio
- tabbyAPI
- llama.cpp runtime
- koboldcpp
- jinja2
- hf-transfer

## Upgraded existing cards
- llama-cpp-python
- safetensors
- transformers
- ollama
- huggingface_hub

## Added model-format docs
- GGUF loader boundary
- safetensors shards and HF layout
- tokenizer/chat template/generation config
- multimodal processor assets
- RoPE/context-length support
- EXL2/ExLlamaV2/TabbyAPI boundary
- Ollama Modelfile/storage boundary
- LM Studio server boundary
- llama.cpp server boundary
- KoboldCpp boundary

## Support-system value
This turns the RAG from “what pip package is this?” into “what layer failed?” — package, model files, loader, server, client, or settings.
