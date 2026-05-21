# v1.8 LLM Model File and Loader Notes

## Core lesson
Local LLM support fails at artifact boundaries as often as package boundaries. The RAG now separates:

1. HF model folders and safetensors shards
2. tokenizer/chat template/generation config assets
3. GGUF conversion and llama.cpp-family loaders
4. EXL2/ExLlamaV2/TabbyAPI loaders
5. Ollama Modelfile/model-store imports
6. LM Studio/KoboldCpp app-server boundaries
7. multimodal processors and modality-specific assets
8. RoPE/context-length compatibility

## AIWF rule
Before changing packages, identify the artifact family and runtime family. A GGUF belongs to llama.cpp-style loaders; an EXL2 folder belongs to ExLlamaV2/TabbyAPI; an HF safetensors folder belongs to Transformers/vLLM/SGLang/TGI-style loaders unless converted.
