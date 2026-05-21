# SD3 / SD3.5 LoRA Training

## What it is

Stable Diffusion 3 and 3.5 moved away from the SDXL-style UNet mental model toward a diffusion-transformer / MMDiT family. SD3.5 Large and Medium are official open-weight models under Stability licensing, with SD3.5 Medium pitched as more resource-efficient than Large.

## Why AIWF cares

SD3.5 is a necessary bridge chapter because it explains why modern image models stop behaving like SDXL. Even if the user does not train SD3.5 first, it teaches the architecture shift:

- multiple text encoders / richer text conditioning
- transformer-style blocks
- different memory profile
- different LoRA target assumptions
- stronger prompt and typography behavior than older SD families

## Trainer options

- sd-scripts lists SD3/SD3.5 among supported families.
- SimpleTuner has historically tracked newer diffusion architectures quickly.
- Diffusers examples and community notebooks exist, but AIWF should not rely on scattered notebooks as the primary beginner route.

## Consumer hardware stance

- 24GB is the safer local target for serious SD3.5 Large LoRA experimentation.
- 16GB may be possible with quantization/offload/aggressive settings, but should be treated as advanced troubleshooting, not beginner default.
- SD3.5 Medium is the more likely local teaching candidate.

## Dataset/caption notes

SD3.5 training should use clearer natural-language captions than old tag-soup SD 1.5 workflows. Treat text rendering and prompt adherence as evaluation targets. Holdout prompts should test:

- identity/style retention
- spelling/typography
- composition control
- negative leakage from captions
- baseline model regression

## AIWF rule

Teach SD3.5 as the **architecture transition chapter**, not as the default beginner LoRA lab.
