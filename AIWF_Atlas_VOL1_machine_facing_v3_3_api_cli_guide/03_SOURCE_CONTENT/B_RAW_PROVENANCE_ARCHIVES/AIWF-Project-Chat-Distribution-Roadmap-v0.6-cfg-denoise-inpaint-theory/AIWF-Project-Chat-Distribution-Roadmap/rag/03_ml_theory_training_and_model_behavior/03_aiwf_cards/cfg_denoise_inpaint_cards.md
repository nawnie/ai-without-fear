# AIWF Cards — CFG, Denoise, Img2Img, and Inpainting

Date: 2026-05-19
Lane: ML theory, training, and model behavior
Card set: v0.6 editing operator theory

---

## Card: CFG scale

**Short answer:** CFG controls prompt pressure.

**Beginner explanation:** Low CFG lets the model rely more on its learned sense of what looks natural. Higher CFG pushes harder toward the text prompt.

**Use when:** the prompt is being ignored, or the image is drifting away from the requested subject.

**Watch for:** crunchy texture, harsh lighting, stiff anatomy, oversaturated color, prompt-literal but ugly output, and seams around masks.

**AIWF rule:** CFG is not a quality slider.

---

## Card: Denoise strength

**Short answer:** Denoise controls how much permission the model has to rewrite the source image.

**Beginner explanation:** Low denoise preserves. High denoise transforms.

**Use low denoise for:** cleanup, texture repair, tiny defects, face preservation, source-faithful restoration.

**Use higher denoise for:** object replacement, pose change, background replacement, creative repaint.

**Watch for:** identity drift, layout drift, blurry repairs, or edits that barely change.

**AIWF rule:** If the edit barely moves, raise denoise slowly. If the image stops being itself, lower denoise.

---

## Card: Img2img

**Short answer:** Img2img adds noise to an existing image and denoises it back under prompt guidance.

**Beginner explanation:** The input image is not a locked canvas. It is a starting point. Denoise decides how far the model can wander from that starting point.

**Use when:** you want to modify an image while keeping some of its layout, lighting, identity, or composition.

**Watch for:** repeated VAE round trips, excessive denoise, and prompts that demand a different image than the source allows.

**AIWF rule:** Img2img is controlled rewriting, not direct Photoshop editing.

---

## Card: Inpainting mask

**Short answer:** The mask tells the workflow where the edit is allowed or expected.

**Beginner explanation:** White/active regions are edited. Black/protected regions are kept. Soft edges blend better than hard edges.

**Use when:** editing only part of an image, repairing damage, replacing an object, or doing controlled local changes.

**Watch for:** inverted masks, masks too small for the whole defect/object, hard edges, no surrounding context, and crop/stitch seams.

**AIWF rule:** A mask is a contract, not just a selection.

---

## Card: ComfyUI masked latent editing

**Short answer:** In ComfyUI, masked latent workflows usually need the mask attached to the latent/sampler path, not merely visible as an image.

**Beginner explanation:** Seeing a mask in the graph is not enough. The sampler must receive the masked latent/conditioning path that tells it where to operate.

**Use when:** building masked img2img, old-photo repair, object replacement, or crop-and-stitch inpainting workflows.

**Watch for:** red/missing custom nodes, wrong mask size after crop/resize, mask preview correct but sampler unaffected, or disconnected conditioning branches.

**AIWF rule:** Verify the mask at the sampler path, not just at the UI input.

---

## Card: Inpaint failure triage

**Short answer:** Tune mask, denoise, prompt, and control/reference together.

**Beginner explanation:** Bad inpainting is rarely caused by one knob. The mask may be wrong, the denoise may be wrong, the prompt may be wrong, or the workflow may lack the structure/identity control the task requires.

**Use when:** edits barely change, overwrite too much, make seams, blur, or lose identity.

**Watch for:** trying to solve every problem by raising CFG.

**AIWF rule:** If the task needs structure, add structure control. If it needs identity, add identity/reference control.
