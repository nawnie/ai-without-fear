# Diffusion Model Layout Failure Signatures — AIWF v1.9

| Error / symptom | Likely layer | What to inspect |
|---|---|---|
| Model file not in loader dropdown | path/indexing | Folder key, extension, restart/refresh, `extra_model_paths.yaml`. |
| `missing key(s)` or `unexpected key(s)` | architecture mismatch | Wrong model family or wrong loader type. |
| LoRA loads but does nothing | adapter target mismatch | SD1.5 vs SDXL vs Flux target modules, trigger words, strength. |
| ControlNet has no visible effect | conditioning mismatch | Preprocessor output, model family, strength/start/end. |
| IP-Adapter node missing model | companion asset missing | Adapter model plus `clip_vision`; FaceID may require InsightFace. |
| VAE shape mismatch | latent/VAE mismatch | VAE family, latent channels, model-specific VAE. |
| Black/washed images | VAE/dtype/NaN | VAE, precision, NaN detection, fp16/bf16 support. |
| Diffusers local folder fails offline | config/layout | `model_index.json`, component configs, tokenizer/scheduler files. |
| `from_single_file` guesses wrong config | single-file inference | Provide explicit config/local config snapshot. |
| Workflow loads on one ComfyUI install but not another | path/custom nodes | `extra_model_paths.yaml`, custom node requirements, manager state. |
