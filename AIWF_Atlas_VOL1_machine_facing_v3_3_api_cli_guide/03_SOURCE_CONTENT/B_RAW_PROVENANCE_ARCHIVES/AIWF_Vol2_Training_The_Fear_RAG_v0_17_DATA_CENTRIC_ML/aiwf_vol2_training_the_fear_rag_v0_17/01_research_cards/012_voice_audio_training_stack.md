# 012 — Voice and Audio Training Stack

## Scope

Voice/audio training belongs in Vol. 2, but it needs stronger consent and misuse guardrails than image LoRAs.

Main categories:

- text-to-speech voice cloning,
- few-shot TTS fine-tuning,
- retrieval-based voice conversion,
- singing voice conversion,
- text-to-music/audio diffusion training.

## Main tools

### GPT-SoVITS

A few-shot voice conversion and TTS WebUI. It supports zero-shot TTS from a short reference and few-shot fine-tuning with small data. It includes tools for segmentation, labeling, and dataset preparation.

### RVC WebUI

Retrieval-based voice conversion WebUI. It is older but still one of the most practical consumer voice-conversion training tools.

### F5-TTS

Modern flow-matching TTS research/codebase. Needs more detailed testing for fine-tune workflow, licensing, and local hardware expectations.

### XTTS-family workflows

XTTS/Coqui-style workflows are historically important, but Coqui's status and forks need careful current review before recommendation.

### so-vits-svc

Important singing voice conversion history. Official repo indicates archive direction, so treat it as context unless a maintained fork is selected.

## Safety/consent rule

AIWF should only teach voice training with consented, owned, or clearly licensed datasets. No celebrity/real-person impersonation workflows. Focus on personal voice, fictional voices with rights, accessibility, narration, and creative characters.

## Consumer hardware reality

- RVC: practical on modest GPUs with clean data.
- GPT-SoVITS: practical candidate for consumer GPUs.
- F5-TTS: promising but needs exact fine-tune verification.
- Large emotional/multilingual TTS fine-tuning: likely cloud/advanced.

## Sources

- https://github.com/RVC-Boss/GPT-SoVITS
- https://github.com/RVC-Project/Retrieval-based-Voice-Conversion-WebUI
- https://github.com/SWivid/F5-TTS
- https://github.com/svc-develop-team/so-vits-svc
