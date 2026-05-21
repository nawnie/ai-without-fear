# SD 1.5 / SDXL LoRA Training — Legacy Baseline

## Why this still matters

SD 1.5 and SDXL are no longer the whole image-training world, but they remain essential teaching baselines. They are the easiest families for beginners to understand because most community guides, caption workflows, DreamBooth concepts, and kohya-style settings were formed around them.

## Best AIWF use

- **SD 1.5:** teach historical LoRA mechanics, small VRAM experiments, style adapters, and why old practices still shape community language.
- **SDXL:** teach modern image LoRA training on consumer GPUs without requiring the user to learn every new transformer family at once.

## Tooling

- kohya_ss / sd-scripts: mature, scriptable, strong for SD 1.5 and SDXL.
- OneTrainer: GUI-friendly, useful for users who need visual project setup.
- SimpleTuner: stronger modern foundation when the training plan may later expand to FLUX/video/audio.
- AI Toolkit: strong practical GUI/CLI candidate, especially if AIWF wraps it.

## Dataset patterns

- Character LoRA: 15-80 images depending on identity variability and target generalization.
- Style LoRA: 30-300+ images, with clear style diversity and content variety.
- Concept/product LoRA: include clean angles, backgrounds, close-ups, and contextual shots.
- Captions: usually useful; keep trigger token consistent; avoid captions that accidentally teach wrong attributes.

## Rules

- SDXL is the safest default for beginner image LoRA training.
- SDXL LoRA success does not prove the same settings will work for FLUX/Qwen/Z-Image.
- Small clean datasets beat large noisy scrape folders.
- Repeat count and total steps must be reasoned from image count and target concept, not copied from a random guide.
- Always keep a holdout folder for validation prompts.

## AIWF decision

Keep SDXL as the first practical lab in the book. It is the training equivalent of learning manual exposure before using an advanced camera body.
