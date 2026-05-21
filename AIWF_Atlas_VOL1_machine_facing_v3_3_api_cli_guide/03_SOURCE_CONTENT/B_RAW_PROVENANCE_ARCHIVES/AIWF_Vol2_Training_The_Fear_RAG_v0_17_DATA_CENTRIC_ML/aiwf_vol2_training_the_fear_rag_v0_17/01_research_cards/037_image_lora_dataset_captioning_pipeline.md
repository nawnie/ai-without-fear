# Image LoRA Dataset and Captioning Pipeline

## Purpose

This card defines a modern image LoRA data-prep pipeline for AIWF. It bridges old kohya/EveryDream habits with current captioning/tagging tools and modern model families.

## Core principle

Image LoRA quality is determined before training starts.

The trainer can only amplify the dataset structure. It cannot know which details are the concept unless captions, variation, and repeats make that learnable.

## Dataset minimums

### Style LoRA

- 50-300+ images if possible.
- strong variation in subjects/composition.
- consistent style features.
- captions should describe content so style remains the residual.

### Character/person LoRA

- 15-50+ strong images can work, but more variation is better.
- varied angles, lighting, expressions, clothes, backgrounds.
- avoid too many near-duplicates.
- consent ledger required for real people.

### Product/object LoRA

- 20-100 images.
- different angles, lighting, contexts.
- captions separate object identity from background.

### Concept/action LoRA

- requires more data and careful captions.
- subject variation is critical.

## Captioning strategies

### Natural captions

Describe the scene in normal language. Good for SDXL/Flux-style training where richer semantic captions help.

Example:

`a woman wearing a blue denim jacket standing beside a red pickup truck in golden hour light`

### Tag captions

Booru/Danbooru-style tags. Useful for anime and tag-heavy ecosystems.

Example:

`1girl, denim jacket, standing, pickup truck, sunset, outdoors`

### Hybrid captions

Natural caption plus controlled tags or trigger word.

Example:

`awf_subject, a woman wearing a blue denim jacket, standing beside a red pickup truck, outdoors, golden hour`

## Captioning tools to track

### JoyCaption

JoyCaption is built as an open captioning VLM for diffusion model training. It is high-priority for AIWF because it is explicitly aimed at dataset captions for LoRAs/fine-tunes.

### WD14 tagger

WD14-family taggers remain important for tag-style/anime/danbooru workflows and are integrated in ComfyUI/A1111-style tooling.

### Florence-2

Florence-2 supports prompt-driven vision tasks such as captioning, detection, segmentation, and OCR. Useful for richer metadata extraction and dataset QA.

### BLIP/BLIP-2 lineage

Historically important and still useful in many pipelines, but modern VLM captioners may outperform it for detailed training captions depending on domain.

## AIWF caption review rules

Every caption should answer:

- What should the model learn?
- What should remain editable?
- What should not be bound to the trigger?
- Does the caption mention accidental repeated background elements?
- Does the trigger appear consistently?
- Are captions too sparse or too verbose for the trainer/model family?

## Trigger words

A trigger is not magic. It is a token cue bound to training examples.

Good triggers:

- unique enough to avoid collision.
- easy to remember.
- used consistently.
- not a common word if identity/style is narrow.

Bad triggers:

- common class terms only.
- multiple inconsistent spellings.
- long phrases that tokenize oddly.

## Repeats and weights

Repeats should correct imbalance, not compensate for bad data.

Use repeats for:

- rare views.
- rare expressions.
- key identity images.
- high-quality exemplars.

Avoid repeats for:

- duplicates.
- blurry images.
- watermarked images.
- images with unwanted backgrounds.

## Preprocessing checklist

- Remove watermarks/logos unless intentionally training them.
- Remove duplicates and near-duplicates.
- Check faces/hands if relevant.
- Normalize orientation.
- Keep aspect ratio buckets if trainer supports it.
- Preserve enough resolution for the target model.
- Separate eval images from training images.
- Record consent/license.

## Evaluation prompt grid

For each LoRA, test:

- trigger alone.
- trigger with different backgrounds.
- trigger with different lighting.
- trigger with different outfits/materials.
- trigger with different camera distances.
- trigger with multiple subjects.
- trigger at different LoRA strengths.
- base model without LoRA for comparison.

## Failure signatures

| Failure | Likely cause |
|---|---|
| Background always appears | captions failed to describe/separate background |
| Face changes too much | insufficient identity variation, LR too high, bad crops |
| LoRA only works at high strength | undertraining, bad trigger, low rank, weak captions |
| LoRA destroys composition | overtraining, rank too high, bad dataset diversity |
| Style leaks into everything | style not separated from content in captions |
| Prompt ignored | overfit or too high adapter strength |

## Sources

- JoyCaption: https://github.com/fpgaminer/joycaption
- JoyCaption dataset reference: https://huggingface.co/datasets/fancyfeast/joy-captioning-20250408a
- ComfyUI WD14 Tagger: https://github.com/pythongosssss/ComfyUI-WD14-Tagger
- TransformerLab WD14 captioner notes: https://transformerlab.ai/docs/generate/wd14_captioner/
- Florence-2 model card: https://huggingface.co/microsoft/Florence-2-base
- Hugging Face image captioning task guide: https://huggingface.co/docs/transformers/en/tasks/image_captioning
