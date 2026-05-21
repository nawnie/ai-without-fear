# Source Family: Diffusion Model Layout and Loader Boundaries

This source family supports v1.9 model-layout guidance.

Primary sources:

- ComfyUI official model documentation for model placement and loader behavior.
- ComfyUI `extra_model_paths.yaml.example` for supported central-library folder keys.
- Hugging Face Diffusers loading docs for `DiffusionPipeline` and `model_index.json` behavior.
- Hugging Face Diffusers single-file/model-format docs for checkpoint vs Diffusers folder support.
- Hugging Face Diffusers LoRA adapter docs.
- Hugging Face Diffusers AutoencoderKL docs for VAE role.

RAG use:

- Prefer these sources before answering “where do I put this model?”
- Always distinguish app path support from model architecture compatibility.
- Refresh this source family whenever ComfyUI adds new first-party model folder keys or Diffusers changes single-file loading behavior.
