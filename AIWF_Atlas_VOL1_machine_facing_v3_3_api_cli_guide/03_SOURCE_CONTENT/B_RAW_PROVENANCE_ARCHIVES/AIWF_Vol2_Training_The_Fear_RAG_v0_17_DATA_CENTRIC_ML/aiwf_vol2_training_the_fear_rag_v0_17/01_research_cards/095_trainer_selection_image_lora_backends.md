# Trainer Selection — SimpleTuner vs AI Toolkit vs sd-scripts vs musubi-tuner

## The problem

A modern image LoRA guide cannot say “use kohya” and stop. By March 2026, trainer choice depends on the model family.

## AIWF backend roles

### AI Toolkit

Best candidate for AIWF beginner wrapper. It explicitly describes itself as an all-in-one diffusion trainer for consumer hardware, supports image and video models, and can run through GUI or CLI. This maps directly to AIWF's one-click beginner goal.

### SimpleTuner

Best advanced generalist. Strong documentation, broad architecture coverage, and detailed memory/offload guidance. It is the right backend when the user needs serious control, modern model support, or training beyond simple image LoRAs.

### kohya-ss sd-scripts

Best legacy/mature script foundation for SD 1.5, SDXL, SD3/3.5, FLUX.1, and utilities. Still crucial because much of the community and GUI ecosystem grew from it.

### kohya_ss GUI / bmaltais kohya_ss

Best GUI bridge for SD-family users. Useful, but not the future-proof universal backend for every 2026 image/video family.

### musubi-tuner

Best architecture-specific specialist for HunyuanVideo, Wan2.x, FramePack, FLUX Kontext/FLUX.2, Qwen-Image, and Z-Image. Use when model-family correctness is more important than beginner polish.

### OneTrainer

Useful GUI training tool and still worth cataloging, especially where users need a visual training environment. AIWF should compare it directly against AI Toolkit for beginner UX.

## AIWF decision

Use multiple backends behind a single AIWF preset layer:

- Beginner SDXL: AI Toolkit or kohya GUI
- Advanced SDXL/FLUX: SimpleTuner
- Qwen/Z-Image/FLUX.2/Wan specialist: musubi-tuner
- Script-heavy legacy: sd-scripts

## Non-goal

Do not create a new image LoRA trainer from scratch in the first AIWF tool pass. Build a **trainer router + preset generator + dataset validator**.
