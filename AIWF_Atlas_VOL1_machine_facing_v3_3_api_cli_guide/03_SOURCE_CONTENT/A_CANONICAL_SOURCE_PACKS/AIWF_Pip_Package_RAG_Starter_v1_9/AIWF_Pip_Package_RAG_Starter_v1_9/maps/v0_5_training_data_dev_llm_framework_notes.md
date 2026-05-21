# v0.5 Training/Data/Dev/LLM Framework Dependency Notes

## Core rule
Do not treat these packages as a random pip pile. They form distinct dependency families:

1. **HF training/data family**: `datasets`, `transformers`, `tokenizers`, `huggingface_hub`, `accelerate`, `bitsandbytes`, `sentencepiece`, `protobuf`.
2. **Compiled numeric/data family**: `numpy`, `scipy`, `pandas`, `scikit-image`.
3. **Text cleanup/tokenization family**: `regex`, `ftfy`, `sentencepiece`, `tokenizers`.
4. **Vision model utility family**: `torch`, `torchvision`, `kornia`, `timm`, `einops`.
5. **Local LLM/UI family**: `ollama`, `open-webui`, `llama-cpp-python`, `openai` client, OpenAI-compatible servers.
6. **RAG framework family**: `llama-index`, `langchain`, vector DBs, embedding packages, provider-specific integration packages.

## Windows risk notes
- `llama-cpp-python` is very high risk because installs can compile native code and may silently build CPU-only when GPU was expected.
- `bitsandbytes` is very high risk because CUDA/backend support must match torch, GPU, OS, and package build details.
- `open-webui` is high risk inside a shared AI venv; treat it as an app with its own environment.
- `scipy`, `pandas`, and `sentencepiece` are medium risk because wheels and Python-version compatibility matter.

## AIWF install policy
- ComfyUI venv: do not casually install Open WebUI, LangChain, LlamaIndex, or llama-cpp-python into it.
- Training venv: pin Hugging Face stack together.
- RAG/build venv: install document/vector frameworks separately.
- Local LLM venv: use Ollama/Open WebUI/llama-cpp-python only when that is the chosen backend.

## RAG behavior rule
When asked to fix an import error, first identify the package family before recommending pip commands. `import llama_cpp` failure is not fixed like `import tqdm` failure; it may require compiler/GPU build decisions.
