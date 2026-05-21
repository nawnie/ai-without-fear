# Quantization Map — Training vs Inference vs Export

## Why this matters

Quantization is one of the most confused topics in local AI. It can mean:

- training through a quantized base model
- loading a model in less VRAM for inference
- post-training compression for deployment
- optimizer-state reduction
- file-format conversion

These are not the same job.

## Terms

### Precision

Common precision/storage types:

- fp32: large, high precision, rarely needed for consumer inference.
- fp16: common GPU inference/training precision.
- bf16: often more stable than fp16 on supported hardware.
- int8/8-bit: reduced precision; often inference or optimizer savings.
- int4/4-bit: aggressive compression; common LLM local inference and QLoRA.
- FP8: emerging/modern training/inference optimization depending on hardware and framework.

## bitsandbytes

bitsandbytes provides 8-bit and 4-bit quantization primitives and 8-bit optimizers. In AIWF, it matters for:

- 8-bit optimizers to reduce training memory.
- 4-bit model loading for QLoRA.
- accessible consumer LLM fine-tuning flows.

### Use for

- QLoRA.
- memory-light LLM adapter training.
- reducing optimizer memory.

### Avoid assuming

- bitsandbytes quantization is the same as GGUF.
- a bitsandbytes-loaded model is automatically a good exported model.
- every model architecture supports it cleanly.

## GPTQ

GPTQ is post-training quantization for LLM weights. It is mostly an inference/deployment format family, not the default training path.

### AIWF position

Use GPTQ/AWQ/GGUF after training when the goal is deployment. Do not start a beginner training lesson by quantizing final artifacts unless they understand the training-vs-serving split.

### Note

AutoGPTQ itself is marked unmaintained and points users toward newer GPTQModel support. AIWF should avoid building new workflows around dead tooling unless documenting legacy compatibility.

## AWQ

AWQ, activation-aware weight quantization, is a low-bit weight-only quantization method designed to preserve important weights by considering activation behavior. It is common in efficient LLM deployment discussions.

### Use for

- inference compression.
- deployment on limited GPUs.
- serving models where AWQ kernels/runtime support exists.

### Avoid for

- assuming it is a training method.

## GGUF / llama.cpp quantization

GGUF is a llama.cpp ecosystem format for local inference. Quantization converts higher-precision GGUF files into smaller variants, with tradeoffs in perplexity/KL divergence and quality.

### Use for

- CPU/GPU mixed inference.
- Ollama/llama.cpp style deployment.
- sharing local-friendly models.

### Avoid for

- training directly in most mainstream trainer stacks.
- confusing GGUF adapter merge/export with training checkpoints.

## QLoRA is the training exception

QLoRA is the main case where quantization belongs directly in consumer training: a frozen quantized base model is used while LoRA adapters are trained.

## Practical workflow

### LLM LoRA workflow

1. Choose base model in HF format.
2. Train LoRA/QLoRA adapter.
3. Evaluate adapter vs base.
4. Optionally merge adapter into base.
5. Export/convert for inference: GGUF, GPTQ, AWQ, etc.
6. Re-evaluate quantized export because quantization can change behavior.

### Diffusion LoRA workflow

1. Train LoRA in native trainer format.
2. Test adapter in target UI.
3. Do not quantize the LoRA as a first concern.
4. If model format conversion is needed, verify compatibility with ComfyUI/A1111/Forge/etc.

## Beginner warning

Quantization can make a bad model smaller. It does not make it smarter. Quantization is not a substitute for dataset quality, prompt discipline, or evaluation.

## Sources

- bitsandbytes repo: https://github.com/bitsandbytes-foundation/bitsandbytes
- Hugging Face bitsandbytes docs: https://huggingface.co/docs/transformers/en/quantization/bitsandbytes
- QLoRA paper: https://arxiv.org/abs/2305.14314
- AutoGPTQ note: https://github.com/AutoGPTQ/AutoGPTQ
- AWQ repo: https://github.com/mit-han-lab/llm-awq
- AWQ paper: https://arxiv.org/abs/2306.00978
- llama.cpp quantize docs: https://github.com/ggml-org/llama.cpp/blob/master/tools/quantize/README.md
- Hugging Face GGUF docs: https://huggingface.co/docs/hub/gguf
