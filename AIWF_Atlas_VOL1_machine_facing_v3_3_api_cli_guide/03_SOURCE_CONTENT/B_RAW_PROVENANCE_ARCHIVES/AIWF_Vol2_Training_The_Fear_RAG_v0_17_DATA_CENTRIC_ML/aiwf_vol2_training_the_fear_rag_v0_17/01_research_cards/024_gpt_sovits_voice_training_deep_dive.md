# 024 — GPT-SoVITS Voice Training Deep Dive

## Identity

- Tool: GPT-SoVITS
- Repo: https://github.com/RVC-Boss/GPT-SoVITS
- Domain: zero-shot/few-shot TTS, voice adaptation, LoRA support in newer versions
- AIWF priority: P0 for voice chapter

## What it is

GPT-SoVITS is a voice/TTS system that supports zero-shot and few-shot speech synthesis. The official repo describes zero-shot TTS from short reference audio and few-shot fine-tuning with small amounts of training data. The changelog also notes LoRA support in a newer model version with an 8GB GPU memory fine-tuning note.

## Why it matters to AIWF

Voice training is powerful and risky. It is also one of the most understandable training domains for beginners because they can hear the result. Vol. 2 must teach it with strict consent and impersonation boundaries.

## What it trains

Relevant training/adaptation targets:

- speaker similarity
- pronunciation/accent behavior
- language/cross-lingual behavior
- text-to-speech quality
- LoRA-style speaker adaptation where supported

## Consumer hardware angle

GPT-SoVITS is promising for consumer hardware because official materials indicate few-shot training and an 8GB GPU memory note for V3 LoRA fine-tuning. AIWF should verify version-specific requirements before publishing a preset.

Beginner expectation:

- zero-shot testing: accessible
- few-shot fine-tuning: plausible on consumer GPU
- clean dataset preparation: more important than raw compute

## Dataset requirements

Voice data quality dominates:

- explicit consent
- clean isolated speaker audio
- no background music
- low noise
- consistent sample rate expected by tool
- accurate transcripts
- remove clipped/distorted segments
- speaker-only segments
- language labels where needed

## Legal/ethical baseline

Never train a voice without explicit permission from the person whose voice is used, unless it is your own voice or legally cleared material. Do not build deception workflows. Do not release impersonation models without consent, labeling, and intended-use limits.

## Failure signatures

- Voice sounds robotic: data too little, noisy, or badly segmented.
- Wrong pronunciation: transcript mismatch or language segmentation problem.
- Speaker similarity poor: reference audio not representative or training data inconsistent.
- Background noise copied into voice: dataset contamination.
- Model speaks with the rhythm of one clip: overfit to narrow prosody.

## AIWF integration recommendation

GPT-SoVITS should be the first voice-training chapter card, but with consent gates:

- consent checklist
- audio cleaner/preflight
- transcript validator
- clipping/noise detector
- model card with voice owner permission field
- watermark/disclosure recommendation where possible

## Sources

- https://github.com/RVC-Boss/GPT-SoVITS
- https://github.com/RVC-Boss/GPT-SoVITS/blob/main/docs/en/Changelog_EN.md
- https://www.ftc.gov/news-events/contests/ftc-voice-cloning-challenge
- https://www.ftc.gov/policy/advocacy-research/tech-at-ftc/2024/04/approaches-address-ai-enabled-voice-cloning
