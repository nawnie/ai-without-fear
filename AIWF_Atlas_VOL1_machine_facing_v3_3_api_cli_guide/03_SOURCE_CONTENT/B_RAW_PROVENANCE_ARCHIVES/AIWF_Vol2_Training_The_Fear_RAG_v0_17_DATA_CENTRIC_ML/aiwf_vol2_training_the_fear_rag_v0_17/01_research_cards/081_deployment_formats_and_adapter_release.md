# Deployment Formats and Adapter Release Packages

## Goal

A trained artifact must be usable. For AIWF, a training project is incomplete until the user knows how to load, share, archive, evaluate, and roll back the result.

## Release artifact types

### Raw adapter

LoRA/PEFT adapter only. Best for transparency and small file sizes. Requires users to have the base model.

### Merged model

Base + adapter merged. Easier for deployment, bigger file, heavier license/provenance obligation.

### Quantized model

GGUF/GPTQ/AWQ/etc. Good for inference. Must be tested separately because quantization changes behavior.

### Training run pack

The reproducibility package: configs, hashes, dataset manifest, eval results, logs, environment, source URLs, and changelog.

### Model card

Human-facing documentation: what it is, base model, data sources, intended use, limitations, license, safety notes, and eval summary.

## AIWF release folder proposal

```text
release/
├── README.md
├── MODEL_CARD.md
├── DATASET_CARD.md
├── LICENSE_NOTES.md
├── evals/
│   ├── eval_summary.md
│   ├── private_eval_results.json
│   └── regression_failures.md
├── adapters/
│   └── adapter_model.safetensors
├── merged_optional/
├── quantized_optional/
├── configs/
├── logs/
└── provenance/
    ├── source_manifest.csv
    ├── consent_manifest.csv
    └── hashes.json
```

## Load-target notes

- **Transformers/PEFT:** best for raw adapter testing and further training.
- **vLLM/TGI:** production-style serving; quantization compatibility matters.
- **llama.cpp/GGUF/Ollama-like:** local beginner deployment; requires export path and template metadata.
- **ComfyUI:** media adapter use; LoRA placement, trigger words, model family, and precision must be documented.

## Rule

Never delete the raw adapter and original training config just because a quantized export works. Quantized exports are deployment artifacts, not source-of-truth artifacts.

## Sources

- Hugging Face Hub GGUF docs: https://huggingface.co/docs/hub/en/gguf
- llama.cpp GitHub: https://github.com/ggml-org/llama.cpp
- PEFT adapter loading/merging docs: https://huggingface.co/docs/peft/index
- Model Cards paper/reference: https://arxiv.org/abs/1810.03993
