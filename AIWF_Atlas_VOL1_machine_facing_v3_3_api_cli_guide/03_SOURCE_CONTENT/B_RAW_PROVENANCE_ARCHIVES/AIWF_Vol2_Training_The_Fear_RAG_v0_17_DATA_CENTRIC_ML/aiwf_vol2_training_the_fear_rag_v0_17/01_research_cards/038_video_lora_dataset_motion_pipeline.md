# Video LoRA Dataset and Motion Pipeline

## Purpose

Video training is not just image training with more frames. This card defines what AIWF needs to teach before users try WAN/LTX/Hunyuan/FramePack-style video LoRAs.

## Core difference from image LoRA

Image LoRA learns spatial appearance. Video LoRA must learn appearance plus temporal behavior.

A video dataset has:

- subject identity/style
- scene content
- camera motion
- object motion
- temporal consistency
- frame rate
- clip duration
- compression artifacts
- cut boundaries

## Dataset unit

The training unit is usually a clip or sampled frame sequence, not a single image.

Track:

- clip ID
- source file
- start/end time
- fps
- frame count
- resolution
- caption
- motion labels
- camera labels
- subject labels
- rights/consent status

## Motion labels

Captions should describe motion when motion is the learning target.

Examples:

- `slow push-in camera movement`
- `handheld shaky camera`
- `person turns head from left to right`
- `fabric fluttering in wind`
- `car driving past camera`
- `static camera, subject walking forward`

## Camera vs subject motion

Separate camera motion from subject motion.

Bad: `cinematic motion`

Better: `static camera, woman walking toward the camera, hair moving in the wind`

Better: `slow dolly-in camera movement toward a parked red truck, no subject motion`

## Clip quality rules

Use clips that are:

- short enough for hardware.
- visually clear.
- not heavily compressed.
- no hard cuts inside clip unless teaching cuts.
- stable enough for the target concept.
- labeled for camera/subject motion.

Avoid:

- mixed unrelated shots.
- TikTok-style edits if not training edits.
- captions that describe only objects but not motion.
- low-light mush.
- heavy watermarks.
- duplicates from same scene.

## Consumer hardware strategy

For 12-24GB VRAM:

- use low clip lengths first.
- cache latents/text embeddings if trainer supports it.
- train narrow adapters.
- use gradient accumulation.
- use lower resolution before increasing frames.
- test small before running overnight.

## Video LoRA eval grid

Test:

- static prompt without motion.
- motion prompt without subject/style trigger.
- trigger + simple motion.
- trigger + camera motion.
- trigger + different scene.
- longer generation than training clip length.
- different seeds.
- base model comparison.

## Failure signatures

| Failure | Likely cause |
|---|---|
| temporal noise/flicker | too aggressive settings, model mismatch, low-quality video data, bad sampler/inference settings |
| identity drifts | insufficient subject consistency, too much motion variation, no image-anchor data |
| motion absent | captions omit motion, LR too low, target modules wrong, clips too static |
| weird loops/repeats | repeated clips, short-cycle motion bias, overtraining |
| camera motion learned as subject motion | captions failed to separate camera and subject |
| style works in stills but not video | adapter trained spatially but temporal modules not adapted |

## AIWF dataset design for video

A strong video training dataset should include:

- still images for appearance anchor if trainer supports mixed data.
- short video clips for motion.
- captions separating identity/style/content/motion.
- metadata for fps/frame count/resolution.
- held-out clips/prompts.

## Legal/consent escalation

Video usually increases risk because it captures:

- face
- body movement
- location
- voice sometimes
- private setting
- event context

Do not treat web-scraped human video as safe training material.

## Sources

- musubi-tuner: https://github.com/kohya-ss/musubi-tuner
- SimpleTuner: https://github.com/bghira/SimpleTuner
- LTX-Video trainer references from prior pass: https://github.com/Lightricks/LTX-Video
- DiffSynth-Studio: https://github.com/modelscope/DiffSynth-Studio
- PAI Synthetic Media Framework: https://syntheticmedia.partnershiponai.org/
