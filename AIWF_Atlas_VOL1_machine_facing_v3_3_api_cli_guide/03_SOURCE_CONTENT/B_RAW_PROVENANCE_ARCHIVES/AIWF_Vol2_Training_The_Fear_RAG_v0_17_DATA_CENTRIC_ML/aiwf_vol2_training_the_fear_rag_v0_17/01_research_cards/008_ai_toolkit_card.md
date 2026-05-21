# 008 — Ostris AI-Toolkit

## Identity

- Tool: AI-Toolkit
- Repo: https://github.com/ostris/ai-toolkit
- Domain: diffusion image/video training GUI and CLI
- AIWF priority: P0

## What it trains

AI-Toolkit supports image, instruction/edit, and video models including Flux.1, Flux.2, Flux.2 Klein, Flex, Chroma, Lumina2, Qwen Image, HiDream, OmniGen2, Z-Image, SDXL, SD1.5, ERNIE Image, Flux Kontext, Qwen Image Edit, Wan 2.1/2.2 variants, and LTX-2.

## Why it matters

It is one of the strongest candidates for AIWF's practical beginner wrapper because it has both GUI and CLI paths, broad modern-model support, and an explicit consumer-hardware focus.

## Consumer hardware reality

The repo aims at consumer-grade hardware, but huge models still have huge requirements. AIWF should test and document exact presets for:

- SDXL LoRA on 16GB,
- Flux.1 low-rank LoRA on 16GB,
- Z-Image/Flux2 Klein if stable,
- Wan 1.3B or 5B-ish video LoRA if feasible,
- Qwen Image only after a realistic VRAM test.

## AIWF wrapper idea

Build a preset generator that writes AI-Toolkit configs from simple questions:

- What are you training? person/style/object/motion/voice?
- How much VRAM?
- How many images/videos?
- What model family?
- Do you need ComfyUI output?

## Sources

- https://github.com/ostris/ai-toolkit
