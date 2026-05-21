# HiDream / Lumina / OmniGen / Chroma — Image LoRA Watchlist

## Why this card exists

Not every supported model family deserves immediate AIWF presets. Some should be tracked until enough evidence exists for stable beginner workflows.

AI Toolkit's supported model list includes newer/adjacent image families such as HiDream, Lumina2, OmniGen2, Chroma, ERNIE-Image, and Nucleus-Image. These matter because trainer ecosystems are racing to support every new architecture, but Vol. 2 must distinguish **supported** from **recommended**.

## Evaluation before adding presets

A model family should not enter the beginner preset pack until AIWF verifies:

- official model license and commercial restrictions
- trainer backend support
- reproducible local install
- minimum VRAM/RAM behavior
- dataset format expectations
- inference compatibility in ComfyUI or diffusers
- LoRA export compatibility
- sample prompt reliability
- at least one failure-mode section

## Current AIWF status

- HiDream: promising; watch for real training reports and license clarity.
- Lumina2: interesting architecture; not first-line for AIWF beginner labs.
- OmniGen2: track for unified generation/edit behavior.
- Chroma: monitor for community uptake and training stability.
- ERNIE/Nucleus: catalog but delay presets until practical Windows/consumer workflows exist.

## AIWF rule

Do not confuse a trainer's support list with a recommended learning path. AIWF should add watchlist cards early but only publish presets after repeatable validation.
