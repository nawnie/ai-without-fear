# Checkpoint / LoRA / VAE / ControlNet / IP-Adapter Layout — AIWF v1.9

This is the support-system map for the most common diffusion companion files.

## Checkpoint

A checkpoint is usually the base generative model. It must match the workflow family: SD1.5, SDXL, SD3, Flux, Wan, LTX, Hunyuan, Qwen-Image, etc.

Common failure: user downloads a Flux denoiser or Diffusers folder and tries to load it with a classic SD checkpoint loader.

## LoRA

LoRA weights are small adapters that modify target layers in a base model. Hugging Face Diffusers documents LoRA as inserting new weights into the diffusion model while training only those new weights, making LoRAs smaller and faster to train/store.

Support checks:

- Base model family: SD1.5 LoRA will not properly target SDXL/Flux layers.
- Target modules: UNet-only, text-encoder, transformer/DiT, or mixed.
- Trigger words and scale.
- Whether the loader loaded into UNet/DiT and/or text encoder.

## VAE

A VAE encodes images into latent space and decodes latents back to images. Diffusers documents AutoencoderKL as the model used to encode images into latents and decode latent representations into images.

Support checks:

- Latent channels and scaling expectations.
- Model family: SDXL VAE vs SD1.5 VAE vs video/model-specific VAE.
- Embedded VAE in checkpoint vs external VAE override.
- Symptoms: washed colors, black output, NaN, shape mismatch, wrong decode resolution.

## ControlNet

ControlNet is a conditional-control companion model, not just a preprocessor. The preprocessor creates the control image/map; the ControlNet weight interprets that map for a compatible base model.

Support checks:

- Preprocessor type matches ControlNet type: canny/depth/openpose/lineart/tile/etc.
- Base model family matches: SD1.5 vs SDXL vs Flux variants.
- Conditioning strength/start/end not zeroed out.
- Control image resolution/aspect not broken.

## IP-Adapter

IP-Adapter workflows usually need both adapter weights and a CLIP Vision/image encoder. Missing `clip_vision` often looks like an IP-Adapter install failure.

Support checks:

- Adapter weight family: SD1.5/SDXL/Flux-specific.
- Vision encoder present and selected.
- FaceID variants may need InsightFace/ONNX Runtime assets separately.
- Custom node README may override default folder names.
