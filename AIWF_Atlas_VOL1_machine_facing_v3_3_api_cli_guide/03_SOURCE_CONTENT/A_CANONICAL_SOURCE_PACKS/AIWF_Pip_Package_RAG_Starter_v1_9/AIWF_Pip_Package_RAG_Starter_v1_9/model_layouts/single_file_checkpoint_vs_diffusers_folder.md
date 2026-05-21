# Single-file Checkpoint vs Diffusers Folder — AIWF v1.9

Diffusion model support often fails because the user has the right weights but the wrong loader format.

## Single-file checkpoint

Common in A1111, Forge, ComfyUI, and Civitai workflows.

Typical files:

- `.safetensors`
- `.ckpt` legacy PyTorch pickle format
- sometimes `.pt` or `.pth` for component weights

Support facts:

- A single checkpoint may bundle denoiser, text encoder, and VAE, or it may not.
- `.safetensors` is preferred for safer weight loading.
- The loader has to infer architecture from tensor keys or metadata.
- Diffusers `from_single_file()` exists, but the docs note that it may infer model configuration from keys; local/offline use is more reliable when configs are supplied.

## Diffusers folder layout

Common in Hugging Face model repos and Python apps using Diffusers.

Typical layout:

```text
model_root/
  model_index.json
  scheduler/
  tokenizer/
  tokenizer_2/
  text_encoder/
  text_encoder_2/
  unet/ or transformer/
  vae/
  feature_extractor/
  image_encoder/
```

Support facts:

- `model_index.json` tells Diffusers which pipeline class/components to construct.
- Individual component folders usually contain config JSON plus `.safetensors` or `.bin` weights.
- Modern model families may use `transformer/` rather than `unet/`.
- A folder can be valid for Diffusers and still not directly usable by a ComfyUI loader unless the workflow/custom node expects that layout.

## RAG support rule

When a user says “I downloaded the model,” ask/inspect:

1. Is it a single file or a folder repo?
2. Which app/loader is trying to load it?
3. Does the workflow expect a checkpoint, separate denoiser, or Diffusers folder?
4. Are config/tokenizer/scheduler files present for offline local loading?
