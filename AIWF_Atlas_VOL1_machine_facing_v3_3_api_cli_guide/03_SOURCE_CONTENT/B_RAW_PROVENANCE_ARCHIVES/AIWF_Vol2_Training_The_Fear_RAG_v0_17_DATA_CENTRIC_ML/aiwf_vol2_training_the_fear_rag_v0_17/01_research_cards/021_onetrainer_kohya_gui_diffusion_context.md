# 021 — OneTrainer, kohya_ss, and GUI Diffusion Training Context

## Identity

- Tool: OneTrainer
- Repo: https://github.com/Nerogar/OneTrainer
- Docs/wiki entry: https://github.com/Nerogar/OneTrainer/blob/master/docs/QuickStartGuide.md
- Related historical tools: kohya_ss GUI, sd-scripts, EveryDream2, DreamBooth extensions
- Domain: image diffusion fine-tuning and LoRA training
- AIWF priority: P1

## Why this card exists

The user named kohya_ss, EveryDream2, and DreamBooth as old starting points. They are still important historically and conceptually, but modern Vol. 2 cannot stop there. OneTrainer is a bridge between older SD training culture and modern GUI-driven diffusion training.

## What OneTrainer is good for

OneTrainer provides GUI and CLI paths for diffusion fine-tuning. It is useful for:

- teaching training concepts visually
- SD 1.5/SDXL style LoRA and fine-tuning workflows
- concept/dataset organization
- Windows-friendly training experiments
- users who are intimidated by raw config scripts

## Historical anchor tools

### kohya_ss / sd-scripts

Still important because much LoRA training language came through the kohya ecosystem:

- repeats
- regularization images
- network rank
- network alpha
- dim/alpha
- caption dropout
- bucket resolution
- prior preservation
- DreamBooth-style instance/class prompts

### EveryDream2

Important as a conceptual and historical reference for full fine-tuning and data-caption discipline. It should be treated as a foundational predecessor, not the only current path.

### DreamBooth

Important for explaining personalization: instance token, class token, prior preservation, overfitting, identity learning, and why full personalization can destroy generality if misused.

## Consumer hardware angle

- SD 1.5 LoRA: very accessible.
- SDXL LoRA: accessible on 12GB–16GB with careful settings.
- Full SDXL fine-tune: heavier; not first beginner task.
- Flux-class training: may be possible in some GUI contexts but is not the same hardware class as SDXL.

## AIWF teaching use

This card should feed the "old words, new models" glossary. Beginners still encounter kohya-era terms even when training Flux/Wan/Z-Image with newer tools.

## Failure signatures

- Dataset repeats too high: model memorizes images.
- Bad trigger word: concept does not activate cleanly.
- Caption leakage: model learns background/outfit/camera artifacts as part of identity.
- Too much text encoder training: style drift or prompt understanding damage.
- Bad regularization: class concept becomes unstable or generic model ability drops.

## AIWF integration recommendation

Use OneTrainer as a visual teaching candidate, but do not make it the only backend. Keep it in the matrix beside SimpleTuner and AI Toolkit.

## Sources

- https://github.com/Nerogar/OneTrainer
- https://github.com/Nerogar/OneTrainer/blob/master/docs/QuickStartGuide.md
- https://github.com/kohya-ss/sd-scripts
