# Quantization and Export — GGUF, bitsandbytes, GPTQ, AWQ, Quanto

## What quantization is

Quantization reduces numerical precision so models use less memory and can run on smaller hardware. It is usually an inference/deployment move, but 4-bit quantized bases are also central to QLoRA training.

## Key formats/backends

### bitsandbytes

Used heavily in Hugging Face QLoRA workflows. Supports 8-bit and 4-bit loading; NF4 is important for QLoRA-style finetuning.

### GGUF / llama.cpp

GGUF is the common local inference format for llama.cpp-style runtimes. Good for CPU/GPU local deployment and Ollama-style packaging. Usually export after training/merging, not during training.

### GPTQ

Post-training quantization method for efficient inference. Often used with GPU-focused inference stacks.

### AWQ

Activation-aware weight quantization. Protects salient channels based on activation statistics and is strong for efficient inference. Calibration data matters.

### Quanto

Hugging Face/Optimum quantization backend with support across modalities and weights such as int8/int4/int2/float8 depending on context. Also relevant for Diffusers quantization.

## Beginner rule

Train adapters in a training-friendly format first. Export/quantize only after:

1. adapter works,
2. merged model works if merging is intended,
3. eval suite passes,
4. licensing/provenance is documented.

## Quality traps

- A quantized model may pass casual chat but fail domain evals.
- Quantization can hurt math/code/rare-token behavior.
- Calibration data affects AWQ/GPTQ quality.
- Tiny quant formats are not automatically better if they destroy task accuracy.
- Merging a LoRA into base and then quantizing is not the same operational workflow as loading a LoRA separately at inference.

## Practical AIWF export ladder

1. Keep raw adapter checkpoint.
2. Save training config and dataset manifest.
3. Run evals on base + adapter.
4. Optionally merge adapter into base.
5. Run evals on merged FP/BF model.
6. Export quantized formats: GGUF for llama.cpp/Ollama-like deployment; GPTQ/AWQ for GPU inference stacks where appropriate.
7. Run evals again on quantized artifact.
8. Publish model card with all variants.

## Sources

- Hugging Face bitsandbytes quantization docs: https://huggingface.co/docs/transformers/en/quantization/bitsandbytes
- bitsandbytes Linear4bit docs: https://huggingface.co/docs/bitsandbytes/reference/nn/linear4bit
- llama.cpp GitHub: https://github.com/ggml-org/llama.cpp
- llama.cpp quantize README: https://github.com/ggml-org/llama.cpp/blob/master/tools/quantize/README.md
- Hugging Face GGUF docs: https://huggingface.co/docs/hub/en/gguf
- AWQ paper: https://arxiv.org/abs/2306.00978
- AutoAWQ GitHub: https://github.com/casper-hansen/AutoAWQ
- Optimum Quanto docs: https://huggingface.co/docs/transformers/en/quantization/quanto
