# Source Notes — CFG, Denoise, Img2Img, and Inpainting

Date: 2026-05-19
Lane: `rag/03_ml_theory_training_and_model_behavior/`
Pass: v0.6 operator-theory expansion

## Purpose

This pass connects the ML theory lane directly to the image editing workflows AIWF is building: SDXL inpaint, old-photo restoration, scratch removal, pose/face workflows, ControlNet-assisted edits, and future Gradio helper scripts.

The reader should leave this topic understanding why an edit changes too little, changes too much, ignores a mask, destroys identity, creates seams, or follows the prompt so hard that it stops respecting the source image.

## Source stack reviewed

### Classifier-Free Diffusion Guidance

- Type: primary paper
- URL: https://arxiv.org/abs/2207.12598
- Quality: A
- AIWF labels: `TEACH`, `DEEPEN`, `DO_NOT_OVERCLAIM`
- Why it matters: CFG is the basis for the common guidance/CFG scale knob in Stable Diffusion-style workflows.
- Safe claims:
  - Classifier-free guidance combines conditional and unconditional model estimates to trade off prompt fidelity and diversity.
  - Higher guidance is not automatically better; too much guidance can over-constrain generation and create harsh, brittle, or overcooked outputs.
- Retrieval caution:
  - Do not imply every modern model exposes or behaves under CFG the same way.

### SDEdit / image-guided diffusion editing

- Type: primary paper and project page
- Paper URL: https://arxiv.org/abs/2108.01073
- Project URL: https://sde-image-editing.github.io/
- Quality: A
- AIWF labels: `TEACH`, `DEEPEN`
- Why it matters: Provides the clean mental model for img2img: add noise to an existing image, then denoise it back toward realism under a generative prior.
- Safe claims:
  - Image editing with diffusion can be taught as adding controlled noise to the input and denoising from that partially corrupted state.
  - The more noise added, the more freedom the model has to reinterpret the source; the less noise added, the more it preserves the source.
- Retrieval caution:
  - SDEdit is a conceptual foundation; exact UI controls differ between ComfyUI, A1111/Forge, Invoke, and Diffusers.

### Diffusers image-to-image documentation

- Type: official library documentation
- URL: https://huggingface.co/docs/diffusers/en/api/pipelines/stable_diffusion/img2img
- Supporting guide: https://huggingface.co/docs/diffusers/using-diffusers/img2img
- Source/code reference: https://github.com/huggingface/diffusers/blob/main/src/diffusers/pipelines/stable_diffusion/pipeline_stable_diffusion_img2img.py
- Quality: B
- AIWF labels: `TEACH`, `USE`, `WATCH`
- Why it matters: Gives implementation wording for the `strength` parameter that maps closely to denoise strength in user interfaces.
- Safe claims:
  - Img2img uses an initial image as a starting point, usually by encoding it to latent space, adding noise, denoising with the prompt, then decoding back to image space.
  - In Diffusers, strength controls how much noise is added; at strength 1, the input image is effectively ignored.
- Retrieval caution:
  - Do not treat Diffusers parameter names as universal UI names.

### Diffusers inpainting documentation

- Type: official library documentation
- URL: https://huggingface.co/docs/diffusers/using-diffusers/inpaint
- Pipeline docs: https://huggingface.co/docs/diffusers/api/pipelines/stable_diffusion/inpaint
- Quality: B
- AIWF labels: `TEACH`, `USE`, `WATCH`
- Why it matters: Gives beginner-safe language for masks: white areas are filled/edited; black areas are preserved.
- Safe claims:
  - Inpainting edits selected regions of an image by combining a source image, a mask image, and a prompt.
  - Mask quality matters as much as prompt quality because the mask defines the edit target.
- Retrieval caution:
  - Different tools may invert mask semantics or expose mask grow/blur/feather controls differently.

### ComfyUI Set Latent Noise Mask

- Type: community/manual documentation for a core ComfyUI node
- URL: https://blenderneko.github.io/ComfyUI-docs/Core%20Nodes/Latent/inpaint/SetLatentNoiseMask/
- Supporting discussion: https://github.com/Comfy-Org/ComfyUI/discussions/639
- Quality: B/C
- AIWF labels: `TEACH`, `USE`, `WATCH`
- Why it matters: Explains the ComfyUI-native way to make the sampler operate only on masked latent areas.
- Safe claims:
  - In ComfyUI, Set Latent Noise Mask attaches a mask to latent samples so the sampler operates on the masked area.
  - For masked img2img-style edits in ComfyUI, this node is part of the basic mental model.
- Retrieval caution:
  - Community manuals may lag behind current ComfyUI changes; verify node schemas before generating workflow JSON.

## Wheel-check / scope decision

Existing tools already cover the low-level generation mechanics:

- Diffusers covers the Python pipeline implementation.
- ComfyUI already has the graph primitives and examples.
- A1111/Forge-style UIs already expose denoise/CFG as operator knobs.

AIWF should not rebuild an inpainting engine from scratch for this lane. AIWF should build:

1. beginner-safe explanations of what each knob actually changes;
2. workflow validators that catch bad mask/latent/denoise wiring;
3. prompt-rewrite helpers that know when an edit needs preservation language versus replacement language;
4. preset cards that map task intent to safe starting ranges;
5. troubleshooting cards for seams, blur, identity loss, overcooked CFG, and underpowered denoise.

## Notes for current AIWF workflows

### Denoise strength is the preservation/freedom dial

Teach it as:

> Low denoise protects the source. High denoise gives the model permission to rewrite the source.

Not all tasks want high denoise:

- tiny scratch removal: low to medium
- local texture cleanup: low to medium
- clothing color/material change: medium
- object replacement: medium to high
- pose/body rewrite: high, usually with stronger structure control
- face identity preservation: often lower denoise plus face/reference conditioning rather than brute-force CFG

### CFG is not a detail knob

Teach it as:

> CFG decides how hard the model chases the text prompt versus its own learned prior.

High CFG can help an under-followed prompt, but it can also create:

- crunchy textures
- burned highlights
- warped anatomy
- hard seams around masks
- prompt-literal but visually worse results
- loss of source-image subtlety

### Inpaint success depends on four things at once

1. mask shape and softness;
2. denoise/strength;
3. prompt specificity;
4. conditioning/reference/control inputs.

Bad outputs often come from only tuning one of the four.

### Mask seam logic

Hard masks create hard edit boundaries. Soft/blurred masks and adequate context help the model blend the new region into the old region. Crop-and-stitch workflows should carry enough context around the mask, not just the defect itself.

### Inpaint model versus regular model

A specialized inpaint pipeline/model can understand source image + mask more directly, but regular img2img with a latent noise mask can still be useful in ComfyUI when the user wants masked edits with normal checkpoint behavior. This should be documented as a workflow choice, not a universal rule.

## Retrieval priorities created by this pass

- CFG scale card
- denoise strength card
- img2img mental model card
- inpaint mask card
- masked-latent ComfyUI card
- task-to-setting starter matrix
- failure signature matrix for inpaint/editing
- workflow-validator requirements for AIWF EnvPack / Workflow Packs
