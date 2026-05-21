# v1.9 Research Pass — Diffusion Model File/Layout Support

This pass adds model-file and model-folder support logic for diffusion workflows. It is intentionally not only a pip package pass; an AI support RAG must know where files live, what type of loader expects them, and whether the failure is a path problem, an architecture problem, or a missing companion asset.

## Added

- ComfyUI model folder map.
- `extra_model_paths.yaml` deep reference.
- Single-file checkpoint vs Diffusers folder reference.
- Checkpoint/LoRA/VAE/ControlNet/IP-Adapter layout guide.
- Modern model-family boundary notes for Flux, SD3, Wan, LTX, and Qwen-Image-style pipelines.
- Failure signature map for diffusion model layout issues.
- PowerShell probes for model library support bundles.
- Template central model-path YAML.

## Key support rules

1. Empty dropdown is usually path/indexing, not a pip install problem.
2. Load failure with key mismatch is usually architecture/loader mismatch, not a missing dependency.
3. Modern models often require separated denoiser, VAE, text encoder, tokenizer, and scheduler/config assets.
4. IP-Adapter requires companion vision encoders; FaceID variants may need InsightFace/ONNX assets.
5. Diffusers folder layout and single-file checkpoint layout are separate support lanes.

## Sources

- ComfyUI official Models documentation.
- ComfyUI `extra_model_paths.yaml.example`.
- Hugging Face Diffusers loading/pipeline/model-format docs.
- Hugging Face Diffusers LoRA adapter docs.
- Hugging Face Diffusers AutoencoderKL docs.
