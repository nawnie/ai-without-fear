# Diffusion Model Asset Family Map — AIWF v1.9

## Base generation assets

- Checkpoints: classic single-file base models.
- Diffusion models / UNets / DiTs / Transformers: separated denoiser weights.
- Diffusers folders: multi-component pipeline directories.

## Conditioning assets

- LoRA / LyCORIS / adapters.
- ControlNet.
- IP-Adapter / image prompt adapters.
- Textual inversion embeddings.
- Style models / GLIGEN / regional prompt support assets.

## Encoder/decoder assets

- Text encoders: CLIP, T5, UMT5, Qwen/Gemma-style model-specific encoders.
- Tokenizers: mostly in Diffusers/HF folder layouts, but still important for local/offline support.
- CLIP Vision / image encoders.
- VAE / video VAE.
- Audio encoders for video/audio models.

## Automation/masking assets

- SAM/SAM2 segmentation.
- Ultralytics/YOLO detection.
- GroundingDINO/Florence/VLM detection-caption support.

## Finish/post assets

- Upscalers.
- Face restoration models.
- Detailers/inpainting helpers.
