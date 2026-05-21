# Image LoRA Captioning and Tagging Toolchain

## Scope
This card covers captioning and tagging for image LoRA datasets, especially SD 1.5, SDXL, Flux, Qwen-Image, Z-Image, and related diffusion trainers.

## Core rule
> Captions are not descriptions for humans. Captions are steering labels for the model.

A caption decides what the model should learn, ignore, bind to a trigger word, or generalize away from.

## Caption types

### Natural-language captions
Example: `a woman in a red jacket standing under neon rain at night`

Good for:
- SDXL/Flux-style natural language models,
- broad style training,
- subject descriptions,
- concept-rich images.

### Tag captions
Example: `1girl, red jacket, neon lights, rain, night, standing`

Good for:
- anime/danbooru-trained ecosystems,
- WD14 tagger workflows,
- tag-compatible SD 1.5/NAI-style models.

### Hybrid captions
Example: `awf_torchie, small orange robot mascot, frustrated expression, error screen, server rack, blue sparks`

Good for:
- subject LoRA,
- guide clip art,
- identity plus scene details.

## Captioning tools and model families

### BLIP / BLIP-2 / LAVIS
Useful for natural-language captions and image understanding. Salesforce LAVIS provides image-captioning examples and interfaces for BLIP-family models.

Strength:
- natural descriptions,
- reasonable general image captions,
- useful for starting caption drafts.

Weakness:
- may omit training-critical style/identity tags,
- may hallucinate details,
- may be too generic for subject LoRAs.

### Florence-2
Microsoft Florence-2 is a prompt-based vision foundation model that can handle captioning, object detection, segmentation, and OCR-style tasks. It is useful for richer captioning and region-aware dataset assistance.

Strength:
- captioning plus detection/grounding style tasks,
- can help identify objects/regions,
- useful for dataset QA beyond plain captions.

Weakness:
- auto captions still need human review,
- detail level must match trainer/model family.

### WD14 / SmilingWolf taggers
Useful for danbooru/anime tag workflows and tag-based SD training. Best when the target model understands tag syntax.

Strength:
- compact tag output,
- style/character/anime-compatible labels,
- good for tag-heavy ecosystems.

Weakness:
- wrong tool for photo-natural-language-only workflows,
- tags may carry biases from source taxonomy,
- not enough for complex human-readable instruction captions.

## Captioning strategy by LoRA type

### Subject LoRA
Goal: bind identity/concept to trigger word.

Caption pattern:
- include trigger token,
- describe variable attributes if they should not bind,
- omit fixed subject identity details if trigger should own them,
- include clothing/background when they vary.

Example:
`awf_torchie, orange robot mascot, angry expression, holding a broken cable, server room background`

### Style LoRA
Goal: teach visual style, not a specific subject.

Caption pattern:
- avoid binding style to one subject,
- describe content normally,
- use a style trigger only if desired.

### Product/object LoRA
Goal: keep shape/material/product identity.

Caption pattern:
- trigger token,
- object class,
- angles and lighting,
- avoid over-describing background unless background is part of concept.

### Restoration/technical LoRA
Goal: learn restoration or defect patterns.

Caption pattern:
- describe damage/defect,
- include desired output concept if paired training supports it,
- preserve metadata about scan type/resolution.

## Caption QA checklist
- Does each caption match the image?
- Is the trigger token present where needed?
- Are variable attributes labeled?
- Are fixed identity attributes over-captioned?
- Are background elements accidentally repeated too often?
- Are captions too long for the model/trainer context?
- Are irrelevant details omitted?
- Is style described consistently?
- Are NSFW/sensitive tags handled according to policy?

## AIWF Dataset Doctor image checks
- missing sidecar file,
- unreadable image,
- non-RGB conversion needed,
- resolution/aspect outlier,
- duplicate/perceptual duplicate,
- caption missing trigger,
- caption too short/too long,
- caption-image mismatch flag via VLM,
- license/provenance missing,
- train/validation duplicate image risk.

## Sources
- Salesforce LAVIS GitHub: https://github.com/salesforce/LAVIS
- LAVIS BLIP captioning example: https://github.com/salesforce/LAVIS/blob/main/examples/blip_image_captioning.ipynb
- Hugging Face BLIP-2 blog: https://huggingface.co/blog/blip-2
- Microsoft Florence-2 base model card: https://huggingface.co/microsoft/Florence-2-base
- SmilingWolf Hugging Face profile/tagger: https://huggingface.co/SmilingWolf
- SimpleTuner dataloader docs: https://github.com/bghira/SimpleTuner/blob/main/documentation/DATALOADER.md
- SimpleTuner ControlNet data/conditioning docs: https://raw.githubusercontent.com/bghira/SimpleTuner/main/documentation/CONTROLNET.md
