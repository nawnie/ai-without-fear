# 022 — musubi-tuner Deep Dive: Wan, HunyuanVideo, FramePack, Flux Kontext, Qwen Image

## Identity

- Tool: musubi-tuner
- Repo: https://github.com/kohya-ss/musubi-tuner
- Domain: video/image LoRA training for newer architectures
- AIWF priority: P0 for video LoRA research

## What it is

musubi-tuner is an unofficial training script collection for LoRA training on newer image/video architectures. It is particularly important for AIWF because it covers video-generation families that users are actively asking about, including Wan and HunyuanVideo.

## What it trains

The official repo describes LoRA training support for:

- HunyuanVideo
- Wan2.1 / Wan2.2
- FramePack
- FLUX.1 Kontext
- FLUX.2 dev/klein
- Qwen-Image
- Z-Image

This makes it one of the highest-priority repos for Vol. 2 video training research.

## Consumer hardware angle

Video LoRA is far harder than image LoRA. Consumer feasibility depends on:

- model size
- frame count
- resolution
- batch size
- precision
- caching strategy
- block swapping/offload
- caption quality
- whether training uses images, clips, or both

AIWF baseline:

- 16GB: possible only for constrained/optimized video LoRA experiments; not guaranteed.
- 24GB: realistic experimental tier for more video LoRA work.
- 48GB+: serious local/prosumer tier.
- cloud 80GB: often the practical route for large models or high-res experiments.

## Dataset requirements

Video training requires additional discipline beyond image LoRA:

- clip duration control
- frame rate consistency
- resolution normalization
- motion labeling
- camera motion labeling
- subject persistence
- temporal artifact filtering
- avoiding duplicate/near-identical clips
- separating identity from action from scene

## Vol. 2 concepts to teach

### Spatial concept vs temporal concept

An image LoRA can learn appearance. A video LoRA must also handle motion, persistence, camera movement, and temporal coherence.

### Motion contamination

If every clip of a person is walking, the LoRA may treat walking as part of the identity.

### Scene lock

If every clip has the same room/background, the model may bind the subject to that environment.

### Frame economy

More frames are not automatically better. Bad or redundant frames increase compute and may strengthen artifacts.

## Failure signatures

- Identity appears in first frame but drifts: temporal consistency failure.
- Motion learned but subject wrong: action concept overpowers identity concept.
- Subject learned but motion stiff: dataset lacks motion diversity or training target underfits temporal components.
- Flicker/noise increases: resolution/frame settings too aggressive or dataset inconsistent.
- LoRA breaks prompt control: rank/LR/steps too high or captions too narrow.

## AIWF integration recommendation

musubi-tuner should feed a dedicated video-training chapter and a future AIWF Video Dataset Doctor:

- clip scanner
- duration/fps checker
- motion tag helper
- duplicate-frame detector
- temporal sample grid builder
- Wan/Hunyuan/LTX preset mapper

## Sources

- https://github.com/kohya-ss/musubi-tuner
- https://github.com/kohya-ss/musubi-tuner/discussions/182
- https://github.com/kohya-ss/musubi-tuner/issues/105
