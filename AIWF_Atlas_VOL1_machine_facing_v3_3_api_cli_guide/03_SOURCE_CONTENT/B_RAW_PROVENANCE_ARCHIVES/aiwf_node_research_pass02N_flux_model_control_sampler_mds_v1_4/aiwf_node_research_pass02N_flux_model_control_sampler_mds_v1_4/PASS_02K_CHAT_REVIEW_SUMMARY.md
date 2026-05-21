# Pass 02K Chat Review Summary

Date: 2026-05-19

## What changed in the project logic

The user confirmed the research strategy should move away from dense socket-by-socket reports for every common pack. The standing rule is now:

> Use light coverage by default. Go dense only for first-of-type capability, new/fast-moving 2026 extensions, different base model types, missing workflow capability gaps, or anything that will be used directly in generated workflow JSON.

The user also clarified that packs above roughly **10000 downloads** should be treated as high-value coverage targets, but popularity does not make a node safe for generated workflows by itself.

## Decisions already added to the RAG/archive

- Native **Wan 2.2 5B** is the P0 modern local video target.
- **WanVideoWrapper** remains advanced/sandbox unless wrapper-only features are needed.
- **AnimateDiff** is legacy/SD1.5/low-VRAM, not the default modern video path.
- **CropAndStitch + Acly Fooocus inpaint nodes** are the modern inpaint target.
- **FaceDetailer** leads face quality workflows; **ReActor** is advanced/warning-only.
- **UltimateSDUpscale** is the default modern tiled upscale target; SUPIR/CCSR/SeedVR2/Topaz are comparison or advanced paths.
- Retry/stale rows must be explicitly marked instead of guessed.

## Retry status carried from Pass 02I/02J

Still stale/unresolved:

- `shadowcz007/comfyui-liveportrait`
- `ZHO-ZHO-ZHO/comfyui-portrait-master-zh-cn`

Resolved in previous repair pass:

- Prompt Control via V3 extension source.
- CLIPSeg through an equivalent implementation.
- SeedVR2 through an active V3 extension path.

## Source handling rule added in this pass

When a field report or chat synthesis conflicts with source code or an official workflow template, the source code/template wins for workflow JSON. The field report still remains useful for teaching notes, priority, and strategy.
