# Assistant Context Export — CFG / Denoise / Img2Img / Inpainting

Date: 2026-05-19
Use this as a compact retrieval context for AIWF tooltips, local helpers, workflow QA, and beginner explanations.

## Core rules

- CFG controls prompt pressure, not quality.
- Denoise controls how much permission the model has to rewrite the source.
- Img2img adds noise to an existing image and denoises it back under prompt guidance.
- Inpainting is local image editing controlled by source image, mask, prompt, and often reference/control inputs.
- A mask is a contract, not just a selection.
- If the task needs structure, use structure control.
- If the task needs identity, use identity/reference control.

## Setting intuition

Low denoise:

- preserves source;
- good for restoration, scratches, dust, minor repair, identity-sensitive edits;
- bad for large replacements.

High denoise:

- gives model more freedom;
- good for object replacement, pose/background changes, creative repaint;
- risky for faces, identity, layout, and old-photo authenticity.

Low CFG:

- more natural/prior-driven;
- may ignore prompt.

High CFG:

- stronger prompt following;
- may create artifacts, seams, harsh texture, and over-literal results.

## Inpaint QA checklist

Before blaming the model, check:

1. Is the mask active in the correct direction?
2. Does the mask cover the whole target and enough edge context?
3. Does the mask reach the latent/sampler path?
4. Is denoise appropriate for the task?
5. Is CFG overcooking the edit?
6. Does the prompt describe the region in scene context?
7. Does the workflow need pose/depth/edge/reference/face control?
8. Are crop/stitch overlap and feathering adequate?
9. Are repeated VAE round trips softening the image?

## Tooltip language

CFG:

> Prompt pressure. Higher values chase the text harder, but too high can make images harsh, crunchy, or seam-prone.

Denoise:

> Rewrite permission. Lower values preserve the source. Higher values let the model change more.

Mask blur/feather:

> Blend zone. A hard mask can create a hard seam. A soft mask gives the model room to blend the edit into the original.

Inpaint prompt:

> Describe the replacement or repair as part of the whole scene, not as a floating sticker.

## Workflow-builder warnings

Warn if:

- restoration workflow uses very high denoise by default;
- old-photo workflow uses very high CFG by default;
- face workflow has high denoise and no reference/face branch;
- object replacement has very low denoise;
- mask branch exists but does not connect to latent/sampler;
- crop/stitch exists with no overlap or mask blur notes;
- multiple VAE encode/decode cycles appear before final save.
