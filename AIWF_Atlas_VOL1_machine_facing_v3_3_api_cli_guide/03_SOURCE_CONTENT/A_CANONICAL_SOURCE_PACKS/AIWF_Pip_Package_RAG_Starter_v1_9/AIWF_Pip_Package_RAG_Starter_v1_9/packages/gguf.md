# gguf

## Role in AIWF
`gguf` is model-format tooling for GGUF artifacts used by llama.cpp-family runtimes. It is not an inference server by itself.

## Why it matters
GGUF is the file boundary where many Hugging Face-style checkpoints become llama.cpp/KoboldCpp/LM Studio/Ollama-friendly artifacts. Support should ask: is the model HF safetensors, GGUF, EXL2, GPTQ/AWQ, or another layout?

## Install / runtime notes
- `pip install gguf` installs the Python package for writing GGUF files.
- llama.cpp itself requires models to be stored in GGUF format.
- Converting HF checkpoints to GGUF is a pipeline issue: source model files, tokenizer assets, chat template, quantization choice, and loader target must all match.

## Windows risk
Low for the Python helper; medium/high for source conversion workflows because they may require large RAM, disk, and matching tokenizer assets.

## Smoke checks
```powershell
python -c "import gguf; print('gguf import ok')"
```

## Sources
- https://github.com/ggml-org/llama.cpp/blob/master/gguf-py/README.md
- https://github.com/ggml-org/llama.cpp
