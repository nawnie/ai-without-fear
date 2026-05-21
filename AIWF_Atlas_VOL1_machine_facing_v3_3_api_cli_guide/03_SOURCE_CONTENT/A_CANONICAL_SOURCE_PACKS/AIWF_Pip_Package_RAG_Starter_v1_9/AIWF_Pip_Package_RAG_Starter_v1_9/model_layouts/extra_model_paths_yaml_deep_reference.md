# `extra_model_paths.yaml` Deep Reference — AIWF v1.9

`extra_model_paths.yaml` is the clean way to point ComfyUI at a central model library instead of copying giant model files into every install.

## Why this matters

AI support systems should prefer central path configuration over symlink/junction guessing. Junctions can work, but they hide the real model root and can create update/support confusion. ComfyUI collaborators have explicitly recommended copying `extra_model_paths.yaml.example` to `extra_model_paths.yaml` and editing it instead of using filesystem tricks.

## Mental model

A model path block has:

- a named section, such as `comfyui:` or `a1111:`
- `base_path`
- optional `is_default: true`
- folder keys like `checkpoints`, `loras`, `vae`, `controlnet`, `clip_vision`, `text_encoders`, `diffusion_models`

## AIWF central-model default

```yaml
aiwf_models:
  base_path: F:/Ai_Models
  is_default: true
  checkpoints: checkpoints
  loras: loras
  vae: vae
  controlnet: controlnet
  clip_vision: clip_vision
  text_encoders: |
    text_encoders
    clip
  diffusion_models: |
    diffusion_models
    unet
  embeddings: embeddings
  upscale_models: upscale_models
  ipadapter: ipadapter
  sams: sams
  ultralytics: ultralytics
  animatediff_models: animatediff_models
  audio_encoders: audio_encoders
  model_patches: model_patches
```

## Windows path notes

- Prefer forward slashes in YAML: `F:/Ai_Models`.
- Avoid spaces in top-level model library paths when possible.
- Do not point `base_path` to the same folder level twice; `base_path: F:/Ai_Models` plus `checkpoints: checkpoints` is clearer than nesting `models/checkpoints` under an already-models base.
- If using the ComfyUI install itself as the base path, then `checkpoints: models/checkpoints/` makes sense.

## Support failure signatures

| Symptom | Likely issue | First check |
|---|---|---|
| Loader dropdown empty | Wrong folder key or ComfyUI not refreshed | Confirm folder in `extra_model_paths.yaml` and restart/refresh. |
| Only some model types show | Missing key for custom folder | Add the folder key used by the custom node. |
| Duplicate models shown | Same folder referenced by multiple blocks | Check all sections for overlapping base paths. |
| New install cannot see central models | YAML not renamed or invalid indentation | File must be `extra_model_paths.yaml`; YAML indentation matters. |
