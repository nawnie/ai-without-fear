# ComfyUI-Advanced-ControlNet — Pass 02B Deep Schema

Core Advanced-ControlNet nodes are now schema-confirmed: advanced loaders, v2 apply nodes, timestep keyframes, latent keyframes, default/scaled/custom weights, Flux weights, and T2IAdapter weights.

AIWF rule: generate only current IDs, especially `ACN_AdvancedControlNetApply_v2`; keep old/deprecated IDs as do-not-generate.

Use advanced keyframes/weights when teaching scheduled control, strength curves, Flux block weights, masked control weights, or batch-index-specific latent control.
