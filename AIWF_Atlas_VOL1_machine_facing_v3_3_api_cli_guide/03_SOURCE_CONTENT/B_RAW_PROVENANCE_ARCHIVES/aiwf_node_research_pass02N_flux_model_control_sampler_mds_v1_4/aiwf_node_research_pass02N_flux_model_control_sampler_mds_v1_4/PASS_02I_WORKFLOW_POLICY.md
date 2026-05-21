# Pass 02I Workflow Policy Update

## New safe categories

- Small prompt utility nodes that output plain STRING may be used after schema confirmation.
- Mask combination/preview utilities may be used when the workflow does not depend on hidden downloads.

## Guarded categories

- Prompt Control V3 nodes are powerful but mutate/extend prompt behavior. Use only in advanced prompt-control workflows.
- CLIPSeg direct implementation downloads/loads a transformer model during node execution; use guarded workflow notes.
- Video Matting and SeedVR2 are video-capability systems; do not ship as beginner defaults.
- InfiniteYou and HyperLoRA are identity/adaptation systems; they require explicit consent framing and local dependency tests.
- Torch compile, FlashAttention, SageAttention, BlockSwap, model caching, and model offload toggles are hardware/version-sensitive.

## Stale repo rule

If a repo in the original list cannot be resolved after retry, do not generate current_field workflow rows. Mark it stale, and prefer a verified active repo that covers the same capability.
