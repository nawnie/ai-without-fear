# Modern Diffusion Asset Boundaries: Flux / SD3 / Wan / LTX — AIWF v1.9

Modern diffusion systems increasingly break the old “one checkpoint contains everything” assumption.

## Old mental model

```text
checkpoint.safetensors -> model + text encoder + maybe VAE
```

This works for many SD1.5/SDXL workflows.

## Modern mental model

```text
diffusion model / transformer / DiT weights
+ one or more text encoders
+ tokenizer assets
+ VAE
+ scheduler/runtime config
+ optional adapters/control modules
```

Support systems should not tell the user to “put it in checkpoints” without checking the loader type.

## Frequent modern failure patterns

| Family | Common boundary | Support implication |
|---|---|---|
| Flux | transformer/DiT + text encoders + VAE | Loader may expect `diffusion_models`, `text_encoders`, and `vae`, not one checkpoint. |
| SD3 / SD3.5 | multiple text encoders and transformer model | Dual/triple text encoder loaders matter. |
| Wan video | video diffusion weights, text encoder, VAE, clip vision/image encoder depending workflow | Missing one component can look like node failure. |
| LTX video | video model + text encoder + VAE/tokenizer assets | Diffusers folder vs ComfyUI separated model paths must be distinguished. |
| Qwen-Image | pipeline-specific components | Diffusers pipeline may work while generic checkpoint loader does not. |

## RAG rule

For every model-family answer, identify:

- base denoiser architecture
- text encoder family
- VAE family
- loader node expected input type
- whether asset is single-file or folder layout
- whether the workflow requires custom node support
