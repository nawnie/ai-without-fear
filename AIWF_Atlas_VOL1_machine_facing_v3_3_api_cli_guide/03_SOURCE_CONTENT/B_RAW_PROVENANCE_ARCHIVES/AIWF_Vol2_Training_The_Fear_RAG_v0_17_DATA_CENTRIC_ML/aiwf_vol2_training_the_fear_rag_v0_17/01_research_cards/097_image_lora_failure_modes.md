# Image LoRA Failure Modes — Style, Identity, Concept

## Identity failures

- face becomes generic
- identity only works at one angle
- identity drags clothing/background into every output
- trained person becomes older/younger than dataset
- model learns camera artifacts instead of identity

Fixes:

- diversify poses/backgrounds
- remove near-duplicates
- caption clothing/background when they should remain controllable
- lower rank or reduce overtraining
- add validation prompts with different clothing/lighting

## Style failures

- style overpowers prompt content
- all outputs inherit same composition
- color palette sticks too hard
- model copies watermarks/signatures
- style only works at high LoRA strength

Fixes:

- increase content diversity
- remove signatures/watermarks
- balance captions between style and subject matter
- test lower rank and lower learning rate
- use holdout prompts outside the dataset domain

## Product/object failures

- object geometry mutates
- surface texture is wrong
- logo/text changes
- object only appears from common dataset angle
- model confuses object with background/context

Fixes:

- include controlled multi-angle images
- include close-ups and contextual shots
- caption text/logo elements explicitly
- evaluate with geometry prompts
- consider Qwen/Z-Image/FLUX.2 where text/detail claims matter

## Cross-family failure warning

A “good loss curve” does not mean a good LoRA. Each family needs visual and prompt-grid evaluation. Loss is only a training signal; release quality is measured by generation behavior.
