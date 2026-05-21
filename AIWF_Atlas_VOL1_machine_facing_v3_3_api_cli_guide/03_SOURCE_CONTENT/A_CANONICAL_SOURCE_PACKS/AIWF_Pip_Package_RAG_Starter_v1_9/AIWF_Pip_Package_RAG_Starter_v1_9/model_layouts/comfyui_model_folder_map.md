# ComfyUI Model Folder Map — AIWF v1.9

Purpose: teach the support system where diffusion assets live and which loader family should see them.

Official ComfyUI guidance: models are the weight files used by workflows: checkpoints, VAEs, LoRAs, ControlNets, and upscalers. They usually go under `ComfyUI/models/` in subfolders such as `checkpoints`, `loras`, and `vae`, then appear in matching loader-node dropdowns after refresh/restart.

## Core first-party-ish folders

| Folder key | Normal folder | Role | Support note |
|---|---|---|---|
| `checkpoints` | `models/checkpoints/` | Classic single-file model checkpoints | Usually `.safetensors` or legacy `.ckpt`; check architecture/base family before blaming install. |
| `diffusion_models` | `models/diffusion_models/` | Separated denoiser/DiT/UNet weights | Modern models may separate denoiser from VAE/text encoders. Legacy `models/unet` may also be supported. |
| `text_encoders` | `models/text_encoders/` | CLIP/T5/UMT5/Qwen/Gemma text encoders | `models/clip/` is a legacy location still seen in examples. |
| `clip_vision` | `models/clip_vision/` | Vision encoder for IP-Adapter/reference workflows | Missing vision encoder is a common IP-Adapter failure. |
| `vae` | `models/vae/` | Latent-to-image and image-to-latent encoder/decoder | VAE compatibility is architecture-specific. |
| `loras` | `models/loras/` | LoRA/adapters | LoRA must match base model family and target modules. |
| `controlnet` | `models/controlnet/` | Conditional control weights | ControlNet must match base model family and conditioning type. |
| `upscale_models` | `models/upscale_models/` | Upscale/detail models | Upscaler architecture/scale mismatch can look like bad generation. |
| `embeddings` | `models/embeddings/` | Textual inversion | Tokenizer/base-specific. |

## Community/custom-node folders

These are not universal. They are common enough that the AIWF support system should scan for them:

- `ipadapter`
- `sams`
- `ultralytics`
- `animatediff_models`
- `insightface`
- `facerestore_models`
- `vae_approx`
- `style_models`
- `gligen`
- `model_patches`
- `audio_encoders`

## Support rule

Do not answer “install package X” when the report says a loader dropdown is empty. First check:

1. The asset exists.
2. It is in a folder covered by ComfyUI's model path config.
3. The loader node is for the same asset family.
4. ComfyUI was refreshed/restarted after the file was added.
5. The file extension and architecture match the loader.
