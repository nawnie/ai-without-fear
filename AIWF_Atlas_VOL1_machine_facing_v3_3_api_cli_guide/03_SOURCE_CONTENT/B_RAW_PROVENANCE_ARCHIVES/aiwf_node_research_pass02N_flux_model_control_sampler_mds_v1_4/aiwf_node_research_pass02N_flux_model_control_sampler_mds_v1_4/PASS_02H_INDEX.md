# AIWF Node Research Pass 02H — Light Face, Upscale, Restoration Coverage

Date: 2026-05-19

Archive scope: Markdown, CSV, JSON research only. No workflow JSON generation and no full project re-archive.

## Mode

This pass follows the new rule:

- **Light coverage by default** for common/overlapping utility packs.
- **Dense notes only** for first-of-type, base-model-specific, new 2026 technique, or missing-capability packs.
- Any unresolved/stale repo is marked as retry; no fake coverage.

## Counts

- Original list rows: **291**
- Covered original rows: **97**
- Untouched original rows left: **189**
- Retry/stale rows: **5**
- Total left including retry/stale: **194**
- New original rows touched this pass: **20**
- New CSV rows this pass: **22**
- Pass 02 CSV rows total: **603**
- Schema-confirmed rows total: **200**
- Mapping-confirmed rows total: **311**

## Covered this pass

Face / portrait / identity utility block:

- FUSE Face Enhancer
- DZ-FaceDetailer
- Facerestore CF
- ComfyUI-Portrait-Maker
- ComfyUI-InfiniteYou
- ComfyUI-HyperLoRA
- comfyui-portrait-master
- comfyui-portrait-master-zh-cn — retry only

Tiled/upscale/restoration block:

- Tiled Diffusion & VAE for ComfyUI
- Tiled sampling for ComfyUI
- ComfyUI-CCSR
- ComfyUI-APISR
- ComfyUI-SeedVR2_VideoUpscaler — retry only
- ComfyUI InvSR
- ComfyUI Neural Network Latent Upscale
- SD-Latent-Upscaler
- Latent-Interposer
- ComfyUI Flowty LDSR
- AuraSR-ComfyUI
- Comfy-Topaz

## Exception notes

### CCSR

CCSR received a denser mini-review because it is a restoration/upscaling model family with custom loader, model-select, and tiled upscale nodes. `CCSR_Upscale` exposes sampling method, tile size/stride, VAE tile sizes, color fix, step range, t_min/t_max, seed, and keep-loaded behavior. This is high-value for the eventual upscaler comparison workflow, but it remains local-test only.

### Tiled Diffusion / Tiled KSampler

These are not just utility nodes; they change sampling strategy and can create seam/artifact behavior. Keep as guarded until exact schemas and sane presets are reviewed.

### InfiniteYou / HyperLoRA

These are identity/adaptation packs from Bytedance and deserve later dense review if AIWF builds identity-preserving workflows around them.

## Next likely block

Continue from original list row after Comfy-Topaz:

- ComfyUI-TopazVideoAI
- Bringing Old Photos Back to Life
- InstantIR wrapper
- HandFixer
- Detail Daemon
- Frame interpolation / VFI / temporal blending / video wrappers
