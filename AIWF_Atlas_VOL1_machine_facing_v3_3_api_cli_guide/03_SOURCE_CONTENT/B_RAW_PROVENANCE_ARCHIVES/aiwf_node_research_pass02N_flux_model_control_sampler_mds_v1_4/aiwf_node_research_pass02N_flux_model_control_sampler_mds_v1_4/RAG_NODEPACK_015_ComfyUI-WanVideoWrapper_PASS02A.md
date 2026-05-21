# RAG Nodepack 015 — ComfyUI-WanVideoWrapper

Repo: kijai/ComfyUI-WanVideoWrapper

## Purpose

Modern Wan video ecosystem wrapper with model loading, sampling, utilities, cache methods, optional modules, LoRA selection, VACE/extra model selection, block swapping, and VRAM management.

## Confirmed this pass

- Required modules: Main, Sampler, ModelLoading, Utility, Cache.
- Optional modules: S2V, FlashVSR, Mocha, FunCamera, Uni3C, ControlNet, MultiTalk, RecamMaster, SkyReels, Qwen, FantasyPortrait, UniAnimate, and others.
- Exact schema examples: block swap, VRAM management, torch compile settings, Wan LoRA selectors, VACE/extra model selectors.

## AIWF usage

RAG-critical for WAN workflows, but not a beginner default. Treat as expert/local-test until sampler and model loader nodes are deeply swept.

## Generation rule

Do not generate generic WanVideoWrapper workflows from module inventory rows. Use only schema-confirmed rows, and label them hardware/version-sensitive.
