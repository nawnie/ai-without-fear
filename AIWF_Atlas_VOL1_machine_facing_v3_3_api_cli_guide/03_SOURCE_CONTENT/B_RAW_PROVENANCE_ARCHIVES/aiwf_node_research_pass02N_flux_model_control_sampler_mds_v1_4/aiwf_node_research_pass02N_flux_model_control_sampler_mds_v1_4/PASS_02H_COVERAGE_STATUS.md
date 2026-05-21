# Pass 02H Coverage Status

## Current status

- Original list rows: 291
- Covered: 97
- Remaining untouched: 189
- Retry/stale: 5
- Total left including retry/stale: 194

## Status counts

```json
{
  "remaining": 189,
  "covered": 61,
  "covered_light": 36,
  "needs_retry": 4,
  "needs_retry_or_stale_repo": 1
}
```

## Rows newly marked retry

- comfyui-portrait-master-zh-cn: search did not resolve clean source in this pass.
- ComfyUI-SeedVR2_VideoUpscaler: search did not resolve clean source in this pass.

## Practical takeaway

The face/upscale/restoration area is now covered well enough for general RAG answers and red-node triage. Dense passes should only be done when choosing an actual workflow path, especially for CCSR, Tiled Diffusion, Tiled KSampler, InfiniteYou, HyperLoRA, Topaz/external bridges, and video upscalers.
