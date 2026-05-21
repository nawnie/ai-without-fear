# Workflow QA Notes — Inpaint / Img2Img / Mask Paths

Date: 2026-05-19
Source lane: `rag/03_ml_theory_training_and_model_behavior/`
Status: bridge note for future AIWF workflow validator

## Purpose

These notes convert the v0.6 editing-theory pass into concrete workflow QA checks for ComfyUI JSONs and future Gradio modules.

## Checks to implement later

### Mask path checks

- Detect whether a mask input exists.
- Detect whether the mask reaches a latent mask / inpaint / sampler path.
- Flag mask branches that only preview/save the mask but never affect sampling.
- Flag possible mask dimension mismatch after crop, resize, or stitch nodes.

### Denoise/task mismatch checks

Warn when:

- scratch/dust/restoration workflow defaults to very high denoise;
- object replacement workflow defaults to very low denoise;
- face/identity workflow uses high denoise without reference/face conditioning;
- pose/body rewrite uses low denoise without structural control.

### CFG/task mismatch checks

Warn when:

- restoration/inpaint workflow defaults to very high CFG;
- face repair workflow uses high CFG to force identity;
- prompt-following failures are being solved only by raising CFG.

### Crop-and-stitch checks

Warn when:

- crop region has no overlap margin notes;
- stitch/blend path lacks feather/blur/mask-softening notes;
- the prompt describes the object but not the surrounding lighting/material context.

### VAE round-trip checks

Warn when:

- image is encoded/decoded repeatedly before final output;
- multiple restore/upscale/inpaint stages create avoidable softness.

## Output language

Use warnings that teach:

- “Mask exists, but I cannot see it reaching the sampler path.”
- “This denoise value may preserve too much for object replacement.”
- “This denoise value may rewrite identity-sensitive regions.”
- “High CFG may be overcooking this restoration. Try structure/reference control before raising prompt pressure.”
