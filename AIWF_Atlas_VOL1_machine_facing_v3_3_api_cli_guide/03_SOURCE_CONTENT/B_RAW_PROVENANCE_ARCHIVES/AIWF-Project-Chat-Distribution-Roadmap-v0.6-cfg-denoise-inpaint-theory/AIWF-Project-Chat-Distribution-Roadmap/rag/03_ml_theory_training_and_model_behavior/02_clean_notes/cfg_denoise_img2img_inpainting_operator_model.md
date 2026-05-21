# Operator Theory — CFG, Denoise, Img2Img, and Inpainting

Date: 2026-05-19
Lane: ML theory, training, and model behavior
Audience: Volume I beginner-to-practical; Volume II can deepen the math.

## One-sentence model

Image editing with diffusion is a negotiation between four forces:

```text
source image preservation + text prompt pressure + mask/control boundaries + model prior
```

Most bad edits happen because the workflow accidentally gives one force too much power.

## Core mental model

### Text-to-image

Text-to-image starts with noise and lets the model denoise toward an image that matches the prompt.

### Image-to-image

Image-to-image starts with an existing image, adds controlled noise, then denoises from that partially corrupted source.

The stronger the noise, the more the model can reinterpret. The weaker the noise, the more it preserves.

### Inpainting

Inpainting is image-to-image with a target region. The mask tells the system where the edit is allowed or expected to happen.

In practical AIWF terms:

```text
prompt = what should happen
source image = what should survive
mask = where change is allowed
control/reference inputs = what structure or identity must stay locked
```

## CFG scale

CFG means classifier-free guidance.

Beginner explanation:

> CFG is how hard the model is pushed toward the prompt.

More precise explanation:

> CFG mixes a prompt-conditioned prediction with an unconditioned prediction. Raising guidance increases prompt pressure, but too much guidance can reduce naturalness and diversity.

### Practical behavior

| CFG behavior | Likely result |
|---|---|
| Too low | Prompt may be ignored or weakly followed |
| Moderate | Balanced prompt following and naturalness |
| Too high | Crunchy, burned, stiff, over-literal, or seam-prone output |

### AIWF teaching caution

Do not teach CFG as a quality slider. It is a prompt-pressure slider.

## Denoise / strength

Denoise strength is the preservation-versus-freedom dial.

Beginner explanation:

> Low denoise protects the original. High denoise lets the model rewrite it.

### Practical behavior

| Denoise behavior | Likely result |
|---|---|
| Very low | Tiny changes; good for repair, bad for replacing objects |
| Low-medium | Restores texture/details while preserving layout |
| Medium | Meaningful edit while still respecting source |
| High | Major reinterpretation; identity/layout can drift |
| Full/near full | Behaves closer to text-to-image; source may be mostly ignored |

### Why denoise and CFG interact

High denoise gives the model freedom. High CFG tells it to chase the prompt hard. Together, they can overpower the source image.

Low denoise plus high CFG often creates a tug-of-war: the model is not allowed to change enough pixels, but the prompt is demanding change. That can produce artifacts, seams, and texture noise.

## Inpaint masks

A mask is not just a selection. It is a contract.

```text
white / active area = edit here
black / protected area = keep this
soft edge = blend here
hard edge = risk seam here
```

Tool warning: some UIs invert mask display or expose mask inversion toggles. Always verify the workflow's active mask direction.

### Mask quality checklist

- Does the mask cover the whole damaged/object region?
- Does it include enough edge/context for blending?
- Is the feather/blur large enough to hide seams?
- Is the crop large enough for the model to infer surrounding texture and lighting?
- Does the prompt describe the filled region in context, not as an isolated sticker?

## Task-to-setting starter matrix

These are starting points, not rules. Different checkpoints, samplers, schedulers, ControlNet inputs, VAE behavior, and image resolutions can shift the useful range.

| Task | Denoise intent | CFG intent | Notes |
|---|---|---|---|
| Dust/scratch removal | Low to medium | Moderate | Preserve source; avoid rewriting faces or fine texture |
| Old photo texture cleanup | Low to medium | Low-moderate | Too much CFG can make restoration look synthetic |
| Small object removal | Medium | Moderate | Mask should include shadows/reflections/context |
| Object replacement | Medium to high | Moderate | Prompt the replacement plus lighting/material/context |
| Clothing color change | Medium | Moderate | Use mask feather; preserve folds and body structure |
| Face repair | Low to medium | Low-moderate | Prefer face/reference tools over brute-force denoise |
| Face swap/detail restore | Low to medium | Low-moderate | Identity needs reference conditioning; high CFG can distort likeness |
| Pose/body transfer | High | Moderate | Needs pose/depth/reference control; denoise alone is not enough |
| Background replacement | Medium to high | Moderate | Use large context and good edge feathering |
| Creative repaint | High | Moderate-high | Accept that source preservation will drop |

## Common failure signatures

### Output barely changes

Likely causes:

- denoise too low;
- mask inactive, inverted, too small, or not connected;
- prompt too vague;
- wrong latent path;
- inpaint conditioning not reaching sampler.

First fixes:

- verify mask preview;
- raise denoise gradually;
- widen/blur mask;
- use a prompt that describes the new region specifically.

### Output destroys identity or layout

Likely causes:

- denoise too high;
- CFG too high;
- no reference/control input;
- crop lacks surrounding context;
- model not suited to identity-sensitive editing.

First fixes:

- lower denoise;
- lower CFG;
- add face/reference/control conditioning;
- use a larger crop context;
- do the edit in stages.

### Hard seam around mask

Likely causes:

- mask edge too sharp;
- denoise too high at boundary;
- prompt introduces incompatible lighting/color/texture;
- crop-and-stitch lacks overlap.

First fixes:

- blur/feather mask;
- expand mask slightly;
- include surrounding material in prompt;
- use crop overlap and blend/stitch method.

### Mushy or blurry repair

Likely causes:

- denoise too low to create new detail;
- restoration/upscale order is wrong;
- VAE encode/decode loss;
- model lacks detail prior for the target.

First fixes:

- try a second detail pass;
- use appropriate upscaler/restorer after repair;
- avoid repeated VAE round trips;
- use a model suited for restoration or texture synthesis.

### Prompt is followed but image looks worse

Likely causes:

- CFG too high;
- prompt over-specifies the edit;
- denoise too high;
- model is fighting the source context.

First fixes:

- lower CFG;
- simplify prompt;
- reduce denoise;
- add structural/reference conditioning rather than more words.

## Workflow-validator requirements

AIWF workflow tools should eventually flag:

- mask exists but is not connected to the sampler path;
- latent noise mask missing for masked img2img path;
- mask dimensions do not match image/latent path after crop/resize;
- denoise too low for object replacement;
- denoise too high for identity preservation;
- CFG unusually high for restoration/inpaint;
- repeated VAE encode/decode cycles;
- crop-and-stitch workflows without enough overlap or mask blur;
- face workflow present but no face/reference input connected;
- ControlNet or reference branch exists but conditioning is not linked into the sampler.

## AIWF wording rules

Use this language:

- “Denoise controls how much permission the model has to rewrite the source.”
- “CFG controls prompt pressure, not quality.”
- “A mask is a contract, not just a selection.”
- “If the task needs structure, use structure control. If it needs identity, use identity/reference control.”

Avoid this language:

- “Higher CFG is better.”
- “Use high denoise for better detail.”
- “Inpainting is just prompting inside a box.”
- “One sampler/preset is best.”
