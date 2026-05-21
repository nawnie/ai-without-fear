# FLUX.2 / FLUX.2 Klein LoRA Training — March 2026 Notes

## Snapshot boundary

By March 2026, FLUX.2 is a major family to track. Black Forest Labs' official flux2 repo announced FLUX.2 dev in late 2025 and FLUX.2 Klein in January 2026. The Klein family is especially important for AIWF because it is positioned as faster and more efficient.

## Family split

- **FLUX.2 dev:** high-capability, large model; likely cloud-first for serious LoRA training.
- **FLUX.2 Klein 9B:** strong quality/efficiency compromise.
- **FLUX.2 Klein 4B:** the most interesting local/consumer target for interactive training experiments.
- **Klein base variants:** important for fine-tuning because base models are usually better training targets than instruction/edited variants.

## Tooling

- AI Toolkit lists FLUX.2 dev and FLUX.2 Klein base variants in its supported image model list.
- musubi-tuner added FLUX.2 dev/klein training support in January 2026 and later bug fixes for Klein.
- SimpleTuner should remain on the watchlist, but AIWF needs to verify exact March 2026 FLUX.2 support against tags/releases before publishing hard presets.

## Consumer hardware stance

- Klein 4B: likely the first FLUX.2 training candidate for 16GB-24GB users.
- Klein 9B: likely 24GB+ target.
- Dev 32B: cloud/enterprise-class for training; not the default local recommendation.

## AIWF decision

Track FLUX.2 Klein as a priority “new model” training path. Do not make FLUX.2 dev the beginner target.

## Validation prompts

FLUX.2/Klein validation should include:

- identity/style consistency
- editing/generation behavior if using instruction/edit models
- text rendering if model claims text improvements
- prompt length stress tests
- comparison against base model with no LoRA
