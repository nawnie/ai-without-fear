# Captioning and Tagging by Image Model Family

## Why captions changed

Old SD 1.5 training often used tag-soup captions, booru tags, trigger words, and repeated class labels. SDXL kept much of that culture but made natural captions more useful. FLUX/Qwen/Z-Image-era models are less tolerant of blindly copied SD 1.5 captioning habits.

## Family-level caption policy

### SD 1.5

- tag captions are common
- booru-style captions can work well for anime/style models
- trigger token matters
- captions must avoid teaching accidental background/object traits

### SDXL

- hybrid captions work well
- natural language usually improves generalization
- keep trigger token consistent
- caption what should stay controllable separately from identity/style

### SD3/SD3.5

- prefer clear natural-language captions
- include composition and text-rendering notes when relevant
- evaluate prompt adherence and typography

### FLUX.1 / FLUX.2

- avoid assuming long tag captions are ideal
- test caption-light and concise natural captions
- use strong validation grids because caption policy materially affects behavior

### Qwen-Image

- caption for semantic and appearance control
- keep details precise
- avoid mixing identity, outfit, pose, background, and style unless the goal is to bind them
- validate text rendering if text appears in dataset

### Z-Image

- start with concise natural captions
- compare captioned vs minimal caption runs for small datasets
- document target variant because Turbo/Base variants may behave differently

## AIWF Dataset Doctor checks

The Dataset Doctor should flag:

- repeated backgrounds in identity datasets
- clothing/object leakage
- conflicting captions
- missing trigger token
- overlong captions for FLUX-style runs
- tag-soup captions for models where natural language is preferred
- text in images not transcribed in captions
- copyrighted/watermarked/signature contamination
